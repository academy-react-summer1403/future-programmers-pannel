// ** Third Party Components
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'

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
  Form,
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

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' }
]

const defaultValues = {
  firstName: 'Bob',
  lastName: 'Barton',
  username: 'bob.dev'
}

const AddUser = () => {
  // ** States
  const [show, setShow] = useState(false)

  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    lastName: yup.string().min(3).required(),
    firstName: yup.string().min(3).required(),
    number: yup.string().min(11).required(),
    password: yup.string().min(6).required()
  })

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      toast(
        <div className='d-flex'>
          <div className='me-1'>
            <Avatar size='sm' color='success' icon={<Check size={12} />} />
          </div>
          <div className='d-flex flex-column'>
            <h6>Form Submitted!</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <strong>firstName</strong>: {data.firstName}
              </li>
              <li>
                <strong>lastName</strong>: {data.lastName}
              </li>
              <li>
                <strong>email</strong>: {data.email}
              </li>
              <li>
                <strong>phone number</strong>: {data.number}
              </li>
              <li>
                <strong>password</strong>: {data.password}
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }

  const handleReset = () => {
    reset({
      email: '',
      number: '',
      password: '',
      firstName: '',
      lastName: ''
    })
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-1'>
              <Label className='form-label' for='firstName'>
                نام
              </Label>
              <Controller
                id='firstName'
                name='firstName'
                defaultValue=''
                control={control}
                render={({ field }) => <Input {...field} placeholder='Bruce' invalid={errors.firstName && true} />}
              />
              {errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
            </div>
            <div className='mb-1'>
              <Label className='form-label' for='lastName'>
                نام خانوادگی
              </Label>
              <Controller
                id='lastName'
                name='lastName'
                defaultValue=''
                control={control}
                render={({ field }) => <Input {...field} placeholder='Wayne' invalid={errors.lastName && true} />}
              />
              {errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
            </div>
            <div className='mb-1'>
              <Label className='form-label' for='email'>
                ایمیل
              </Label>
              <Controller
                id='email'
                name='email'
                defaultValue=''
                control={control}
                render={({ field }) => (
                  <Input {...field} type='email' placeholder='bruce.wayne@email.com' invalid={errors.email && true} />
                )}
              />
              {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
            </div>
            <div className='mb-1'>
              <Label className='form-label' for='number'>
                شماره موبایل
              </Label>
              <Controller
                id='number'
                name='number'
                defaultValue=''
                control={control}
                render={({ field }) => (
                  <Input {...field} type='number' placeholder='09111111111' invalid={errors.number && true} />
                )}
              />
              {errors.number && <FormFeedback>{errors.number.message}</FormFeedback>}
            </div>
            <div className='mb-1'>
              <Label className='form-label' for='password'>
                رمز عبور
              </Label>
              <Controller
                id='password'
                name='password'
                defaultValue=''
                control={control}
                render={({ field }) => (
                  <Input {...field} type='password' placeholder='Password' invalid={errors.password && true} />
                )}
              />
              {errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
            </div>
            <div className='mb-1'>
              <Label className='form-label' for='password'>
                تعیین نقش کاربر
              </Label>
             {/* <Controller
                id='password'
                name='password'
                defaultValue=''
                control={control}
                render={({ field }) => (
                  <Input {...field} type='password' placeholder='Password' invalid={errors.password && true} />
                )}
              />
              {errors.password && <FormFeedback>{errors.password.message}</FormFeedback>} */}
              <div className='mt-1'>
                <div className='form-check form-check-inline'>
                  <Input type='checkbox' defaultChecked id='student' />
                  <Label for='student' className='form-check-label'>
                    دانشجو
                  </Label>
                </div>
                <div className='form-check form-check-inline'>
                  <Input type='checkbox' id='teacher' />
                  <Label for='teacher' className='form-check-label'>
                    استاد
                  </Label>
                </div>
              </div>
            </div>
            <div className='d-flex mt-1'>
              <Button className='me-1' color='primary' type='submit'>
                ثبت
              </Button>
              <Button outline color='secondary' type='reset' onClick={handleReset}>
                انصراف
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default AddUser


         