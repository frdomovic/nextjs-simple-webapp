// api/new-meetup
// POST this api

import { MongoClient } from 'mongodb'
async function hanlder (req, res) {
  if (req.method === 'POST') {
    const data = req.body

    const { title, image, address, description } = data

    const client = await MongoClient.connect(
      
    )
    const db = client.db()
    const meetupCollection = db.collection('nextjs_database')

    const result = await meetupCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({ message: 'Meetup inserted!' })
  }
}

export default hanlder
