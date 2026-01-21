import { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import { LucideHome } from 'lucide-react'
import { routes } from '@/routes'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type SiteHeaderProps = ComponentPropsWithoutRef<'header'>

function SiteHeader({ className, ...props }: SiteHeaderProps) {
	return (
		<header
			className={cn('fixed top-0 left-0 right-0 backdrop-blur', className)}
			{...props}
		>
			<nav>
				<ul className="flex justify-between py-2.5 px-4 border-b items-center">
					<li>
						<Link
							href={routes.home()}
							className="text-lg font-bold flex items-center gap-x-2 hover:opacity-70"
						>
							<LucideHome />
							<span>IssueBounty</span>
						</Link>
					</li>
					<li>
						<Link
							href={routes.issues()}
							className={buttonVariants({ variant: 'default' })}
						>
							All Issues
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default SiteHeader
