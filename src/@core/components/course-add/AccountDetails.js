// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const AccountDetails = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>اطلاعات را وارد نمائید</h5>
        
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`username-${type}`}>
              موضوع دوره
            </Label>
            <Input type='text' name={`username-${type}`} id={`username-${type}`} placeholder='johndoe' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`email-${type}`}>
              توضیحات
            </Label>
            <Input
              type='email'
              name={`email-${type}`}
              id={`email-${type}`}
              placeholder='john.doe@email.com'
              aria-label='john.doe'
            />
          </Col>
        </Row>
        <Row>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for={`password-${type}`}>
              توضیحات کوتاه
            </Label>
            <Input type='password' id={`password-${type}`} />
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for={`confirm-password-${type}`}>
              ظرفیت دوره
            </Label>
            <Input type='password' id={`confirm-password-${type}`} />
          </div>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>قبلی</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
