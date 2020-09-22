import React, {useEffect, Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const User = ({match}) => {
  const githubContext = useContext(GithubContext);

  const {
    getSingleUser,
    getSingleUserRepos,
    user,
    repos,
    loading,
  } = githubContext;

  useEffect(() => {
    getSingleUser(match.params.login);
    getSingleUserRepos(match.params.login);
    /* eslint-disable-next-line */
  }, []);

  const {
    avatar_url,
    login,
    name,
    location,
    bio,
    company,
    website,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className="mb-4">
          <Link to="/" className="btn btn-secondary px-3 mr-3">
            <i className="fa fa-arrow-left"></i> Back
          </Link>
          <b>Hireable: </b>{' '}
          {hireable ? (
            <i className="fa fa-check text-success"></i>
          ) : (
            <i className="fa fa-times-circle text-danger"></i>
          )}
        </div>
        <div className="card shadow text-center mb-4">
          <div className="card-body mt-4">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <img
                  className="img-fluid rounded-circle"
                  src={avatar_url}
                  alt=""
                  style={{width: '70%'}}
                />
                <br />
                <h3 className="mt-4">{name}</h3>
                {location !== null ? (
                  <p>
                    <b>Location: </b>
                    {location}
                  </p>
                ) : (
                  <p>
                    <b>Location: </b>
                    Unknown
                  </p>
                )}
              </div>
              <div className="col-lg-8 col-md-7 my-auto text-left">
                <h4 className="mb-2">Bio:</h4>
                <p>{bio}</p>
                <p className="mb-2">
                  <strong>Username: </strong>
                  {login}
                </p>
                {company && (
                  <p className="mb-2">
                    <strong>Company: </strong>
                    {company}
                  </p>
                )}
                {website && (
                  <p className="mb-2">
                    <strong>Website: </strong>
                    {website}
                  </p>
                )}
                <a
                  href={html_url}
                  className="btn btn-secondary mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="badge badge-primary mx-1 py-1 px-2">
              Followers: {followers}
            </div>
            <div className="badge badge-info mx-1 py-1 px-2">
              Following: {following}
            </div>
            <div className="badge badge-dark mx-1 py-1 px-2">
              Public repos: {public_repos}
            </div>
            <div className="badge badge-secondary mx-1 py-1 px-2">
              Public gists: {public_gists}
            </div>
          </div>
        </div>
        <br />
        <h3 className="mb-3">Latest Repositories:</h3>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};
export default User;
