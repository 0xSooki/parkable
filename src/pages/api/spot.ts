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

				const spot = await client.spot.findFirst({
					where: { userId: user.id },
				})
				console.log(spot)
				return res.status(200).json(spot)
			}
			case 'PUT': {
				const { email, method, floor, id } = req.body

				if (method == 'reserve') {
					const user = await prisma.user.findUnique({
						where: { email: email },
						include: { spot: true },
					})

					if (user.spot) {
						await prisma.user.update({
							where: { id: user.id },
							data: { spot: { set: [] } },
						})
					}
					let spot
					if (id) {
						spot = await prisma.spot.findFirst({
							where: { id: id, userId: null },
						})
					} else {
						spot = await prisma.spot.findFirst({
							where: { floor: floor, userId: null },
						})
					}

					await prisma.spot.update({
						where: { id: spot.id },
						data: { user: { connect: { id: user.id } } },
					})
				}
				if (method === 'unreserve') {
					const user = await prisma.user.findUnique({
						where: { email: email },
						include: { spot: true },
					})

					if (user.spot) {
						await prisma.user.update({
							where: { id: user.id },
							data: { spot: { set: [] } },
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
