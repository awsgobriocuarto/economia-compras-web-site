import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

// import moment from 'moment';

export default function PostCardPlaceholder() {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-3">
        <Card className="">
          <Card.Img variant="top" src="https://via.placeholder.com/600x300.png" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="dark" xs={4} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
