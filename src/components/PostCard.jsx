import Card from 'react-bootstrap/Card';
import Link from 'next/link';

// import moment from 'moment';

export default function PostCard({ post }) {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-3">
        <Card className="">
          <Card.Img variant="top" src={post.main_picture.small} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.excerpt}</Card.Text>
            <Link href={`/novedades/${post.slug}?id=${post.id}`} passHref>
              <a href="replace" className="btn btn-dark btn-sm text-white">
                Ver más
              </a>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
