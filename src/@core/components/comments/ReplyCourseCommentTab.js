// ** Reactstrap Imports
import { Card } from 'reactstrap'

import { useEffect, useState } from 'react'
// ** Third Party Components
import { ChevronDown} from 'react-feather'
import DataTable from 'react-data-table-component'


// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { getCourseRepliesComment } from '../../../core/services/api/getCourserepliesComment'
import { Link } from 'react-router-dom'





export const columns = [
  {
    sortable: true,
    maxWidth: '150px',
    name: ' نام کاربر',
    cell: row => {
      return (
        <Link
            to={'/userDetail/'+row.userId}
            className='user_name text-truncate text-body'
        >
          <span className='text-truncate fw-bolder'>{row.author}</span>
        </Link>
      )
    }
  },
  
  {
    sortable: true,
    minWidth: '200px',
    name: ' متن پاسخ',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
            <span className='text-truncate fw-bolder' >{row.describe}</span>
        </div>
      )
    }
  },
]

const ReplyCourseCommentTab = ({CourseId, CommentId}) => {
  
  
  const [replies, setReplies] = useState([])
  


  const getReplies = async ()=>{
    try {
        const result = await getCourseRepliesComment(CourseId, CommentId)
        setReplies(result)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
  getReplies(CourseId, CommentId);
}, [])
  return (
    <Card>
      <div className='react-dataTable user-view-account-projects'>
        <DataTable
          noHeader
          responsive
          columns={columns}
          data={replies}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
        />
      </div>
      
    </Card>
  )
}

export default ReplyCourseCommentTab
