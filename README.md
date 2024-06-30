# SolveDesk Server

## Description

This project is a backend server for a helpdesk application built with Node.js and Express.

## Getting Started

To run this project, follow these steps:

1. Install dependencies by running `npm i` command.
2. Setup database settings inside `data-source.ts` file.
3. Start the server by running `npm start` command.

## Scripts

-   `npm start`: Starts the server.
-   `npm run dev`: Starts the server in development mode using nodemon.
-   `npm run generate-docs`: Generates documentation using JSDoc.

## Dependencies

-   bcrypt: ^5.1.1
-   body-parser: ^1.20.2
-   cors: ^2.8.5
-   dotenv: ^16.4.5
-   express: ^4.19.2
-   helmet: ^7.1.0
-   jsonwebtoken: ^9.0.2
-   pg: ^8.12.0
-   uuid: ^10.0.0

## Dev Dependencies

-   clean-jsdoc-theme: ^4.3.0
-   concurrently: ^8.2.2
-   nodemon: ^2.0.22

## Documentation

-   Documentation is generated using JSDoc with a custom theme.
-   Run `npm run generate-docs` to generate documentation.

## Folder Structure

-   `src`: Contains the server-side code.
    -   `index.js`: Entry point of the server.
    -   `routes`: Contains API route handlers.
    -   `models`: Contains data models.
    -   `controllers`: Contains controller functions.
-   `.github`: Contains Dependabot configuration.
-   `.devcontainer`: Contains dev container configuration.
-   `.prettierrc`: Contains Prettier configuration.
-   `README.md`: Project README file.

## API Routes

-   `/api/auth`: Authentication routes.
-   `/api/organizations`: Organization routes.
-   `/api/tickets`: Ticket routes.
-   `/api/users`: User routes.
-   `/api/profile`: Profile routes.

## Contributing

Feel free to contribute to this project by submitting a pull request.

## License

This project is licensed under the MIT License.
