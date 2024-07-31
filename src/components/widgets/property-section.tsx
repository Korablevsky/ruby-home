import { cn } from '@/lib/utils'
import CardProperty from '../ui/card-property'
import H2 from '../ui/h2'
import Image from 'next/image'
type Props = {
	className?: string
}

export default function PropertySection({ className}:Props) {
	return (
		<section className="pb-[25px] md:pb-[70px] mb-[20px] md:mb-[100px]">
			<H2 className='mb-[15px]'>Property Featured</H2>
			<p className=' font-normal md:text-base text-sm max-w-[720px] mx-auto mb-[25px] md:mb-[70px] text-center '>
				Real estate is a crowded field. But with the number of buyers purchasing
				homes through real estate agents and brokers growing there’s plenty of
			</p>

			<div className=' flex gap-4 md:gap-8'>
				<div className=' flex flex-col gap-4 md:gap-8'>
					<CardProperty />
					<CardProperty />
					<CardProperty />
				</div>
				
				<div className=' hidden md:block mt-auto'>
					<Image src="/property-image.png" alt='' width={362} height={548}/>
				</div>
				
				<div className='flex flex-col gap-4 md:gap-8'>
					<CardProperty />
					<CardProperty />
					<CardProperty />
				</div>
			</div>
		</section>
	)
}
