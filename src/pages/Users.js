import {Row, Col} from "reactstrap";
import StatsHorizontal from "../@core/components/User-list/StatsHorizontal";
import UserTable from "../@core/components/User-list/UserTable";
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import { useEffect, useState } from "react";
import { userCount, userList } from "../core/services/api/userList";



const Users = () => {

  const [users , setUsers] = useState([])
  const [usersCount , setUserCount] = useState([])
  const [statics , setStatics] = useState([]);
  const [search, setSearch] = useState('')
  const [role, setRole] = useState({ value: '', id: null, label: 'انتخاب نقش کاربر' })
  const [activation, setActivation] = useState({ value: '', label: 'انتخاب وضعیت' })
  const [currentPage, setCurrentPage] = useState(1)



  const getAllUsersList = async(currentPage, search, role, activation)=>{
    try {
      const result = await userList(10, currentPage, search, role, activation)

      setUsers(result.listUser)
      
    } catch (error) {
      
    }
  }
  const getUserStatic = async()=>{
    try {
      const result = await userCount(1000, 1)
      setStatics(result.listUser)
      setUserCount(result.totalCount)
    } catch (error) {
      
    }
  }
  const admins = statics?.filter((e)=>e.userRoles=="Administrator")
  const adminNumber = admins.length
  const teacher = statics?.filter((e)=>e.userRoles=="Teacher")
  //  console.log(teacher)
  const teacherNumber = teacher.length  
  const student = statics?.filter((e)=>e.userRoles=="Student")
  const studentNumber = student.length

  
  

  useEffect(()=>{
    getAllUsersList(currentPage, search, role?.id, activation?.value); 
    getUserStatic(); 
},[currentPage, search, role?.id, activation?.value]);



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
    <UserTable users={users} setSearch={setSearch} setRole={setRole} role={role} setActivation={setActivation} activation={activation} currentPage={currentPage} setCurrentPage={setCurrentPage} usersCount={usersCount}/>
  </div>
    
  );
};

export default Users;
