// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import AvatarGroup from '@components/avatar-group'
import RoleCards from '@components/avatar-group/RoleCards'
import avatar1 from '../../../assets/images/portrait/small/administrator.jpg'
import avatar2 from '../../../assets/images/portrait/small/teacher.jpg'
import avatar3 from '../../../assets/images/portrait/small/student.jpg'
import avatar4 from '../../../assets/images/portrait/small/usual.png'

// ** Invoice List Sidebar
// import Sidebar from './Sidebar'

import Avatar from '@components/avatar'

import pic from '../../../assets/images/portrait/small/pic.jpg'
// import Earnings from './Earnings'
import ProductsSearchbar from './ProductsSearchbar'

// ** Table Columns
// import { columns } from './columns'

// ** Store & Actions
// import { getAllData, getData } from '../store'
// import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Trash, Share, Printer, MinusCircle, XCircle, FileText, File, Grid, Copy, MoreVertical, Archive } from 'react-feather'
import AddUser from './AddUser'
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
  Badge
} from 'reactstrap'


// ** Styles
// import '@styles/react/libs/react-select/_react-select.scss'
// import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
// const CustomHeader = ({ store, toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
//   // ** Converts table to CSV
//   function convertArrayOfObjectsToCSV(array) {
//     let result

//     const columnDelimiter = ','
//     const lineDelimiter = '\n'
//     const keys = Object.keys(store.data[0])

//     result = ''
//     result += keys.join(columnDelimiter)
//     result += lineDelimiter

//     array.forEach(item => {
//       let ctr = 0
//       keys.forEach(key => {
//         if (ctr > 0) result += columnDelimiter

//         result += item[key]

//         ctr++
//       })
//       result += lineDelimiter
//     })

//     return result
//   }

//   // ** Downloads CSV
//   function downloadCSV(array) {
//     const link = document.createElement('a')
//     let csv = convertArrayOfObjectsToCSV(array)
//     if (csv === null) return

//     const filename = 'export.csv'

//     if (!csv.match(/^data:text\/csv/i)) {
//       csv = `data:text/csv;charset=utf-8,${csv}`
//     }

//     link.setAttribute('href', encodeURI(csv))
//     link.setAttribute('download', filename)
//     link.click()
//   }
//   return (
//     <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
//       <Row>
//         <Col xl='6' className='d-flex align-items-center p-0'>
//           <div className='d-flex align-items-center w-100'>
//             <label htmlFor='rows-per-page'>Show</label>
//             <Input
//               className='mx-50'
//               type='select'
//               id='rows-per-page'
//               value={rowsPerPage}
//               onChange={handlePerPage}
//               style={{ width: '5rem' }}
//             >
//               <option value='10'>10</option>
//               <option value='25'>25</option>
//               <option value='50'>50</option>
//             </Input>
//             <label htmlFor='rows-per-page'>Entries</label>
//           </div>
//         </Col>
//         <Col
//           xl='6'
//           className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
//         >
//           <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
//             <label className='mb-0' htmlFor='search-invoice'>
//               Search:
//             </label>
//             <Input
//               id='search-invoice'
//               className='ms-50 w-100'
//               type='text'
//               value={searchTerm}
//               onChange={e => handleFilter(e.target.value)}
//             />
//           </div>

//           <div className='d-flex align-items-center table-header-actions'>
//             <UncontrolledDropdown className='me-1'>
//               <DropdownToggle color='secondary' caret outline>
//                 <Share className='font-small-4 me-50' />
//                 <span className='align-middle'>Export</span>
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem className='w-100'>
//                   <Printer className='font-small-4 me-50' />
//                   <span className='align-middle'>Print</span>
//                 </DropdownItem>
//                 <DropdownItem className='w-100' onClick={() => downloadCSV(store.data)}>
//                   <FileText className='font-small-4 me-50' />
//                   <span className='align-middle'>CSV</span>
//                 </DropdownItem>
//                 <DropdownItem className='w-100'>
//                   <Grid className='font-small-4 me-50' />
//                   <span className='align-middle'>Excel</span>
//                 </DropdownItem>
//                 <DropdownItem className='w-100'>
//                   <File className='font-small-4 me-50' />
//                   <span className='align-middle'>PDF</span>
//                 </DropdownItem>
//                 <DropdownItem className='w-100'>
//                   <Copy className='font-small-4 me-50' />
//                   <span className='align-middle'>Copy</span>
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>

//             <Button className='add-new-user' color='primary' onClick={toggleSidebar}>
//               Add New User
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   )
// }

const UserTable = ({users , setSearch, setRole, role, setActivation, activation, currentPage, setCurrentPage, usersCount}) => {
  // ** Store Vars
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.users)
// console.log(users)

  // ** States
  const [sort, setSort] = useState('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortColumn, setSortColumn] = useState('id')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })
  

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
  const roleOptions = [
    { value: '',id: null ,label: ' نقش کاربر' },
    { value: 'Administrator', id: 1, label: 'ادمین' },
    { value: 'Teacher',id: 2 ,label: 'استاد' },
    { value: 'Student',id: 5 ,label: 'دانشجو' },
    { value: 'Employee.Writer',id: 4 ,label: 'نویسنده' },
    // { value: 'subscriber', label: 'Subscriber' }
  ]

  const activationOptions = [
    { value:'', label: 'انتخاب وضعیت' },
    { value: true, label: 'فعال' },
    { value: false, label: 'غیرفعال' },
  ]



  // ** Function in get data on page change
  const handlePagination = page => {
    setCurrentPage(page.selected + 1)
  }

  // ** Function in get data on rows per page
  // const handlePerPage = e => {
  //   const value = parseInt(e.currentTarget.value)
  //   dispatch(
  //     getData({
  //       sort,
  //       sortColumn,
  //       q: searchTerm,
  //       perPage: value,
  //       page: currentPage,
  //       role: currentRole.value,
  //       currentPlan: currentPlan.value,
  //       status: currentStatus.value
  //     })
  //   )
  //   setRowsPerPage(value)
  // }

  // ** Function in get data on search query change
  // const handleFilter = val => {
  //   setSearchTerm(val)
  //   dispatch(
  //     getData({
  //       sort,
  //       q: val,
  //       sortColumn,
  //       page: currentPage,
  //       perPage: rowsPerPage,
  //       role: currentRole.value,
  //       status: currentStatus.value,
  //       currentPlan: currentPlan.value
  //     })
  //   )
  // }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(usersCount / 10))

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

  const RoleGenerator = ({ Roles }) => {
    var data = [
      {
        title: "Administrator",
        users: [],
      },
    ];
  
    if (
      Roles === null ||
      Roles === "" ||
      (typeof Roles === "string" &&
        Roles.indexOf("Administrator") === -1 &&
        Roles.indexOf("Student") === -1 &&
        Roles.indexOf("Teacher") === -1)
    ) {
      data[0].users.push({
        size: "md",
        title: "کاربر ساده",
        img: avatar4,
      });
    } else {
      let Admin = Roles.indexOf("Administrator");
      let Student = Roles.indexOf("Student");
      let Teacher = Roles.indexOf("Teacher");
  
      Student != -1 &&
        data[0].users.push({
          size: "md",
          title: "دانش آموز",
          img: avatar3,
        });
      Teacher != -1 &&
        data[0].users.push({
          size: "md",
          title: "استاد",
          img: avatar2,
        });
      Admin != -1 &&
        data[0].users.push({
          size: "md",
          title: "ادمین",
          img: avatar1,
        });
    }
  
    return <RoleCards data={data} />;
  };

  // ** Table data to render
  // const dataToRender = () => {
  //   const filters = {
  //     role: currentRole.value,
  //     currentPlan: currentPlan.value,
  //     status: currentStatus.value,
  //     q: searchTerm
  //   }

  //   const isFiltered = Object.keys(filters).some(function (k) {
  //     return filters[k].length > 0
  //   })

  //   if (store.data.length > 0) {
  //     return store.data
  //   } else if (store.data.length === 0 && isFiltered) {
  //     return []
  //   } else {
  //     return store.allData.slice(0, rowsPerPage)
  //   }
  // }

  // const handleSort = (column, sortDirection) => {
  //   setSort(sortDirection)
  //   setSortColumn(column.sortField)
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
  // }


  const columns =[
    {
    name: 'کاربر',
    sortable: true,
    // minWidth: '200px',
    maxWidth: '200px',
    sortField: 'fullName',
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {row.pictureAddress !== null && row.pictureAddress !== 'Not-set' ? <Avatar img={row.pictureAddress } className='me-1'/>: <Avatar img={pic} className='me-1'/>}
        <div className='d-flex flex-column'>
          <Link
            to={'/userDetail/'+row.id}
            className='user_name text-truncate text-body' 
          > 
            <span className='fw-bolder'>{row.fname??'بدون نام'}</span>
          </Link> 
          <small className='text-truncate text-muted mb-0'>{row.lname}</small>
        </div>
      </div>
    )
  },
  {
    name: 'نقش کاربر',
    sortable: true,
    maxWidth: '160px',
    sortField: 'role',
    cell: row => <RoleGenerator  Roles={row.userRoles}/>
  },
  {
    name: 'ایمیل',
    maxWidth: '300px',
    sortable: true,
    sortField: 'currentPlan',
    selector: row => row.gmail,
  },
  {
    name: 'وضعیت',
    maxWidth:'150px',
    sortable: true,
    sortField: 'status',
    cell: row => (
      <Badge className='text-capitalize' color={row.active === "True" ? "light-success" : "light-danger"} pill>
        {row.active === "True" ? "فعال" : "غیرفعال"}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    maxWidth:'200px',
    cell: row => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              className='w-100'
            >
              <FileText size={14} className='me-50' />
              <Link to={'/userDetail/'+row.id} >
                <span className='align-middle'>جزئیات</span>
              </Link>
            </DropdownItem>
            <DropdownItem 
              className='w-100'
            >
              <XCircle  size={14} className='me-50' />
              <span className='align-middle'>حذف</span>
            </DropdownItem>
            <DropdownItem
              className='w-100' 
            >
              <MinusCircle size={14} className='me-50' />
              <span className='align-middle'>غیرفعال کردن</span>
            </DropdownItem>
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
            <Col md='3'>
              <Label for='role-select'>نقش کاربر</Label>
              <Select
                isClearable={false}
                value={role}
                options={roleOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
                onChange= {(e)=>setRole(e)}
              />
            </Col>
            <Col className='my-md-0 my-1' md='3'>
              <Label for='plan-select'>وضعیت فعالیت</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={activationOptions}
                value={activation}
                onChange={(e)=>setActivation(e)}
              />
            </Col>
            {/* <Col className='my-md-0 my-1' md='4'>
              <Label for='plan-select'>Plan</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={planOptions}
                value={currentPlan}
                onChange={data => {
                  setCurrentPlan(data)
                  dispatch(
                    getData({
                      sort,
                      sortColumn,
                      q: searchTerm,
                      page: currentPage,
                      perPage: rowsPerPage,
                      role: currentRole.value,
                      currentPlan: data.value,
                      status: currentStatus.value
                    })
                  )
                }}
              />
            </Col> */}

            <Col md='3'>
              <Label for='status-select'>Search</Label>
              <ProductsSearchbar setSearch={setSearch}/>
            </Col>
            <Col md='3'>
              <AddUser />
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
            data={users}
            // subHeaderComponent={
            //   <CustomHeader
            //     store={store}
            //     searchTerm={searchTerm}
            //     rowsPerPage={rowsPerPage}
            //     handleFilter={handleFilter}
            //     handlePerPage={handlePerPage}
            //     toggleSidebar={toggleSidebar}
            //   />
            // }
          />
        </div>
      </Card>

      {/* <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
    </Fragment>
  )
}

export default UserTable
