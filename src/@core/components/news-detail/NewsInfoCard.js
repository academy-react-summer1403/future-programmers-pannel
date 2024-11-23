// ** React Imports
import { useState, Fragment } from 'react'
import pic from '../../../assets/images/portrait/small/news.png'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { MessageCircle,Eye } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'


const levelOptions = [
  { value: 'active', label: 'ساده' },
  { value: 'inactive', label: 'متوسط' },
  { value: 'suspended', label: 'پیشرفته' }
]
const typeOptions = [
  { value: 'online', label: 'آنلاین' },
  { value: 'offline', label: 'حضوری' }
]
const classOptions = [
  { value: 'class1', label: 'classRoom1' },
  { value: 'class2', label: 'classRoom2' }
]

const MySwal = withReactContent(Swal)

const NewsInfoCard = ({ selectedUser, cardDetail }) => {
  // ** State
  const [show, setShow] = useState(false)

  // ** Hook
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      // username: selectedUser.username,
      // lastName: selectedUser.fullName.split(' ')[1],
      // firstName: selectedUser.fullName.split(' ')[0]
    }
  })

  // ** render user img
  // const renderUserImg = () => {
  //   if (data !== null && data.avatar.length) {
  //     return (
  //       <img
  //         height='110'
  //         width='110'
  //         alt='user-avatar'
  //         src={data.avatar}
  //         className='img-fluid rounded mt-3 mb-2'
  //       />
  //     )
  //   } else {
  //     return (
  //       <Avatar
  //         initials
  //         color={data.avatarColor || 'light-primary'}
  //         className='rounded mt-3 mb-2'
  //         content={data.fullName}
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

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
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
  const data = {fullName:'Tailwind css',subject:"asqwerty",capacity:'23', username :'09111111111',avatarColor:null, email:'sdsdsdsdsdsd', statuse : 'فعال', complete:'90%', gender:"مرد", identification:'99887766', phone:'0922222222',contact:'2323454567', role:'ادمین', desc:'سلام خوبی من یک کار اکوز برنامه نویسی هستم تو چه کاره ای'};

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              <img
                height='110'
                width='110'
                alt='user-avatar'
                src={pic}
                className='img-fluid rounded mt-3 mb-2'
              />
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4>{cardDetail !== null ? cardDetail.fullName : 'Eleanor Aguilar'}</h4>
                  {selectedUser !== null ? (
                    <Badge className='text-capitalize' color={cardDetail.active === 'true' ? "light-success" : "light-danger"} pill>
                      {cardDetail.active === 'true' ? "فعال" : "غیرفعال"}
                    </Badge>
                  ) : null}
                  {/* <Badge color={roleColors[data.role]} className='text-capitalize'>
                      {data.role}
                    </Badge> */}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-around my-2 pt-75'>
            <div className='d-flex align-items-start me-2'>
              <Badge color='light-primary' className='rounded p-75'>
                <Eye className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{cardDetail.currentView}</h4>
                <small> بازدیدها </small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <MessageCircle className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{cardDetail.commentsCount}</h4>
                <small> کامنت ها</small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'>جزئیات</h4>
          <div className='info-container'>
            {cardDetail !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام نویسنده:</span>
                  <span>{cardDetail.addUserFullName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> دسته بندی:</span>
                  <span>{cardDetail.newsCatregoryName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>عنوان کوتاه :</span>
                  <span>{cardDetail.miniDescribe}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>عنوان گوگل :</span>
                  <span>{cardDetail.googleTitle}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>تاریخ ایجاد:</span>
                  <span>{cardDetail?.insertDate?.toString()?.slice(0,10)}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>تاریخ بروزرسانی :</span>
                  <span>{cardDetail?.updateDate?.toString()?.slice(0,10)}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>  توضیحات دوره :</span>
                  <span>{" " + cardDetail.describe}</span>
                </li>
              </ul>
            ) : null}
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary' onClick={() => setShow(true)}>
              ویرایش
            </Button>
            <Button className='ms-1' color='danger' outline > {/* onClick={handleSuspendedClick} */}
              فعال کردن
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>ویرایش اطلاعات اخبار و مقالات</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
              <Col md={5} xs={12}>
                <Label className='form-label' for='subject'>
                  عنوان 
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='subject'
                  name='subject'
                  render={({ field }) => (
                    <Input {...field} id='subject' placeholder='John' invalid={errors.subject && true} />
                  )}
                />
              </Col>
              <Col md={7} xs={12}>
                <Label className='form-label' for='capacity'>
                  عنوان گوگل
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='capacity'
                  name='capacity'
                  render={({ field }) => (
                    <Input {...field} id='capacity' placeholder='Doe' invalid={errors.capacity && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='capacity'>
                  کلمات کلیدی
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='capacity'
                  name='capacity'
                  render={({ field }) => (
                    <Input {...field} id='capacity' placeholder='Doe' invalid={errors.capacity && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='type'>
                  انتخاب دسته بندی
                </Label>
                <Select
                  id='type'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={typeOptions}
                  theme={selectThemeColors}
                  defaultValue={typeOptions[typeOptions.findIndex(i => i.value === data.type)]}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='shortDesc'>
                  توضیح کوتاه
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='shortDesc'
                  name='shortDesc'
                  render={({ field }) => (
                    <Input {...field} id='shortDesc' placeholder='john.doe.007' invalid={errors.shortDesc && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='shortDesc'>
                  توضیحات 
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='shortDesc'
                  name='shortDesc'
                  render={({ field }) => (
                    <Input {...field} id='shortDesc' placeholder='john.doe.007' invalid={errors.shortDesc && true} />
                  )}
                />
              </Col>
              <Col md={7} xs={12}>
                <Label className='form-label' for='teacher'>
                  توضیحات گوگل
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='teacher'
                  name='teacher'
                  render={({ field }) => (
                    <Input {...field} id='teacher' placeholder='john.doe.007' invalid={errors.teacher && true} />
                  )}
                />
              </Col>
              <Col md={5} xs={12}>
                <Label className='form-label' for='exampleMultipleFileBrowser'>
                  هزینه دوره 
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='number'
                  name='number'
                  render={({ field }) => (
                    <Input {...field} type='file' id='exampleMultipleFileBrowser' name='MultipleFiles' invalid={errors.number && true} multiple />
                  )}
                />
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  ثبت
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default NewsInfoCard

// selectedUser