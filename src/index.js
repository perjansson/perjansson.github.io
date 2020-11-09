import React from 'react'
import ReactDOM from 'react-dom'
import smoothscroll from 'smoothscroll-polyfill'

import App from './App'
import * as serviceWorker from './serviceWorker'

smoothscroll.polyfill()

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
