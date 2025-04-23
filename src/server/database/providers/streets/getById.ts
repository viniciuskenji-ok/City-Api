import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex";
import { ICity } from "../../models";


export const getById = async (id: number): Promise<ICity | Error> => {
    try {
        const result = await Knex(ETableNames.street)
        .select("*")
        .where("id", "=", id)
        .first();
        
        if(!result) {
            return new Error("Erro ao carregar: registro não encontrado");
        }

        return result;
    } catch (error) {

        console.log(error);

        return new Error("Erro ao carregar o registro");
    }
}
