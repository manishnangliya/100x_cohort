"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//create a function to create a users table in your database
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@127.0.0.1:5433/postgres?sslmode=disable"
});
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    });
}
function createEntry() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result2 = yield client.query(`
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3);
    `, ["manunangliya1", "manunangliya1@gmail.com", "pqrstuv"]);
        console.log(result2);
    });
}
function showData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    SELECT * FROM users;
    `);
        console.log(result.rows);
        const result2 = yield client.query(`
    SELECT * FROM users where id=$1;
    `, [1]);
        console.log(result2.rows);
        const result3 = yield client.query(`
    SELECT * FROM users where id=$1;
    `, [10]);
        console.log(result3.rows);
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    UPDATE users
    SET password = $1
    WHERE email = $2;
    `, ["updatedPassword", "manunangliya@gmail.com"]);
        console.log(result);
    });
}
// createUserTable();
// createEntry();
showData();
// updateUser();
