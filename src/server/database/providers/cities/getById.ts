import { ETableNames } from "../../ETableNames";
import { ICity } from "../../models";
import { Knex } from "../../knex";


export const getById = async (id: number): Promise<ICity | Error> => {
    try {
        const result = await Knex(ETableNames.city)
        .select("*")
        .where('id', '=', id)
        .first();
        
        if(result) return result;

        return new Error("Erro ao carregar: registro não encontrado");
    } catch (error) {
        console.log(error);

        return new Error("Erro ao carregar o registro");
    }
}
