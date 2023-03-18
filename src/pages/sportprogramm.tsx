import Image from 'next/image';
import SportprogrammImg from '../../public/images/Sportprogramm.jpg';

export default function Sportprogramm() {
	return (
		<div>
			<h1 className='text-3xl text-center mb-8 font-bold'>Sportprogramm</h1>
			<Image
				src={SportprogrammImg}
				alt='Sportprogramm'
				className='mx-auto my-4 shadow-md rounded-md border'
			/>
		</div>
	);
}
