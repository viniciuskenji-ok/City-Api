import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex";

export const getAll = async (page: number, limit: number, p0: string, p1: number | undefined) => {
    try {
        const result = await Knex(ETableNames.street)
            .select([
                `${ETableNames.street}.id`,
                `${ETableNames.street}.streetName`,
                `${ETableNames.street}.cityId`,
                `${ETableNames.city}.name as cityName`
            ])
            .join(
                ETableNames.city,
                `${ETableNames.street}.cityId`,
                '=',
                `${ETableNames.city}.id`
            )
            .offset((page - 1) * limit)
            .limit(limit);
        
        return result;
    } catch (error) {
        console.log(error);
        return new Error("Erro ao carregar registros das ruas");
    }
}