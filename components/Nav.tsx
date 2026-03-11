'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Nav() {
	const [onDark, setOnDark] = useState(true)
	const [scrolled, setScrolled] = useState(false)
	const [isHero, setIsHero] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const navBottom = 80
			const isInHero = window.scrollY < window.innerHeight
			const isScrolled = window.scrollY > 20
			const darkSections = Array.from(
				document.querySelectorAll<HTMLElement>('[data-theme="dark"]')
			)
			const isOnDarkSection = darkSections.some(section => {
				const rect = section.getBoundingClientRect()
				return rect.top <= navBottom && rect.bottom >= 0
			})

			setIsHero(isInHero)
			setOnDark(isInHero || isOnDarkSection)
			setScrolled(isScrolled)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const useDarkTheme = onDark && !isHero
	const isHeroTop = isHero && !scrolled
	const brandColor = useDarkTheme ? 'text-cream' : 'text-green'
	const ctaColor = isHeroTop
		? 'text-green lg:text-cream'
		: useDarkTheme
			? 'text-cream'
			: 'text-green'
	const ctaBorder = isHeroTop
		? 'border-green-light lg:border-cream/40'
		: useDarkTheme
			? 'border-cream/40'
			: 'border-green-light'
	const navBackground = scrolled
		? useDarkTheme
			? 'bg-green/90 backdrop-blur-md'
			: 'bg-cream/90 backdrop-blur-md'
		: ''

	return (
		<nav
			className={`
      fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5
      transition-all duration-300
      ${navBackground}
    `}
			style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
		>
			<Link
				href='/'
				className={`font-serif text-[28px] italic leading-none tracking-wide transition-colors duration-300 ${brandColor}`}
			>
				Лад
			</Link>
			<a
				href='#cta'
				className={`font-display text-[10px] font-light tracking-[0.15em] uppercase border-b pb-0.5 opacity-70 hover:opacity-100 transition-all duration-300 ${ctaColor} ${ctaBorder}`}
			>
				Войти в список
			</a>
		</nav>
	)
}
