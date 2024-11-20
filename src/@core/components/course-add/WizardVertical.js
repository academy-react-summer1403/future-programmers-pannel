// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './Address'
import Technology from './Technology'
import PersonalInfo from './PersonalInfo'
import AccountDetails from './AccountDetails'

const WizardVertical = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'اطلاعات دوره مرحله اول',
      subtitle: 'اطلاعات دوره را وارد نمائید.',
      content: <AccountDetails stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'personal-info',
      title: 'اطلاعات دوره مرحله دوم',
      subtitle: 'اطلاعات دوره را وارد نمائید.',
      content: <PersonalInfo stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'step-address',
      title: 'اطلاعات دوره مرحله سوم',
      subtitle: 'اطلاعات دوره را وارد نمائید.',
      content: <Address stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'social-links',
      title: 'افزودن تکنولوژی',
      subtitle: 'تکنولوژی را وارد نمائید.',
      content: <Technology stepper={stepper} type='wizard-vertical' />
    }
  ]

  return (
    <div className='vertical-wizard'>
      <Wizard
        type='vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardVertical
