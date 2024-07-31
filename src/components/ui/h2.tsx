import { cn } from '@/lib/utils'

type props = {
	children: React.ReactNode
	className?: string
}

export default function H2({ children, className}:props) {
	return <h2 className={cn( ' text-2xl md:text-5xl font-semibold text-center',className )}>{children}</h2>
}
