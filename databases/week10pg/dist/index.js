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
// write a function to create a user table in your database
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5433/sampleDB"
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
//sql injection possible
// async function insertData(username:string,email:string,password:string) {
//     await client.connect();
//     const result = await client.query(`
//             INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}');
//         `);
//     console.log(result);
// }
//with safetly
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const queryString = "INSERT INTO users (username, email, password) VALUES($1, $2, $3) ";
        const values = [username, email, password];
        const result = yield client.query(queryString, values);
        console.log(result);
    });
}
//get users
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query("SELECT * FROM users");
        console.log(result);
    });
}
createTable();
// insertData("user2", "user2@gmail.com", "user2Pass");
// getUsers();
