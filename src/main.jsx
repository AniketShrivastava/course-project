import './index.css'

import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster/>
      </Provider>

    </BrowserRouter>
  
)
