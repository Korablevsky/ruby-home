import Image from 'next/image'
import CardProperty from '../ui/card-property'
import H2 from '../ui/h2'

const dataCardProperty1 = [
	{
		title: '100% Security',
		imageUrl: '/property1.png',
	},
	{
		title: 'Free air conditioner',
		imageUrl: '/property2.png',
	},
	{
		title: 'Flower garden',
		imageUrl: '/property3.png',
	},
]
const dataCardProperty2 = [
	{
		title: 'Parkers & movers',
		imageUrl: '/property4.png',
	},
	{
		title: 'Rental furniture',
		imageUrl: '/property5.png',
	},
	{
		title: 'Swimming pool',
		imageUrl: '/property6.png',
	},
]

export default function PropertySection() {
	return (
		<section className='pb-[25px] md:pb-[70px] mb-[20px] md:mb-[100px]'>
			<H2 className='mb-[15px]'>Property Featured</H2>
			<p className=' font-normal md:text-base text-sm max-w-[720px] mx-auto mb-[25px] md:mb-[70px] text-center '>
				Real estate is a crowded field. But with the number of buyers purchasing
				homes through real estate agents and brokers growing there’s plenty of
			</p>

			<div className=' flex gap-2 md:gap-8'>
				<div className=' flex flex-col gap-2 md:gap-8'>
					{
						dataCardProperty1.map((card, index) => (
							<CardProperty key={index} title={card.title} imageUrl={card.imageUrl} />
						))
					}
				</div>

				<div className=' hidden md:block mt-auto'>
					<Image src='/property-image.png' alt='' width={362} height={548} />
				</div>

				<div className='flex flex-col gap-2 md:gap-8'>
					{
						dataCardProperty2.map((card, index) => (
							<CardProperty key={index} title={card.title} imageUrl={card.imageUrl} />
						))
					}
				</div>
			</div>
		</section>
	)
}
