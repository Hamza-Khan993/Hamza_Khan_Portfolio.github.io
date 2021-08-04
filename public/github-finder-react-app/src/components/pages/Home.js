import React , { Fragment } from 'react'
import Search from '../users/Search'
import User from '../users/User'

const Home = () => {
    return (
        <div>
            <Fragment>
                <Search />
                <User />
            </Fragment>
        </div>
    )
}

export default Home
