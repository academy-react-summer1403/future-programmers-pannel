// ** Reactstrap Imports
import { Badge, Button, Card, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import pic from '../../../assets/images/avatars/1.png'

// ** Third Party Components
import { Archive, CheckCircle, ChevronDown, FileText, MoreVertical, Trash2 } from 'react-feather'
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
  {title:'oveiss', subtitle :'09111111111',active: "True" , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'},
  {title:'oveiss', subtitle :'09111111111',active: "False" , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'},
  {title:'oveiss', subtitle :'09111111111',active: "True" , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'}
];


export const columns = [
  {
    sortable: true,
    minWidth: '200px',
    name: ' نام دوره',
    selector: row => row.title,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='avatar-wrapper'>
            <Avatar className='me-1' img={pic} alt={row.title} imgWidth='32' />
          </div>
          <div className='d-flex flex-column'>
            <span className='text-truncate fw-bolder'>{row.title}</span>
            <small className='text-muted'>{row.subtitle}</small>
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
  {
    name: '  متن کامنت ',
    maxWidth:'400px',
    minWidth:'200px',
    selector: row => row.date
  },
  {
    name: ' وضعیت ',
    minWidth: '150px',
    // maxWidth:'100px',
    sortable: true,
    sortField: 'status',
    // selector: row => row.active,
    cell: row => (
      <Badge className='text-capitalize' color={row.active === "True" ? "light-success" : "light-danger"} pill>
        {row.active === "True" ? "تائید شده" : "تائید نشده"}
      </Badge>
    )
  },
  {
    name: 'اقدام',
    // minWidth: '100px',
    minWidth:'200px',
    cell: row => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
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
    </Card>
  )
}

export default CommentTab
