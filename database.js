import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function getProducts(){
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
}

export async function getProduct(id){
    const [rows] = await pool.query(`
        SELECT *
        FROM products
        WHERE id = ?    
    `, [id])

    return rows[0];
}

export async function createProduct(nome, descricao, quantidade, valor_unitario){
    const result = await pool.query(`
        INSERT INTO products (nome, descricao, quantidade, valor_unitario)
        VALUES (?, ?, ?, ?)    
    `, [nome, descricao, quantidade, valor_unitario])
    
    return getProduct(result.insertId);
}

const result = await createProduct(
    'Smartphone Samsung Galaxy A04',
    '64GB de armazenamento, 3GB de RAM, dual SIM, Android 11',
    999.99,
    454
)

console.log(result)