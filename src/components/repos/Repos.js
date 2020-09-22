import React, {useContext} from 'react';
import RepoItem from '../repos/RepoItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const {repos} = githubContext;

  if (repos.length !== 0) {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
  } else {
    return (
      <div>
        <h5>No repositories found!</h5>
      </div>
    );
  }
};

export default Repos;
