import Image from 'next/image'
import H2 from '../ui/h2'

export default function ParthnerSection() {
	return (
		<section className='mb-[70px] md:mb-[140px]'>
			<H2 className=' mb-8 md:mb-[65px]'>Our Parthner</H2>

			<ul className=' flex justify-between gap-2 items-center'>
				<li>
					<Image src='/partner1.png' alt='partner' width={125} height={68} />
				</li>
				<li>
					<Image src='/partner2.png' alt='partner' width={125} height={68} />
				</li>
				<li>
					<Image src='/partner3.png' alt='partner' width={125} height={68} />
				</li>
				<li>
					<Image src='/partner4.png' alt='partner' width={125} height={68} />
				</li>
				<li>
					<Image src='/partner5.png' alt='partner' width={125} height={68} />
				</li>
			</ul>
		</section>
	)
}
