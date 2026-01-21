import { IssueStatusBadge } from '@/features/issue/components/issue-status'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { routes } from '@/routes'
import Link from 'next/link'
import { Issue } from '@/features/issue/types'

type IssueItemProps = {
	issue: Issue
}

function IssueCard({ issue }: IssueItemProps) {
	return (
		<Card className="w-full max-w-105">
			<CardHeader className="flex items-center justify-between gap-x-3">
				<h2 className="text-lg font-semibold truncate">{issue.title}</h2>
				<IssueStatusBadge status={issue.status} className="shrink-0" />
			</CardHeader>
			<CardContent>
				<p className="line-clamp-3 text-gray-500">{issue.content}</p>
			</CardContent>
			<CardFooter>
				<Link
					href={routes.issueDetail(issue.id)}
					className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
				>
					Details
				</Link>
			</CardFooter>
		</Card>
	)
}

export default IssueCard
