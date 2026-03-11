import Cta from '@/components/Cta'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import How from '@/components/How'
import Nav from '@/components/Nav'
import Pain from '@/components/Pain'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'
import { SignupSyncProvider } from '@/components/SignupSyncProvider'
import { supabaseServer } from '@/lib/supabase-server'

export default async function Home() {
	const { count } = await supabaseServer
		.from('subscribers')
		.select('*', { count: 'exact', head: true })

	return (
		<ScrollRevealProvider>
			<SignupSyncProvider initialSubscribersCount={count ?? 0}>
				<Nav />
				<main>
					<Hero />
					<Pain />
					<How />
					<Features />
					<Cta />
				</main>
				<footer className='px-16 py-10 flex justify-between items-center border-t border-cream-dark'>
					<span className='font-serif italic text-2xl text-green'>
						Лад
					</span>
					<span className='font-sans text-xs text-text-muted opacity-50'>
						© 2025 · Делаем с любовью
					</span>
				</footer>
			</SignupSyncProvider>
		</ScrollRevealProvider>
	)
}
