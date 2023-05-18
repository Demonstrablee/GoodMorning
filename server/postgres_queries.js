import POOL from 'pg';
import env from 'dotenv'
const Pools = POOL.Pool;
const pool = new Pools({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: env.POSTGRES_PASSWORD,
    port: 5432
});
export function getUsernames(request, response) {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        console.log((results.rows).json);
        response.status(200).json(results.rows);
    });
}
export function getUserById(request, response) {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
export function updateUser(request, response) {
    const id = parseInt(request.params.id);
    const { name, URL } = request.body;
    pool.query('UPDATE links SET name = $1, URL = $2 WHERE id = $3', [name, URL, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Link modified with ID: ${id}`);
    });
}
//DELETE A LINK
export function deleteUser(request, response) {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM links WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Link deleted with ID: ${id}`);
    });
}
