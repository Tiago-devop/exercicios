import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user ={
    firstName: 'Tiago',
    lastName: 'Vasconcelos'
}

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
)

export default element