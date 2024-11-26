// ** Reactstrap Imports
import { Card } from 'reactstrap'
import pic from '../../../assets/images/portrait/small/500.png'

// ** Third Party Components
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { Link } from 'react-router-dom'


export const columns = [
  {
    sortable: true,
    minWidth: '160px',
    maxWidth: '200px',
    name: 'نام دوره',
    // selector: row => row.title,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='avatar-wrapper'>
          {row.tumbImageAddress !== null && row.tumbImageAddress !== 'Not-set' ? <Avatar className='me-1' img={row.tumbImageAddress} alt={row.title} imgWidth='32' />: <Avatar className='me-1' img={pic} imgWidth='32' />}
          </div>
          <div className='d-flex flex-column'>
          <Link to={`/courseDetail/${row?.courseId}`}>
            <span className='text-truncate fw-bolder'>{row.title}</span>
          </Link>
          </div>
        </div>
      )
    }
  },
  {
    name: 'توضیحات دوره',
    selector: row => row.describe,
    maxWidth: '400px',
  },
  {
    name: 'تاریخ رزرو دوره ',
    maxWidth:'200px',
    selector: row => row?.lastUpdate?.toString()?.slice(0,10)
  },
]

const UserProjectsList = ({detail}) => {
  return (
    <Card>
      <div className='react-dataTable user-view-account-projects'>
        <DataTable
          noHeader
          responsive
          columns={columns}
          data={detail?.courses}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
        />
      </div>
    </Card>
  )
}

export default UserProjectsList
