import Image from 'next/image';
import TVLPlakat from '../../public/images/plakat.jpg';
import Vereinscheck from '../../public/images/vereinscheck.jpg';
import HeimatLieben from '../../public/images/heimat-lieben-sparkasse.jpg';
import TVLTour from '../../public/images/tvl-tour.jpeg';
import CardVertical from '../components/CardVertical';

export default function Home() {
	return (
		<div className='prose mx-auto'>
			<h1 className='text-center mb-8'>Neuigkeiten</h1>
			<div className='flex flex-col items-center justify-center gap-8'>
				<CardVertical
					title='2. TVL Tour'
					text={
						<>
							<p>Der etwas andere Wanderspaß am 01. Mai!</p>
							<p className='font-bold'>Start von 10 - 11 Uhr am TVL</p>
							<p>
								Es erwarten euch Bewegungsaufgaben und Fragen rund um den Wald.
							</p>
							<p>
								Ab 12:00 Uhr gibt es Kartoffelsuppe, Kaffe, Kuchen und vieles
								mehr.
							</p>
						</>
					}
					image={TVLTour}
				/>
				<CardVertical
					title='Comedy Dinner'
					text={
						<>
							<p>Am 22.04. in unserer Turnhalle.</p>
							<p>
								Das Comedy-Dinner ist ausverkauft. Es gibt eine Warteliste,
								falls Karten kurzfristig frei werden.
							</p>
						</>
					}
					image={TVLPlakat}
				/>
				
				<div className='card bg-base-100 shadow-xl w-100'>
					<div className='card-body'>
						<h2 className='card-title'>Vereinscheck</h2>
						<p>
							Seit dem 24. Januar stellt der DOSB im Auftrag der Bundesregierung
							bundesweit 150.000 Sportvereinsschecks á 40€ zur Verfügung. Wir
							beteiligen uns gerne an dieser Aktion und nehmen ab sofort Eure
							Schecks entgegen!
						</p>
						<a
							className='btn btn-primary'
							target={'_blank'}
							rel='noreferrer'
							href='https://foerderportal.dosb.de/gutscheinaktion/sportvereinsscheck/'
						>
							Zur Aktion
						</a>
					</div>

					<Image
						src={Vereinscheck}
						alt='Vereinscheck'
						className='rounded-md object-cover m-0'
						loading='lazy'
					/>
				</div>

				{/* HEIMAT LIEBEN */}
				<CardVertical
					title='Projekt Heimat lieben'
					text='Wir nehmen an dem Projekt Heimat lieben von der Sparkasse Südwestpfalz teil, um die Erneuerung und Reparatur unserer Sportgeräte zu finanzieren.'
					image={HeimatLieben}
					link='https://www.sparkasse-suedwestpfalz.de/de/home/ihre-sparkasse/heimat-lieben.html'
				/>
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
