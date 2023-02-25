import { FC, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import axios from 'axios'
import SpotCard from '@/components/SpotCard'
import ParkCard from '@/components/ParkCard'

import { getSession } from 'next-auth/react'

export async function getServerSideProps(context) {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: '/api/auth/signin',
				permanent: false,
			},
		}
	}

	return {
		props: { session },
	}
}

const Home: FC = () => {
	const { data: session } = useSession()

	if (session) {
		return (
			<div className="min-h-screen flex">
				<div className="flex w-full justify-center items-center">
					<ParkCard />
				</div>
			</div>
		)
	}
	return <div></div>
}

export default Home
