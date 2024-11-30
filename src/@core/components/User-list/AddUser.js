// ** Third Party Components
import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

// ** Custom Components
import Avatar from '@components/avatar'

// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  ModalBody,
  ModalHeader,
  FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const AddUser = () => {
  // ** States
  const [show, setShow] = useState(false)

  const validation = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    number: yup.string().required(),
    password: yup.string().required()
  })

  // ** Hooks
  // const {
  //   reset,
  //   control,
  //   // handleSubmit,
  //   formState: { errors }
  // } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  // const onSubmit = data => {
  //   if (Object.values(data).every(field => field.length > 0)) {
  //     toast(
  //       <div className='d-flex'>
  //         <div className='me-1'>
  //           <Avatar size='sm' color='success' icon={<Check size={12} />} />
  //         </div>
  //         <div className='d-flex flex-column'>
  //           <h6>Form Submitted!</h6>
  //           <ul className='list-unstyled mb-0'>
  //             <li>
  //               <strong>firstName</strong>: {data.firstName}
  //             </li>
  //             <li>
  //               <strong>lastName</strong>: {data.lastName}
  //             </li>
  //             <li>
  //               <strong>email</strong>: {data.email}
  //             </li>
  //             <li>
  //               <strong>phone number</strong>: {data.number}
  //             </li>
  //             <li>
  //               <strong>password</strong>: {data.password}
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     )
  //   }
  // }

  const handleReset = () => {
    reset({
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
    })
  }

  const handleSubmit = async(value)=>{
    console.log(value)
    const result = await postAddUser()
  }

  return (
    <Fragment>
        <CardBody className='text-center'>
          <Button color='primary' onClick={() => setShow(true)}>
            افزودن کاربر جدید
          </Button>
        </CardBody>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-md'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className=' mx-50 pb-5'>
          <div className=' mb-2'>
            <h1 className='mb-1'>لطفا اطلاعات کاربر را وارد نمائید</h1>
          </div>
          <Formik
            initialvalues={{firstName:'', lastName:'', email:'', number:'', password:'',student:true, teacher:true}}
            onSubmit={handleSubmit}
            // validatinonSchema={validation}
          >
            <Form>
              {/* <div className='mb-1'>
                <Label className='form-label' for='firstName'>
                  نام
                </Label>
                <Field
                  type='text'
                  id='firstName'
                  name='firstName'
                  placeholder='نام'
                  class="form-control form-control-md"
                  onChange={(e)=>e.target.value}
                />
                <ErrorMessage name='firstName' component={'p'} class="text-danger"/>
              </div> */}
              {/* <div className='mb-1'>
                <Label className='form-label' for='lastName'>
                  نام خانوادگی
                </Label>
                <Field
                  type='text'
                  id='lastName'
                  name='lastName'
                  placeholder='نام خانوادگی'
                  class="form-control form-control-md"
                />
                <ErrorMessage name='lastName' component={'p'} class="text-danger"/>
              </div> */}
              {/* <div className='mb-1'>
                <Label className='form-label' for='email'>
                  ایمیل
                </Label>
                <Field
                  type='email'
                  id='email'
                  name='email'
                  placeholder='bruce.wayne@email.com '
                  class="form-control form-control-md"
                />
                <ErrorMessage name='email' component={'p'} class="text-danger"/>
              </div> */}
              <div className='mb-1'>
                <Label className='form-label' for='number'>
                  شماره موبایل
                </Label>
                <Field
                  type='number'
                  id='number'
                  name='number'
                  placeholder='09111111111'
                  class="form-control form-control-md"
                />
                {/* <ErrorMessage name='number' component={'p'} class="text-danger"/> */}
              </div>
              {/* <div className='mb-1'>
                <Label className='form-label' for='password'>
                  رمز عبور
                </Label>
                <Field
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  class="form-control form-control-md"
                />
                <ErrorMessage name='password' component={'p'} class="text-danger"/>
              </div> */}
              {/* <div className='mb-1'>
                <Label className='form-label' for='password'>
                  تعیین نقش کاربر
                </Label>
                <div className='mt-1'>
                  <div className='form-check form-check-inline'>
                    <Field type='checkbox' name='student'  id='student' className='form-check-input'/>
                    <Label for='student' className='form-check-label'>
                      دانشجو
                    </Label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <Field type='checkbox' name='teacher' id='teacher' className='form-check-input'/>
                    <Label for='teacher' className='form-check-label'>
                      استاد
                    </Label>
                  </div>
                </div>
              </div> */}
              <div className='d-flex mt-1'>
                <Button className='me-1' color='primary' type='submit'>
                  ثبت
                </Button>
                <Button outline color='secondary' type='reset' onClick={handleReset}>
                  انصراف
                </Button>
              </div>
            </Form>
          </Formik>
          
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default AddUser


         