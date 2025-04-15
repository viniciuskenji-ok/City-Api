import { ICity } from "../../models";

declare module 'knex/types/tables' {
    interface Tables {
        cidade: ICity
        //users: Iuser
    }
}
