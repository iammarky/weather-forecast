# Weather Forecast

A simple weather forecast application built using ReactJS(NextJS), Tailwind CSS 3, 
OpenWeatherMap API and Auth0.

## Getting Started

Install all dependencies
```bash
  npm install
```
Create .env.local in the root directory

Create an account in https://openweathermap.org/ and https://auth0.com/

Run the development server:
```bash
  npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## VSCode Setup

If you're using VSCode, we recommend these extensions: 
- Auto Rename Tag, 
- Eslint
- Javascript
- Prettier

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

- `AUTH0_SECRET` - A long, secret value used to encrypt the session cookie
- `AUTH0_BASE_URL` - The base url of your application
- `AUTH0_ISSUER_BASE_URL` - The url of your Auth0 tenant domain
- `AUTH0_CLIENT_ID` - Your Auth0 application's Client ID
- `AUTH0_CLIENT_SECRET` - Your Auth0 application's Client Secret
- `NEXT_PUBLIC_OPEN_WEATHER_KEY` - Open weather API key

## Structure

- `public` - Contains static files, like images.
- `src/common` - This folder consists of common code that can be use across the application.
- `src/common/components` - Contains all reusable components
- `src/common/hooks` - Contains all hooks
- `src/common/mixins` - Contains all functions that can be used accross the application
- `src/common/styles` - Contains the global css styles
- `src/module` - Logical groupings of code that make up the larger pages.
- `src/pages` - Used for pages layout (required for Next.js)

## Commands

- `npm run dev` - start the development server
- `npm run build` - build your application
- `npm run start` - start the prodoction server with the latest build
- `npm run lint` - run lint checking for all modules
- `npm run lint:fix` - fix all linting errors for all modules
- `npm run prettify` - run to format your code