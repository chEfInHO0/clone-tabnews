import { Client } from 'pg'

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER
  })
  await client.connect()
  const res = await client.query(queryObject)
  client.end()
  return res
}

export default {
  query: query
}