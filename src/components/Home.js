import React from "react"
import { FormattedMessage, useIntl, injectIntl } from "react-intl"

class PasswordChangeWithIntl extends React.Component {
  render() {
    const { intl } = this.props
    return (
      <li>
        <input
          placeholder={intl.formatMessage({
            defaultMessage: 'New Password',
            description: 'placeholder text',
          })}
        />
        <input
          placeholder={intl.formatMessage({
            id: 'explicit-id',
            defaultMessage: 'Confirm Password',
            description: 'placeholder text',
          })}
        />
      </li>
    )
  }
}

const PasswordChange = injectIntl(PasswordChangeWithIntl)

const Home = (props) => {
  const intl = useIntl()
  return (
    <section>
      <header>
        <div>
          <FormattedMessage
            defaultMessage="Get Started"
            description="header message" />
        </div>
      </header>
      <ul>
        <li>
          <button>
            <FormattedMessage
              defaultMessage="Delete user {name}"
              description="Delete button"
              values={{
                name: props.name,
              }}
            />
          </button>
        </li>
        <PasswordChange />
      </ul>
    </section>
  )
}

export default Home