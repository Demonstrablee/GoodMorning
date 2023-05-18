import POOL from 'pg';

const Pools = POOL.Pool;


const pool = new Pools({ // the server connecting to it
    user : 'me',
    host: 'localhost',
    database: 'favlinks',
    password: "", // dont keep this out in the open so that no one else knows what this is
    port: 5432
}
)

export function getUsernames (request: any, response: any){
    pool.query('SELECT * FROM users ORDER BY id ASC', (error: any, results: { rows: any }) => {
        if (error) {
          throw error
        }
        console.log((results.rows).json)
        response.status(200).json(results.rows)
      })
} 
export  function getUserById (request:any, response:any) {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error: any, results: { rows: any }) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  export function updateUser (request:any, response:any) {
    const id = parseInt(request.params.id)
    const { name, URL } = request.body
  
    pool.query(
      'UPDATE links SET name = $1, URL = $2 WHERE id = $3',
      [name, URL, id],
      (error: any, results: any) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Link modified with ID: ${id}`)
      }
    )
  }
//DELETE A LINK
  export function deleteUser (request:any, response:any) {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM links WHERE id = $1', [id], (error: any, results: any) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Link deleted with ID: ${id}`)
    })
  }