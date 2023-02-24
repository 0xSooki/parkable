import 'tailwindcss/tailwind.css'
import '../styles/App.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
<Head>
</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
