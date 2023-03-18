import Image from 'next/image';
import Laufspass1 from '../../../public/images/laufspass1.jpg';
import Laufspass2 from '../../../public/images/laufspass2.jpg';

export default function Laufspass() {
	return (
		<div>
			<Image src={Laufspass1} alt='Laufspass' className="mx-auto my-4 shadow-md rounded-md border" />
			<Image src={Laufspass2} alt='Laufspass' className="mx-auto my-4 shadow-md rounded-md border" />
		</div>
	);
}
