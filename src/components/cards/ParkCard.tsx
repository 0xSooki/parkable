import axios from 'axios'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
	id: string
	floor: number
	number: number
}

const ParkCard: FC<Props> = ({ floor, number, id }) => {
	const { data: session } = useSession()
	const router = useRouter()

	const reserve = async () => {
		await axios.put(`/api/spot`, { id, email: session.user.email, method: 'reserve' })
	}
	return (
		<>
			{' '}
			<Head>
				<title>Parkolók</title>
			</Head>
			<div className="card w-54 shadow-xl">
				<div className="card-body text- bg-card-bg text-blue-900 justify-center flex rounded-lg">
					<h2 className="card-title self-center">{floor}. emelet</h2>
					<p className="self-center">{number}-es parkoló</p>
					<div className="card-actions justify-center">
						<button
							onClick={() => {
								reserve()
								router.push('/dashboard')
							}}
							className="btn btn-primary bg-blue-900 hover:bg-blue-600 text-blue-300"
						>
							Lefoglal
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ParkCard
