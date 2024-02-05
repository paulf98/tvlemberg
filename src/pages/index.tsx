import HeimatLieben from '../../public/images/heimat-lieben-sparkasse.jpg';
import Yoga from '../../public/images/Yoga.jpg';
import DSA from '../../public/images/DSA.png';
import Theater from '../../public/images/theater.jpg';
import TrainerGesucht from '../../public/images/trainer-gesucht.jpg';
import CardVertical from '../components/CardVertical';

export default function Home() {
	return (
		<div className='prose mx-auto'>
			<h1 className='text-center mb-8'>Neuigkeiten</h1>
			<div className='flex flex-col items-center justify-center gap-8'>
				{/* THEATER */}
				<CardVertical
					title='Theater beim TVL'
					text={
						<div>
							<h4>Onkel Hubbi wird&apos;s schon richten</h4>
							<p>
								15.03, 16.03, 22.03 und 23.03.2024 in der Karl-Stucky Halle
							</p>
							<p>
								<span className="font-bold">Eintritt 10€</span> <br />
								 Vorverkauf im Cafe Faass (Hauptstr. 31, Lemberg) oder <br />
								 telefonisch bei Michaela Gebhard unter 0173 35 60 33 7
							</p>
						</div>
					}
					image={Theater}
				/>
				<CardVertical
					title='Übungsleiter/in gesucht'
					text={
						<div>
							
							<ul>
								<li>
									Kinderturnen
								</li>
								<li>Kinder-Leichtathletik</li>
								<li>Geräteturnen weichlich</li>
								<li>etc</li>
							</ul>
							<p>Bei Interesse unter 0176 400 49 590 melden!</p>
						</div>
					}
					image={TrainerGesucht}
				/>

				{/* HEIMAT LIEBEN */}
				<div className='flex flex-col items-center justify-center gap-2'>
					<h2 className='mt-0'>Geschafft - Heimat Lieben </h2>
					<p className='text-center'>
						Der Turnverein Lemberg hat auch 2023 an der Aktion „Heimat lieben“
						der Sparkasse Südwestpfalz teilgenommen. Das Ziel wurde erreicht und
						wir können uns über den Zuschuss für unsere Sportgeräte freuen.{' '}
						<br />
						<br />
						Wir bedanken uns bei allen Unterstützern!
					</p>
					<CardVertical
						title='Projekt Heimat lieben'
						text={
							<p>
								Wir nahmen an dem Projekt Heimat lieben von der Sparkasse
								Südwestpfalz teil, um die Erneuerung und Reparatur unserer
								Sportgeräte zu finanzieren.
							</p>
						}
						image={HeimatLieben}
					/>
				</div>

				<CardVertical
					title='Yoga für Schwangere'
					text={
						<>
							<p>Alle Trimester und Yogalevel sind Willkommen!</p>
							<p className='font-bold'>IMMER MONTAGS 17:15-18:15 UHR</p>
							<p>
								Infos und Anmeldung per WhatsApp 017684548496 oder E-Mail an
								isabellgross.mobile@gmail.com
							</p>
						</>
					}
					image={Yoga}
				/>
				<CardVertical
					title='Sportabzeichen'
					text={
						<>
							<p>
								Du willst das Sportabzeichen erwerben? Oder willst du dich nur
								ab und zu in geselliger Runde sportlich betätigen? Dann bist bei
								uns genau richtig.
							</p>
							<p className='font-bold'>Jeden Dienstag um 19 Uhr</p>
							<p>
								Das Alter ist egal - ob 18 oder 88 !!! Komm zum
								Schnuppertraining zur Sportabzeichengruppe des TV Lemberg.
							</p>
							<p>
								<span className='font-bold'>
									Kontakt: <br />
								</span>
								Volker Ringelspacher, Tel.: 06331-40472
							</p>
						</>
					}
					image={DSA}
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
					allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
			</div>
		</div>
	);
}
