import { Col, Row } from "reactstrap"
// ** Styles
import '@styles/react/apps/app-users.scss'

// import { getUser } from '../@core/components/user-detail/data2'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
import CourseInfoCard from "../@core/components/course-detail/CourseInfoCard"
import CourseTabs from "../@core/components/course-detail/CourseTabs"
import getCourseDetail from '../core/services/api/getCourseDetail'

function CourseDetail() {
      // ** Store Vars
//   const store = useSelector(state => state.users)
//   const dispatch = useDispatch()

//   // ** Get suer on mount
//   useEffect(() => {
//     dispatch(getUser(parseInt(id)))
//   }, [dispatch])

  const [active, setActive] = useState('1')
  const [detail, setDetail]=useState([])

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
// ** Hooks
  const { id } = useParams()
  

  const getDetail = async ()=>{
    try {
        const result = await getCourseDetail(id)
        setDetail(result)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
  getDetail(id);
}, [])

  
  return (
    <div className='app-user-view'>
    <Row>
      <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
        <CourseInfoCard detail={detail} />
      </Col>
      <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
        <CourseTabs  active={active} toggleTab={toggleTab} detail={detail}/> 
      </Col>
    </Row>
  </div>
  
  )
}

export default CourseDetail