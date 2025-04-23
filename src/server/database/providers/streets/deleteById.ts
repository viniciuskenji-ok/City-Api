import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";


export const deleteById = async (id: number): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.street)
        .where("id", "=", id)
        .del();

        if(!result) {
            return new Error("Erro ao carregar: registro não encontrado")
        }

        return;
    } catch (error) {
        console.log(error)

        return new Error("Erro ao carregar o registro");
    }
}
