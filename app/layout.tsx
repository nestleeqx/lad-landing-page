import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Unbounded } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600'],
	style: ['normal', 'italic'],
	variable: '--font-cormorant',
	display: 'swap'
})

const unbounded = Unbounded({
	subsets: ['cyrillic', 'latin'],
	weight: ['200', '300', '400'],
	variable: '--font-unbounded',
	display: 'swap'
})

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400'],
	variable: '--font-inter',
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Лад — бюджет для двоих',
	description:
		'Три кармана: твои, мои, наши. Приложение учёта расходов, которое понимает как устроены деньги в паре.',
	openGraph: {
		title: 'Лад — бюджет для двоих',
		description: 'Деньги вместе — без ссор и таблиц',
		type: 'website',
		url: 'https://lad.ru',
		images: [{ url: '/og.png', width: 1200, height: 630 }]
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ru'
			className={`${cormorant.variable} ${unbounded.variable} ${inter.variable}`}
		>
			<body>{children}</body>
		</html>
	)
}
