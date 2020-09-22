import React, {useContext, useState} from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const {searchUsers, users, clearUsers} = githubContext;

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    searchUsers(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group my-3">
        <input
          type="text"
          onChange={onChange}
          value={text}
          className="form-control"
          placeholder="Please enter username..."
          required
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </div>
      </div>
      {users.length > 0 && (
        <button
          type="button"
          className="btn btn-secondary btn-block my-3"
          onClick={clearUsers}
        >
          Clear users
        </button>
      )}
    </form>
  );
};

export default Search;
