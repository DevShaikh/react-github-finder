import React from 'react';

const RepoItem = ({repo}) => {
  const {html_url, name, updated_at} = repo;
  const dd = new Date(updated_at).getDate();
  const mm = new Date(updated_at).getMonth();
  const yy = new Date(updated_at).getFullYear();
  return (
    <div className="card shadow-sm mb-2">
      <div className="card-body py-3 d-flex justify-content-between">
        <h5 className="m-0">
          <a
            className="text-primary"
            href={html_url}
            style={{textDecoration: 'none'}}
          >
            {name}
          </a>
        </h5>
        <p className="justify-content-end m-0">
          <b>Updated at:&nbsp;&nbsp;</b>
          {dd < 10 ? `0${dd}` : dd}-{mm < 10 ? `0${mm}` : mm}-
          {yy < 10 ? `0${yy}` : yy}
        </p>
      </div>
    </div>
  );
};
export default RepoItem;
