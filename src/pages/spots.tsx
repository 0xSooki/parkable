import { FC, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import axios from 'axios'
import SpotCard from '@/components/SpotCard'
import ParkCard from '@/components/ParkCard'

const Spots: FC = () => {
	const [spots, setSpots] = useState([])
	const { data: session } = useSession()

	const getSpots = async () => {
		const res = await fetch('/api/spots')
		const data = await res.json()
		setSpots(data)
	}

	const reserve = async (id: string) => {
		await fetch(`/api/spots`)
	}

	useEffect(() => {
		getSpots()
	}, [])
	if (session) {
		return (
			<>
				<div className="min-h-screen flex flex-col">
					<div>
						<h1 className="text-4xl font-bold my-8 mt-4 text-center">Szabad Parkolók</h1>
					</div>
					<div className="flex w-full justify-center">
						<div className="grid lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-y-12 mx-8 gap-x-24">
							{spots.map(spot => (
								<ParkCard key={spot.id} id={spot.id} floor={spot.floor} number={spot.number} />
							))}
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Spots