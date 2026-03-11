'use client'

const features = [
	{
		icon: '◈',
		title: 'Гибкое разделение',
		text: 'Полностью совместный, полностью раздельный или смешанный бюджет — вы сами выбираете модель.'
	},
	{
		icon: '◉',
		title: 'Быстрый ввод',
		text: 'Два тапа — и расход записан. Без меню, без категорий вручную при каждой покупке.'
	},
	{
		icon: '◎',
		title: 'Умная аналитика',
		text: 'Не просто графики, а ответ на вопрос «где мы тратим больше, чем планировали».'
	},
	{
		icon: '◌',
		title: 'Приватность данных',
		text: 'Вы решаете, что видит партнёр. Личные расходы остаются личными — если вы так хотите.'
	}
]

export default function Features() {
	return (
		<section className='py-28 px-8 lg:px-16 max-w-300 mx-auto'>
			<div className='mb-16 reveal'>
				<p className='font-display text-[9px] tracking-[0.25em] uppercase text-gold mb-6 pointer-events-none'>
					Что внутри?
				</p>
				<h2
					className='font-serif italic text-green leading-[1.15]'
					style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
				>
					Сделано для
					<br />
					<span className='text-green-light'>
						реальной жизни
					</span>{' '}
					пары
				</h2>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-0.5'>
				{features.map(f => (
					<div
						key={f.title}
						className='reveal flex gap-6 p-10 bg-cream-dark hover:bg-[#E5DBCA] transition-colors'
					>
						<span className='text-[28px] mt-0.5 shrink-0 pointer-events-none'>
							{f.icon}
						</span>
						<div>
							<h3 className='font-serif text-[22px] font-semibold text-green mb-2'>
								{f.title}
							</h3>
							<p className='font-sans font-light text-sm leading-[1.7] text-text-muted'>
								{f.text}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
