import HeadingGroup from '@/components/heading-group'
import initialIssues from '@/data'
import IssueCard from '@/features/issue/components/issue-card'

function IssuesPage() {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<HeadingGroup title="Issues" subtitle="List of Issues with Bounties" />

			<div className="flex-1 flex flex-col items-center gap-y-4 my-4 animate-fade-in-from-top">
				{initialIssues.map((issue) => (
					<IssueCard key={issue.id} issue={issue} />
				))}
			</div>
		</div>
	)
}

export default IssuesPage
