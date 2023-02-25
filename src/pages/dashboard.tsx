import SpotCard from '@/components/SpotCard'
import { useSpot } from '@/hooks/useSpot'
import axios from 'axios'
import { getSession, useSession } from 'next-auth/react'
import { FC, useEffect, useState } from 'react'

const Home: FC = () => {
	return (
		<div className="h-screen flex">
			<div className="m-auto">
				<SpotCard />
			</div>
		</div>
	)
}

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

export default Home
