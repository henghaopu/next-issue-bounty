import Link from 'next/link'
import { routes } from '@/routes'
import { buttonVariants } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

function IssueNotFound() {
	return (
		<div className="flex flex-col items-center justify-center gap-y-6 py-16 text-center">
			<div className="inline-flex items-center justify-center rounded-full bg-muted p-4">
				<AlertTriangle className="h-8 w-8 text-amber-500" />
			</div>
			<div>
				<h1 className="text-2xl font-bold">Issue not found</h1>
				<p className="text-sm text-muted-foreground">
					The requested issue ID is invalid.
				</p>
			</div>
			<Link
				href={routes.issues()}
				className={buttonVariants({ variant: 'default' })}
			>
				Back to Issues
			</Link>
		</div>
	)
}

export default IssueNotFound
