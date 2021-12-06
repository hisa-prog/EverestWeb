

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import {connect} from '../../database'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {database} = await connect()
  const {currentExpedition, name, lastName, number} = req.body
  const expeditionCollection = await database.collection('expedition')
  const expedition = await expeditionCollection.findOne({peopleCount: {$lt: 6}, idExpedition: {$eq: currentExpedition}})
  if(expedition === null){
      await expeditionCollection.insertOne({peopleCount: 1, peoples: [{name, lastName, number}], idExpedition: currentExpedition})
  }else if(expedition.peopleCount <= 6){
      const tmp = expedition.peoples
      tmp.push({name, lastName, number})
      await expeditionCollection.findOneAndUpdate({_id: new ObjectId(expedition._id)}, 
      {$set: {peopleCount: expedition.peopleCount + 1, peoples: tmp, idExpedition: currentExpedition}})
  }
  res.status(200).json({status: true})
}
