import React from "react"
import "./styles.css"
import { IntlProvider } from "react-intl"
import Home from "./components/Home"

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

export default function App() {
  return (
    <IntlProvider
      locale={locale}
      defaultLocale="en"
      messages={messages}>
      <Home />
    </IntlProvider>
  )
}
