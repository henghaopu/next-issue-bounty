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
	headingClassName?: string
	subtitleClassName?: string
	withSeparator?: boolean
	separatorClassName?: string
}

function HeadingGroup({
	title,
	subtitle,
	heading = 'h1',
	className,
	headingClassName,
	subtitleClassName,
	withSeparator = true,
	separatorClassName,
	...props
}: HeadingGroupProps) {
	const HeadingTag = heading

	return (
		<div className={cn('flex flex-col gap-y-1', className)} {...props}>
			<HeadingTag className={cn(headingSizeMap[heading], headingClassName)}>
				{title}
			</HeadingTag>
			{subtitle ? (
				<p className={cn('text-sm text-muted-foreground', subtitleClassName)}>
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
