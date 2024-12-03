// ** React Imports
import { useState, Fragment } from 'react'
import toast from 'react-hot-toast'
import pic from '../../../assets/images/avatars/avatar-blank.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
// ** Reactstrap Imports
import { Row, Col, Card, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X, Book, Bookmark } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import { completeUser } from '../../../core/services/api/putUser';

const roleColors = {
  editor: 'light-info',
  ادمین: 'light-danger',
  author: 'light-warning',
  maintainer: 'light-success',
  subscriber: 'light-primary'
}

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
]



const UserInfoCard = ({ selectedUser, detail }) => {
  // ** State
  const [show, setShow] = useState(false)
  // console.log(detail)
  
  const initialValues = {
    id:detail.id,
    fName:detail.fName,
    lName:detail.lName,   
    userName:detail.userName,
    gmail:detail.gmail,
    phoneNumber:detail.phoneNumber,
    active:detail.active === 'فعال'? true:false,
    isDelete:detail.isDelete,
    isTecher:detail.isTecher,
    isStudent:detail.isStudent,
    recoveryEmail:detail.recoveryEmail,
    twoStepAuth:detail.twoStepAuth,
    userAbout:detail.userAbout,
    currentPictureAddress:detail.currentPictureAddress,
    linkdinProfile:'https://t.mww',
    telegramLink:'https://t.me',
    receiveMessageEvent:detail.receiveMessageEvent,
    homeAdderess:detail.homeAdderess,
    nationalCode:detail.nationalCode,
    gender:true,
    latitude:'13',
    longitude:'12',
    insertDate:detail.insertDate,
    birthDay:detail.birthDay
  }

  
  const handleSubmit = async(value)=>{
    const result = await completeUser(value)
    console.log(value)
    toast.success(result.message)
  }
  // https://classapi.sepehracademy.ir/\Pictures\ProfileImageThumbnail\teacher_f4a15f6c-76a1-4da3-ae79-ba06406f3192.png
  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              {detail?.currentPictureAddress !== null && detail?.currentPictureAddress !== 'Not-set' ? <img height='110' width='110' alt='user-avatar' src={detail?.currentPictureAddress} className='img-fluid rounded mt-3 mb-2'/> :  <img height='110' width='110' src={pic} className='img-fluid rounded mt-3 mb-2'/>}
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4>{detail !== null ? detail?.fName : 'Eleanor Aguilar'}</h4>
                  {/* {selectedUser !== null ? (
                    <Badge color={roleColors[detail.roles[2]]} className='text-capitalize'>
                      {detail.roles[2]}
                    </Badge>
                  ) : null} */}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-around my-2 pt-75'>
            <div className='d-flex align-items-start me-2'>
              <Badge color='light-primary' className='rounded p-75'>
                <Book className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{detail?.courses?.length}</h4>
                <small> دوره ها</small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <Bookmark className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{detail?.coursesReseves?.length}</h4>
                <small> دوره های رزرو</small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'>جزئیات</h4>
          <div className='info-container'>
            {selectedUser !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام کاربری:</span>
                  <span>{detail?.userName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>ایمیل:</span>
                  <span>{detail?.gmail}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>وضعیت:</span>
                  <Badge className='text-capitalize' color={detail.active = true ? "light-success" : "light-danger"} pill>
                    {detail.active = true ? "فعال" : "غیرفعال"}
                  </Badge>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>درصد تکمیل پروفایل:</span>
                  <span className='text-capitalize'>{detail?.profileCompletionPercentage + " " }درصد</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>جنسیت:</span>
                  <span>{detail.gender = true ? "اعلام نشده": "اعلام شده"}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>کد ملی:</span>
                  <span>{detail?.nationalCode}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>شماره موبایل:</span>
                  <span>{detail?.phoneNumber}</span>
                </li>
              </ul>
            ) : null}
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary' onClick={() => setShow(true)}>
              ویرایش
            </Button>
            <Button className='ms-1' color='danger' outline > {/* onClick={handleSuspendedClick} */}
              غیرفعال کردن
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>ویرایش اطلاعات کاربر</h1>
          </div>
          <Formik 
            initialValues={initialValues} 
            onSubmit={handleSubmit}
          >
            <Form>
              <Row className='gy-1 pt-75'>
                <Col md={4} xs={12}>
                  <Label className='form-label' for='fName'>
                    نام
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='fName' 
                    name='fName' 
                  />
                </Col>
                <Col md={4} xs={12}>
                  <Label className='form-label' for='lName'>
                    نام خانوادگی
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    name='lName' 
                    id='lName'  
                  />
                  <ErrorMessage name='lName' component={'p'} class="text-danger"/>
                </Col>
                <Col xs={4}>
                  <Label className='form-label' for='userName'>
                    نام کاربری
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    name='userName' 
                    id='userName' 
                  />
                  <ErrorMessage name='username' component={'p'} class="text-danger"/>
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='gmail'>
                    ایمیل
                  </Label>
                  <Field
                    class="form-control form-control-md"
                    type='email'
                    id='gmail'
                    name='gmail'
                  />
                  <ErrorMessage name='gmail' component={'p'} class="text-danger"/>
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='nationalCode'>
                    کد ملی
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='nationalCode' 
                    name='nationalCode' 
                  />
                  <ErrorMessage name='nationalCode' component={'p'} class="text-danger"/>
                </Col> 
                
                <Col md={3} xs={12}>
                  <Label className='form-label' for='phoneNumber'>
                    شماره موبایل
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='phoneNumber' 
                    name='phoneNumber' 
                  />
                  <ErrorMessage name='phoneNumber' component={'p'} class="text-danger"/>
                </Col>
                <Col md={3} xs={12}>
                  <Label className='form-label' for='activ'>
                    وضعیت
                  </Label>
                  <Field 
                    as='select'
                    class="form-select form-select-md" 
                    id='active' 
                    name='active' 
                  >
                    <option value= {true} >فعال</option>
                    <option value={false}>غیرفعال</option>
                  </Field>
                  <ErrorMessage name='active' component={'p'} class="text-danger"/>
                </Col> 
                <Col md={6} xs={12}>
                  <Label className='form-label' for='recoveryEmail'>
                    ایمیل بازیابی
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='recoveryEmail' 
                    name='recoveryEmail' 
                  />
                  <ErrorMessage name='recoveryEmail' component={'p'} class="text-danger"/>
                </Col> 
                <Col md={8} xs={12}>
                  <Label className='form-label' for='homeAdderess'>
                    آدرس منزل 
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='homeAdderess' 
                    name='homeAdderess' 
                  />
                  <ErrorMessage name='homeAdderess' component={'p'} class="text-danger"/>
                </Col>
                <Col md={4} xs={12}>
                  <Label className='form-label' for='birthDay'>
                    تاریخ تولد
                  </Label>
                  <Field 
                    
                    class="form-control form-control-md" 
                    id='birthDay' 
                    name='birthDay' 
                  />
                </Col>   
                <Col md={6} xs={12}>
                  <Label className='form-label' for='currentPictureAddress'>
                    عکس کاربر
                  </Label>
                  <Field 
                    // type='file'
                    class="form-control form-control-md" 
                    id='currentPictureAddress' 
                    name='currentPictureAddress' 
                  />
                  <ErrorMessage name='currentPictureAddress' component={'p'} class="text-danger"/>
                </Col> 
                
                
                <Col md={6} xs={12}>
                  <Label className='form-label' for='userAbout'>
                    درباره کاربر
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='userAbout' 
                    name='userAbout' 
                  />
                  <ErrorMessage name='userAbout' component={'p'} class="text-danger"/>
                </Col> 
                <Col md={6} xs={12}>
                  <Label className='form-label' for='linkdinProfile'>
                    پروفایل لینکدین
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='linkdinProfile' 
                    name='linkdinProfile' 
                  />
                  <ErrorMessage name='linkdinProfile' component={'p'} class="text-danger"/>
                </Col> 
                <Col md={6} xs={12}>
                  <Label className='form-label' for='telegramLink'>
                    لینک تلگرام
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='telegramLink' 
                    name='telegramLink' 
                  />
                  <ErrorMessage name='telegramLink' component={'p'} class="text-danger"/>
                </Col> 
                <Col xs={12} className='text-center mt-2 pt-50'>
                  <Button type='submit' className='me-1' color='primary'>
                    ثبت
                  </Button>
                </Col>
              </Row> 
            </Form>
          </Formik>
          
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default UserInfoCard