import axios from 'axios'
import { useSession } from 'next-auth/react'
import { FC, useEffect } from 'react'
import App from './app_dashboard'

const Home: FC = () => {
	const { data: session } = useSession()

	const getSpot = async () => {
		const email = session?.user.email
		const res = await axios.get('/api/spot', { params: { email: email } })
		const data = res.data
		console.log(res)
	}
	useEffect(() => {
		getSpot()
	}, [])
	return <div></div>
}

export default Home
