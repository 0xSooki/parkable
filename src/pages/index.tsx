import { FC, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import axios from 'axios'
import SpotCard from '@/components/SpotCard'

const Home: FC = () => {
	const [spots, setSpots] = useState([])
	const { data: session } = useSession()

	const getSpots = async () => {
		const res = await fetch('/api/spots')
		const data = await res.json()
		console.log(data)
		setSpots(data.data)
	}

	const reserve = async (id: string) => {
		await axios.put(`/api/spots`, { id, userId: session.user.email })
	}

	useEffect(() => {
		getSpots()
	}, [])

	return (
		<div className="flex justify-center flex-wrap">
			{spots.map((spot: any) => (
				<SpotCard key={spot.id} id={spot.id} floor={spot.floor} number={spot.number} />
			))}
		</div>
	)
}
export default Home
