import React from 'react';
import { useExperimental } from '@metromile-ebs/ebs-shared-ui-utils';
import './App.css';

const App = (props) => {
  const { embedded = false } = props;
  console.log('props', props);
  const showExperimental = useExperimental();
  return (
    <div>
      mf-subapp1
      <h2>Embedded Mode: {embedded ? 'Yes' : 'No'}</h2>
      <h3>{showExperimental ? 'Experimental' : 'Not experimental'}</h3>
      <p>React version: {React.version}</p>
    </div>
  );
};

export default App;
