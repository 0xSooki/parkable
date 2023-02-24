import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import client from '@/lib/prismadb'
import App from "./app"

const Home: FC = () => {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
        <App/>
			</>
		)
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}

export default Home
