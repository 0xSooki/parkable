import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/lib/prismadb'

const allowedMethods = ['GET', 'PUT']

type resereBody = {
	email: string
	method: string
	floor: number
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!allowedMethods.includes(req.method!) || req.method == 'OPTIONS') {
			return res.status(405).send({ message: 'Method not allowed.' })
		}

		switch (req.method) {
			case 'GET': {
				const spots = await client.spot.findMany({})
				return res.status(200).json(spots)
			}
		}
	} catch (error) {
		console.error(error)
		res.status(500).send({ message: 'Server error!' })
	}
}

export default handler
