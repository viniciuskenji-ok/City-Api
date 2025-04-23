import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex"
import { IStreet } from "../../models";


export const update = async (id: number, street: Omit<IStreet, 'id'>): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.street)
        .update(street)
        .where("id", "=", id);

        if (result > 0) return;


        return new Error("Erro ao atualizar: registro não encontrado");
    } catch (error) {
        console.log(error);

        return new Error("Erro ao atualizar o registro");   
    }
}