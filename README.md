# Playwright Test Automation Framework (TAF)

## 1. About the Project
This project is a robust Test Automation Framework (TAF) built with **Playwright** and **TypeScript**. It is designed to be scalable and maintainable, supporting both **Web UI (E2E)** and **API** testing across multiple environments (QA, Prod, etc.).

Key features include:
- **Observability**: Integrated logging with `winston` for detailed test execution insights.
- **Consistency**: Strict TypeScript configuration ensuring type safety and code quality.
- **Modularity**: Clean separation of concerns using a Page Object Model (POM) and shared utilities.
- **Multi-Environment Support**: Easy configuration for different deployment environments using `dotenv` and `cross-env`.

---

## 2. Setup and Installation

Follow these steps to set up the project locally.

### 2.1 Setup NVM (Node Version Manager)
We recommend using **NVM** to manage Node.js versions.

**Linux/macOS:**
1. Open your terminal.
2. Install NVM using the install script (check [nvm repo](https://github.com/nvm-sh/nvm) for the latest version):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```
3. Close and reopen your terminal to apply changes.
4. Verify installation:
   ```bash
   nvm --version
   ```

### 2.2 Install Node.js
1. Install the latest LTS (Long Term Support) version of Node.js:
   ```bash
   nvm install --lts
   ```
2. Set it as your default version:
   ```bash
   nvm alias default <version_installed>
   nvm use default
   ```
   *Example:* `nvm use 20`
3. Verify Node installation:
   ```bash
   node -v
   npm -v
   ```

### 2.3 Install Dependencies & Playwright
1. Clone this repository (if you haven't already).
2. Install project dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## 3. Folder Structure
The project follows a modular structure inside the `src` directory to keep configuration separate from logic.

```text
/
├── src/                # Core Logic (Helpers, Page Objects, API Clients)
│   ├── api/            # API clients and services (Request logic)
│   ├── config/         # Environment variables and configuration loaders
│   ├── pages/          # Page Object Models (POM) for UI tests
│   ├── ui/             # Shared UI components/selectors
│   └── utils/          # Helper functions (Logger, Data Generators, etc.)
│
├── tests/              # Test Specifications (.spec.ts files)
│   ├── api/            # API Tests (`*.api.spec.ts`)
│   └── ui/             # UI/E2E Tests (`*.spec.ts`)
│
├── env/                # Environment variables (.env.qa, .env.prod)
├── logs/               # Generated log files (combined.log, error.log)
├── allure-results/     # Test results for Allure reports
├── package.json        # Project dependencies and scripts
├── playwright.config.ts # Main Playwright configuration
└── tsconfig.json       # TypeScript configuration
```

---

## 4. Libraries & Dependencies (`package.json`)

We use a set of powerful libraries to enhance the framework's capabilities:

| Library | Purpose |
| :--- | :--- |
| **`@playwright/test`** | The core framework for running end-to-end and API tests. Fast, reliable, and capable. |
| **`typescript`** | Adds static typing to JavaScript, improving code quality and developer experience with autocomplete/safety. |
| **`winston`** | A universal logging library. We use it to create structured logs (Info, Debug, Error) for better debugging than simple `console.log`. |
| **`dotenv`** | Loads environment variables from `.env` files, allowing us to manage secrets and configs securely. |
| **`cross-env`** | Allows running scripts with environment variables across different operating systems (Windows, Linux, Mac) without syntax errors. |

### Common Scripts
- **Run all tests:** `npm run test`
- **Run tests in QA:** `npm run test:qa`
- **Run with Debug Logs:** `npm run test:debug`
- **Show HTML Report:** `npm run report`
- **Generate Allure Report:** `npm run test:allure:qa`