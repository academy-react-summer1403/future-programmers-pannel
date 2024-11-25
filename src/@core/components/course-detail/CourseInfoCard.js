// ** React Imports
import { useState, Fragment } from 'react'
import pic from '../../../assets/images/portrait/small/500.png'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X, Book, Bookmark, MessageCircle, User, Users } from 'react-feather'
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

const CourseInfoCard = ({ selectedUser, detail }) => {
  // ** State
  const [show, setShow] = useState(false)
console.log(detail)
const start= detail?.startTime?.toString()
const end= detail?.endTime?.toString()
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
              {detail.imageAddress !== null && detail.imageAddress !== 'Not-set' ? <img height='110' width='110' alt='user-avatar' src={detail.imageAddress} className='img-fluid rounded mt-3 mb-2'/> :  <img height='110' width='110' alt='user-avatar' src={pic} className='img-fluid rounded mt-3 mb-2'/>}
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4>{detail !== null ? detail.title : 'Eleanor Aguilar'}</h4>
                  
                  {selectedUser !== null ? (
                    <Badge className='text-capitalize' color={detail.active = true ? "light-success" : "light-danger"} pill>
                    {detail.active = true ? "فعال" : "غیرفعال"}
                  </Badge>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-around my-2 pt-75'>
            <div className='d-flex align-items-start me-2'>
              <Badge color='light-primary' className='rounded p-75'>
                <Users className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{detail.courseUserTotal}</h4>
                <small> کاربر </small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <MessageCircle className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{detail.courseCommentTotal}</h4>
                <small> کامنت ها</small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'>جزئیات</h4>
          <div className='info-container'>
            {selectedUser !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام استاد:</span>
                  <span>{detail.teacherName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام کلاس:</span>
                  <span>{detail.courseClassRoomName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>سطح دوره:</span>
                  <span className='text-capitalize'>{detail.courseLevelName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>  وضعیت دوره:</span>
                  <span className='text-capitalize'>{detail.courseStatusName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نوع دوره:</span>
                  <span>{detail.courseTypeName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>قیمت دوره :</span>
                  <span>{detail.cost} تومان</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> شروع دوره:</span>
                  <span>{start?.slice(0,4)+"/"+start?.slice(5,7)+"/"+start?.slice(8,10)}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> پایان دوره:</span>
                  <span>{end?.slice(0,4)+"/"+end?.slice(5,7)+"/"+end?.slice(8,10)}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> توضیحات :</span>
                  <span>{detail.describe}</span>
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
            <h1 className='mb-1'>ویرایش اطلاعات دوره</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
              <Col md={4} xs={12}>
                <Label className='form-label' for='subject'>
                  موضوع دوره
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
              <Col md={4} xs={12}>
                <Label className='form-label' for='capacity'>
                  ظرفیت دوره
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
              <Col md={4} xs={12}>
                <Label className='form-label' for='type'>
                  نوع دوره
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
              <Col md={7} xs={12}>
                <Label className='form-label' for='shortDesc'>
                  توضیحات کوتاه
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
              <Col md={5} xs={12}>
                <Label className='form-label' for='classRoom'>
                  کلاس دوره
                </Label>
                <Select
                  id='classRoom'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={classOptions}
                  theme={selectThemeColors}
                  defaultValue={classOptions[classOptions.findIndex(i => i.value === data.classRoom)]}
                />
              </Col>
              <Col md={4} xs={12}>
                <Label className='form-label' for='teacher'>
                  استاد دوره
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
              <Col md={4} xs={12}>
                <Label className='form-label' for='semester'>
                  ترم 
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='semester'
                  name='semester'
                  render={({ field }) => (
                    <Input {...field} id='semester' placeholder='john.doe.007' invalid={errors.semester && true} />
                  )}
                />
              </Col>
              <Col md={4} xs={12}>
                <Label className='form-label' for='number'>
                  تعداد جلسه
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='number'
                  name='number'
                  render={({ field }) => (
                    <Input {...field} id='number' placeholder='john.doe.007' invalid={errors.number && true} />
                  )}
                />
              </Col>
              <Col md={4} xs={12}>
                <Label className='form-label' for='number'>
                  هزینه دوره 
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='number'
                  name='number'
                  render={({ field }) => (
                    <Input {...field} id='number' placeholder='john.doe.007' invalid={errors.number && true} />
                  )}
                />
              </Col>
              <Col md={3} xs={12}>
                <Label className='form-label' for='level'>
                  سطح دوره:
                </Label>
                <Select
                  id='level'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={levelOptions}
                  theme={selectThemeColors}
                  defaultValue={levelOptions[levelOptions.findIndex(i => i.value === data.level)]}
                />
              </Col>
              <Col md={5} xs={12}>
                <Label className='form-label' for='startDate'>
                  تاریخ شروع 
                </Label>
                <Input
                  id='startDate'
                  placeholder='شروع'
                  defaultValue={data.contact.substr(data.contact.length - 4)}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='endDate'>
                  تاریخ پایان 
                </Label>
                <Input
                  id='endDate'
                  placeholder='پایان'
                  defaultValue={data.contact.substr(data.contact.length - 4)}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='code'>
                  کد یکتا 
                </Label>
                <Input
                  id='code'
                  placeholder='کد یکتا'
                  defaultValue={data.contact.substr(data.contact.length - 4)}
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='desc'>
                  توضیحات دوره 
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='desc'
                  name='desc'
                  render={({ field }) => (
                    <Input {...field} id='desc' placeholder='john.doe.007' invalid={errors.desc && true} />
                  )}
                />
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default CourseInfoCard
