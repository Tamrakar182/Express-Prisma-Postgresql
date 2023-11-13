# Simple Express Server configured with Prisma & Postgres

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-typescript-postgres)
- [Postgres](https://www.postgresql.org/download/)

### Installation

1. Clone the repo
   ```sh
   git clone
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Start the server
    ```sh
    npm run dev
    ```
4. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Usage

### Prisma

1. Create a new Prisma project
    ```sh
    npx prisma init
    ```

2. Create a new Prisma migration
    ```sh
    npx prisma migrate dev --name init
    ```

3. Generate Prisma client
    ```sh
    npx prisma generate
    ```

4. Start Prisma Studio
    ```sh
    npx prisma studio
    ```
