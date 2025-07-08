import LoginForm from "./login-form";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock nextjs-toploader/app router
jest.mock("nextjs-toploader/app", () => ({
  useRouter: () => ({ push: jest.fn() })
}));

// Mock axios
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { results: [{ id: { value: "test-id" } }] } }))
}));

describe("LoginForm", () => {
  it("renders all input fields and button", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText("نام کاربری")).toBeInTheDocument();
    expect(screen.getByLabelText("شماره تلفن")).toBeInTheDocument();
    expect(screen.getByLabelText("رمز عبور")).toBeInTheDocument();
    expect(screen.getByLabelText("تایید رمز عبور")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ورود/i })).toBeInTheDocument();
  });

  it("shows validation errors on submit with empty fields", async () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole("button", { name: /ورود/i }));

    await waitFor(() => {
      expect(screen.getByText("نام کاربری را وارد کنید")).toBeInTheDocument();
      expect(screen.getByText("شماره تلفن را وارد کنید")).toBeInTheDocument();
      expect(screen.getByText("رمز عبور را وارد کنید")).toBeInTheDocument();
      expect(screen.getByText("تایید رمز عبور را وارد کنید")).toBeInTheDocument();
    });
  });

  it("submits form and redirects on success", async () => {
    const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');
    render(<LoginForm />);

    fireEvent.input(screen.getByLabelText("نام کاربری"), { target: { value: "testuser" } });
    fireEvent.input(screen.getByLabelText("شماره تلفن"), { target: { value: "09123456789" } });
    fireEvent.input(screen.getByLabelText("رمز عبور"), { target: { value: "password123" } });
    fireEvent.input(screen.getByLabelText("تایید رمز عبور"), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: /ورود/i }));

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalled();
      expect(setItemSpy).toHaveBeenCalledWith("user", expect.any(String));
    });

    setItemSpy.mockRestore(); // Optional cleanup
  });
});

afterEach(() => {
  jest.clearAllMocks();
});