import { getInitialroductsCards } from '@/actions/actions'
import Link from 'next/link'
import Card from '../ui/card'
import H2 from '../ui/h2'

export default async function PopularSection() {
	const cards = await getInitialroductsCards()

	return (
		<section className='mb-[70px] md:mb-[140px]'>
			<div className=' flex items-center justify-between mb-[35px] md:mb-[70px]'>
				<H2 className=''>Popular Properties</H2>
				<Link className=' text-[#FE753F] font-semibold' href='/'>
					VIEW ALL
				</Link>
			</div>
			<div className=' grid grid-cols-2 md:grid-cols-3 gap-5'>
				{cards.map(card => (
					<Card
						key={card.id}
						title={card.title}
						location={card.location}
						price={card.price}
						rooms={card.rooms}
						bathrooms={card.bathrooms}
						eat={card.eat}
						imageUrl={card.imageUrl}
					/>
				))}
			</div>
		</section>
	)
}
