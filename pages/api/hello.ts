// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {connect} from '../../database'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {database} = await connect()
  const testCollection = await database.collection('test')
  await testCollection.insertOne({name: 'Jon', age: '25', status: 'working'})
  await testCollection.createIndex({client: 1})
  res.status(200).json({ name: 'John Doe' })
}
