# Fullstack Project

This project is a fullstack application consisting of a Node.js backend and an Angular frontend. The backend manages the API and database interactions, while the frontend provides a user interface.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#documentation)
- [Backend Usage](#backend-usage)
  - [Start the server](#start-the-server)
  - [Development mode](#development-mode)
  - [Seed the database](#seed-the-database)
  - [Run tests](#run-tests)
- [Frontend Usage](#frontend-usage)
  - [Serve the frontend](#serve-the-frontend)
  - [Build the frontend](#build-the-frontend)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies for both backend and frontend:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

## Configuration

### Backend

For the backend, configure MySQL credentials in `backend/config/config.js`:

```js
const sequelize = new Sequelize(
  'compound_db', //your database name
  'root', //your root name
  '', //your password (not mentioned here for the security purposes)
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
)
```
### Documentation
- [API Documentation](https://documenter.getpostman.com/view/26894077/2sAXxTdXBM)

### Frontend

The frontend uses Angular. Configuration settings are in the `tsconfig.json` file. Key options include:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022", "dom"]
  },
  "angularCompilerOptions": {
    "strictTemplates": true
  }
}
```

## Backend Usage

### Start the server

To start the backend server in production mode:

```bash
cd backend
npm run start
```

### Development mode

To run the backend in development mode with hot-reloading:

```bash
npm run dev
```

### Seed the database

To seed the database with sample data:

```bash
npm run seed
```

### Run tests

To run the backend tests using Jest:

```bash
npm run test
```

## Frontend Usage

### Serve the frontend

To run the frontend Angular application in development mode:

```bash
cd frontend
ng serve
```

The app will be served at `http://localhost:4200` by default.

### Build the frontend

To build the Angular app for production:

```bash
ng build
```

The production-ready files will be placed in the `/dist` directory.

## Dependencies

### Backend

- **Express.js** - Web framework for Node.js
- **Sequelize** - ORM for MySQL
- **MySQL2** - MySQL client for Node.js
- **Body-parser** - Middleware for handling POST requests
- **Cors** - Cross-Origin Resource Sharing middleware
- **CSV-parser** - CSV file parser

### Frontend

- **Angular** - Web framework for building frontend applications
- **RxJS** - Library for reactive programming
- **TypeScript** - Strongly typed programming language
