import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './store/auth.jsx'
  import { ToastContainer} from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
  <StrictMode>
    <App />
     <ToastContainer
position="top-right"
autoClose={2500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
bodyClassName="toastBody"
/>
  </StrictMode>
  </AuthProvider>

)
