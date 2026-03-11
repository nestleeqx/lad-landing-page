'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
	useEffect(() => {
		const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

		if (reveals.length === 0) {
			return
		}

		if (typeof IntersectionObserver === 'undefined') {
			reveals.forEach(el => el.classList.add('visible'))
			return
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach((entry, i) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add('visible')
						}, i * 80)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.15 }
		)

		reveals.forEach(el => observer.observe(el))

		return () => {
			observer.disconnect()
		}
	}, [])
}
