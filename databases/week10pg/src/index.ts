// write a function to create a user table in your database
import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5433/sampleDB"
})


async function createTable() {
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
    console.log(result); 
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
async function insertData(username: string, email: string, password: string) {
    await client.connect();
    const queryString = "INSERT INTO users (username, email, password) VALUES($1, $2, $3) ";
    const values = [username,email,password];
    const result = await client.query(queryString,values);
    console.log(result);
}


//get users
async function getUsers() {
    await client.connect();
    const result = await client.query("SELECT * FROM users");
    console.log(result);
}


// createTable();
// insertData("user2", "user2@gmail.com", "user2Pass");

// getUsers();
