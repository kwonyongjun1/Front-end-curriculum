import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer'
import counter from './reducer/counter'
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const loggerMiddleWare = (store: any) => (next: any) => (action: any) =>{
  console.log("store", store);
  console.log("action", action);
  next(action);
}

const middleware = applyMiddleware(loggerMiddleWare);

const store = createStore(rootReducer, middleware);

const render = () => root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App 
        value={store.getState()}
        onIncrement={()=> store.dispatch({type:"INCREMENT"})}
        onDecrement={()=> store.dispatch({type:"DECREMENT"})}
      
      />
    </Provider>
  </React.StrictMode>
);
render();

store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
