import Image from 'next/image';
import Yogakurs from '../../public/images/yogakurs.jpg';
import DAK from '../../public/images/dak.png';
import Theyson from '../../public/images/logo_theysohn.svg';
import Faass from '../../public/images/faass.png';
import Termine25 from '../../public/images/Termine25.jpg';
import { useState, useRef, useEffect } from 'react';

/**
 * Sidebar component that shows news
 * Is hidden on mobile, but content is accessible via bottom sheet
 */
export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [dragOffset, setDragOffset] = useState(0);
	const sheetRef = useRef<HTMLDivElement>(null);
	const startY = useRef(0);
	const currentY = useRef(0);

	const toggleSheet = () => {
		setIsOpen(!isOpen);
		setDragOffset(0);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setIsDragging(true);
		startY.current = e.touches[0].clientY;
		currentY.current = e.touches[0].clientY;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging) return;

		currentY.current = e.touches[0].clientY;
		const deltaY = currentY.current - startY.current;

		// Only allow downward dragging
		if (deltaY > 0) {
			setDragOffset(deltaY);
		}
	};

	const handleTouchEnd = () => {
		if (!isDragging) return;

		setIsDragging(false);

		// If dragged down more than 100px, close the sheet
		if (dragOffset > 100) {
			setIsOpen(false);
		}

		setDragOffset(0);
	};

	// Reset drag state when sheet opens/closes
	useEffect(() => {
		if (!isOpen) {
			setDragOffset(0);
			setIsDragging(false);
		}
	}, [isOpen]);

	return (
		<>
			{/* Desktop Sidebar */}
			<aside className='hidden lg:flex flex-col gap-8 w-min-32 max-w-xs min-h-screen p-8'>
				<h1 className='text-3xl font-bold text-center'>Aktuelles</h1>
				<a href={Termine25.src} target='_blank' className='hover:bg-base-200'>
					<Image
						className='shadow-xl rounded-md hover:bg-base-200'
						src={Termine25}
						alt='Termine 2025'
					/>
				</a>
				<Image className='shadow-xl rounded-md hover:bg-base-200' src={Yogakurs} alt='Yogakurs' />
				<h2 className='text-center text-xl font-bold'>Unsere Partner</h2>
				<a href={'https://www.dak.de/'} target='_blank' className='hover:bg-base-200'>
					<Image src={DAK} alt='DAK' />
				</a>
				<a
					href={'https://www.daniel-theysohn-stiftung.de/'}
					target='_blank'
					className='hover:bg-base-200'>
					<Image src={Theyson} alt='Daniel Theyson Stiftung' />
				</a>
				<a href={'https://cafe-faass.de/'} target='_blank' className='hover:bg-base-200 mx-auto'>
					<Image src={Faass} alt='Cafe Faass' />
				</a>
			</aside>

			{/* Mobile button */}
			<button
				onClick={toggleSheet}
				className='lg:hidden fixed bottom-6 right-6 z-40 bg-primary text-primary-content rounded-full p-4 shadow-lg hover:bg-primary-focus transition-all duration-200 hover:scale-110 active:scale-95'
				aria-label='Aktuelles öffnen'>
				<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
			</button>

			{/* Mobile sheet - only shows when isOpen is true */}
			{isOpen && (
				<>
					{/* Backdrop */}
					<div
						className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50'
						onClick={toggleSheet}
					/>

					{/* Bottom Sheet */}
					<div
						ref={sheetRef}
						className='lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-base-100 rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto'
						style={{
							transform: `translateY(${dragOffset}px)`,
							transition: isDragging ? 'none' : 'transform 0.2s ease-out',
						}}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}>
						{/* Handle */}
						<div className='flex justify-center pt-3 pb-2'>
							<div className='w-12 h-1 bg-base-300 rounded-full'></div>
						</div>

						{/* Content */}
						<div className='px-6 pb-8'>
							<h1 className='text-2xl font-bold text-center mb-6'>Aktuelles</h1>

							{/* Termine 2025 */}
							<div className='mb-6'>
								<a
									href={Termine25.src}
									target='_blank'
									className='block hover:bg-base-200 rounded-lg p-2 transition-colors duration-200'>
									<Image
										className='shadow-lg rounded-md w-full'
										src={Termine25}
										alt='Termine 2025'
									/>
								</a>
							</div>

							{/* Yogakurs */}
							<div className='mb-6'>
								<a
									href={Yogakurs.src}
									target='_blank'
									className='block hover:bg-base-200 rounded-lg p-2 transition-colors duration-200'>
									<Image className='shadow-lg rounded-md w-full' src={Yogakurs} alt='Yogakurs' />
								</a>
							</div>

							{/* Partner Section */}
							<h2 className='text-center text-xl font-bold mb-4'>Unsere Partner</h2>
							<div className='grid grid-cols-3 gap-4'>
								<a
									href={'https://www.dak.de/'}
									target='_blank'
									className='hover:bg-base-200 rounded-lg p-2 text-center transition-colors duration-200'>
									<Image src={DAK} alt='DAK' className='mx-auto' />
								</a>
								<a
									href={'https://www.daniel-theysohn-stiftung.de/'}
									target='_blank'
									className='hover:bg-base-200 rounded-lg p-2 text-center transition-colors duration-200'>
									<Image src={Theyson} alt='Daniel Theyson Stiftung' className='mx-auto' />
								</a>
								<a
									href={'https://cafe-faass.de/'}
									target='_blank'
									className='hover:bg-primary-focus rounded-lg p-2 text-center transition-colors duration-200'>
									<Image src={Faass} alt='Cafe Faass' className='mx-auto' />
								</a>
							</div>

							{/* Close Button */}
							<button
								onClick={toggleSheet}
								className='mt-6 w-full btn btn-primary hover:btn-primary-focus transition-colors duration-200'>
								Schließen
							</button>
						</div>
					</div>
				</>
			)}
		</>
	);
}
