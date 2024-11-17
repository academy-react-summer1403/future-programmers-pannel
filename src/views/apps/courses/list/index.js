import {Row, Col} from "reactstrap";
import StatsHorizontal from "../../../../@core/components/users-list/StatsHorizontal";
import Table from "../../../../@core/components/users-list/Table";
import { User, UserPlus, UserCheck, UserX, UserMinus } from 'react-feather'
import { useEffect, useState } from "react";
import { courseList, courseNumber } from "../../../../core/services/api/courseList";

function index() {
  
  const [course, setCourse] = useState([])
  const [courseCount, setCourseCount] = useState([])
  const [statics , setStatics] = useState([]);
  const [search, setSearch] = useState('')
  const [expire, setExpire] = useState({ value: '', label: 'انتخاب وضعیت دوره' })
  
  
  const getAllCourseList = async(search, expire)=>{
    try {
      const result = await courseList("", "", search, expire)
      setCourse(result.courseDtos)
      
    } catch (error) {
      
    }
  }

  const getCourseStatic = async()=>{
    try {
      const result = await courseNumber(1000, 1)
      setStatics(result.courseDtos)
      setCourseCount(result.totalCount)
    } catch (error) {
      
    }
  }

  const active = statics?.filter((e)=>e.isActive==true)
  const activeNumber = active.length
  const inactive = statics?.filter((e)=>e.isActive==false)
  const inactiveNumber = inactive.length
 
  const deleted = statics?.filter((e)=>e.isdelete==true)
  const deletedNumber = deleted.length


  useEffect(()=>{
    getAllCourseList(search, expire);
    getCourseStatic(); 
},[search, expire]);

  return (
    <div className='app-user-list'>
    <Row>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='primary'
          statTitle='مجموع دوره ها '
          icon={<User size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{courseCount}</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='success'
          statTitle='دوره های فعال'
          icon={<UserCheck size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{activeNumber}</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='secondary'
          statTitle='دوره های منقضی شده'
          icon={<UserMinus size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{inactiveNumber}</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='danger'
          statTitle='دوره های حذف شده'
          icon={<UserX size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{deletedNumber}</h3>}
        />
      </Col>
    </Row>
    <Table course={course} setSearch={setSearch} setExpire={setExpire} expire={expire}/>
  </div>

  )
}

export default index