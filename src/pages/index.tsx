import { FC, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import axios from 'axios'

const Home: FC = () => {
	const [spots, setSpots] = useState([])
	const { data: session } = useSession()

	const getSpots = async () => {
		const res = await fetch('/api/spots')
		const data = await res.json()
		setSpots(data.data)
	}

	const reserve = async (id: string) => {
		await axios.put(`/api/spots`, { id, userId: session.user.email })
	}

	useEffect(() => {
		getSpots()
	}, [])
	if (session) {
		return (
			<>
				<div>
					<div>
						Signed in as {session.user.email} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</div>
					<div>
						{spots.map(spot => (
							<div className="" key={spot.id} onClick={() => reserve(spot.id)}>
								<h3>{spot.id}</h3>
							</div>
						))}
					</div>
				</div>
			</>
		)
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}

export default Home
