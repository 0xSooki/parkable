import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { FC } from 'react'

interface Props {
	id: string
	floor: number
	number: number
}

const SpotCard: FC<Props> = ({ floor, number, id }) => {
	const { data: session } = useSession()

	const reserve = async () => {
		await axios.put(`/api/spot`, { id, email: session.user.email, method: 'reserve' })
	}
	return (
		<div className="card m-4 w-48 card-side bg-base-100 shadow-xl">
			<div className="card-body justify-center flex bg-blue-200 rounded-lg">
				<h2 className="card-title">Floor {floor}</h2>
				<p>Number: {number}</p>
				<p>{id}</p>
				<div className="card-actions justify-center">
					<button
						onClick={() => {
							reserve()
						}}
						className="btn btn-primary"
					>
						Reserve
					</button>
				</div>
			</div>
		</div>
	)
}

export default SpotCard
