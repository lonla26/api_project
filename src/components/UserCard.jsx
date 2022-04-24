import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
    return (
        <div style={{marginTop:'20PX', marginBottom:'20px'}}>
            <Card bg='light' border='primary' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                    <Card.Text>
                        {user.phone}
                    </Card.Text>
                    <Link to={`/user/${user.id}`} style={{textDecoration:'none', color:'white'}}><Button variant="primary">Infos</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard