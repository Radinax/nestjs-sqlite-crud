# NestJS SQLite CRUD API

This is a simple CRUD API built with NestJS and SQLite.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Structure

```bash
nestjs-sqlite-crud/
├── src/
│   ├── database/
│   │   ├── database.module.ts
│   │   ├── database.service.ts
│   ├── users/
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   ├── update-user.dto.ts
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   ├── app.module.ts
│   ├── main.ts
├── sqlite.db
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## File Descriptions

### **1. `src/database/`**

- **`database.module.ts`**: Module for the `DatabaseService`.
- **`database.service.ts`**: Service to handle SQLite database interactions.

### **2. `src/users/`**

- **`dto/`**:
  - **`create-user.dto.ts`**: DTO for creating a user with validation rules.
  - **`update-user.dto.ts`**: DTO for updating a user with optional fields and validation rules.
- **`users.controller.ts`**: Controller to handle HTTP requests for CRUD operations.
- **`users.module.ts`**: Module for the `UsersController` and `UsersService`.
- **`users.service.ts`**: Service to implement CRUD logic.

### **3. `src/`**

- **`app.module.ts`**: Root module of the application.
- **`main.ts`**: Entry point of the application, where the `ValidationPipe` is enabled.

### **4. Root Files**

- **`sqlite.db`**: SQLite database file.
- **`.gitignore`**: Specifies files and folders to ignore in Git.
- **`package.json`**: Lists project dependencies and scripts.
- **`tsconfig.json`**: TypeScript configuration file.
- **`README.md`**: Documentation for the project.
