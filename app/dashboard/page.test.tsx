import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "./page";
import { useRouter } from "nextjs-toploader/app";
import "@testing-library/jest-dom";

jest.mock("nextjs-toploader/app", () => ({
  useRouter: jest.fn(),
}));

describe("Page", () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    // Mock useRouter to return push
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    // Clear mocks and localStorage
    jest.clearAllMocks();
    localStorage.clear();
    // Clean cookies (jsdom doesn't persist cookies well)
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
  });

  it("renders user info from localStorage", async () => {
    const fakeUser = {
      name: { first: "John" },
      email: "john@example.com",
    };

    localStorage.setItem("user", JSON.stringify(fakeUser));

    render(<Page />);

    expect(await screen.findByText(/خوش آمدید, John!/)).toBeInTheDocument();
    expect(screen.getByText(/ایمیل شما: john@example.com/)).toBeInTheDocument();
  });

  it("renders nothing if no user in localStorage", () => {
    render(<Page />);
    expect(screen.queryByText(/خوش آمدید/)).toBeNull();
  });

  it("logs out user correctly", async () => {
    const fakeUser = {
      name: { first: "Jane" },
      email: "jane@example.com",
    };
    localStorage.setItem("user", JSON.stringify(fakeUser));

    render(<Page />);

    const logoutButton = await screen.findByRole("button", { name: /خروج/ });
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(localStorage.getItem("user")).toBeNull();
      expect(document.cookie).toMatch(/^user-token=;/);
      expect(pushMock).toHaveBeenCalledWith("/auth");
      expect(screen.queryByText(/خوش آمدید/)).toBeNull();
    });
  });
});

afterEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
  Object.defineProperty(document, "cookie", {
    writable: true,
    value: "",
  });
});