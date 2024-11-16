import {Row, Col} from "reactstrap";
import StatsHorizontal from "../../../../@core/components/users-list/StatsHorizontal";
import Table from "../../../../@core/components/users-list/Table";
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import { useEffect, useState } from "react";
import { courseList } from "../../../../core/services/api/courseList";

function index() {
  
  const [course, setCourse] = useState([])
  const [search, setSearch] = useState('')
  console.log(course)
  
  const getAllCourseList = async(search)=>{
    try {
      const result = await courseList("", "", search)
      setCourse(result.courseDtos)
    } catch (error) {
      
    }
  }


  useEffect(()=>{
    getAllCourseList(search); 
},[search]);

  return (
    <div className='app-user-list'>
    <Row>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='primary'
          statTitle='کل کاربران'
          icon={<User size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='danger'
          statTitle='ادمین ها'
          icon={<UserPlus size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='success'
          statTitle='اساتید'
          icon={<UserCheck size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='success'
          statTitle='دانشجویان'
          icon={<UserX size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
        />
      </Col>
    </Row>
    <Table course={course} setSearch={setSearch} />
  </div>

  )
}

export default index