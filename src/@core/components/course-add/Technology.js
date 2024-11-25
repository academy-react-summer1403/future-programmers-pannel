// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'

const Technology = ({ stepper, type }) => {
  const techOptions = [
    { value: 'active', label: 'فرانت اند', color: '#00B8D9', isFixed: true  },
    { value: 'inactive', label: 'بک اند', color: '#0052CC', isFixed: true },
    { value: 'suspended', label: 'React', color: '#5243AA', isFixed: false },
    { value: 'suspend', label: 'NextJs', color: '#FF5630', isFixed: false },
  ]
  // const colorOptions = [
  //   { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  //   { value: 'blue', label: 'Blue', color: '#0052CC', isFixed: true },
  //   { value: 'purple', label: 'Purple', color: '#5243AA', isFixed: true },
  //   { value: 'red', label: 'Red', color: '#FF5630', isFixed: false },
  //   { value: 'orange', label: 'Orange', color: '#FF8B00', isFixed: false },
  //   { value: 'yellow', label: 'Yellow', color: '#FFC400', isFixed: false }
  // ]
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>افزودن تکنولوژی</h5>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col className='mb-1' md='12' sm='12'>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={[]}
              isMulti
              name='colors'
              options={techOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>قبلی</span>
          </Button>
          <Button color='success' className='btn-submit' onClick={() => alert('submitted')}>
            ثبت
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Technology
