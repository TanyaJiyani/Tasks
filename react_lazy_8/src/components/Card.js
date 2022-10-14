import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function WithHeaderStyledExample({ data }) {
    return (
        <Card>
            <Card.Header as="h5">{data.name}</Card.Header>
            <Card.Body>
                <Card.Title>{data.content}</Card.Title>
                <Link to={data.path}> <Button variant="outline-primary">Click for more</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default WithHeaderStyledExample;