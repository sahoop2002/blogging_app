import "dotenv/config";

 const config = () =>({
    port : process.env.PORT,
    evviroment: process.env.ENVIRONMENT,
    database_url : process.env.DATABASE_URL
})

export const appConfig = config()


