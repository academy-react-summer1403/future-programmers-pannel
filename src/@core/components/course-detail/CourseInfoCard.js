// ** React Imports
import { useState, Fragment, useEffect } from 'react'
import pic from '../../../assets/images/portrait/small/500.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import toast from 'react-hot-toast'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import { MessageCircle, Users } from 'react-feather'
import { useForm } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import { getCourseLevel, getTeacher } from '../../../core/services/api/putCourse';

const levelOptions = [
  { value: 'active', label: 'ساده' },
  { value: 'inactive', label: 'متوسط' },
  { value: 'suspended', label: 'پیشرفته' }
]
const typeOptions = [
  { value: 1, label: 'آنلاین' },
  { value: 2, label: 'حضوری' },
  { value: 3, label: 'حضوری' }
]
const classOptions = [
  { value: 'class1', label: 'classRoom1' },
  { value: 'class2', label: 'classRoom2' }
]

const MySwal = withReactContent(Swal)

const CourseInfoCard = ({ selectedUser, detail }) => {
  // ** State
  const [show, setShow] = useState(false)
  const [level, setLevel] = useState([])
  const [teacherId, setTeacherId] = useState([])
  // console.log(detail)
  console.log(teacherId)

  const getLevel = async()=>{
    try {
    const result = await getCourseLevel()
    setLevel(result)
    } catch (error) {
    
    }
  }
  const getTeacherList = async()=>{
    try {
    const result = await getTeacher()
    setTeacherId(result)
    } catch (error) {
    
    }
  }

getTeacher

useEffect(()=>{
  getLevel();
  getTeacherList();
},[]);

  const start= detail?.startTime?.toString()
  const end= detail?.endTime?.toString()
  console.log(detail)


  const {

    formState: { errors }
  } = useForm({
    defaultValues: {
      // username: selectedUser.username,
      // lastName: selectedUser.fullName.split(' ')[1],
      // firstName: selectedUser.fullName.split(' ')[0]
    }
  })

  const initialValues={
    Id:detail.courseId,
    Title:detail.title,
    Describe:detail.describe,
    MiniDescribe:'ندارد',
    Capacity:"ندارد",
    CourseTypeId:detail.courseTypeName,
    // SessionNumber:detail.,
    // CurrentCoursePaymentNumber:detail.,
    // TremId:detail.,
    ClassId:detail.courseClassRoomName,
    CourseLvlId:detail.courseLevelName,
    TeacherId:detail.teacherId,
    Cost:detail.cost,
    // UniqeUrlString:detail,
    // Image:detail,
    StartTime:detail.startTime,
    EndTime:detail.endTime,
    // GoogleSchema:detail,
    // GoogleTitle:detail.,
    // CoursePrerequisiteId:detail.,
    // ShortLink:detail.,
    // TumbImageAddress:detail.,
    ImageAddress:detail.imageAddress,
  }
  const handleSubmit = async ()=>{
    const formData = new FormData();
    formData.append("Id",Id)
    formData.append("Title",Title)
    formData.append("Describe",Describe)
    formData.append("MiniDescribe",MiniDescribe)
    formData.append("Capacity",Capacity)
    formData.append("TeacherId",TeacherId)
    formData.append("Cost",Cost)
    formData.append("StartTime",StartTime)
    formData.append("EndTime",EndTime)
    formData.append("ImageAddress",ImageAddress)
    const result = await UpdateCourse(formData);
    toast.success(result.message)
  }

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
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Form>
              <Row className='gy-1 pt-75'>
                
                <Col md={6} xs={12}>
                  <Label className='form-label' for='Title'>
                    موضوع دوره
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='Title' 
                    name='Title' 
                  />
                </Col>
                <Col md={4} xs={12}>
                  <Label className='form-label' for='CourseTypeId'>
                    نوع دوره
                  </Label>
                  <Field 
                    as='select'
                    class="form-select form-select-md" 
                    id='CourseTypeId' 
                    name='CourseTypeId' 
                  >
                    <option value={1}>حضوری</option>
                    <option value={2}>آنلاین</option>
                    <option value={3}>حضوری آنلاین</option>
                  </Field>

                </Col>
                <Col md={2} xs={12}>
                  <Label className='form-label' for='Capacity'>
                    ظرفیت دوره
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='Capacity' 
                    name='Capacity' 
                  />
                </Col>
                <Col md={7} xs={12}>
                  <Label className='form-label' for='MiniDescribe'>
                    توضیحات کوتاه
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='MiniDescribe' 
                    name='MiniDescribe' 
                  />
                </Col>
                <Col md={5} xs={12}>
                  <Label className='form-label' for='ClassId'>
                    کلاس دوره
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='ClassId' 
                    name='ClassId' 
                  />
                </Col>

                <Col md={4} xs={12}>
                  <Label className='form-label' for='TeacherId'>
                    استاد دوره
                  </Label>
                  <Field 
                    as='select'
                    class="form-select form-select-md" 
                    id='TeacherId' 
                    name='TeacherId' 
                  >
                    {teacherId?.map((item, index)=>{
                      return(
                        <option key={index} value={item.teacherId}>{item?.fullName??'اسمش وارد نشده'}</option>
                      )
                    })}
                  </Field>
                </Col>
                <Col md={4} xs={12}>
                  <Label className='form-label' for='TremId'>
                    ترم 
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='TremId' 
                    name='TremId' 
                  />
                </Col>
                <Col md={4} xs={12}>
                  <Label className='form-label' for='SessionNumber'>
                    تعداد جلسه
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='SessionNumber' 
                    name='SessionNumber' 
                  />
                </Col>
                <Col md={4} xs={12}>
                  <Label className='form-label' for='Cost'>
                    هزینه دوره 
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='Cost' 
                    name='Cost' 
                  />
                </Col>
                <Col md={3} xs={12}>
                  <Label className='form-label' for='CourseLvlId'>
                    سطح دوره:
                  </Label>
                  <Field 
                    as='select'
                    class="form-select form-select-md" 
                    id='CourseLvlId' 
                    name='CourseLvlId' 
                  >
                    {level?.map((item, index)=>{
                      return(
                        <option key={index} value={item.id}>{item.levelName}</option>
                      )
                    })}
                  </Field>
                </Col>
                <Col md={5} xs={12}>
                  <Label className='form-label' for='CoursePrerequisiteId'>
                    کد یکتا 
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='CoursePrerequisiteId' 
                    name='CoursePrerequisiteId' 
                  />
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='StartTime'>
                    تاریخ شروع 
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='StartTime' 
                    name='StartTime' 
                  />
                </Col>
                <Col md={6} xs={12}>
                  <Label className='form-label' for='EndTime'>
                    تاریخ پایان 
                  </Label>
                  <Field 
                    class="form-control form-control-md" 
                    id='EndTime' 
                    name='EndTime' 
                  />
                </Col>
                <Col md={12} xs={12}>
                  <Label className='form-label' for='Describe'>
                    توضیح دوره
                  </Label>
                  <Field 
                    type='textarea'
                    class="form-control form-control-md" 
                    id='Describe' 
                    name='Describe' 
                  />
                </Col>
                
                <Col xs={12} className='text-center mt-2 pt-50'>
                  <Button type='submit' className='me-1' color='primary'>
                    Submit
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

export default CourseInfoCard

