import React from "react"
import "./styles.css"
import { IntlProvider } from "react-intl"
import Home from "./components/Home"

export default function App(props) {
  return (
    <IntlProvider
      locale={props.locale}
      defaultLocale="en"
      messages={props.messages}>
      <Home />
    </IntlProvider>
  )
}
