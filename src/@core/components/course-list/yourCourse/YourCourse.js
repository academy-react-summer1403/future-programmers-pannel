import { useEffect, useState } from 'react';
import { courseList, courseNumber } from '../../../../core/services/api/courseList';
import StatsHorizontal from './StatsHorizontal';
import { Col, Row } from 'reactstrap';
import CourseList from './CourseList';
import { User, UserCheck, UserMinus, UserX } from 'react-feather';

function YourCourse() {

    const [course, setCourse] = useState([])
    const [courseCount, setCourseCount] = useState([])
    const [statics , setStatics] = useState([]);
    const [search, setSearch] = useState('')
    const [expire, setExpire] = useState({ value: '', label: 'انتخاب وضعیت دوره' })
    const [currentPage, setCurrentPage] = useState(1)

  
  
    const getAllCourseList = async(currentPage, search, expire)=>{
        try {
        const result = await courseList(10 ,currentPage , search, expire)
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
        getAllCourseList(currentPage ,search, expire.value);
        getCourseStatic(); 
    },[currentPage, search, expire.value]);

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
        <CourseList course={course} setSearch={setSearch} setExpire={setExpire} expire={expire} currentPage={currentPage} setCurrentPage={setCurrentPage} courseCount={courseCount}/>
    </div>
    )
}

export default YourCourse