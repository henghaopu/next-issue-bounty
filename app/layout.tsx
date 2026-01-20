import type { Metadata } from 'next'
import { Geist, Geist_Mono, Outfit } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { routes } from '@/routes'
import { LucideHome } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Issue Bounty',
	description: 'Issue Bounty application built with Next.js',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={outfit.variable}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<header className="fixed top-0 left-0 right-0 backdrop-blur">
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

				<main className="py-24 px-8 flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
					{children}
				</main>
			</body>
		</html>
	)
}
