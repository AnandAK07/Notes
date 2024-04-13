import {AppContextProvider} from './context/AppContext'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContext, AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </AppContextProvider>

)
