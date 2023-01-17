import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardBootstrap({title = "Gatito", url, text}) {
    return (
    <Card style={{ width: "18rem" }}>
        <Card.Img
            variant="top"
            src={url}
        />

        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
            <Button variant="warning">Ver Gatito</Button>
        </Card.Body>
    </Card>
)};

export default CardBootstrap;