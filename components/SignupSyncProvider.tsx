'use client'

import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react'

type SignupStatus = 'idle' | 'loading' | 'success' | 'already_subscribed' | 'error'

type SignupSyncContextValue = {
	lastEmail: string
	status: SignupStatus
	subscribersCount: number | null
	submitEmail: (email: string) => Promise<void>
}

const SignupSyncContext = createContext<SignupSyncContextValue | null>(null)

export function SignupSyncProvider({
	children,
	initialSubscribersCount = null
}: {
	children: ReactNode
	initialSubscribersCount?: number | null
}) {
	const [status, setStatus] = useState<SignupStatus>('idle')
	const [lastEmail, setLastEmail] = useState('')
	const [subscribersCount, setSubscribersCount] = useState<number | null>(
		initialSubscribersCount
	)

	const submitEmail = useCallback(async (email: string) => {
		setStatus('loading')
		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email })
			})

			if (!response.ok) {
				setStatus('error')
				return
			}

			const payload = (await response.json()) as {
				count?: unknown
				alreadySubscribed?: unknown
			}
			if (typeof payload.count === 'number') {
				setSubscribersCount(payload.count)
			}

			setLastEmail(email)
			setStatus(payload.alreadySubscribed === true ? 'already_subscribed' : 'success')
		} catch {
			setStatus('error')
		}
	}, [])

	const value = useMemo(
		() => ({ lastEmail, status, subscribersCount, submitEmail }),
		[lastEmail, status, subscribersCount, submitEmail]
	)

	return (
		<SignupSyncContext.Provider value={value}>
			{children}
		</SignupSyncContext.Provider>
	)
}

export function useSignupSync() {
	const context = useContext(SignupSyncContext)
	if (!context) {
		throw new Error('useSignupSync must be used within SignupSyncProvider')
	}
	return context
}
