import Link from 'next/link'
import H2 from '../ui/h2'

export default function ValuableSection() {
	return (
		<section className=' flex flex-col justify-center'>
			<Link
				href='/'
				className=' font-semibold text-[#FE753F] uppercase text-center'
			>
				Reviews
			</Link>

			<H2 className=' mb-[70px]'>Our valuable customer says</H2>
		</section>
	)
}
