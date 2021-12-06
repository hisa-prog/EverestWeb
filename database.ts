require("dotenv").config()
import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.DB as string)

async function connect() {
    await client.connect()
    const database = client.db('VT_lab')
    return {database, client}
}

export {connect}