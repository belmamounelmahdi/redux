import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reducers from './store/reducer'
import { createStore } from "redux"
import { Provider } from 'react-redux'


let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.
  __REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
