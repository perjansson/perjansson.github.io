import React from 'react'
import ReactDOM from 'react-dom'
import smoothscroll from 'smoothscroll-polyfill'

import App from './App'
import * as serviceWorker from './serviceWorker'

smoothscroll.polyfill()

// Initialize theme from local storage or default to dark
document.documentElement.setAttribute(
  'data-theme',
  localStorage.getItem('theme') || 'dark'
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register({
  onUpdate: registration => {
    const waitingServiceWorker = registration.waiting

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', event => {
        if (event.target.state === 'activated') {
          window.location.reload()
        }
      })
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' })
    }
  },
})
