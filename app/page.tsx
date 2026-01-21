import HeadingGroup from '@/components/heading-group'
import { routes } from '@/routes'
import Link from 'next/link'

function HomePage() {
	return (
		<div>
			<HeadingGroup title="Home" subtitle="Welcome to the home page" />

			<div className="pt-4 text-center">
				<Link href={routes.issues()} className="hover:underline">
					Go to Issues Page
				</Link>
			</div>
		</div>
	)
}

export default HomePage
