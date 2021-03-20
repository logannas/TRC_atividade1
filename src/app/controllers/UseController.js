import Disciplinas from '../models/Disciplinas'
//CRUD
class UseController {
    //CREATE
    async store(req,res){
        const {codigo, nome, professor, departamento, qtdCreditos} = req.body;

        if(!(codigo && nome && professor && departamento && qtdCreditos)){
            return res.status(400).json({message: "Todos os campos são obrigatórios"})
        }

        const codigoExists = await Disciplinas.findOne({
            "codigo": codigo
        })

        if(codigoExists){
            return res.status(200).json({message: `O código: ${codigo} já está cadastrado`})
        }

        try{
            const disciplina = await Disciplinas.create(req.body)
            return res.status(201).json(disciplina)
        } catch(error){
            return res.status(500).json({message: `Erro interno do servidor: ${error}`})
        }

    }

    //READ
    async index(req, res){
        try {
            const disciplinas = await Disciplinas.find();

            return res.status(200).json(disciplinas);
        } catch (error) {
            return res.status(500).json({message: `Erro interno do servidor: ${error}`});
        }
    }

    //READ id
    async indexid(req, res){
        const {id} = req.params;

        try {
            const disciplinas = await Disciplinas.findOne({id: id});

            return res.status(200).json(disciplinas);
        } catch (error) {
            return res.status(500).json({message: `Erro interno do servidor: ${error}`});
        }
    }

    //UPDATE
    async update(req, res){
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: "ID é obrigatório!"})
        }

        const disciplinaExists = await Disciplinas.findOne({
            id: id
        })

        if(!disciplinaExists){
            return res.status(404).json({message: "Disciplina não encontrada"})
        }

        try {
            await Disciplinas.updateOne({"id":id},req.body);
            return res.status(200).json({message: "Disciplina atualizado com suceso"})

        } catch (error) {
            return res.status(500).json({message: `Erro interno do servidor: ${error}`})
        }
    }

    //DELETE
    async delete (req, res){
       try {
        const disciplinaToDelete = await Disciplinas.findOne({id: req.params.id}) 
        
        if(!disciplinaToDelete){
            return res.status(404).json({message: `Disciplina ${req.params.id} não encontrada`})
        }
 
        await Disciplinas.deleteOne({id: req.params.id})

        return res.json({message: "Disciplina Removida"})
 
    } catch (error) {
        return res.status(500).json({message: `Erro interno do servidor: ${error}`})
       }
      
    }
}

export default new UseController();