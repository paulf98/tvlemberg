import Image from 'next/image';
import Link from 'next/link';
import TVL from '../../public/images/tvl.png';
import { MdArrowDropDown, MdClose } from 'react-icons/md';
import { useState, useEffect } from 'react';

export default function Navbar({ children }: { children: React.ReactNode }) {
	const [expandedSections, setExpandedSections] = useState<string[]>([]);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleSection = (section: string) => {
		setExpandedSections((prev) =>
			prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
		);
	};

	const closeMobileMenu = () => {
		setIsDrawerOpen(false);
		setExpandedSections([]);
		// Close the drawer by unchecking the input
		const drawerInput = document.getElementById('my-drawer-3') as HTMLInputElement;
		if (drawerInput) {
			drawerInput.checked = false;
		}
	};

	// Listen for changes to the drawer input to sync state
	useEffect(() => {
		const drawerInput = document.getElementById('my-drawer-3') as HTMLInputElement;
		if (drawerInput) {
			const handleChange = () => {
				setIsDrawerOpen(drawerInput.checked);
			};

			drawerInput.addEventListener('change', handleChange);
			return () => drawerInput.removeEventListener('change', handleChange);
		}
	}, []);

	return (
		<div className='drawer'>
			<input
				id='my-drawer-3'
				type='checkbox'
				className='drawer-toggle'
				aria-label='Toggle mobile menu'
				checked={isDrawerOpen}
				onChange={(e) => setIsDrawerOpen(e.target.checked)}
			/>
			<div className='drawer-content flex flex-col'>
				<div className='w-full navbar bg-base-100 border-b-2 shadow-sm'>
					<div className='flex-1'>
						<Link
							href={'/'}
							className='btn btn-ghost normal-case text-xl min-h-12 flex items-center'>
							<Image src={TVL} alt='TVL Logo' width={40} height={40} className='flex-shrink-0' />
							<span className='ml-3 text-base font-medium'>Startseite</span>
						</Link>
					</div>
					{/* DESKTOP NAVIGATION - CENTERED */}
					<div className='flex-1 hidden lg:flex justify-center '>
						<ul className='menu menu-horizontal bg-base-100 rounded-box p-2'>
							<li>
								<Link href={'/sportprogramm'}>Sportprogramm</Link>
							</li>
							<li tabIndex={0}>
								<span>
									Veranstaltungen <MdArrowDropDown />
								</span>
								<ul className='rounded-box bg-white p-2 z-50 shadow-lg'>
									<li>
										<Link href={'/veranstaltungen/laufspass'}>Laufspass</Link>
									</li>
									<li>
										<Link href={'/veranstaltungen/traillauf'}>Traillauf</Link>
									</li>
									<li>
										<Link href={'/veranstaltungen/zeltlager'}>Zeltlager</Link>
									</li>
								</ul>
							</li>
							<li tabIndex={0}>
								<span>
									Verein <MdArrowDropDown />
								</span>
								<ul className='rounded-box bg-white p-2 z-50 shadow-lg'>
									<li>
										<Link href={'/verein/chronik'}>Chronik</Link>
									</li>
									<li>
										<Link href={'/verein/vorstand'}>Vorstand</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href={'/antraege'}>Anträge &amp; Formulare</Link>
							</li>
						</ul>
					</div>
					<div className='flex-1 flex justify-end items-center gap-2'>
						<Link className='btn btn-primary hidden lg:inline-flex' href={'/kontakt'}>
							Kontakt
						</Link>
						{/* MOBILE NAVIGATION OPENER - POSITIONED ON RIGHT */}
						<div className='lg:hidden'>
							<label
								htmlFor='my-drawer-3'
								className='btn btn-square btn-ghost p-3 min-h-12 min-w-12'
								aria-label='Open mobile menu'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									className='inline-block w-6 h-6 stroke-current'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'></path>
								</svg>
							</label>
						</div>
					</div>
				</div>
				{children}
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-3' className='drawer-overlay' onClick={closeMobileMenu}></label>
				{/* MOBILE NAVIGATION - FLYING IN FROM RIGHT */}
				<div
					className='w-80 bg-base-100 h-full flex flex-col fixed top-0 right-0 transform transition-transform duration-300 ease-in-out shadow-2xl'
					style={{ transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)' }}>
					{/* Mobile Header */}
					<div className='flex items-center justify-between p-4 border-b border-base-300 bg-base-200'>
						<div className='flex items-center space-x-3'>
							<Image src={TVL} alt='TVL Logo' width={32} height={32} />
							<span className='font-semibold text-lg'>TV Lemberg</span>
						</div>
						<button
							onClick={closeMobileMenu}
							className='btn btn-ghost btn-sm min-h-10 min-w-10'
							aria-label='Close mobile menu'>
							<MdClose className='w-5 h-5' />
						</button>
					</div>

					{/* Mobile Menu Items */}
					<nav className='flex-1 overflow-y-auto p-4 space-y-2'>
						{/* Sportprogramm */}
						<Link
							href='/sportprogramm'
							className='block w-full p-4 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-base font-medium'
							onClick={closeMobileMenu}>
							Sportprogramm
						</Link>

						{/* Veranstaltungen Section */}
						<div className='space-y-2'>
							<button
								onClick={() => toggleSection('veranstaltungen')}
								className='flex items-center justify-between w-full p-4 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-base font-medium'
								aria-expanded={expandedSections.includes('veranstaltungen')}>
								<span>Veranstaltungen</span>
								<MdArrowDropDown
									className={`w-5 h-5 transition-transform duration-200 ${
										expandedSections.includes('veranstaltungen') ? 'rotate-180' : ''
									}`}
								/>
							</button>
							{expandedSections.includes('veranstaltungen') && (
								<div className='ml-4 space-y-1 animate-fade-in'>
									<Link
										href='/veranstaltungen/laufspass'
										className='block w-full p-3 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-sm text-base-content/80'
										onClick={closeMobileMenu}>
										Laufspass
									</Link>
									<Link
										href='/veranstaltungen/traillauf'
										className='block w-full p-3 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-sm text-base-content/80'
										onClick={closeMobileMenu}>
										Traillauf
									</Link>
									<Link
										href='/veranstaltungen/zeltlager'
										className='block w-full p-3 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-sm text-base-content/80'
										onClick={closeMobileMenu}>
										Zeltlager
									</Link>
								</div>
							)}
						</div>

						{/* Verein Section */}
						<div className='space-y-2'>
							<button
								onClick={() => toggleSection('verein')}
								className='flex items-center justify-between w-full p-4 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-base font-medium'
								aria-expanded={expandedSections.includes('verein')}>
								<span>Verein</span>
								<MdArrowDropDown
									className={`w-5 h-5 transition-transform duration-200 ${
										expandedSections.includes('verein') ? 'rotate-180' : ''
									}`}
								/>
							</button>
							{expandedSections.includes('verein') && (
								<div className='ml-4 space-y-1 animate-fade-in'>
									<Link
										href='/verein/chronik'
										className='block w-full p-3 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-sm text-base-content/80'
										onClick={closeMobileMenu}>
										Chronik
									</Link>
									<Link
										href='/verein/vorstand'
										className='block w-full p-3 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-sm text-base-content/80'
										onClick={closeMobileMenu}>
										Vorstand
									</Link>
								</div>
							)}
						</div>

						{/* Anträge */}
						<Link
							href='/antraege'
							className='block w-full p-4 text-left rounded-lg hover:bg-base-200 transition-colors duration-200 text-base font-medium'
							onClick={closeMobileMenu}>
							Anträge &amp; Formulare
						</Link>
					</nav>

					{/* Mobile Footer */}
					<div className='p-4 border-t border-base-300 bg-base-200'>
						<Link className='btn btn-primary w-full' href='/kontakt' onClick={closeMobileMenu}>
							Kontakt
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
