// ** Reactstrap Imports
import { Badge, Button, Card } from 'reactstrap'
import pic from '../../../assets/images/portrait/small/500.png'
import { Link } from "react-router-dom";

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
    minWidth: '150px',
    maxWidth: '230px',
    name: 'نام دوره',
    selector: row => row.title,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='avatar-wrapper'>
            <Avatar className='me-1' img={pic} alt={row.title} imgWidth='32' />
          {/* {row?.tumbImageAddress !== null && row?.tumbImageAddress !== 'Not-set' ? <Avatar className='me-1' img={row?.tumbImageAddress} alt={row.title} imgWidth='32' />: <Avatar className='me-1' img={pic} imgWidth='32' />} */}

          </div>
          <div className='d-flex flex-column'>
            <Link to={`/courseDetail/${row?.courseId}`}>
            <span className='text-truncate fw-bolder'>{row?.courseName}</span>
            </Link>
          </div>
        </div>
      )
    }
  },
  {
    name: 'تاریخ رزرو دوره ',
    maxWidth:'200px',
    selector: row => row?.reserverDate?.toString()?.slice(0,10)
  },
  {
    name: ' وضعیت دوره',
    minWidth: '150px',
    // maxWidth:'100px',
    sortable: true,
    sortField: 'status',
    // selector: row => row?.active,
    cell: row => (
      <Badge className='text-capitalize' color={row?.accept == true ? "light-success" : "light-danger"} pill>
        {row?.accept === true ? "فعال " : " غیرفعال"}
      </Badge>
    )
  },
]

const ReserveTab = ({detail}) => {
  const courseId = detail?.coursesReseves?.courseId;
  const reserveId = detail?.coursesReseves?.reserveId;
  const studentId = detail?.coursesReseves?.studentId;
  // const reserverDate = detail?.reserverDate?.toString()

  return (
    <Card>
      <div className='react-dataTable user-view-account-projects'>
        <DataTable
          noHeader
          responsive
          columns={columns}
          data={detail?.coursesReseves}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
        />
      </div>
    </Card>
  )
}

export default ReserveTab
