import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store.js'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)