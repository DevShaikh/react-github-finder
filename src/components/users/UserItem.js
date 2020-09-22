import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = ({user}) => {
  const {avatar_url, login} = user;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
      <div className="card text-center mb-4 shadow">
        <img src={avatar_url} className="img-fluid" alt="" />
        <div className="card-body pt-0">
          <h4 className="mt-4">{login}</h4>
          <br />
          <Link className="btn btn-secondary" to={`/user/${login}`}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
