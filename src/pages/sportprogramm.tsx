import Image from 'next/image';
import SportprogrammImg from '../../public/images/Sportprogramm.jpg';

export default function Sportprogramm() {
	return (
		<div className='prose text-center mx-auto'>
			<h1 className='mb-8'>Sportprogramm</h1>
			<Image
				src={SportprogrammImg}
				alt='Sportprogramm'
				className='mx-auto my-4 shadow-md rounded-md border'
			/>
		</div>
	);
}
