'use client'

const quotes = [
	{
		text: 'Пробовали Дзен-мани, но там нет нормального совместного режима. Это просто два отдельных аккаунта.',
		source: 'отзыв в App Store'
	},
	{
		text: 'Ведём бюджет в гугл-таблице. Это боль, но хотя бы оба видим одно и то же.',
		source: 'форум Пикабу'
	},
	{
		text: 'Хочу видеть: вот общие расходы, вот его личные, вот мои. Такого нигде нет.',
		source: 'комментарий Т—Ж'
	}
]

export default function Pain() {
	return (
		<section className='py-28 px-8 lg:px-16 max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
			<div className='reveal'>
				<p className='font-display text-[9px] tracking-[0.25em] uppercase text-gold mb-6 pointer-events-none'>
					Узнаёте себя?
				</p>
				<h2
					className='font-serif italic text-green mb-7 leading-[1.15]'
					style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
				>
					Все приложения
					<br />
					созданы для одного
				</h2>
				<p className='font-sans font-light text-base leading-[1.8] text-text-muted'>
					Существующие трекеры расходов построены для личного бюджета.
					Совместность — это платная возможность, прикрученная сбоку.
					Или два отдельных аккаунта, каждый со своей подпиской.
					<br />
					<br />А вы ведёте бюджет вдвоём в Telegram-переписке. Или в
					одной Google-таблице. Или не ведёте вовсе — потому что ни
					один инструмент не подошёл.
				</p>
			</div>
			<div className='flex flex-col gap-5 reveal'>
				{quotes.map((q, i) => (
					<blockquote
						key={i}
						className='bg-white border-l-[3px] border-gold px-8 py-5'
					>
						<p className='font-serif italic lg:text-xl text-lg text-walnut leading-normal'>
							«{q.text}»
						</p>
						<cite className='block font-sans not-italic text-[11px] text-text-muted mt-2.5 opacity-60'>
							— {q.source}
						</cite>
					</blockquote>
				))}
			</div>
		</section>
	)
}
