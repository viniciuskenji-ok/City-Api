import { Knex } from "../../knex"
import { ETableNames } from "../../ETableNames"

export const deleteById = async (id: number): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.city).where("id", id).del()

        if(result === 0){
            return new Error("Erro ao deletar: registro não encontrado")
        } else {
            console.log(`ID: ${id} excluido com sucesso!`)
        }

    } catch (error) {
        console.log(error)
        return new Error("Erro ao deletar: registro não encontrado")
    }
}