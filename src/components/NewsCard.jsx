import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function NewsCard({ post }) {
  // console.log(post);
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={`https://via.placeholder.com/600x300.png`} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card content.</Card.Text>
        <Link href={post.path} passHref>
          <a className="btn btn-primary btn-sm">Ver mas</a>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
