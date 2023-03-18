import Image from 'next/image';
import Laufspass1 from '../../../public/images/laufspass1.jpg';
import Laufspass2 from '../../../public/images/laufspass2.jpg';

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
		</div>
	);
}
