import React from 'react'
import { Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

const UserList = ({ data, waiting }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop:'20px' }}>
            {waiting ? (
                <Spinner animation="border" role="status" variant='primary'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                data && React.Children.toArray(data.map(user => <UserCard user={user} />))
            )}
        </div>
    )
}

export default UserList