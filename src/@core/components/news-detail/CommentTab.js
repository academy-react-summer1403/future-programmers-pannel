// ** Reactstrap Imports
import { Badge, Button, Card, DropdownItem, DropdownMenu, DropdownToggle, Modal, UncontrolledDropdown, ModalBody, ModalHeader } from 'reactstrap'
import pic from '../../../assets/images/avatars/1.png'
import { useState } from 'react'
// ** Third Party Components
import { CheckCircle, ChevronDown ,Eye , Trash2 } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Label Images
// import xdLabel from '@src/assets/images/icons/brands/xd-label.png'
// import vueLabel from '@src/assets/images/icons/brands/vue-label.png'
// import htmlLabel from '@src/assets/images/icons/brands/html-label.png'
// import reactLabel from '@src/assets/images/icons/brands/react-label.png'
// import sketchLabel from '@src/assets/images/icons/brands/sketch-label.png'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const data = [
  {title:'oveiss', subtitle :'09111111111', totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'},
  {title:'oveiss', subtitle :'09111111111', totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'},
  {title:'oveiss', subtitle :'09111111111', totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'}
];


export const columns = [
  {
    sortable: true,
    minWidth: '200px',
    name: ' نام کاربر',
    selector: row => row.title,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='avatar-wrapper'>
            <Avatar className='me-1' img={pic} alt={row.title} imgWidth='32' />
          </div>
          <div className='d-flex flex-column'>
            <span className='text-truncate fw-bolder'>{row.title}</span>
          </div>
        </div>
      )
    }
  },
  {
    name: '  عنوان کامنت ',
    maxWidth:'200px',
    minWidth:'150px',
    selector: row => row.date
  },
  // {
  //   name: '  متن کامنت ',
  //   maxWidth:'400px',
  //   minWidth:'200px',
  //   selector: row => row.date
  // },
  {
    sortable: true,
    minWidth: '400px',
    name: ' متن کامنت',
    // selector: row => row.title,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center' onClick={() => setShow(true)}>
            <span className='text-truncate fw-bolder' >{row.title}</span>
        </div>
      )
    }
  },
  {
    name: 'پاسخ ها',
    // minWidth: '100px',
    minWidth:'200px',
    cell: row => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <Eye size={16} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              // tag='a' 
              // href='/' 
              className='w-100' 
              // onClick={e => e.preventDefault()}
            >
              <CheckCircle size={14} className='me-50' />
              <span className='align-middle'> تائید</span>
            </DropdownItem>
            <DropdownItem
              // tag='a'
              // href='/'
              className='w-100'
              // onClick={e => {
              //   e.preventDefault()
              //   store.dispatch(deleteUser(row.id))
              // }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>حذف</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
 
]

const CommentTab = () => {
  const [show, setShow] = useState(false)
  return (
    <Card>
      <div className='react-dataTable user-view-account-projects'>
        <DataTable
          noHeader
          responsive
          columns={columns}
          data={data}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
        />
      </div>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          {/* <Form>
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
            </Row>
          </Form> */}
        </ModalBody>
      </Modal>
    </Card>
  )
}

export default CommentTab
