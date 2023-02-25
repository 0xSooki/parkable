import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const ParkCard = () => {
	const [floor, setFloor] = useState(1)
	const { data: session } = useSession()

	const getSpot = async () => {
		await axios.put('/api/spot', { floor: floor, email: session.user.email, method: 'reserve' })
	}

	return (
		<div className="card w-96 bg-primary text-primary-content">
			<div className="card-body">
				<h2 className="card-title text-blue-900">Válassz emeletet</h2>

				<select
					onChange={e => {
						setFloor(Number(e.target.value))
					}}
					className="select text-blue-300 my-4 select-bordered w-full max-w-xs"
				>
					<option value={1}>1. emelet</option>
					<option value={2}>2. emelet</option>
					<option value={3}>3. emelet</option>
				</select>
				<div className="card-actions justify-end">
					<button onClick={getSpot} className="btn">
						Get spot now
					</button>
				</div>
			</div>
		</div>
	)
}

export default ParkCard
