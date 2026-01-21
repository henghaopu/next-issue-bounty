import HeadingGroup from '@/components/heading-group'
import { routes } from '@/routes'
import Link from 'next/link'

function HomePage() {
	return (
		<div>
			<HeadingGroup
				title="Home Page"
				subtitle={
					<Link href={routes.issues()} className="underline">
						Go to Issues Page
					</Link>
				}
			/>
		</div>
	)
}

export default HomePage
