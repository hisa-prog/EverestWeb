import { ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import {connect} from '../../database'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {database} = await connect()
  const {currentExpedition} = req.body
  const expeditionCollection = await database.collection('expedition')
  const expedition = await expeditionCollection.findOne({idExpedition: currentExpedition})
  res.status(200).json({status: true, data: expedition})
}