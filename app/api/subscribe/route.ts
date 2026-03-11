import { supabaseServer } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

function isValidEmail(email: unknown): email is string {
	return (
		typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	)
}

async function getSubscribersCount() {
	const { count, error } = await supabaseServer
		.from('subscribers')
		.select('*', { count: 'exact', head: true })

	if (error) {
		return { count: null, error }
	}

	return { count: count ?? 0, error: null }
}

export async function GET() {
	const { count, error } = await getSubscribersCount()

	if (error) {
		console.error('Supabase count error:', error)
		return NextResponse.json({ error: 'DB error' }, { status: 500 })
	}

	return NextResponse.json({ count })
}

export async function POST(req: NextRequest) {
	try {
		const { email } = await req.json()

		if (!isValidEmail(email)) {
			return NextResponse.json(
				{ error: 'Invalid email' },
				{ status: 400 }
			)
		}

		const { error } = await supabaseServer
			.from('subscribers')
			.insert([{ email, created_at: new Date().toISOString() }])

		const alreadySubscribed = error?.code === '23505'

		if (error && !alreadySubscribed) {
			console.error('Supabase error:', error)
			return NextResponse.json({ error: 'DB error' }, { status: 500 })
		}

		const { count, error: countError } = await getSubscribersCount()

		if (countError) {
			console.error('Supabase count error:', countError)
			return NextResponse.json({ success: true, alreadySubscribed })
		}

		return NextResponse.json({ success: true, count, alreadySubscribed })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ error: 'Server error' }, { status: 500 })
	}
}
