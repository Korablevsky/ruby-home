import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '../ui/button'
import Logo from '../ui/logo'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet'

type Props = {
	className?: string
	type?: string
}

export default function Header() {
	return (
		<header className=' flex flex-row justify-between items-center  py-9'>
			<Link href='/'>
				<Logo />
			</Link>

			<Navigation  type='hidden md:block' />
			<NavigationMobile className='block md:hidden' />
		</header>
	)
}

function Navigation({ className, type }: Props) {
	return (
		<nav className={cn( 'font-medium	', type)}>
			<ul className= {cn( 'flex  items-center justify-center gap-12', className)}>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/'>Properties </Link>
				</li>
				<li>
					<Link href='/'>About us</Link>
				</li>
				<li>
					<Link href='/'>Blog</Link>
				</li>

				<Button>Contact us</Button>
			</ul>
		</nav>
	)
}

function NavigationMobile({ className, }: Props) {
	return (
		<Sheet >
			<SheetTrigger asChild>
				<Button className={cn('font-medium	', className)} >
					MENU
				</Button>
			</SheetTrigger>

			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle className=' mb-6'>Navigate menu</SheetTitle>
					<Navigation className='flex-col gap-4 text-xl items-start' />
				</SheetHeader>

				<SheetFooter>
					<SheetClose asChild />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
