import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [waitingUser, setWaitingUser] = useState(true)
    const { id } = useParams();
    useEffect(() => {
        try {
            const getUser = async () => {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUser(res.data.find(el => el.id == id));
                setWaitingUser(false);
            }
            getUser();
        } catch (error) {
            console.log(error);
        }

    }, [id])

    return (
        <div style={{ marginTop: '20px' }}>
            {waitingUser ? (
                <Spinner animation="border" role="status" variant='primary'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                user && <div>
                    <h1>{user.name}</h1>
                    <h2>{user.username}</h2>
                    <h6>{user.email}</h6>
                    <h6>{user.phone}</h6>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Address</Card.Header>
                            <Card.Body>
                                <Card.Title>{user.address.city}</Card.Title>
                                <Card.Text>
                                    {user.address.street}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{user.address.suite}</ListGroupItem>
                                <ListGroupItem>{user.address.zipcode}</ListGroupItem>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Company</Card.Header>
                            <Card.Body>
                                <Card.Title>{user.company.name}</Card.Title>
                                <Card.Text>
                                    {user.company.catchPhrase}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{user.company.bs}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                    <Button style={{ marginTop: '20px' }}><a href={`https://${user.website}`} target="_blank" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>Visit my website</a></Button>
                </div>
            )}
            <div style={{ marginTop: '20px' }}>
                <Link to='/'><Button>Home</Button></Link>
            </div>
        </div>
    )
}

export default UserDetails