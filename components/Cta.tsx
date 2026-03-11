'use client'

import EmailForm from './EmailForm'

export default function Cta() {
	return (
		<section
			id='cta'
			data-theme='dark'
			className='bg-green py-28 px-8 text-center relative overflow-hidden'
		>
			<span
				className='absolute -bottom-10 left-1/2 -translate-x-1/2 font-serif italic pointer-events-none select-none whitespace-nowrap'
				style={{ fontSize: 200, color: 'rgba(255,255,255,0.03)' }}
				aria-hidden
			>
				лад
			</span>

			<div className='relative z-10 max-w-150 mx-auto'>
				<p className='reveal font-display text-[9px] tracking-[0.25em] uppercase text-gold mb-6 pointer-events-none'>
					Ранний доступ
				</p>

				<h2
					className='reveal font-serif italic text-cream leading-[1.1] mb-5'
					style={{ fontSize: 'clamp(42px, 5vw, 64px)' }}
				>
					Войдите в<br />
					<span className='text-gold'>первую сотню</span>
				</h2>

				<p className='reveal font-sans font-light text-base text-cream/55 leading-[1.7] mb-12'>
					Мы строим приложение вместе с первыми пользователями.
					Оставьте email — и мы напишем вам лично, когда будет готово.
				</p>

				<div className='reveal flex justify-center mb-4'>
					<EmailForm variant='dark' />
				</div>

				<p className='reveal font-sans text-xs text-cream/30 pointer-events-none'>
					Без спама · Только когда будет готово
				</p>
			</div>
		</section>
	)
}
