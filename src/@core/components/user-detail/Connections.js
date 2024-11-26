// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, Input, Label, Button } from 'reactstrap'

// ** Icons Imports
import { Check, X, Link } from 'react-feather'

// ** Social Icon Imports
import slackIcon from '../../assets/images/icons/social/slack.png'
import asanaIcon from '../../assets/images/icons/social/asana.png'
import googleIcon from '../../assets/images/icons/social/google.png'
import githubIcon from '../../assets/images/icons/social/github.png'
import behanceIcon from '../../assets/images/icons/social/behance.png'
import twitterIcon from '../../assets/images/icons/social/twitter.png'
import facebookIcon from '../../assets/images/icons/social/facebook.png'
import linkedinIcon from '../../assets/images/icons/social/linkedin.png'
import dribbbleIcon from '../../assets/images/icons/social/dribbble.png'
import telegram from '../../assets/images/icons/social/telegram.png'




const connections = ({detail}) => {
  const connectedAccounts = [
    {
      checked: true,
      title: 'Telegram Id',
      subtitle: detail?.telegramLin??"موجود نیست",
      logo: telegram
    },
    {
      checked: false,
      title: 'LinkedIn Id',
      subtitle: detail?.inkdinProfile??"موجود نیست",
      logo: linkedinIcon
    },
  ]
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle className='mb-75'>شبکه های اجتماعی </CardTitle>
          {/* <p>Display content from your connected accounts on your site</p> */}
          {connectedAccounts.map((item, index) => {
            return (
              <div key={index} className='d-flex mt-2'>
                <div className='flex-shrink-0'>
                  <img className='me-1' src={item.logo} alt={item.title} height='38' width='38' />
                </div>
                <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                  <div className='me-1'>
                    <p className='fw-bolder mb-0'>{item.title}</p>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </CardBody>
      </Card>

    </Fragment>
  )
}

export default connections
