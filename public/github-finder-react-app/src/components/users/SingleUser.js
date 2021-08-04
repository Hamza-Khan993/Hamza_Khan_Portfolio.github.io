// import React, {Fragment, useEffect, useContext } from 'react'
// import Spinner from '../layout/Spinner'
// import Repos from '../repos/Repos';
// import { Link } from 'react-router-dom';
// import GithubContext from '../../context/github/githubContext'


// const SingleUser = ({ match}) => { 
//     const githubContext = useContext(GithubContext)
//     const {user, loading, getUser, getRepos, repos } = githubContext

//     useEffect(() => {
//         getUser(match.params.login);
//         getRepos(match.params.login);
//         // eslint-disable-next-line
//     }, []) ;
    
 
//     const {
//         name,
//         login,
//         html_url,
//         avatar_url,
//         followers,
//         following,
//         public_repos,
//         public_gists,
//         company,
//         bio,
//         location,
//         blog,
//         hireable} = user;
    
//     if (loading) return <Spinner />;
//         return <Fragment>
//                     <Link to="/" className="btn btn-light">
//                     Back to Search</Link>
//                     Hireable : {" "}
//                     {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/> }
//                     <div className="card grid-2">
//                         <div className="all-center">
//                             <img src={avatar_url} alt="Profile" className="round-img" style={{width:"200px"}}/>
//                             <h1>{name}</h1>
//                             Location: {location}
//                         </div>
//                         <div>
//                             {bio && <Fragment>
//                                 <h2>Bio</h2>
//                                 <p>{bio}</p>
//                                 </Fragment>}
//                             <a href={html_url} className="btn btn-dark my-1" rel="noreferrer" target="_blank">Visit GitHub Profile</a>
//                             <ul>
//                                 <li className="my-1">
//                                     {login && <Fragment>
//                                         <strong style= {{color:"red"}} >Username : </strong>{login}</Fragment>}
//                                 </li>
//                                 <li>
//                                     {blog && <Fragment>
//                                         <strong style= {{color:"blue"}} >Website :  
//                                         <a href={blog}> {blog}</a></strong></Fragment>}
//                                 </li>
//                                 <li className='my-1'>
//                                     {company && <Fragment>
//                                         <strong>Company: </strong>{company}</Fragment>}
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="card text-center">
//                         <div className="badge badge-primary mx-1">
//                             Followers: {followers}
//                         </div>
//                         <div className="badge badge-dark mx-1">
//                             Following : {following}
//                         </div>
//                         <div className="badge badge-success mx-1">
//                             Public Gist : {public_gists}
//                         </div>
//                         <div className="badge badge-light mx-1">
//                             Public Repos : {public_repos}
//                         </div>
//                     </div>
//                     <Repos repos={repos} />

//                 </Fragment>
    

// }



// export default SingleUser

import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;