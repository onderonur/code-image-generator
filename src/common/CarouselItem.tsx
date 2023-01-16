type CarouselItemProps = React.PropsWithChildren;

export default function CarouselItem({ children }: CarouselItemProps) {
  return <div className="carousel-item">{children}</div>;
}
