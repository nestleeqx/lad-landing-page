'use client'

import { useState } from 'react'
import EmailForm from './EmailForm'
import { useSignupSync } from './SignupSyncProvider'

const pockets = [
	{
		name: 'Мои',
		sub: 'личные расходы',
		amount: '28 400 ₽'
	},
	{
		name: 'Наши',
		sub: 'общий бюджет',
		amount: '64 200 ₽'
	},
	{
		name: 'Твои',
		sub: 'расходы партнёра',
		amount: '31 700 ₽'
	}
]

function getPeopleWord(count: number) {
	const absCount = Math.abs(count) % 100
	const lastDigit = absCount % 10

	if (absCount >= 11 && absCount <= 14) {
		return 'человек'
	}

	if (lastDigit === 1) {
		return 'человек'
	}

	if (lastDigit >= 2 && lastDigit <= 4) {
		return 'человека'
	}

	return 'человек'
}

export default function Hero() {
	const [activePocketIndex, setActivePocketIndex] = useState(1)
	const { subscribersCount } = useSignupSync()
	const safeCount = subscribersCount ?? 0
	const peopleWord = getPeopleWord(safeCount)

	return (
		<section className='min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden'>
			<div className='flex flex-col justify-center px-8 lg:px-16 pt-36 pb-20 relative z-10'>
				<p
					className='font-display text-[9px] font-normal tracking-[0.25em] uppercase text-gold mb-8'
					style={{
						animation: 'fadeUp 0.8s ease 0.2s both'
					}}
				>
					Приложение для пар · Бета-версия
				</p>

				<h1
					className='font-serif italic text-green leading-[1.05] mb-7'
					style={{
						fontSize: 'clamp(47px, 5.6vw, 82px)',
						animation: 'fadeUp 0.8s ease 0.4s both'
					}}
				>
					Деньги вместе —
					<br />
					<span className='text-green-light'>без ссор</span>
					<br />и таблиц
				</h1>

				<p
					className='font-sans font-light text-[17px] leading-[1.7] text-text-muted max-w-105 mb-12'
					style={{
						animation: 'fadeUp 0.8s ease 0.6s both'
					}}
				>
					Три кармана: твои, мои, наши. Наконец-то приложение, которое понимает,
					как устроены деньги в паре.
				</p>

				<div
					style={{
						animation: 'fadeUp 0.8s ease 0.8s both'
					}}
				>
					<EmailForm variant='light' />
				</div>

				<p
					className='mt-4 font-sans text-xs text-text-muted opacity-70'
					style={{
						animation: 'fadeUp 0.8s ease 1s both'
					}}
				>
					{`Уже ${safeCount} ${peopleWord} в очереди · Бесплатный ранний доступ`}
				</p>
			</div>

			<div className='hidden lg:block relative bg-green overflow-hidden'>
				<div
					className='absolute inset-0'
					style={{
						background:
							'radial-gradient(ellipse at 30% 70%, rgba(74,122,94,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(200,169,110,0.15) 0%, transparent 50%)'
					}}
				/>
				<div className='absolute inset-0 flex items-center justify-center p-16'>
					<div
						className='w-full max-w-[320px]'
						style={{
							animation: 'fadeUp 1s ease 0.9s both'
						}}
					>
						<p className='font-display text-[8px] tracking-[0.2em] uppercase text-cream/40 mb-2 pl-0.5 pointer-events-none'>
							Ваши три кармана
						</p>

						{pockets.map((pocket, index) => (
							<button
								key={pocket.name}
								type='button'
								onClick={() => setActivePocketIndex(index)}
								className={`
									w-full text-left flex justify-between items-center px-6 py-5 mb-2.5
									border transition-all duration-300 cursor-pointer
									${
										index === activePocketIndex
											? 'bg-gold/15 border-gold/30'
											: 'bg-cream/[0.07] border-cream/12 hover:bg-cream/11'
									}
								`}
							>
								<div>
									<div className='font-serif text-xl text-cream'>
										{pocket.name}
									</div>
									<div className='font-sans text-[11px] text-cream/35 mt-0.5'>
										{pocket.sub}
									</div>
								</div>
								<div className='font-display text-base font-light text-gold tracking-tight'>
									{pocket.amount}
								</div>
							</button>
						))}
						<div className='w-10 h-px bg-cream/15 mx-auto my-4' />
						<p className='font-sans text-[13px] text-cream/30 text-center tracking-widest pointer-events-none'>
							Один взгляд — полная картина
						</p>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes fadeUp {
					from {
						opacity: 0;
						transform: translateY(24px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</section>
	)
}
