import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ArtCard(props) {
  console.log.props
  return props.show ? (
    <>
      <Card
        style={{
          maxWidth: 300,
          minWidth: 300,
          minHeight: 500,
          margin: 5,
          display: "flex",
        }}
      >
        <Card.Img variant="top" src={props.url} style={{ maxWidth: 300 }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description} + {props.categoryIds}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  ) : null;
}
