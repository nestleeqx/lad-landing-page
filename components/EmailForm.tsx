'use client'

import { useForm } from 'react-hook-form'
import { useSignupSync } from './SignupSyncProvider'

type FormData = { email: string }

interface EmailFormProps {
	variant?: 'light' | 'dark'
}

export default function EmailForm({ variant = 'light' }: EmailFormProps) {
	const { lastEmail, status, submitEmail } = useSignupSync()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>()

	const onSubmit = async (data: FormData) => {
		await submitEmail(data.email)
	}

	const isDark = variant === 'dark'
	const isLoading = status === 'loading'
	const isSubmitted = status === 'success'
	const isAlreadySubscribed = status === 'already_subscribed'
	const isError = status === 'error'

	if (isSubmitted) {
		return (
			<p className='font-serif italic text-xl text-gold'>
				Отлично, мы напишем{lastEmail ? ` на ${lastEmail}` : ''} первым
				✦
			</p>
		)
	}

	if (isAlreadySubscribed) {
		return (
			<p className='font-serif italic text-xl text-gold'>
				Вы уже в списке{lastEmail ? `: ${lastEmail}` : ''} ✦
			</p>
		)
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex lg:flex-row flex-col max-w-105'
			>
				<input
					{...register('email', {
						required: true,
						pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
					})}
					type='email'
					placeholder='ваш email'
					className={`
						flex-1 px-5 py-4 font-sans text-sm font-light outline-none transition-colors
						border-[1.5px] lg:border-r-0 border-r-[1.5px]
						${
							isDark
								? 'bg-white/8 border-white/20 text-cream placeholder:text-white/30 focus:border-gold'
								: 'bg-white border-cream-dark text-walnut placeholder:text-[#B0A090] focus:border-green-light'
						}
					`}
				/>
				<button
					type='submit'
					disabled={isLoading}
					className={`
            px-7 py-4 font-display text-[10px] font-normal tracking-[0.12em] uppercase
            transition-colors whitespace-nowrap disabled:opacity-60 cursor-pointer lg:mt-0 mt-3
            ${
				isDark
					? 'bg-gold text-green hover:bg-[#D4B87A]'
					: 'bg-green-mid text-cream hover:bg-green'
			}
          `}
				>
					{isLoading ? '...' : isDark ? 'Я в деле' : 'Хочу первым'}
				</button>
			</form>
			{errors.email && (
				<p className='mt-2 text-xs text-red-400 font-sans'>
					Введите корректный email
				</p>
			)}
			{isError && !errors.email && (
				<p className='mt-2 text-xs text-red-400 font-sans'>
					Не удалось отправить. Попробуйте еще раз.
				</p>
			)}
		</div>
	)
}
