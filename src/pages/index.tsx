import Yoga from '../../public/images/Yoga.jpg';
import DSA from '../../public/images/DSA.png';
import TrainerGesucht from '../../public/images/trainer-gesucht.jpg';
import Comedy from '../../public/images/comedy.jpg';
import Trainerausbildung from '../../public/images/trainerausbildung.jpg';
import Sppuelmaschine from '../../public/images/spuelmaschine.jpg';
import CardVertical from '../components/CardVertical';
import Card from '../components/Card';

export default function Home() {
	return (
		<div className='prose mx-auto'>
			<h1 className='text-center mb-8'>Neuigkeiten</h1>
			<div className='flex flex-col items-center justify-center gap-8'>
				<div>
					<h2 className='text-center'>Heimat lieben 2024</h2>
					<p className='text-center'>
						Aktuell haben wir für zwei Projekte bei der Heimat lieben Aktion der
						Sparkasse Südwestpfalz um Hilfe gebeten.
					</p>
					<div className='flex flex-col items-center md:items-start md:flex-row gap-8 py-8'>
						<Card
							title='Jugend - Unterstützung der Trainerausbildung'
							text={
								<p>
									Ein fachlich lizenzierter Übungsleiter ermöglicht ein
									sportart-spezifisches und leistungsorientiertes Training. Um
									die Qualifizierung für unsere Übungsleiter zu zahlen,
									benötigen wir Eure Unterstützung.
								</p>
							}
							image={Trainerausbildung}
							link='https://www.heimat-lieben.de/project/unterstuetzung-der-trainerausbildung/'
							linkText='Zur Aktion'
						/>
						<Card
							title='Neue Gastro-Spülmaschine'
							text={
								<p>
									Unsere Gastro-Spülmaschine ist in die Jahre gekommen und soll
									repariert werden, da wir sie brauchen, um eine Vielzahl von
									Events zu veranstalten.
								</p>
							}
							image={Sppuelmaschine}
							link='https://www.heimat-lieben.de/project/neue-spuelmaschine/'
							linkText='Zur Aktion'
						/>
					</div>
				</div>

				<CardVertical
					title='Comedy Dinner'
					text={
						<div>
							<p className='font-bold'>
								Am 27.04.24 ab 19:30 Uhr (Einlass 17:30 Uhr)
							</p>
							<p>
								Vorverkauf Di + Do 18-20 Uhr in unserer Turnhalle
								Fischweiherstraße 29, oder Tel. Marion Becker 0175 / 3834517
							</p>
						</div>
					}
					image={Comedy}
				/>

				<CardVertical
					title='Übungsleiter/in gesucht'
					text={
						<div>
							<ul>
								<li>Kinderturnen</li>
								<li>Kinder-Leichtathletik</li>
								<li>Geräteturnen weiblich</li>
								<li>etc</li>
							</ul>
							<p>Bei Interesse unter 0176 400 49 590 melden!</p>
						</div>
					}
					image={TrainerGesucht}
				/>

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
