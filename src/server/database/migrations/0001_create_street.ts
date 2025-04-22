import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex): Promise<void>{
    return knex
        .schema
        .createTable(ETableNames.street, table => {
            table.bigIncrements('id').primary().index();
            table.string('streetName', 150).checkLength("<=", 150).index().notNullable();
            table.bigInteger('cityId').index().notNullable().references('id').inTable(ETableNames.city).onDelete('CASCADE').onUpdate('CASCADE');

            
            table.comment('Tabela usada pra amarzenar as Ruas');
        })
        .then(() => {
            console.log(`CREATE TABLE ${ETableNames.city}`)
        })
}

export async function down(knex: Knex): Promise<void> {
    return knex
        .schema
        .dropTable(ETableNames.street)
        .then(() => {
            console.log(`DROP TABLE ${ETableNames.street}`)
        })
}
