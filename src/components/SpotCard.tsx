import { useSpot } from '@/hooks/useSpot'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { FC, useEffect } from 'react'

const SpotCard: FC = () => {
	const { data: session } = useSession()
	const { data, setData } = useSpot()

	const getSpot = async () => {
		const res = await axios.get('/api/spot', { params: { email: session.user.email } })
		const data = await res.data
		if (data) {
			const { id, floor, number } = data
			setData({ id, floor, number })
			return
		}
		setData(null)
	}

	useEffect(() => {
		getSpot()
	}, [])
	const unreserve = async e => {
		await axios.put(`/api/spot`, { id: data.id, email: session.user.email, method: 'unreserve' })
		setData(null)
	}
	console.log(data)

	return (
		<div className="card m-4 w-48 card-side bg-base-100 shadow-xl">
			<div className="card-body justify-center flex bg-blue-200 rounded-lg">
				{data ? (
					<>
						<h2 className="card-title">Floor {data.floor}</h2>
						<p>Number: {data.number}</p>
						<p>{data.id}</p>
						<div className="card-actions justify-center">
							<button
								onClick={e => {
									unreserve(e)
								}}
								className="btn btn-primary"
							>
								Felszabadit
							</button>
						</div>
					</>
				) : (
					<div>Not</div>
				)}
			</div>
		</div>
	)
}

export default SpotCard
