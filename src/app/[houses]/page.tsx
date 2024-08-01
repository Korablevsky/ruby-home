import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

export default function Page() {
	return (
		<main>
			<h1 className=' text-5xl font-bold'>Capital hill residence</h1>
			<p>Content goes here</p>

			<Carousel>
				<CarouselContent className=''>
					<CarouselItem className=' '>...</CarouselItem>
					<CarouselItem>...</CarouselItem>
					<CarouselItem>...</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</main>
	)
}
