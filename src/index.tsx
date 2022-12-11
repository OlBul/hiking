import React from 'react'
import ReactDom from 'react-dom/client'
import App from './container/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
