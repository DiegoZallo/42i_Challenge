
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store/store.js';
import axios from 'axios';

 axios.defaults.baseURL = "http://localhost:3001"; // LOCAL
// axios.defaults.baseURL = ""; // DEPLOY

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>

)
