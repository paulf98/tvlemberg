import Image, { StaticImageData } from 'next/image';

export type CardVerticalProps = {
	title: string;
	text: React.ReactNode;
	image: StaticImageData;
	link?: string;
	linkText?: string;
};

export default function Card({
	title,
	text,
	image,
	link,
	linkText,
}: CardVerticalProps) {
	return (
		<div className='card bg-base-100 shadow-xl max-w-xs'>
			<Image
				src={image.src}
				alt={title}
				width={image.width}
				height={image.height}
				className='rounded-md object-contain m-0 max-w-xs mx-auto'
				sizes='(max-width: 640px) 100vw, 640px'
				loading='lazy'
			/>
			<div className='card-body'>
				<h2 className='card-title mt-0'>{title}</h2>
				{text}
				{link && (
					<a
						className='btn btn-primary'
						href={link}
						target='_blank'
						rel='noreferrer'>
						{linkText || 'Zur Aktion'}
					</a>
				)}
			</div>
		</div>
	);
}
