import FirstSection from '@/components/widgets/first-section'
import ListOwnerSection from '@/components/widgets/list-owner-section'
import ParthnerSection from '@/components/widgets/parthner-section'
import PopularSection from '@/components/widgets/popular-section'
import PropertySection from '@/components/widgets/property-section'

export default function Home() {
	return (
		<main className=' '>
			<FirstSection />
			<ParthnerSection />
			<PopularSection />
			<PropertySection />
			<ListOwnerSection />

			{/* <ValuableSection /> */}
		</main>
	)
}
