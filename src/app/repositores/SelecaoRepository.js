import conexao from "../database/conexao.js"

class SelecaoRepository {

    create(data){
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, data, (error, result) => {
                if(error) return reject('Não foi possivel cadastrar')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if(error) return reject('Não foi possivel localizar')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject('Não foi possivel localizar')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    update(data, id){
        const sql = "UPDATE selecoes SET ? WHERE id =?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [data, id], (error, result) => {
                if(error) return reject('Não foi atualizar o registro')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }

    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject('Não foi deletar o registro')
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
    }


}

export default new SelecaoRepository()