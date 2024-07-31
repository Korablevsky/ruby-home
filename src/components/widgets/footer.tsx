import Image from 'next/image'
import Link from 'next/link'
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa6'

export default function Footer() {
	return (
		<footer className=' flex justify-between mb-20'>
			<div className=' max-w-[260px] flex flex-col justify-between  '>
				<Link href='/'>
					<Image src='/logo.png' alt='logo' width={220} height={57} />
				</Link>

				<p className=' text-sm text-[#030A1B]/70 leading-6'>
					Contrary to popular is not simply random text. It has
				</p>

				<ul className=' flex gap-4'>
					<li className='bg-[#FE753F]  rounded-full max-w-8'>
						<Link href='/' className='flex items-center justify-center p-2'>
							<FaFacebookF color='#FFFFFF' />
						</Link>
					</li>
					<li className='bg-[#FE753F]  rounded-full max-w-8'>
						<Link href='/' className='flex items-center justify-center p-2'>
							<FaInstagram color='#FFFFFF' />
						</Link>
					</li>
					<li className='bg-[#FE753F]  rounded-full max-w-8'>
						<Link href='/' className='flex items-center justify-center p-2'>
							<FaTwitter color='#FFFFFF' />
						</Link>
					</li>
					<li className='bg-[#FE753F]  rounded-full max-w-8'>
						<Link href='/' className='flex items-center justify-center p-2'>
							<FaYoutube color='#FFFFFF' />
						</Link>
					</li>
					<li className='bg-[#FE753F]  rounded-full max-w-8'>
						<Link href='/' className='flex items-center justify-center p-2'>
							<FaLinkedinIn color='#FFFFFF' />
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<h3 className=' font-semibold text-2xl mb-6 mt-3 justify-center items-center'>
					About
				</h3>

				<nav className=' flex flex-col gap-3'>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Company
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Team
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Career
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Blogs
					</Link>
				</nav>
			</div>
			<div>
				<h3 className=' font-semibold text-2xl mt-3 mb-6'>Products</h3>

				<nav className=' flex flex-col gap-3'>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						E-Books
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Preasantation
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Management
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Dashboard
					</Link>
				</nav>
			</div>
			<div>
				<h3 className=' font-semibold text-2xl mt-3 mb-6'>Address</h3>

				<nav className=' flex flex-col gap-3'>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Country Delevery
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						Counter Beach Post
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						www.itobd.com
					</Link>
					<Link href='/' className=' font-medium text-[#030A1B]/70'>
						+880176565655
					</Link>
				</nav>
			</div>
		</footer>
	)
}
