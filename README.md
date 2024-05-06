# Your lean starter template for Vue3 (with branding, cache, store, routes etc.)

## 📙 Introduction

Welcome. This is a basic starting point for front-end projects utilising Vue 3. This project is designed to be the beginnings of a flexible and scalable admin panel (or any other web app). It follows the Atomic Design principle for file structure, and is expected to communicate with an API for data retrieval (hence Tanstack). It's a beginning repo from which projects can flourish, with all dependencies compatible and working as they should. Feel free to use it, I've not done anything special other than link it all together.

Out-of-the-box, I've prepped it with the following dependencies:
- Vue (v3)
- Vue Router (v4)
- Vite (v5)
- Pinia (v2)
- Tanstack, Vue Query (v5)
- Typescript (v5)
- Tailwind CSS (v3)
  - Tailwind Forms (v0.5)
- ESLint (v8)
- Typedoc (v0.25)
- Cypress (v13)
- CSSNano (v7)
- And more. See package.json

## 🚀 Getting Started

To set up the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/reecehill/boilerplate.localhost.git
```

2. Navigate to the project directory:

```bash
cd boilerplate.localhost
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:4173` to see the admin panel in action.

## 📁 Project Structure

The project is structured as follows:

- `src/`: Contains all the reusable components.
  - `assets/`
    - `media`
    - `scss`
  - `components/`: Contains all the layout components.
    - `__tests__/`
    - `atoms/`
    - `molecules/`
    - `organisms/`
    - `templates/`
    - `icons/`: SVG files as .vue components.
    - `README.md`
  - `router`
    - `index.ts`
  - `stores`
  - `views`
- `public/`: Contains all the static assets.
- `.eslintrc.cjs`: Contains the ESLint configuration.
- `vite.config.js`: Contains the Vite configuration.
- `tsconfig.json`: Contains the TypeScript configuration.
- `...`: The rest is self-explanatory

## 🖌️ Linting and Formatting

This project uses ESLint and Prettier for linting and formatting. To run the linter and formatter, use the following commands:

```bash
npm run lint
npm run format
```
## 🧪 Testing

To run the tests, use the following command:

```bash
npm run test
```

The tests will be run in the `tests` directory.

### Unit Tests - Vitest

To run the unit tests, use the following command:

```bash
npm run test:unit
```

The unit tests will be run using Vitest.
This command will run all the tests in the `tests` directory.

### End-to-End Tests - Cypress

To run the end-to-end tests, use the following command:

```bash
npm run test:e2e
```
The end-to-end tests will be run using Cypress.

```bash
npm run test:e2e:dev
```
This command will start the development server and open the Cypress test runner in your browser.

### 📖 Documentation

The project uses TypeDoc for auto-generation of documentation. It's not perfect, but is a good starting point. To generate the documentation:

1) Generate declaration files

```bash
npm run build
```

2) Build documentation

```bash
npm run build-docs
```

The documentation will be generated in the `docs` directory.

Provided you have ran `npm run dev` you will be able to view the documentation at `http://localhost:4173/docs/index.html`

### 🤝 Contributing

We welcome contributions to this project! To contribute, follow these steps:

1. Fork the repository.
2. Clone your fork of the repository.
3. Create a new branch for your feature or bug fix:

```bash
git checkout -b my-feature
```

4. Make your changes and commit them:

```bash
git commit -am "Add my feature"
```

5. Push your changes to your fork of the repository:

```bash
git push origin my-feature
```

6. Create a pull request to merge your changes into the main branch.

### 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more information.