import Image from 'next/image'

type CardPropertyProps = {
	title: string
	imageUrl: string
}

export default function CardProperty({ title, imageUrl }: CardPropertyProps) {
	return (

		
		<div className='p-3 md:p-6 max-w-[365px] bg-[#e6e5e595] rounded-xl'>
			<div className='mb-2 md:mb-4'>
				<Image src={imageUrl} alt='property1.png' width={46} height={46} />
			</div>

			<h3 className=' font-semibold text-sm leading-4 md:text-2xl mb-2'>{title}</h3>
			<p className=' leading-4 md:leading-6 font-normal text-xs md:text-lg text-[#030A1B]/70'>
				For many of us, buying a home is a dre and one not easily attainable.
			</p>
		</div>
	)
}
