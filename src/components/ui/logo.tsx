import Image from 'next/image'

export default function Logo() {
	return <Image className=' w-52' src='/logo.png' alt='logo' width={250} height={65} />
}
