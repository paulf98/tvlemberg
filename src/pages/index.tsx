import Image from 'next/image';
import Vereinscheck from '../../public/images/vereinscheck.jpg';
import HeimatLieben from '../../public/images/heimat-lieben-sparkasse.jpg';
import Yoga from '../../public/images/Yoga.jpg';
import DSA from '../../public/images/DSA.png';
import ZeltlagerPlakat from '../../public/images/Zeltlager23Plakat.jpg';
import CardVertical from '../components/CardVertical';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='prose mx-auto'>
			<h1 className='text-center mb-8'>Neuigkeiten</h1>
			<div className='flex flex-col items-center justify-center gap-8'>
			<CardVertical
					title='Zeltlager 2023'
					text={
						<>
							<p>Lagerfeuer - Nachtwanderung - Bastelarbeiten - Spiele u. v. m. warten auf Euch - für Kinder und Jugendliche ab 6 Jahren.</p>
							<p className='font-bold'>Mittwoch, 07. Juni bis Samstag, 10. Juni 2023 (Fronleichnam)</p>
							<Link  className='btn btn-primary' href='/veranstaltungen/zeltlager'>Zur Infoseite</Link>
						</>
					}
					image={ZeltlagerPlakat}
				/>
				<CardVertical
					title='Yoga für Schwangere'
					text={
						<>
							<p>Alle Trimester und Yogalevel sind Willkommen!</p>
							<p className='font-bold'>IMMER MONTAGS 17:15-18:15 UHR</p>
							<p>Infos und Anmeldung per WhatsApp 017684548496 oder E-Mail an isabellgross.mobile@gmail.com</p>
						</>
					}
					image={Yoga}
				/>
				<CardVertical
					title='Sportabzeichen'
					text={
						<>
							<p>Du willst das Sportabzeichen erwerben? Oder willst du dich nur ab und zu in geselliger Runde sportlich betätigen? Dann bist bei uns genau richtig.</p>
							<p className='font-bold'>Jeden Dienstag um 19 Uhr</p>
							<p>Das Alter ist egal - ob 18 oder 88 !!! Komm zum Schnuppertraining zur Sportabzeichengruppe des TV Lemberg.</p>
							<p> <span className='font-bold'>Kontakt: <br /></span> Volker Ringelspacher, Tel.: 06331-40472</p>
						</>
					}
					image={DSA}
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
					text={
						<p>
							Wir nehmen an dem Projekt Heimat lieben von der Sparkasse Südwestpfalz teil, um die Erneuerung und Reparatur unserer Sportgeräte zu finanzieren.
						</p>	
					}
					image={HeimatLieben}
					link='https://www.sparkasse-suedwestpfalz.de/de/home/ihre-sparkasse/heimat-lieben.html'
				/>
			</div>

			<div className='my-8 text-center'>
				<h2 className='text-2xl'>Facebook</h2>
				<iframe
					src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftv1891lemberg&width=325&height=400&small_header=false&adapt_container_width=true&&appId=1078104429767809'
					allowFullScreen={true}
					width='325'
					height='175'
					className='mx-auto align-center'
					allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
				></iframe>
			</div>
		</div>
	);
}
