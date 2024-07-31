'use client'

import { toast } from 'sonner'
import { Button } from '../ui/button'
import H2 from '../ui/h2'
import { Input } from '../ui/input'

export default function ListOwnerSection() {
	return (
		<section className='py-[35px] px-2 md:py-[70px] mb-[135px] bg-[#433E89] flex flex-col items-center'>
			<div className=' max-w-[730px]'>
				<H2 className='mb-2 md:mb-4 font-normal text-xl md:text-[44px] text-white'>
					Get listed your home as a owner
				</H2>

				<p className='mb-[25px] md:mb-[70px] text-sm md:text-base font-normal text-center leading-4 md:leading-5 text-white/30'>
					Here is a list of the greatest real estate company slogans of
					all-time. These catchy slogans are followed by the Greatest Real
					Estate.
				</p>

				<div className=' rounded-xl p-2 bg-white flex w-full max-w-full items-center space-x-2'>
					<Input
						type='email'
						className=' h-5 md:h-10 border-none'
						placeholder='Enter email address'
					/>
					<Button
						className='  h-7 md:h-10 py-1 px-2 md:px-4 text-xs '
						type='submit'
						onClick={() => {
							toast.success('subscribe email')
						}}
					>
						Subscribe
					</Button>
				</div>
			</div>
		</section>
	)
}
