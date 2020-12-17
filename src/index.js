import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

function loadLocaleData(locale) {
  switch (locale) {
    case 'ja':
      return import('./compiled-lang/ja.json')
    default:
      return import('./compiled-lang/en.json')
  }
}

const locale = 'ja'

const messages = loadLocaleData(locale)

const rootElement = document.getElementById("root")

ReactDOM.render(
  <React.StrictMode>
    <App locale={locale} messages={messages} />
  </React.StrictMode>,
  rootElement
)
