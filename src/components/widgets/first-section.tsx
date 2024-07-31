'use client'

import Image from 'next/image'

export default function FirstSection() {
	return (
		<section className='flex relative justify-between gap-3  mb-[50px] md:mb-[100px]'>
			
			<div className=' '>
				<h1 className=' md:absolute max-w-[550px]  font-semibold md:text-[61px] text-[30px]  leading-[120%] mb-7'>
					Find the perfect place to stay with your family
				</h1>

				<p className=' md:absolute max-w-[550px] md:mt-60  font-medium text-lg text-black/40 leading-6'>
					Buying a home is a life-changing experience, so shouldn’t your real
					estate agent be a life changer.
				</p>
			</div>

			<Image
				className=' hidden md:block '
				src='/first-section-image.png'
				alt='first-section-image'
				width={484}
				height={615}
			/>
		</section>
	)
}
