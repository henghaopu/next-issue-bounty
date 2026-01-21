import Link from 'next/link'
import { IssueStatusBadge } from '@/components/issue-status'
import HeadingGroup from '@/components/heading-group'
import initialIssues from '@/data'
import { routes } from '@/routes'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function IssuesPage() {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<HeadingGroup title="Issues" subtitle="List of Issues with Bounties" />

			<div className="flex-1 flex flex-col items-center gap-y-4 my-4 animate-fade-in-from-top">
				{initialIssues.map((issue) => (
					<Card key={issue.id} className="w-full max-w-105">
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
				))}
			</div>
		</div>
	)
}

export default IssuesPage
