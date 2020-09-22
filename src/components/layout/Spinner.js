import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        className="img-fluid position-absolute mx-auto"
        src={spinner}
        alt=""
        style={{left: '0', right: '0', top: '25%'}}
      />
    </Fragment>
  );
};
export default Spinner;
