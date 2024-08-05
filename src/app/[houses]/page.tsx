import { getHousesCard, getInitialroductsCards } from '@/actions/actions'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

export async function generateStaticParams() {
	const initialProductsCards = await getInitialroductsCards()

	return initialProductsCards.map(house => ({
		houses: house.slug,
	}))
}

export default async function Page({ params }: { params: { houses: string } }) {
	const data = await getHousesCard(params.houses)
	console.log(data)
	if (!data) return <div>Not found</div>

	return (
		<main>
			<h1 className=' text-5xl font-bold'>{data.title}</h1>
			<p>Content goes here</p>

			<div className=''>
				<Carousel className='  mx-auto max-w-[700px]'>
					<CarouselContent className=''>
						<CarouselItem className=''>
							<Image
								className='w-full h-full  '
								src={data?.imageUrl}
								alt='.'
								width={100}
								height={100}
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious className='' />
					<CarouselNext />
				</Carousel>
			</div>
		</main>
	)
}
