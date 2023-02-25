import { FC, useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import axios from 'axios'
import ReservatorCard from '@/components/ReservatorCard'
import ParkCard from '@/components/ReservatorCard'

import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

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
			<>
				<Head>
					<title>Főoldal</title>
				</Head>
				<div className="flex h-screen flex-col">
					<Navbar />

					<div className="m-auto">
						<ReservatorCard />
					</div>
				</div>
			</>
		)
	}
	return <div></div>
}

export default Home
