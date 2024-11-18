// ** Reactstrap Imports
import { Badge, Button, Card } from 'reactstrap'
import pic from '../../../assets/images/avatars/1.png'

// ** Third Party Components
import { ChevronDown } from 'react-feather'
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
  {title:'oveiss', subtitle :'09111111111',active: true , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'},
  {title:'oveiss', subtitle :'09111111111',active: false , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'},
  {title:'oveiss', subtitle :'09111111111',active: true , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'}
];


export const columns = [
  {
    sortable: true,
    maxWidth: '200px',
    name: 'نام دوره',
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
    name: 'تاریخ رزرو دوره ',
    maxWidth:'150px',
    selector: row => row.date
  },
  {
    name: ' وضعیت دوره',
    minWidth: '150px',
    // maxWidth:'100px',
    sortable: true,
    sortField: 'status',
    // selector: row => row.active,
    cell: row => (
      <Badge className='text-capitalize' color={row.active === "True" ? "light-success" : "light-danger"} pill>
        {row.active === "True" ? "رزرو شده" : "رزرو نشده"}
      </Badge>
    )
  },
  {
    name: 'عملیات',
    // minWidth: '100px',
    maxWidth:'200px',
    cell: row => (
      <div className='column-action'>
        {/* <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag={Link}
              className='w-100'
              to={`/apps/user/view/${row.id}`}
              onClick={() => store.dispatch(getUser(row.id))}
            >
              <FileText size={14} className='me-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem
              tag='a' 
              href='/' 
              className='w-100' onClick={e => e.preventDefault()}
            >
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteUser(row.id))
              }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
        <Button color='relief-secondary'>جزئیات</Button>
      </div>
    )
  }
 
]

const ReserveTab = () => {
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

export default ReserveTab
