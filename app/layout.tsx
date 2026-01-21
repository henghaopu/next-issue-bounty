import type { Metadata } from 'next'
import { Geist, Geist_Mono, Outfit } from 'next/font/google'
import SiteHeader from '@/components/site-header'
import './globals.css'

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
				<SiteHeader />

				<main className="py-24 px-8 flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
					{children}
				</main>
			</body>
		</html>
	)
}
