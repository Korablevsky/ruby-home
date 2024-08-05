import Header from '@/components/widgets/header'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { setInitialProductsCards } from '@/actions/actions'

const inter = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Ruby Home',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	//  setInitialProductsCards()

	return (
		<html lang='en'>
			<body className={`${inter.className} px-2 md:px-3 mx-auto max-w-[1200px]`}>
				<Header />

				{children}
				<Toaster richColors />

				{/* <Footer /> */}
			</body>
		</html>
	)
}
