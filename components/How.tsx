'use client'

const steps = [
	{
		n: '01',
		title: 'Три кармана с первого запуска',
		text: 'Твои, мои и наши деньги разделены по умолчанию. Не нужно ничего настраивать — просто начните вносить расходы.'
	},
	{
		n: '02',
		title: 'Один экран — полная картина',
		text: 'Вы оба видите общий бюджет в реальном времени. Каждый видит свои расходы и может сам решить, что показывать партнёру.'
	},
	{
		n: '03',
		title: 'Одна подписка на двоих',
		text: 'Не платите дважды. Одна пара — одна подписка. Потому что вы ведёте бюджет вместе, а не каждый сам по себе.'
	}
]

export default function How() {
	return (
		<section
			data-theme='dark'
			className='bg-green py-28 px-8 lg:px-16 relative overflow-hidden'
		>
			<div
				className='absolute -top-24 -right-24 w-125 h-125 rounded-full pointer-events-none'
				style={{
					background:
						'radial-gradient(circle, rgba(74,122,94,0.3), transparent 70%)'
				}}
			/>
			<div className='max-w-300 mx-auto relative z-10'>
				<div className='text-center mb-20 reveal'>
					<p className='font-display text-[9px] tracking-[0.25em] uppercase text-gold mb-6 pointer-events-none'>
						Как это работает
					</p>
					<h2
						className='font-serif italic text-cream leading-[1.1]'
						style={{ fontSize: 'clamp(38px, 4vw, 56px)' }}
					>
						Просто.
						<br />
						<span className='text-green-light'>
							Как должно быть.
						</span>
					</h2>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-0.5'>
					{steps.map(step => (
						<div
							key={step.n}
							className='reveal bg-cream/5 border border-cream/8 p-12 hover:bg-cream/9 transition-colors'
						>
							<div className='font-serif text-[72px] font-light text-gold/25 leading-none mb-5 pointer-events-none'>
								{step.n}
							</div>
							<h3 className='font-serif text-[26px] font-semibold text-cream mb-3.5 leading-[1.2]'>
								{step.title}
							</h3>
							<p className='font-sans font-light text-sm leading-[1.8] text-cream/50'>
								{step.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
