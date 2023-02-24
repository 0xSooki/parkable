import { useCallback } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const ThemeSwitcher = ({ className = '' }) => {
	const { resolvedTheme, setTheme } = useTheme()

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme])

	return (
		<button
			onClick={toggleTheme}
			className={`${className} border-gray-300 dark:border-gray-800 text-gray-500 dark:text-gray-400`}
		>
			{resolvedTheme == 'light' ? <MoonIcon className="w-8 h-8" /> : <SunIcon className="w-8 h-8" />}
		</button>
	)
}

export default ThemeSwitcher
