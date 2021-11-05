import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = (props) => {
  const { container, standAlone } = props;
  ReactDOM.render(
    <App standAlone={standAlone} />,
    container
      ? container.querySelector('#root')
      : document.querySelector('#root'),
  );
};

const storeTest = (props) => {
  props.onGlobalStateChange(
    (value, prev) =>
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true,
  );
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
};

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export const bootstrap = async () => {
  console.log('[mf-subapp1] react app bootstrapped');
};

export const mount = async (props) => {
  const updatedProps = { ...props, standAlone: false };
  console.log('[mf-subapp1] props from main framework', props);
  storeTest(updatedProps);
  render(updatedProps);
};

export const unmount = async (props) => {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root'),
  );
};
