export function Image({
	src,
	webp_src,
	alt,
	className,
    imgClassName,
}: { src: string; webp_src?: string; alt: string; className?: string, imgClassName?: string}) {
	return (
        // <div >
		<picture className={className}>
			{webp_src && <source srcSet={webp_src} type="image/webp" />}
			<img src={src} alt={alt} className={imgClassName} />
		</picture>
        // </div>
	);
}
