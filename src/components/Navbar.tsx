import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
	const { data: session } = useSession()

	return (
		<div className="navbar bg-accent">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<Link href={'/spots'}>
								<a>Parkolók</a>
							</Link>
						</li>
						<li>
							<Link href={'/dashboard'}>
								<a>Vezérlőpult</a>
							</Link>
						</li>
					</ul>
				</div>
				<Link href="/">
					<a className="btn btn-ghost hover:bg-transparent normal-case font-bold text-3xl">
						<span className="text-blue-200">Parkable</span>
					</a>
				</Link>
			</div>
			<div className="navbar-end">
				<div className="hidden lg:flex">
					<ul className="flex text-blue-200 gap-4 justify-center items-center px-1">
						<li>
							<Link href={'/spots'}>
								<a className="btn btn-ghost btn-sm">Parkolók</a>
							</Link>
						</li>
						<li>
							<Link href={'/dashboard'}>
								<a className="btn btn-ghost btn-sm">Vezérlőpult</a>
							</Link>
						</li>
						<li>
							{session ? (
								<>
									<button className="btn btn-sm text-blue-200" onClick={() => signOut()}>
										Kilépés
									</button>
								</>
							) : (
								<>
									<button className="btn btn-sm 'text-blue-200" onClick={() => signIn()}>
										Belépés
									</button>
								</>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
