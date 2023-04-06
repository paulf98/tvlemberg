import Image from 'next/image';
import TVLPlakat from '../../public/images/plakat.jpg';
import Vereinscheck from '../../public/images/vereinscheck.jpg';
import HeimatLieben from '../../public/images/heimat-lieben-sparkasse.jpg';

export default function Home() {
	return (
		<div className='prose mx-auto'>
			<h1 className='text-center mb-8'>Neuigkeiten</h1>
			<div className='flex flex-col items-center justify-center gap-8'>
				<div className='card lg:card-side bg-base-100 shadow-xl'>
					<Image
						src={TVLPlakat}
						alt='Veranstaltungsplakat'
						className='rounded-md object-cover m-0 max-w-xs md:max-w-sm mx-auto'
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

				{/* HEIMAT LIEBEN */}
				<div className='card lg:card-side bg-base-100 shadow-xl'>
					<Image
						src={HeimatLieben}
						alt='Sparkasse Heimat lieben'
						className='rounded-md object-cover m-0 max-w-xs md:max-w-sm mx-auto'
						sizes='(max-width: 640px) 100vw, 640px'
						loading='lazy'
					/>
					<div className='card-body'>
						<h2 className='card-title'>Projekt Heimat lieben</h2>
						<p>
							Wir nehmen an dem Projekt Heimat lieben von der Sparkasse
							Südwestpfalz teil, um die Erneuerung und Reparatur unserer
							Sportgeräte zu finanzieren.
						</p>
						<a
							className='btn btn-primary'
							href='https://www.sparkasse-suedwestpfalz.de/de/home/ihre-sparkasse/heimat-lieben.html'
							target='_blank'
							rel='noreferrer'
						>
							Zur Aktion
						</a>
					</div>
				</div>
			</div>

			<div className='my-8 text-center'>
				<h2 className='text-2xl'>Facebook</h2>
				<iframe
					src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftv1891lemberg&tabs=timeline&width=325&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1078104429767809'
					allowFullScreen={true}
					width='325'
					height='400'
					className='mx-auto align-center'
					allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
				></iframe>
			</div>
		</div>
	);
}
