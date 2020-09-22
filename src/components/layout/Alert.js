import React, {useContext} from 'react';
import GithubContext from '../../context/github/githubContext';

const Alert = () => {
  const githubContext = useContext(GithubContext);

  const {alert} = githubContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} mt-3`}>
        <i className="fa fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};
export default Alert;
