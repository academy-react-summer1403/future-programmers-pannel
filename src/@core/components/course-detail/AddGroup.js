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



const defaultValues = {
  groupName: 'Bob',
  groupCapacity: 'Barton',
}

const AddGroup = () => {
  // ** States
  const [show, setShow] = useState(false)

  const SignupSchema = yup.object().shape({
    groupName: yup.string().min(3).required(),
    groupCapacity: yup.string().min(3).required(),
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
                <strong>نام گروه</strong>: {data.groupName}
              </li>
              <li>
                <strong>ظرفیت گروه</strong>: {data.groupCapacity}
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }

  const handleReset = () => {
    reset({
      groupName: '',
      groupCapacity: ''
    })
  }

  return (
    <Fragment>
        <CardBody className='text-center'>
          <Button color='primary' onClick={() => setShow(true)}>
            افزودن گروه جدید
          </Button>
        </CardBody>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-md'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className=' mx-50 pb-5'>
          <div className=' mb-2'>
            <h1 className='mb-1'>لطفا اطلاعات گروه را وارد نمائید</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-1'>
              <Label className='form-label' for='groupName'>
                 نام گروه 
              </Label>
              <Controller
                id='groupName'
                name='groupName'
                defaultValue=''
                control={control}
                render={({ field }) => <Input {...field} placeholder='Bruce' invalid={errors.groupName && true} />}
              />
              {errors.groupName && <FormFeedback>{errors.groupName.message}</FormFeedback>}
            </div>
            <div className='mb-1'>
              <Label className='form-label' for='groupCapacity'>
                ظرفیت گروه
              </Label>
              <Controller
                id='groupCapacity'
                name='groupCapacity'
                defaultValue=''
                control={control}
                render={({ field }) => <Input {...field} placeholder='Wayne' invalid={errors.groupCapacity && true} />}
              />
              {errors.groupCapacity && <FormFeedback>{errors.groupCapacity.message}</FormFeedback>}
            </div>
            <div className='d-flex mt-1'>
              <Button className='me-1'  color='primary' type='submit'>
                ثبت
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default AddGroup