// ** Reactstrap Imports
import { Badge, Button, Card, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import pic from '../../../assets/images/portrait/small/500.png'

// ** Third Party Components
import { Archive, ChevronDown, FileText, MoreVertical, Trash2 } from 'react-feather'
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
import { useEffect, useState } from 'react'
import getComment from '../../../core/services/api/getComment'
import { Link } from 'react-router-dom'


// const data = [
//   {title:'oveiss', subtitle :'09111111111',active: "True" , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'},
//   {title:'oveiss', subtitle :'09111111111',active: "False" , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'},
//   {title:'oveiss', subtitle :'09111111111',active: "True" , totalTasks:'sdsdsdsdsdsd', statuse : 'فعال', date:'2022/12/23', gender:"مرد", identification:'99887766', phone:'0922222222', role:'admin'}
// ];


export const columns = [
  {
    sortable: true,
    maxWidth: '450px',
    minWidth: '100px',
    name: ' نام دوره',
    selector: row => row?.courseTitle,
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='avatar-wrapper'>
            <Avatar className='me-1' img={pic} alt={row.title} imgWidth='32' />
          </div>
          <div className='d-flex flex-column '>
          <Link to={`/courseDetail/${row?.courseId}`}>
            <span className='text-truncate fw-bolder'>{row?.courseTitle}</span>
          </Link>
          </div>
        </div>
      )
    }
  },
  {
    name: '  عنوان کامنت ',
    maxWidth:'200px',
    minWidth:'150px',
    selector: row => row?.commentTitle
  },
  {
    name: '  متن کامنت ',
    maxWidth:'400px',
    minWidth:'200px',
    selector: row => row?.describe
  },
  {
    name: ' وضعیت ',
    minWidth: '150px',
    // maxWidth:'100px',
    sortable: true,
    sortField: 'status',
    // selector: row => row.active,
    cell: row => (
      <Badge className='text-capitalize' color={row.accept === true ? "light-success" : "light-danger"} pill>
        {row.accept === true ? "تائید شده" : "تائید نشده"}
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
              <Archive size={14} className='me-50' />
              <span className='align-middle'>عدم تائید</span>
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

const CommentTab = ({Id}) => {
  const [comment, setComment] = useState([])
// console.log(Id)
 

    const getusercomment = async()=>{
      try {
        const result = await getComment(10000, 1)
        setComment(result.comments)
      } catch (error) {
        
      }
    }
    const usercomment = comment?.filter((e)=>e.userId === Id)
    // console.log(usercomment)

    useEffect(() => {
      getusercomment();
    }, [])

  return (
    <Card>
      <div className='react-dataTable user-view-account-projects'>
        <DataTable
          noHeader
          responsive
          columns={columns}
          data={usercomment}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
        />
      </div>
    </Card>
  )
}

export default CommentTab
