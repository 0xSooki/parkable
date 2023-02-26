import { useSpot } from '@/hooks/useSpot'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ReservatorCard = () => {
	const [floor, setFloor] = useState(1)
	const [floors, setFloors] = useState([])
	const { data: session } = useSession()
	const { data } = useSpot()
	const router = useRouter()

	const getSpot = async () => {
		await axios.put('/api/spot', { floor: floor, email: session.user.email, method: 'reserve' })
	}

	const getFlloors = async () => {
		const res = await axios.get('/api/floor')
		const data = await res.data
		setFloors(data)
	}

	useEffect(() => {
		getFlloors()
	}, [])
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
					{floors.map(floor => (
						<option key={floor} value={floor}>
							{floor}
						</option>
					))}
				</select>
				<div className="card-actions justify-end">
					<button
						disabled={data ? true : false}
						onClick={() => {
							getSpot()
							router.push('/dashboard')
						}}
						className={`btn bg-blue-900 text-blue-200 btn-primary hover:bg-blue-600`}
					>
						Foglalj
					</button>
				</div>
			</div>
		</div>
	)
}

export default ReservatorCard
