import { IssueStatusBadge } from '@/components/issue-status'
import initialIssues from '@/data'

async function IssueDetailPage({ params }: PageProps<'/issues/[issueId]'>) {
	const { issueId } = await params
	const issue = initialIssues.find((issue) => issue.id === issueId)

	if (!issue) {
		return <div>Invalid issue ID.</div>
	}

	return (
		<div>
			<h1 className="text-lg">Issue {issueId}</h1>
			<div>
				<h2 className="text-md font-semibold">{issue.title}</h2>
				<p>{issue.content}</p>
				<div className="mt-2 flex items-center gap-x-2 text-sm text-gray-500">
					<span>Status:</span>
					<IssueStatusBadge status={issue.status} />
				</div>
			</div>
		</div>
	)
}

export default IssueDetailPage
