import 'tailwindcss/tailwind.css'
import '../styles/App.css'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<ThemeProvider attribute="class">
				<div className="flex flex-col min-h-screen">
					<main className="flex flex-col flex-1">
						<Component {...pageProps} />
					</main>
				</div>
			</ThemeProvider>
		</SessionProvider>
	)
}
