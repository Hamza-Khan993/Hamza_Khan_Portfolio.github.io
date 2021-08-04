import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import User from './User'

const UserItem = ({user : {login, avatar_url , html_url}}) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}/>
            <h4>{login}</h4>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    )
}

UserItem.propTypes = {
    user : PropTypes.object.isRequired,
}



export default UserItem