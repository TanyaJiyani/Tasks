import React from 'react';
import Card from 'react-bootstrap/Card'

export default function CustomCard({ title }) {
    if (title === "")
        throw new Error("Oops !! Title not found")
    return (
        <Card border='primary' style={{ margin: '1rem' }}>
            <Card.Body>{title}</Card.Body>
        </Card>
    )
}
