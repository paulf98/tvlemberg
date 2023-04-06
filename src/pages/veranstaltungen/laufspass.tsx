import Image from 'next/image';
import Laufspass1 from '../../../public/images/Laufspass1.jpg';
import Laufspass2 from '../../../public/images/Laufspass2.jpg';

const PastResults = [
	{
		year: 2020,
		link: 'https://my.raceresult.com/149621/results?lang=de',
	},
	{
		year: 2019,
		link: 'https://my2.raceresult.com/96922/results?lang=de',
	},
	{
		year: 2018,
		link: 'http://my5.raceresult.com/96921/results?lang=de',
	},
	{
		year: 2017,
		link: 'http://my5.raceresult.com/54003/results?lang=de',
	},
	{
		year: 2016,
		link: 'http://my5.raceresult.com/48170/results?lang=de',
	},
	{
		year: 2015,
		link: 'http://my5.raceresult.com/34850/results?lang=de',
	},
	{
		year: 2014,
		link: 'http://my5.raceresult.com/24950/results?lang=de',
	},
	{
		year: 2013,
		link: 'http://my5.raceresult.com/15047/?lang=de',
	},
];

export default function Laufspass() {
	return (
		<div className='text-center prose mx-auto'>
			<h1 className='mb-8'>Wilkommen beim Lemberger Laufspass!</h1>
			<p>
				Nach einer zweijährigen Zwangspause laufen die Vorbereitungen zum 9.
				Lemberger Laufspass. Der TV Lemberg würde Dich gerne am 01.05. begrüßen
				und wünscht Dir eine erfolgreiche Teilnahme.
			</p>
			<a
				href={'http://my.raceresult.com/236854/'}
				target='_blank'
				className='btn btn-primary mb-8'
			>
				Zur Anmeldung bei Raceresult
			</a>
			<Image
				src={Laufspass1}
				alt='Laufspass'
				className='mx-auto my-4 shadow-md rounded-md border'
			/>
			<Image
				src={Laufspass2}
				alt='Laufspass'
				className='mx-auto my-4 shadow-md rounded-md border'
			/>
			<a download className='btn btn-primary' href='/assets/Laufspass2023.pdf'>
				Download als PDF
			</a>
			<h1 className='my-8'>Ergebnisse der vorherigen Läufe</h1>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					{/* head */}
					<thead>
						<tr>
							<th>Jahr</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						{PastResults.map((result) => (
							<tr key={result.year}>
								<th>{result.year}</th>
								<td>
									<a
										className='link link-primary'
										href={result.link}
										target={'_blank'}
									>
										Zu RaceResult
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
