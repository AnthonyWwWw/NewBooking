import { createRoot } from 'react-dom/client'
import { store } from './core/redux/store'
import { Provider } from 'react-redux'
import App from './model/app/App'
import './ui/css/nullStyle.css'

createRoot(document.getElementById('root')).render(<Provider store={store}><App/></Provider>)
