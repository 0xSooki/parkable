import { PrismaClient } from '@prisma/client'
import { randomInt } from 'crypto'
const prisma = new PrismaClient()

async function main() {
	await prisma.user.deleteMany({})
	await prisma.spot.deleteMany({})
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
