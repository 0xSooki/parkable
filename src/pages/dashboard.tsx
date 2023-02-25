import Navbar from '@/components/Navbar'
import SpotCard from '@/components/SpotCard'
import { getSession } from 'next-auth/react'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<div className="h-screen flex-col flex">
			<Navbar />
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
