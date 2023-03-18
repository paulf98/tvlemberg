import Image from 'next/image';
import Link from 'next/link';
import LaufspassLogo from '../../public/images/LogoLaufspass.png';
/**
 * Sidebar component that shows news
 * Is hidden on mobile
 */
export default function Sidebar() {
	return (
		<aside className='hidden lg:flex flex-col z-40 w-min-32 max-w-sm h-screen p-4 py-8'>
			<h1 className='text-3xl font-bold text-center mb-8'>Aktuelles</h1>
			<Link
				href={'/veranstaltungen/laufspass'}
				className='shadow-xl rounded-md hover:bg-base-200'
			>
				<Image src={LaufspassLogo} alt='Logo Laufspass' />
			</Link>
		</aside>
	);
}
