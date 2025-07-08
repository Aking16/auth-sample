<div align="center">
  <h1>🔐 Auth Sample (Next.js)</h1>
  <p>A modern authentication sample app built with Next.js, featuring modular components, theming, and best practices.</p>
</div>



## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repo
 git clone https://github.com/Aking16/auth-sample.git
 cd auth-sample

# Install dependencies
 npm install # or yarn install, pnpm install, bun install
```

### Running the Development Server

```bash
npm run dev # or yarn dev, pnpm dev, bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.



## 🗂️ Project Structure

```
app/            # Application routes and pages
components/     # Reusable UI and form components
context/        # React context providers (e.g., theme)
schema/         # Validation schemas
styles/         # Global and modular SCSS styles
types/          # TypeScript type definitions
```



## ✨ Features
- Next.js 14+ App Router
- Modular SCSS styling
- Authentication form example
- Theme toggle (light/dark)
- TypeScript & ESLint integration
- Unit tests with Jest



## 🧪 Running Tests

```bash
npm test # or yarn test, pnpm test
```

Test coverage reports are available in the `coverage/` directory after running tests.



## 🖌️ Customization
- Edit `app/dashboard/page.tsx` to change the dashboard page.
- Update styles in `styles/` or component-level `.module.scss` files.
- Add new pages in the `app/` directory.



## 📚 Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Jest Testing](https://jestjs.io/docs/getting-started)
- [SCSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)



## 🚀 Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) or your preferred platform.

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## 📝 License

This project is open source and available under the [MIT License](LICENSE).
