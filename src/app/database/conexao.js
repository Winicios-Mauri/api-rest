import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'bd_copa'
})

conexao.connect()

export const query = (sql, values='', messageReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (error, result) => {
            if(error) return reject(me)
            return resolve(JSON.parse(JSON.stringify(result)))
        })
    })
}

export default conexao