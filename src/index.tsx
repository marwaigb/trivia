import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { useAppDispatch } from './store/hooks';
import { fetchTriviaCollectionAsync } from './store/triviaSlice';

const AppWithRouting: React.FC = () => {

const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTriviaCollectionAsync());
	}, [dispatch]);

   return (
     <App/>
   );
};

ReactDOM.render(
  <Provider store={store}>
    <AppWithRouting />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
