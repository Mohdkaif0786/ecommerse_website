import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyState from './context/data/mystate.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyState>
    </Provider>
  </React.StrictMode>,
)
