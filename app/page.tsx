import { routes } from '@/routes'
import Link from 'next/link'

function HomePage() {
	return (
		<div>
			<h1 className="text-3xl font-bold tracking-tight">Home Page</h1>

			<div>
				<Link href={routes.issues()} className="underline">
					Go to Issues Page
				</Link>
			</div>
		</div>
	)
}

export default HomePage
