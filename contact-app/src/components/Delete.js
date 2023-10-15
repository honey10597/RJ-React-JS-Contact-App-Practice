import React from 'react';
import { Link } from 'react-router-dom';

const Delete = () => {
    return (
        <div className='main'>
            <br />
            <br />
            <br />

            <h3>Are you sure you want to delete?</h3>
            <Link>
                <button>{"Delete"}</button>
            </Link>
        </div>
    )
}

export default Delete;
