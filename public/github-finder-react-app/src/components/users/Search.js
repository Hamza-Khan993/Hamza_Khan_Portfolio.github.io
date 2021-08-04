import React, { useState , useContext} from 'react'

import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = ( ) => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('')

    const {clearUsers} = githubContext
    const {setAlert} = alertContext
    

    //Enter value in search form
    const onChange = e => setText(e.target.value)
    //Submit value in Search
    const onSubmit = e => {
        e.preventDefault()
        if (text === "") {  
            setAlert('Please Enter Something', 'light')  
        } else {
            githubContext.searchUsers(text)
            setText('')
        }
       
    }
        // const { showClear, clearUsers} = this.props
        
    return (
        <div>
            <form onSubmit= {onSubmit} className="form">
                <input type="text" 
                        name="text" 
                        placeholder="Search GitHub Users" 
                        value={text}
                        onChange= {onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form> 
            {githubContext.users.length > 0 &&
            <button className="btn btn-light btn-block" onClick={clearUsers}>Clear Users</button> 
            } 
        </div>
    )
    
}


export default Search
