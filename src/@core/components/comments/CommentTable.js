// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import toast from 'react-hot-toast'

import Avatar from '@components/avatar'

import pic from '../../../assets/images/avatars/1.png'
import getComment from '../../../core/services/api/getComment'
import CommentSearchbar from './CommentSearchbar'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, XCircle, MoreVertical, Archive, Trash2, Sidebar, Eye } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  Badge
} from 'reactstrap'
import ReplyCourseCommentTab from './ReplyCourseCommentTab';
import { DeleteCourseComment } from '../../../core/services/api/deleteCourseComment';
import Reply from './Reply';
import { acceptComment } from '../../../core/services/api/acceptCourseComment';
import { RejectComment } from '../../../core/services/api/RejectCourseComment';
// ** Styles
// import '@styles/react/libs/react-select/_react-select.scss'
// import '@styles/react/libs/tables/react-dataTable-component.scss'

const CommentTable = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'انتخاب وضعیت' })
  const [comment, setComment] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)

  const getCourseComment = async(currentPage, search, currentStatus)=>{
    try{
      const result = await getComment(10 ,currentPage, search, currentStatus)
      setComment(result.comments)
      setTotalCount(result.totalCount)
    }catch (error){
      
    }
  }

 
  const handleDelete = async(e)=>{
    const result = await DeleteCourseComment(e)
    toast.success(result.message)
  }

  // acceptComment
  const handleAccept = async(e)=>{
    const result = await acceptComment(e)
    toast.success(result.message)
  }

  // RejectComment
  const handleReject = async(e)=>{
    const result = await RejectComment(e)
    toast.success(result.message)
  }

  useEffect(()=>{
    getCourseComment(currentPage, search, currentStatus.value);
  },[currentPage, search, currentStatus.value])


  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // ** Get data on mount
  // useEffect(() => {
  //   dispatch(getAllData())
  //   dispatch(
  //     getData({
  //       sort,
  //       sortColumn,
  //       q: searchTerm,
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //       role: currentRole.value,
  //       status: currentStatus.value,
  //       currentPlan: currentPlan.value
  //     })
  //   )
  // }, [dispatch, store.data.length, sort, sortColumn, currentPage])

  // ** User filter options

  const statusOptions = [
    { value: '', label: 'انتخاب وضعیت' },
    { value: true, label: 'تائید شده' },
    { value: false, label: 'تائید نشده' },
  ]

  // ** Function in get data on page change
  const handlePagination = page => {
    setCurrentPage(page.selected + 1)
  }


  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(totalCount / 10))
    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pe-1'}
      />
    )
  }


  const columns =[
    {
    name: 'کاربر',
    sortable: true,
    minWidth: '150px',
    sortField: 'fullName',
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>

        <div className='d-flex flex-column'>
          <Link
            to={'/userDetail/'+row.userId}
            className='user_name text-truncate text-body' 
          > 
            <span className='fw-bolder'>{row.userFullName}</span>
          </Link> 
          <small className='text-truncate text-muted mb-0'>{row.userId}</small>
        </div>
      </div>
    )
  },
  {
    name: 'عنوان کامنت ',
    sortable: true,
    minWidth: '150px',
    sortField: 'role',
    selector: row => row.commentTitle,
  },
  {
    name: 'متن کامنت',
    minWidth: '200px',
    sortable: true,
    sortField: 'currentPlan',
    selector: row => row.describe,
  },
  {
    name: ' دوره ',
    sortable: true,
    minWidth: '172px',
    sortField: 'role',
    selector: row => row.courseTitle,
  },
  {
    name: 'وضعیت',
    maxWidth: '50px',
    sortable: true,
    sortField: 'status',
    selector: row => row.accept,
    cell: row => (
      <Badge className='text-capitalize' color={row.accept === true ? "light-success" : "light-danger"} pill>
        {row.accept === true ? "تائید شده" : "تائید نشده"}
      </Badge>
    )
  },
  {
    name: 'پاسخ ها',
    maxWidth:'70px',
    cell: row => {
      const [show, setShow] = useState(false);
      return(
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            {row.replyCount > 0?<Eye size={16} className='cursor-pointer' onClick={()=>setShow(!show)}/>:'-' }
            
          </DropdownToggle>
        </UncontrolledDropdown>
        <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <ReplyCourseCommentTab CourseId={row?.courseId}  CommentId={row?.commentId}/>
              
        </ModalBody>
      </Modal>
      </div>)
    }
  },
  {
    name: 'پاسخ دادن',
    maxWidth:'70px',
    cell: row => {
      const [show, setShow] = useState(false);
      return(
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <FileText size={16} className='cursor-pointer' onClick={()=>setShow(!show)}/>
          </DropdownToggle>
        </UncontrolledDropdown>
        <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>

          <Reply CommentId={row.commentId} CourseId={row.courseId}/>
        </ModalBody>
      </Modal>
      </div>)
    }
  },
  {
    name: 'اقدام',
    minWidth: '200px',
    cell: row => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            
            {row.accept === true?<DropdownItem  
              className='w-100'
            >
              
              <XCircle size={14} className='me-50' />
              <span className='align-middle' onClick={()=>handleReject(row.commentId)}>عدم تائید</span>
            </DropdownItem>:<DropdownItem  
              className='w-100'
            >
              
              <XCircle size={14} className='me-50' />
              <span className='align-middle' onClick={()=>handleAccept(row.commentId)}>تائید</span>
            </DropdownItem>
            }
            <DropdownItem  
              className='w-100'
            >
              
              <XCircle size={14} className='me-50' />
              <span className='align-middle' onClick={()=>handleDelete(row.commentId)}>حذف</span>
            </DropdownItem>
            {/* commentId */}
            
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]

  return (
    <Fragment>
      
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>فیلترها</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
              <Label for='status-select'>جستجو</Label>
              <CommentSearchbar setSearch={setSearch}/>
            </Col>
            <Col className='my-md-0 my-1' md='4'>
              <Label for='plan-select'>وضعیت</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={statusOptions}
                value={currentStatus}
                onChange= {(e)=>setCurrentStatus(e)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className='overflow-hidden'>
        <div className='react-dataTable'>
          <DataTable
            noHeader
            subHeader
            sortServer
            pagination
            responsive
            paginationServer
            columns={columns}
            // onSort={handleSort}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            paginationComponent={CustomPagination}
            data={comment}
          />
        </div>
      </Card>

      
    </Fragment>
  )
}

export default CommentTable
