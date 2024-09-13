import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const BadgeCard = ({ name, org, Details, images }) => {
    return (
        <section className="contact">
            <div>
                <Card style={{ width: '18rem', height: '20rem' }}>
                    <Card.Img variant="top" src={images} style={{ width: '10rem', height: '10rem' }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {Details}
                        </Card.Text>
                        <h1 variant="primary">{org}</h1>
                    </Card.Body>
                </Card>
            </div>
        </section>

    )
}
export default BadgeCard
