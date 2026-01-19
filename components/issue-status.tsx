import {
	LucideBug,
	LucideCheckCircle,
	LucideSearch,
	LucideSprayCan,
} from 'lucide-react'
import type { ReactNode, SVGProps } from 'react'

export type IssueStatus = 'new' | 'investigating' | 'fixing' | 'resolved'

type IconProps = SVGProps<SVGSVGElement>

type StatusMeta = {
	label: string
	accentClass: string
	Icon: (props: IconProps) => ReactNode
}

const statusMeta: Record<IssueStatus, StatusMeta> = {
	new: {
		label: 'New',
		accentClass: 'text-amber-600',
		Icon: LucideBug,
	},
	investigating: {
		label: 'Investigating',
		accentClass: 'text-sky-600',
		Icon: LucideSearch,
	},
	fixing: {
		label: 'Fixing',
		accentClass: 'text-blue-600',
		Icon: LucideSprayCan,
	},
	resolved: {
		label: 'Resolved',
		accentClass: 'text-emerald-600',
		Icon: LucideCheckCircle,
	},
}

type IssueStatusBadgeProps = {
	status: IssueStatus
	className?: string
}

export function IssueStatusBadge({ status, className }: IssueStatusBadgeProps) {
	const { Icon, label, accentClass } = statusMeta[status]
	const combinedClassName = [
		'inline-flex items-center gap-x-1.5 text-sm font-medium',
		accentClass,
		className,
	]
		.filter(Boolean)
		.join(' ')

	return (
		<span className={combinedClassName}>
			<Icon className="h-4 w-4" />
			<span>{label}</span>
		</span>
	)
}
