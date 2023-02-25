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
				const { email } = req.query

				const user = await client.user.findFirst({
					where: { email: email as string },
				})

				const spot = await client.spot.findMany({
					where: { userId: user.id },
				})

				return res.status(200).json({ spot, user })
			}
			case 'PUT': {
				const { id, email, method } = req.body
				console.log(id, email, method)
				switch (method) {
					case 'reserve': {
						await client.user.update({
							where: { email: email },
							data: {
								spot: {
									connect: { id: id },
								},
							},
						})
					}
					case 'unreserve': {
						await client.user.update({
							where: { email: email },
							data: {
								spot: {
									delete: { id: id },
								},
							},
						})
					}
				}

				return res.status(200)
			}
		}
	} catch (error) {
		console.error(error)
		res.status(500).send({ message: 'Server error!' })
	}
}

export default handler
