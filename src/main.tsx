import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EditorContextProvider } from './context/EditorContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditorContextProvider>
        <App />
    </EditorContextProvider>
  </React.StrictMode>,
)
