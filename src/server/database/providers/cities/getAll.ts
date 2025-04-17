import { Knex } from "../../knex"
import { ETableNames } from "../../ETableNames"
import { ICity } from "../../models";


export const getAll = async(page: number, limit: number, filter: string): Promise<ICity[] | Error> => {
    try {
        const result = await Knex(ETableNames.city)
        .select("*")
        .where("name", "like", `%${filter}%`)
        .offset((page - 1) * limit)
        .limit(limit);
        
        
        return result;
    } catch (error) {

        console.log(error)

        return new Error("Erro ao carregar o registro");
    }
}