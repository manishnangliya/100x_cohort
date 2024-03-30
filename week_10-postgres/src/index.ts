//create a function to create a users table in your database
import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@127.0.0.1:5433/postgres?sslmode=disable"
})

async function createUserTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)

}
async function createEntry() {
    await client.connect()
    const result2 = await client.query(`
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3);
    `,["manunangliya1","manunangliya1@gmail.com","pqrstuv"]);
    console.log(result2)
}

async function showData() {
    await client.connect()
    const result = await client.query(`
    SELECT * FROM users;
    `);
    console.log(result.rows)
    const result2 = await client.query(`
    SELECT * FROM users where id=$1;
    `,[1]);
    console.log(result2.rows)
    const result3 = await client.query(`
    SELECT * FROM users where id=$1;
    `,[10]);
    console.log(result3.rows)
}
async function updateUser() {
    await client.connect()
    const result = await client.query(`
    UPDATE users
    SET password = $1
    WHERE email = $2;
    `, ["updatedPassword", "manunangliya@gmail.com"]);
    console.log(result);
}
// createUserTable();
// createEntry();
showData();
// updateUser();