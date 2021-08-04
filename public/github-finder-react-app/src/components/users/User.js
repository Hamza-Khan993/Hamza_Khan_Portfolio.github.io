import React , {useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'


const User = () => {
    const githubContext = useContext(GithubContext)

    const { users, loading} = githubContext
    if (loading) return <Spinner/>;
       
    return  <div className="grid-3 text-center">
              {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>

} 
        

export default User