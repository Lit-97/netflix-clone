'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from '@/redux/reducers';

function makeStore() {
  return createStore(reducers, applyMiddleware(thunk));
}

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
