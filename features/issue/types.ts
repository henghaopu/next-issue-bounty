export type IssueStatus = 'new' | 'investigating' | 'fixing' | 'resolved'

export type Issue = {
	id: string
	title: string
	content: string
	status: IssueStatus
}
