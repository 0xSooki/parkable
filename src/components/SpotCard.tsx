import { useSpot } from '@/hooks/useSpot'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const SpotCard: FC = () => {
	const { data: session } = useSession()
	const { data, setData } = useSpot()
	const router = useRouter()

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

	const unreserve = async () => {
		await axios.put(`/api/spot`, { id: data.id, email: session.user.email, method: 'unreserve' })
		setData(null)
	}

	useEffect(() => {
		getSpot()
	}, [])
	if (data) {
		return (
			<div className="card m-4 w-72 card-side bg-base-100 shadow-xl">
				<div className="card-body justify-center flex bg-blue-200 rounded-lg">
					<h2 className="card-title">Lefoglalt parkolód</h2>
					<p className="">Emelet: {data.floor}</p>
					<p>Parkolószám: {data.number}</p>
					<div className="card-actions justify-center">
						<button
							onClick={() => {
								unreserve()
								router.reload()
							}}
							className="btn btn-primary"
						>
							Felszabadit
						</button>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className="card m-4 w-full card-side bg-base-100 shadow-xl">
			<div className="card-body justify-center items-center flex bg-blue-200 rounded-lg">
				<h2 className="card-title">Nincs parkolód foglalva</h2>
			</div>
		</div>
	)
}

export default SpotCard
