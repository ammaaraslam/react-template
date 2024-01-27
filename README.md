![React Template Cover](https://i.ibb.co/HdttW3S/react-template.png)

> Kickstart your project with this flexible React template using TypeScript, Tailwind CSS, Vite, SVGR support, Redux, ESLint, Prettier, and PNPM.

## Features

- ⚛️ React & TypeScript
- 🚀 Vite & Tailwind CSS
- 🧪 Testing with Jest & React Testing Library
- 🎨 SVGR Support 
- 🌗 Light/Dark Mode
- 🔄 State Management with Redux (Redux Toolkit)
- 🧹 Linting and Code Formatting with ESLint & Prettier
- 📦 Managed with PNPM

## Getting Started

### Setup
1. Clone Repository
    ```bash
    git clone https://github.com/ammaaraslam/react-template.git <YOUR_PROJECT_NAME>
    ```
2. Move into the directory
    ```bash
    cd <YOUR_PROJECT_NAME>
    ```
### Install Dependencies

- With `pnpm` _(Recommended)_
    ```bash
    pnpm install
    ```
- With `npm`
    ```bash
    npm install
    ```
### Development
- With `pnpm` _(Recommended)_
    ```bash
    pnpm dev
    ```
- With `npm`
    ```bash
    npm run dev
    ```
### Build
- With `pnpm` _(Recommended)_
    ```bash
    pnpm build
    ```
- With `npm`
    ```bash
    npm run build
    ```
### Test
- With `pnpm` _(Recommended)_
    ```bash
    pnpm test
    ```
- With `npm`
    ```bash
    npm run test
    ```

## Commands
| Command (`pnpm`) _Recommended*_             | Command (`npm`)            | Action                                       |
| :-------------------- | :----------------------- | :------------------------------------------- |
| `pnpm install`        | `npm install`            | Install dependencies                         |
| `pnpm dev`         | `npm run dev`             | Starts local dev server at `localhost:3000`  |
| `pnpm build`       | `npm run build`           | Build your app to `dist`                     |
| `pnpm test`       | `npm run test`           | Run tests suite quality             |
| `pnpm format:check`     | `npm run format:check`         | Check code formatting before deploying      |
| `pnpm format:fix`   | `npm run format:fix`       | Fix code formatting issues                   |
| `pnpm lint:check`      | `npm run lint:check`          | Check code for linting errors                |
| `pnpm lint:fix` | `npm run lint:fix`     | Fix linting errors in the codebase           |

## Folder Structure
```
📂 src
┣ 📂 assets
┃ ┣ 📂 css # Global stylesheets
┃ ┗ 📂 icons # Icons used in the application (Imported as ReactComponents)
┣ 📂 components
┃ ┗ 📂 shared # Reusable components shared across the application
┣ 📂 hooks
┃ ┣ 📜 use-outside-click.ts # Custom hook to detect outside clicks of an element.
┃ ┗ 📜 use-redux.ts # Typed redux redux hooks
┣ 📂 layouts
┃ ┗ 📜 index.tsx # Main layout component
┣ 📂 router
┃ ┣ 📜 index.tsx # Application router configuration
┃ ┗ 📜 routes.tsx # All routes of application
┣ 📂 pages
┃ ┣ 📂 home # Home page components
┣ 📂 redux
┃ ┣ 📂 services # Redux services
┃ ┣ 📂 reducers # Redux reducers
┃ ┗ 📜 index.ts # Root reducer combining all reducers and store
┗ 📜 main.tsx # Main entry file for the application
```

## License

Licensed under [MIT](https://github.com/ammaaraslam/react-template/blob/master/LICENSE)

## Support

If you find this template useful, don't forget to give it a ⭐.
