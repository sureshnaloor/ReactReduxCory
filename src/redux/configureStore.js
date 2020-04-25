import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutbleStateInvariant from 'redux-immutable-state-invariant';
// above crazy middleware will warn if state is directly mutated
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutbleStateInvariant()))
  );
}
