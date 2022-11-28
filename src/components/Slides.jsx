import { useSlides } from 'hooks/useSlides';
import Link from 'next/link';
import { Placeholder } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  const { slides, loading } = useSlides();
  // console.log(slides);
  return (
    <>
      {loading ? (
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://via.placeholder.com/1920x500.png" alt="First slide" className="carousel-img placeholder" />
            <Placeholder as={Carousel.Caption} animation="glow">
              <h3>
                <Placeholder xs={4} />
              </h3>
              <p className="text-dark">
                <Placeholder variant="gray" xs={7} />
              </p>
              <Placeholder.Button variant="primary" xs={1} />
            </Placeholder>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel>
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <img className="d-block w-100" src={slide.file} alt={slide.title} className="carousel-img" />
              <Carousel.Caption>
                <h3 className="text-white">{slide.title}</h3>
                <p>{slide.summary}</p>
                <Link href="/normativa">
                  <a className="btn btn-primary mt-1 mb-3">Ver más</a>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default Slides;
