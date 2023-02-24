import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import client from '@/lib/prismadb'
import App from "./app"
const Home: FC = () => {
	return <div>
		<App/>
	</div>
}

export default Home
