import Avatar from '@components/avatar'

import pic from '../../../assets/images/avatars/1.png'



export const columns =[
  {
  name: 'User',
  sortable: true,
  minWidth: '300px',
  sortField: 'fullName',
  selector: row => row.name,
  cell: row => (
    <div className='d-flex justify-content-left align-items-center'>
      {/* {renderClient(row)} */}
      <Avatar img={pic}/>
      <div className='d-flex flex-column'>
        {/* <Link
          to={`/apps/user/view/${row.id}`}
          className='user_name text-truncate text-body'
          onClick={() => store.dispatch(getUser(row.id))}
        > */}
          <span className='fw-bolder'>{row.family}</span>
        {/* </Link> */}
        <small className='text-truncate text-muted mb-0'>{row.email}</small>
      </div>
    </div>
  )
},
{
  name: 'Role',
  sortable: true,
  minWidth: '172px',
  sortField: 'role',
  selector: row => row.teacher,
  // cell: row => renderRole(row)
},
{
  name: 'استاد',
  minWidth: '138px',
  sortable: true,
  sortField: 'currentPlan',
  selector: row => row.teacher,
  // cell: row => <span className='text-capitalize'>{row.teacher}</span>
},
{
  name: 'Actions',
  minWidth: '100px',
  cell: row => (
    <div className='column-action'>
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            // tag={Link}
            className='w-100'
            // to={`/apps/user/view/${row.id}`}
            // onClick={() => store.dispatch(getUser(row.id))}
          >
            <FileText size={14} className='me-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            // tag='a' 
            href='/' 
            // className='w-100' onClick={e => e.preventDefault()}
           >
            <Archive size={14} className='me-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          {/* <DropdownItem
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
          </DropdownItem> */}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}
]

// export const columns = [
//   {
//     name: 'User',
//     sortable: true,
//     minWidth: '300px',
//     sortField: 'fullName',
//     selector: row => row.fullName,
//     cell: row => (
//       <div className='d-flex justify-content-left align-items-center'>
//         {renderClient(row)}
//         <div className='d-flex flex-column'>
//           <Link
//             to={`/apps/user/view/${row.id}`}
//             className='user_name text-truncate text-body'
//             onClick={() => store.dispatch(getUser(row.id))}
//           >
//             <span className='fw-bolder'>{row.fullName}</span>
//           </Link>
//           <small className='text-truncate text-muted mb-0'>{row.email}</small>
//         </div>
//       </div>
//     )
//   },
//   {
//     name: 'Role',
//     sortable: true,
//     minWidth: '172px',
//     sortField: 'role',
//     selector: row => row.role,
//     cell: row => renderRole(row)
//   },
//   {
//     name: 'Plan',
//     minWidth: '138px',
//     sortable: true,
//     sortField: 'currentPlan',
//     selector: row => row.currentPlan,
//     cell: row => <span className='text-capitalize'>{row.currentPlan}</span>
//   },
//   {
//     name: 'Billing',
//     minWidth: '230px',
//     sortable: true,
//     sortField: 'billing',
//     selector: row => row.billing,
//     cell: row => <span className='text-capitalize'>{row.billing}</span>
//   },
//   {
//     name: 'Status',
//     minWidth: '138px',
//     sortable: true,
//     sortField: 'status',
//     selector: row => row.status,
//     cell: row => (
//       <Badge className='text-capitalize' color={statusObj[row.status]} pill>
//         {row.status}
//       </Badge>
//     )
//   },
//   {
//     name: 'Actions',
//     minWidth: '100px',
//     cell: row => (
//       <div className='column-action'>
//         <UncontrolledDropdown>
//           <DropdownToggle tag='div' className='btn btn-sm'>
//             <MoreVertical size={14} className='cursor-pointer' />
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem
//               tag={Link}
//               className='w-100'
//               to={`/apps/user/view/${row.id}`}
//               onClick={() => store.dispatch(getUser(row.id))}
//             >
//               <FileText size={14} className='me-50' />
//               <span className='align-middle'>Details</span>
//             </DropdownItem>
//             <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
//               <Archive size={14} className='me-50' />
//               <span className='align-middle'>Edit</span>
//             </DropdownItem>
//             <DropdownItem
//               tag='a'
//               href='/'
//               className='w-100'
//               onClick={e => {
//                 e.preventDefault()
//                 store.dispatch(deleteUser(row.id))
//               }}
//             >
//               <Trash2 size={14} className='me-50' />
//               <span className='align-middle'>Delete</span>
//             </DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </div>
//     )
//   }
// ]