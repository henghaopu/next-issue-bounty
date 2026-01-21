import {
	ComponentPropsWithoutRef,
	ReactNode,
	isValidElement,
	cloneElement,
} from 'react'
import { cn } from '@/lib/utils'

const headingSizeMap = {
	h1: 'text-3xl font-bold tracking-tight',
	h2: 'text-2xl font-semibold tracking-tight',
	h3: 'text-xl font-semibold',
}

type HeadingTag = keyof typeof headingSizeMap

interface HeadingGroupProps extends ComponentPropsWithoutRef<'div'> {
	title: string
	subtitle?: ReactNode
	heading?: HeadingTag
	headingClassName?: string
	subtitleClassName?: string
}

export function HeadingGroup({
	title,
	subtitle,
	heading = 'h1',
	className,
	headingClassName,
	subtitleClassName,
	...props
}: HeadingGroupProps) {
	const HeadingTag = heading
	const subtitleIsPlain =
		typeof subtitle === 'string' || typeof subtitle === 'number'
	const subtitleContent = (() => {
		if (!subtitle) return null

		if (subtitleIsPlain) {
			return (
				<p className={cn('text-sm text-muted-foreground', subtitleClassName)}>
					{subtitle}
				</p>
			)
		}

		if (isValidElement(subtitle)) {
			const typedSubtitle = subtitle as React.ReactElement<{
				className?: string
			}>
			const existingClassName = typedSubtitle.props.className

			return cloneElement(typedSubtitle, {
				className: cn(
					'text-sm text-muted-foreground',
					subtitleClassName,
					existingClassName,
				),
			})
		}

		return (
			<div className={cn('text-sm text-muted-foreground', subtitleClassName)}>
				{subtitle}
			</div>
		)
	})()

	return (
		<div className={cn('flex flex-col gap-y-1', className)} {...props}>
			<HeadingTag className={cn(headingSizeMap[heading], headingClassName)}>
				{title}
			</HeadingTag>
			{subtitleContent}
		</div>
	)
}

export default HeadingGroup
