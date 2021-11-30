import React from 'react';
import { useExperimental } from '@metromile-ebs/ebs-shared-ui-utils';
import './App.css';

const App = (props = {}) => {
  const { embedded = false, tenantState$ } = props;
  const [state, setState] = React.useState({ name: 'No Value' });

  React.useEffect(() => {
    if (tenantState$ && tenantState$.subscribe) {
      if (tenantState$ && tenantState$.subscribe) {
        tenantState$.subscribe({
          next: setState,
        });
      }
    }
  }, [tenantState$]);

  const showExperimental = useExperimental();
  const { name } = state;
  return (
    <div>
      mf-subapp1
      <h2>Embedded Mode: {embedded ? 'Yes' : 'No'}</h2>
      <h3>{showExperimental ? 'Experimental' : 'Not experimental'}</h3>
      <p>React version: {React.version}</p>
      <hr />
      <p>{name}</p>
      <hr />
      <h3>Props</h3>
      <ul>
        {Object.keys(props).map((key) => (
          <li key={key}>- {key}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
