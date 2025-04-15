import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex): Promise<void>{
    return knex
        .schema
        .createTable(ETableNames.city, table => {
            table.bigIncrements('id').primary().index();
            table.string('name', 150).index().notNullable();

            table.comment('Tabela usada pra amarzenar as cidades');
        })
        .then(() => {
            console.log(`CREATE TABLE ${ETableNames.city}`)
        })
}

export async function down(knex: Knex): Promise<void> {
    return knex
        .schema
        .dropTable(ETableNames.city)
        .then(() => {
            console.log(`DROP TABLE ${ETableNames.city}`)
        })
}
