// ** React Imports
import { Fragment } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Button } from 'reactstrap'

const Address = ({ stepper, type }) => {
  const validation = yup.object().shape({
    Cost:yup.string().required(),
    yektaCode:yup.string().required(),
    StartTime:yup.string().required(),
    EndTime:yup.string().required(),
  });
  return (
    <Fragment>
      <Formik
        initialValues={{Cost:'',yektaCode:'',StartTime:'',EndTime:''}} 
        onSubmit={e => e.preventDefault()}
        validationSchema={validation}
      >
        <Form>
          <Row>
            <Col md='12' className='mb-1'>
              <Label className='form-label' for='Cost'>
                هزینه دوره
              </Label>
              <Field
                class="form-select form-select-md"
                type='text'
                id='Cost'
                name='Cost'
                maxwidth='5'
                placeholder='هزینه دوره'
              />
              <ErrorMessage name='Cost' component={'p'} class="text-danger"/>
            </Col>
            <Col md='12' className='mb-1'>
              <Label className='form-label' for='yektaCode' >
                کد یکتا
              </Label>
              <Field
                  class="form-select form-select-md" 
                  type='text' 
                  name='yektaCode' 
                  id='yektaCode' 
                  placeholder='کد یکتا' 
                />
                <ErrorMessage name='yektaCode' component={'p'} class="text-danger"/>
            </Col>
          </Row>
          <Row>
            <Col md='12' className='mb-1'>
              <Label className='form-label' for='StartTime' >
                زمان شروع دوره
              </Label>
              <Field 
                class="form-select form-select-md" 
                type='date' 
                name='StartTime' 
                id='StartTime'  
              />
              <ErrorMessage name='StartTime' component={'p'} class="text-danger"/>
            </Col>
            <Col md='12' className='mb-1'>
              <Label className='form-label' for='EndTime' >
                زمان پایان دوره
              </Label>
              <Field 
                class="form-select form-select-md" 
                type='date' 
                name='EndTime' 
                id='EndTime' 
              />
              <ErrorMessage name='EndTime' component={'p'} class="text-danger"/>
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
      </Formik>
      
    </Fragment>
  )
}

export default Address
