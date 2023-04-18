import Image, { StaticImageData } from 'next/image';

export type CardVerticalProps = {
	title: string;
	text: React.ReactNode;
	image: StaticImageData;
	link?: string;
};

export default function CardVertical({
	title,
	text,
	image,
	link,
}: CardVerticalProps) {
	return (
		<div className='card lg:card-side bg-base-100 shadow-xl'>
			<Image
				src={image.src}
				alt={title}
                width={image.width}
                height={image.height}
				className='rounded-md object-cover m-0 max-w-xs md:max-w-sm mx-auto'
				sizes='(max-width: 640px) 100vw, 640px'
				loading='lazy'
			/>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{text}</p>
				{link && (
					<a
						className='btn btn-primary'
						href={link}
						target='_blank'
						rel='noreferrer'
					>
						Zur Aktion
					</a>
				)}
			</div>
		</div>
	);
}
