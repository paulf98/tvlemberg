export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='text-center prose mx-auto'>{children}</div>;
}
