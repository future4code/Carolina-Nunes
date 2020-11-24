import knex from 'knex';

export abstract class DataBase {
    static tableName(tableName: any) {
        throw new Error("Method not implemented.");
    }

    private static connection: Knex | null = null

    protected getConnection(): Knex{

        if (!DataBase.connection){
            DataBase.connection = knex({
                client: 'mysql',
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    port: 3306
                }
            })
        }

        return DataBase.connection
    }

    public static async destroyConnection(): Promise<void>{

        if(DataBase.connection){
            await DataBase.connection.destroy()
            DataBase.connection = null
        }
    }

    protected convertIntToBoolean(value: number): boolean{
        return value === 1;
    }

    protected convertBooleanToInt(value: boolean): number{
        return value? 1: 0;
    }
}
