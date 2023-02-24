import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/lib/prismadb'

const allowedMethods = ['GET', 'PUT']

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!allowedMethods.includes(req.method!) || req.method == 'OPTIONS') {
			return res.status(405).send({ message: 'Method not allowed.' })
		}

		switch (req.method) {
			case 'GET': {
				const spots = await client.spot.findMany({})

				return res.status(200).json({ data: spots })
			}
			case 'PUT': {
				const { id, userId } = req.body
				await client.user.update({
					where: { email: userId },
					data: {
						spot: {
							connect: { id: id },
						},
					},
				})

				return res.status(200)
			}
		}
	} catch (error) {
		console.error(error)
		res.status(500).send({ message: 'Server error!' })
	}
}

export default handler
