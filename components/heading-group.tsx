import { ComponentPropsWithoutRef } from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const headingSizeMap = {
	h1: 'text-3xl font-bold tracking-tight',
	h2: 'text-2xl font-semibold tracking-tight',
	h3: 'text-xl font-semibold',
}

type HeadingTag = keyof typeof headingSizeMap

interface HeadingGroupProps extends ComponentPropsWithoutRef<'div'> {
	title: string
	subtitle?: string
	heading?: HeadingTag
	titleClassName?: string
	subtitleClassName?: string
	withSeparator?: boolean
	separatorClassName?: string
}

function HeadingGroup({
	title,
	subtitle,
	heading = 'h1',
	className,
	titleClassName,
	subtitleClassName,
	separatorClassName,
	withSeparator = true,
	...props
}: HeadingGroupProps) {
	const HeadingTag = heading

	return (
		<div className={cn('flex flex-col', className)} {...props}>
			<HeadingTag
				className={cn('px-4', headingSizeMap[heading], titleClassName)}
			>
				{title}
			</HeadingTag>
			{subtitle ? (
				<p
					className={cn(
						'px-4 text-sm text-muted-foreground',
						subtitleClassName,
					)}
				>
					{subtitle}
				</p>
			) : null}
			{withSeparator ? (
				<Separator className={cn('mt-4', separatorClassName)} />
			) : null}
		</div>
	)
}

export default HeadingGroup
