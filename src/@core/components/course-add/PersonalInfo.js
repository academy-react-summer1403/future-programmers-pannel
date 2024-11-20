// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {
  
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>اطلاعات مرحله دوم</h5>
        
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`first-name-${type}`}>
              نوع دوره
            </Label>
            <Input type='text' name='first-name' id={`first-name-${type}`} placeholder='John' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`last-name-${type}`}>
              استاد دوره
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`} placeholder='Doe' />
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`first-name-${type}`}>
              سطح دوره
            </Label>
            <Input type='text' name='first-name' id={`first-name-${type}`} placeholder='John' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`last-name-${type}`}>
              ترم 
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`} placeholder='Doe' />
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`first-name-${type}`}>
              کلاس دوره
            </Label>
            <Input type='text' name='first-name' id={`first-name-${type}`} placeholder='John' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`last-name-${type}`}>
              تعداد جلسه 
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`} placeholder='Doe' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
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

export default PersonalInfo
