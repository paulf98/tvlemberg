import Yoga from '../../public/images/Yoga.jpg';
import DSA from '../../public/images/DSA.png';
import TrainerGesucht from '../../public/images/trainer-gesucht.jpg';
import HeimatLieben from '../../public/images/heimat-lieben24.png';
import Pfalzmeister from '../../public/images/pfalzmeister.png';
import Turnen from '../../public/images/Gerätturnen.png';
import Sportgelaende from '../../public/images/sportgelaende.jpg';
import Kerwe from '../../public/images/Kerweplakat2025.png';
import CardVertical from '../components/CardVertical';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='prose mx-auto'>
			<h1 className='text-center mb-8'>Neuigkeiten</h1>
			<div className='flex flex-col items-center justify-center gap-8'>
				<div className='card bg-base-100 shadow-xl p-8'>
					<h2>Vier Titel bei den Rheinland-Pfalzmeisterschaften</h2>
					<p className='text-justify'>
						Die Leichtathletik-Saison 2024 geht in die Endphase. Von rund 50 regionalen und
						überregionalen Wettkämpfen kamen unsere Sportler mit zahlreichen guten Platzierungen und
						Podestplätzen zurück. Ein Highlight bildeten am 10.11.2024 in Laubach/Hunsrück die
						Rheinland- Pfalzmeisterschaften im Crosslauf, wo gleich vier Leichtathleten eine
						Goldmedaille in Empfang nahmen. Die 12jährige Emilia Becker wurde in 5:39 Minuten
						erstmals Rheinland-Pfalzmeisterin im Crosslauf. Nach 1540 Metern hatte Emilia zehn
						Sekunden Vorsprung auf die W12-Zweitplatzierte und ließ zudem 20 Mädchen der
						Altersklasse U14 hinter sich. Mit einer Zeit von 16:01 Minuten ist Paula Franz neue
						Landesmeisterin der weiblichen Jugend U20. Rheinland-Pfalzmeister auf der
						9050-Meter-Langdistanz wurde Alexander Köhler. Von Beginn an setzte sich der 27-Jährige
						an die Spitze des Läuferfeldes. Nur in der ersten von fünf Runden konnte Verfolger
						Martin Müller (LG Meulenwald Föhren) mithalten und gratulierte Alexander für den
						Titelgewinn nach 32:11 Minuten im Ziel. Den vierten Titel bei den
						Rheinland-Pfalzmeisterschaften für den TV Lemberg steuerte Susanne Meyer bei, die in
						38:14 Minuten die Frauenwertung gewann. Drei Bronzemedaillen von Ole Schöndorf (Jugend
						M15), Sophie Meyer (Jugend W14) und die U16-Mannschaft in der Besetzung Fredrik Arnold,
						David Bauer und Ole Schöndorf komplettierten die Medaillensammlung.
					</p>
					<Image src={Pfalzmeister} alt='Pfalzmeister Läufer' className='rounded-md ' />
				</div>
				<div className='card bg-base-100 shadow-xl p-8'>
					<h2>Pfalzmeister mit großem Vorsprung</h2>
					<p className='text-justify'>
						Auf einen goldenen Herbst blicken die Gerätturnerinnen. Bei den Pfalz-Meisterschaften am
						29.09.2024 in Bad Dürkheim erturnten die beiden TVL-Teams zwei Medaillensätze.
						Mannschaftsgold ging an die Turnerinnen der{' '}
						<span className='whitespace-nowrap'>AK-Stufen 7-10</span>. Nach ihrem sehr guten Auswahl
						Pflicht- Vierkampf mit 164,10 Punkten hatten Charlotte Adler, Maëlle Burkhart, Katharina
						Nussbaum, Ksenya Varban und Marli Goldtooth über acht Punkte Vorsprung auf den
						Zweitplatzierten, den TV Erlenbach. Im Auswahl Pflicht-Vierkampf AK7 erreichten die
						TVL-Turnerinnen Mila Bartonneck, Michele Bender, Elsa Engermann, Karter Goss, Za’Naiya
						Hines, Emma Scheidel und Emma Wafzig mit 143,50 Punkten den dritten Platz, hinter der
						TSG Haßloch und dem TV Wörth.
					</p>
					<Image src={Turnen} alt='Geräteturnerinnen' className='rounded-md' />
				</div>
				{/* <CardVertical
					title='Zeltlager 2024'
					text={
						<div>
							<p className='font-bold'>
								Von 29.05.24 01.06.24 auf dem Turngelände in Lemberg
							</p>
							<p>
								Lagerfeuer - Nachtwanderung - Bastelarbeiten - Spiele u. v. m.
								warten auf Euch.
							</p>
						</div>
					}
					image={ZeltlagerPlakat}
				/> */}
				{/* 
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
				/> */}
				{/* <CardVertical
					title='3. TVL Tour'
					text={
						<div>
							<p className='font-bold'>Am 01.05 von 10:00 bis 11:00 Uhr</p>
							<p>
								Start an der Turnhalle. Strecke ist Kinderwagentauglich. Nach
								der Tour erwartet euch das Spielmobil sowie Kartoffelsuppe,
								Kaffee & Kuchen und vieles mehr.
							</p>
						</div>
					}
					image={TVLTour}
				/> */}
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
								Du willst das Sportabzeichen erwerben? Oder willst du dich nur ab und zu in
								geselliger Runde sportlich betätigen? Dann bist bei uns genau richtig.
							</p>
							<p className='font-bold'>Jeden Dienstag um 19 Uhr</p>
							<p>
								Das Alter ist egal - ob 18 oder 88 !!! Komm zum Schnuppertraining zur
								Sportabzeichengruppe des TV Lemberg.
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
