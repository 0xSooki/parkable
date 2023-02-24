import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
				<div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
					<h1 className="text-6xl font-bold dark:text-white">{APP_NAME}</h1>
				</div>

				<div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
					<div className="grid grid-cols-1">
						<div className="p-6">
							<div className="flex items-center">
								<BookOpenIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold">
									<a href="https://nextjs.org/docs" className="underline text-gray-900 dark:text-white">
										Next.js Docs
									</a>
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									Next.js gives you the best developer experience with all the features you need for production: hybrid
									static &amp; server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No
									config needed.
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<BookOpenIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold">
									<a href="https://laravel-news.com/" className="underline text-gray-900 dark:text-white">
										Tailwind Docs
									</a>
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building
									blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to
									override.
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
							<div className="flex items-center">
								<CodeBracketIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
									About this Template
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									This starter kit is composed of{' '}
									<a href="https://nextjs.org" className="underline" target="_blank" rel="noreferrer">
										Next.js
									</a>{' '}
									and{' '}
									<a href="https://tailwindcss.com" className="underline" target="_blank" rel="noreferrer">
										Tailwind CSS
									</a>{' '}
									for all your websites needs. It uses{' '}
									<a href="https://www.typescriptlang.org/" className="underline" target="_blank" rel="noreferrer">
										Typescript
									</a>{' '}
									and an opinionated directory structure for maximum dev confy-ness. Enjoy!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
