// ** React Imports
import { useState, Fragment } from 'react'
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


const MySwal = withReactContent(Swal)

const UserInfoCard = ({ selectedUser, detail }) => {
  // ** State
  const [show, setShow] = useState(false)

  // ** Hook
  const {
    reset,
    control,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      // username: selectedUser.username,
      // lastName: selectedUser.fullName.split(' ')[1],
      // firstName: selectedUser.fullName.split(' ')[0]
    }
  })

  //  ** render user img
  // const renderUserImg = () => {
  //   if (detail.currentPictureAddress !== null && detail.currentPictureAddress !== "Not-set") {
  //     return (
  //       <img
  //         height='110'
  //         width='110'
  //         alt='user-avatar'
  //         src={detail.avatar}
  //         className='img-fluid rounded mt-3 mb-2'
  //       />
  //     )
  //   } else {
  //     return (
  //       <Avatar
  //         initials
  //         color={detail.avatarColor || 'light-primary'}
  //         className='rounded mt-3 mb-2'
  //         content={detail.fullName}
  //         contentStyles={{
  //           borderRadius: 0,
  //           fontSize: 'calc(48px)',
  //           width: '100%',
  //           height: '100%'
  //         }}
  //         style={{
  //           height: '110px',
  //           width: '110px'
  //         }}
  //       />
  //     )
  //   }
  // }

  // const onSubmit = data => {
  //   if (Object.values(data).every(field => field.length > 0)) {
  //     setShow(false)
  //   } else {
  //     for (const key in data) {
  //       if (data[key].length === 0) {
  //         setError(key, {
  //           type: 'manual'
  //         })
  //       }
  //     }
  //   }
  // }
 

  const validation = yup.object().shape({
    fName:yup.string().required(),
    lName:yup.string().required(),
    userName:yup.string().required(),
    gmail:yup.string().required(),
    status:yup.string().required(),
    nationalCode:yup.string().required(),
    phoneNumber:yup.string().required(),
  });
  const handleReset = () => {
    reset({fName:'',lName:'',userName:'',gmail:'',status:'',nationalCode:'',phoneNumber:'',birthDay:'',currentPictureAddress:''})
  }
  const handleSubmit = async(value)=>{
    const result = await completeUser(value)
  }
  // const handleReset = () => {
  //   reset({
  //     username: selectedUser.username,
  //     lastName: selectedUser.fullName.split(' ')[1],
  //     firstName: selectedUser.fullName.split(' ')[0]
  //   })
  // }

  // const handleSuspendedClick = () => {
  //   return MySwal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert user!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, Suspend user!',
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-outline-danger ms-1'
  //     },
  //     buttonsStyling: false
  //   }).then(function (result) {
  //     if (result.value) {
  //       MySwal.fire({
  //         icon: 'success',
  //         title: 'Suspended!',
  //         text: 'User has been suspended.',
  //         customClass: {
  //           confirmButton: 'btn btn-success'
  //         }
  //       })
  //     } else if (result.dismiss === MySwal.DismissReason.cancel) {
  //       MySwal.fire({
  //         title: 'Cancelled',
  //         text: 'Cancelled Suspension :)',
  //         icon: 'error',
  //         customClass: {
  //           confirmButton: 'btn btn-success'
  //         }
  //       })
  //     }
  //   })
  // }
//  console.log(detail)
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
            initialValues={{fName:'',lName:'',userName:'',gmail:'',nationalCode:'',phoneNumber:'',birthDay:'',currentPictureAddress:''}} 
            onSubmit={handleSubmit}
            validationSchema={validation}
          >
            <Form>
              <Row className='gy-1 pt-75'>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='fName'>
                    نام
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='fName' 
                    name='fName' 
                    placeholder='John'
                  />
                  <ErrorMessage name='firstName' component={'p'} class="text-danger"/>
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='lName'>
                    نام خانوادگی
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    name='lName' 
                    id='lName' 
                    placeholder='Doe' 
                  />
                  <ErrorMessage name='lastName' component={'p'} class="text-danger"/>
                </Col>
                <Col xs={12}>
                  <Label className='form-label' for='userName'>
                    نام کاربری
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    name='username' 
                    id='username' 
                    placeholder='john.doe.007'
                  />
                  <ErrorMessage name='username' component={'p'} class="text-danger"/>
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='gmail'>
                    ایمیل
                  </Label>
                  <Field
                    class="form-control form-control-md"
                    type='gmail'
                    id='gmail'
                    name='gmail'
                    placeholder='example@domain.com'
                  />
                  <ErrorMessage name='email' component={'p'} class="text-danger"/>
                </Col>
                {/* <Col md={6} xs={12}>
                  <Label className='form-label' for='active'>
                    وضعیت:
                  </Label>
                  <Field class="form-select form-select-md" id='active'name='active'>
                  <datalist id="active">
                    <option value='true'>فعال</option>
                    <option value="false">غیرفعال</option>
                  </datalist>
                  </Field>
                </Col> */}
                <Col md={6} xs={12}>
                  <Label className='form-label' for='nationalCode'>
                    کد ملی
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='nationalCode' 
                    name='nationalCode' 
                    placeholder='+1 609 933 4422' 
                  />
                  <ErrorMessage name='id' component={'p'} class="text-danger"/>
                </Col> 
                <Col md={6} xs={12}>
                  <Label className='form-label' for='phoneNumber'>
                    شماره موبایل
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='phoneNumber' 
                    name='phoneNumber' 
                    placeholder='0911 111 1111' 
                  />
                  <ErrorMessage name='contact' component={'p'} class="text-danger"/>
                </Col> 
                <Col md={6} xs={12}>
                  <Label className='form-label' for='birthDay'>
                    تاریخ تولد
                  </Label>
                  <Field 
                  type='date'
                    class="form-control form-control-md" 
                    id='birthDay' 
                    name='birthDay' 
                    placeholder='0911 111 1111' 
                  />
                  <ErrorMessage name='contact' component={'p'} class="text-danger"/>
                </Col> 
                <Col md={6} xs={12}>
                  <Label className='form-label' for='currentPictureAddress'>
                    عکس کاربر
                  </Label>
                  <Field 
                    type='file'
                    class="form-control form-control-md" 
                    id='currentPictureAddress' 
                    name='currentPictureAddress' 
                  />
                  <ErrorMessage name='contact' component={'p'} class="text-danger"/>
                </Col>   
                <Col xs={12} className='text-center mt-2 pt-50'>
                  <Button type='submit' className='me-1' color='primary'>
                    ثبت
                  </Button>
                  <Button outline color='secondary' type='reset' onClick={handleReset} >
                    انصراف
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
