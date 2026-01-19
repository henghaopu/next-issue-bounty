import { Route } from 'next'

type RouteBuilder = (...args: never[]) => Route

type RouteConfig = Record<string, RouteBuilder>

export const routes = {
	home: (): Route<'/'> => '/',
	issues: (): Route<'/issues'> => '/issues',
	issueDetail: (issueId: string): Route => `/issues/${issueId}` as Route,
} satisfies RouteConfig

export type RouteName = keyof typeof routes
