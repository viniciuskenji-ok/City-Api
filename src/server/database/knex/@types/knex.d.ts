import { ICity, IStreet } from "../../models";

declare module 'knex/types/tables' {
    interface Tables {
        cidade: ICity
        Rua: IStreet
    }
}
