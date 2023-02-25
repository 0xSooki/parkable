import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
	const { data: session } = useSession()

	return (
		<div className="navbar bg-base-100">
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
								<a>Spots</a>
							</Link>
						</li>
						<li>
							<Link href={'/dashboard'}>
								<a>Dashboard</a>
							</Link>
						</li>
					</ul>
				</div>
				<Link href="/">
					<a className="btn btn-ghost normal-case text-xl">Parkable</a>
				</Link>
			</div>
			<div className="navbar-end">
				<div className="hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link href={'/spots'}>
								<a>Spots</a>
							</Link>
						</li>
						<li>
							<Link href={'/dashboard'}>
								<a>Dashboard</a>
							</Link>
						</li>
					</ul>
				</div>
				{session ? (
					<>
						<div>
							<button className="btn" onClick={() => signOut()}>
								Sign out
							</button>
						</div>
					</>
				) : (
					<>
						<button className="btn" onClick={() => signIn()}>
							Sign in
						</button>
					</>
				)}
			</div>
		</div>
	)
}

export default Navbar
