import SelecaoRepository from '../repositores/SelecaoRepository.js';

class SelecaoController {

    async index(req, res){
        const result = await SelecaoRepository.findAll()
        res.json(result)
    }

    async show(req, res){
        const id = req.params.id;
        const result = await SelecaoRepository.findById(id)
        res.json(result)
    }

    async store (req, res){
        const body = req.body;
        const result = await SelecaoRepository.create(body)
        res.json(result)
    }

    async update(req, res){
        const data = req.body
        const id = req.params.id;
        const result = await SelecaoRepository.update(data, id)
        res.json(result)
    }

    async delete(req, res){
        const id = req.params.id;
        const result = await SelecaoRepository.delete(id)
        res.json(result)
    }

}

export default new SelecaoController()
