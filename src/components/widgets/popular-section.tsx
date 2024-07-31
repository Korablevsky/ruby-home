import Link from 'next/link'
import H2 from '../ui/h2'
import Card from '../ui/card'

export default function PopularSection() {
	return (
		<section className='mb-[70px] md:mb-[140px]'>
			<div className=' flex items-center justify-between mb-[35px] md:mb-[70px]'>
				<H2 className=''>Popular Properties</H2>
				<Link className=' text-[#FE753F] font-semibold' href='/'>
					VIEW ALL
				</Link>
			</div>
			<div className=' grid grid-cols-2 md:grid-cols-3 gap-5'>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>

		</section>
	)
}
