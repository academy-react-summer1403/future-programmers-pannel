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
import mailchimpIcon from '../../assets/images/icons/social/mailchimp.png'
import map from '../../assets/images/icons/social/map.png'
import date from '../../assets/images/icons/social/date.png'
import identification from '../../assets/images/icons/social/identification.png'

const connectedAccounts = [
  {
    checked: true,
    title: 'درباره کاربر',
    subtitle: 'Calendar and contacts',
    logo: googleIcon
  },
  {
    checked: false,
    title: 'آدرس محل سکونت',
    subtitle: 'Communication',
    logo: slackIcon
  },
  {
    checked: true,
    title: 'تاریخ تولد',
    subtitle: 'Git repositories',
    logo: githubIcon
  },
  {
    checked: false,
    title: 'آی دی کاربر',
    subtitle: 'Email marketing service',
    logo: mailchimpIcon
  },
  {
    checked: false,
    title: 'تاریخ ایجاد حساب کاربری',
    subtitle: 'Communication',
    logo: asanaIcon
  },
  {
    checked: false,
    title: 'اعتبارسنجی دومرحله ای',
    subtitle: 'Communication',
    logo: asanaIcon
  },
  {
    checked: false,
    title: 'ایمیل بازیابی',
    subtitle: 'Communication',
    logo: asanaIcon
  }
]


const OtherInformation = ({detail}) => {
  const verification = detail?.recoveryEmail===true ? "فعال" : "غیرفعال";
  const connectedAccounts = [
    {
      checked: true,
      title: 'درباره کاربر',
      subtitle: detail?.userAbout,
      logo: googleIcon
    },
    {
      checked: false,
      title: 'آدرس محل سکونت',
      subtitle: detail?.homeAdderess,
      logo: map
    },
    {
      checked: true,
      title: 'تاریخ تولد',
      subtitle: detail?.birthDay?.toString()?.slice(0,10),
      logo: date
    },
    {
      checked: false,
      title: 'آی دی کاربر',
      subtitle: detail?.id,
      logo: identification
    },
    {
      checked: false,
      title: 'تاریخ ایجاد حساب کاربری',
      subtitle: detail?.insertDate?.toString()?.slice(0,10),
      logo: date
    },
    {
      checked: false,
      title: 'اعتبارسنجی دومرحله ای',
      subtitle: verification,
      logo: asanaIcon
    },
    {
      checked: false,
      title: 'ایمیل بازیابی',
      subtitle: detail?.recoveryEmail,
      logo: asanaIcon
    }
  ]
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle className='mb-75'>سایر اطلاعات کاربر </CardTitle>
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

export default OtherInformation
