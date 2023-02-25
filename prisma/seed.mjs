import { PrismaClient } from '@prisma/client'
import { randomInt } from 'crypto'
const prisma = new PrismaClient()

async function main() {
	const alice = await prisma.user.upsert({
		where: { email: 'alice@prisma.io' },
		update: {},
		create: {
			email: 'alice@prisma.io',
			name: 'Alice',
		},
	})

	const spot = await prisma.spot.create({
		data: {
			floor: 1,
			number: 1,
			ownerId: alice.id,
		},
	})

	await prisma.user.update({
		where: { id: alice.id },
		data: {
			spot: {
				connect: {
					id: spot.id,
				},
			},
		},
	})

	const bob = await prisma.user.upsert({
		where: { email: 'bob@prisma.io' },
		update: {},
		create: {
			email: 'bob@prisma.io',
			name: 'Bob',
		},
	})

	for (let i = 0; i < 10; i++) {
		await prisma.spot.create({
			data: {
				floor: randomInt(1, 4),
				number: randomInt(1, 100),
			},
		})
	}
	console.log({ alice, bob })
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
