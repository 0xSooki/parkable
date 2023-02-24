import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	const alice = await prisma.user.upsert({
		where: { email: 'alice@prisma.io' },
		update: {},
		create: {
			email: 'alice@prisma.io',
			name: 'Alice',
			spot: {
				create: {},
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
		await prisma.spot.upsert({
			where: {
				id: toString(i),
			},
			update: {},
			create: {},
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
