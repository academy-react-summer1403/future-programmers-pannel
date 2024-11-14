import {Row, Col} from "reactstrap";
import StatsHorizontal from "../@core/components/StatsHorizontal/StatsHorizontal";
import Table from "../@core/components/StatsHorizontal/Table";
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import { useEffect, useState } from "react";
import { userList } from "../core/services/api/userList";



const Users = () => {

  const [users , setUsers] = useState([])
  const [usersCount , setUserCount] = useState([])
  // console.log("ttt", usersCount)
  const [admin , setAdmin] = useState([])
  const [statics , setStatics] = useState([]);
  // console.log("qq", statics)


  const getAllUsersList = async()=>{
    try {
      const result = await userList()
      // console.log('aaaaa',result)

      setUsers(result.listUser)
      setUserCount(result.totalCount)
    } catch (error) {
      
    }
  }
  const getUserStatic = async()=>{
    try {
      const result = await userList(1000, 1)
      setStatics(result.listUser)
    } catch (error) {
      
    }
  }
  const admins = statics?.filter((e)=>e.userRoles=="Administrator")
  const adminNumber = admins.length
  const teacher = statics?.filter((e)=>e.userRoles=="Teacher")
  const teacherNumber = teacher.length
  const student = statics?.filter((e)=>e.userRoles=="Student")
  const studentNumber = student.length

  
  

  useEffect(()=>{
    getAllUsersList(); 
    getUserStatic(); 
},[]);



  return (
    <div className='app-user-list'>
    <Row>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='primary'
          statTitle='کل کاربران'
          icon={<User size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{usersCount}</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='danger'
          statTitle='ادمین ها'
          icon={<UserPlus size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{adminNumber}</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='success'
          statTitle='اساتید'
          icon={<UserCheck size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{teacherNumber}</h3>}
        />
      </Col>
      <Col lg='3' sm='6'>
        <StatsHorizontal
          color='success'
          statTitle='دانشجویان'
          icon={<UserX size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{studentNumber}</h3>}
        />
      </Col>
    </Row>
    <Table />
  </div>
    
  );
};

export default Users;
