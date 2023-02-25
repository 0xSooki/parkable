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
				const { email } = req.body
				const spots = await client.spot.findFirst({
					where: { user: { email: email } },
				})

				return res.status(200).json({ data: spots })
			}
			case 'PUT': {
				const { id, email } = req.body
				await client.user.update({
					where: { email: email },
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
