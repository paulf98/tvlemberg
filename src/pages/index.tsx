import Image from 'next/image';
import TVLPlakat from '../../public/images/plakat.jpg';
import Vereinscheck from '../../public/images/vereinscheck.jpg';

export default function Home() {
	return (
		<div className='prose mx-auto'>
			<h1 className='text-center mb-8'>Neuigkeiten</h1>
			<div className='flex flex-col items-center justify-center gap-8'>
				<div className='card lg:card-side bg-base-100 shadow-xl'>
					<Image
						src={TVLPlakat}
						alt='Veranstaltungsplakat'
						className='rounded-md object-cover m-0 max-w-xs'
						sizes='(max-width: 640px) 100vw, 640px'
						loading='lazy'
					/>
					<div className='card-body'>
						<h2 className='card-title'>Comedy Dinner</h2>
						<p>Am 22.04. in unserer Turnhalle.</p>
						<p>
							Das Comedy-Dinner ist ausverkauft. Es gibt eine Warteliste, falls
							Karten kurzfristig frei werden.
						</p>
					</div>
				</div>

				<div className='card bg-base-100 shadow-xl w-100'>
					<div className='card-body'>
						<h2 className='card-title'>Vereinscheck</h2>
						<p>
							Seit dem 24. Januar stellt der DOSB im Auftrag der Bundesregierung
							bundesweit 150.000 Sportvereinsschecks á 40€ zur Verfügung. Wir
							beteiligen uns gerne an dieser Aktion und nehmen ab sofort Eure
							Schecks entgegen!
						</p>
					</div>

					<Image
						src={Vereinscheck}
						alt='Vereinscheck'
						className='rounded-md object-cover m-0'
						loading='lazy'
					/>
				</div>
			</div>
		</div>
	);
}
