import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/lib/prismadb'

const allowedMethods = ['GET']

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!allowedMethods.includes(req.method!) || req.method == 'OPTIONS') {
			return res.status(405).send({ message: 'Method not allowed.' })
		}

		switch (req.method) {
			case 'GET': {
				const floors = await client.spot.findMany({
					where: {
						userId: null,
					},
					select: {
						floor: true,
					},
					distinct: ['floor'],
				})
				console.log(floors)
				const uniqueFloors = floors.map(floor => floor.floor)
				return res.status(200).json(uniqueFloors)
			}
		}
		return res.status(200)
	} catch (error) {
		console.error(error)
		res.status(500).send({ message: 'Server error!' })
	}
}

export default handler
