import Image from 'next/image'
import { FaBath, FaLocationDot } from 'react-icons/fa6'
import { ImSpoonKnife } from 'react-icons/im'
import { IoIosBed } from 'react-icons/io'
import { Button } from './button'

export default function Card() {
	return (
		<div className='shadow-2xl flex flex-col'>
			<Image
				className='w-full h-auto mb-4 md:mb-[30px]'
				src='/card1.png'
				alt='card'
				layout='responsive'
				width={362}
				height={321}
			/>

			<div className='px-2 pb-2 md:px-8 md:pb-7'>
				<div>
					<h3 className='font-semibold text-sm md:text-xl mb-[10px]'>
						Capital hill residence
					</h3>
				</div>

				<div className='flex mb-2 md:mb-3 gap-2 md:gap-3 items-center'>
					<FaLocationDot size={24}  className='size-4 md:size-6 fill-[#030A1B]/50' />
					<span className='text-sm md:text-base'>East London</span>
				</div>

				<div className='flex gap-2 md:gap-5 items-center text-lg md:text-xl mb-6 md:mb-8'>
					<div className='flex gap-2 items-center'>
						<IoIosBed size={24}  className='size-4 md:size-6  fill-[#030A1B]/50 ' />
						<span className='text-sm md:text-xl'>6</span>
					</div>

					<div className='flex gap-2 items-center'>
						<ImSpoonKnife size={22}  className='size-4 md:size-6  fill-[#030A1B]/50' />
						<span className='text-sm md:text-xl'>2</span>
					</div>

					<div className='flex gap-2 items-center'>
						<FaBath size={20}  className='size-4 md:size-6  fill-[#030A1B]/50' />
						<span className='text-sm md:text-xl'>3</span>
					</div>
				</div>

				<div className='flex justify-between items-center'>
					<span className='text-[#FE753F] font-semibold text-sm md:text-2xl'>$5527.00</span>
					<Button className=' h-7 md:h-10 py-1 px-2 md:px-4 text-xs'>View Details</Button>
				</div>
			</div>
		</div>
	)
}
