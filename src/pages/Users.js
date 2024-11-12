import {Row, Col} from "reactstrap";
import StatsHorizontal from "../@core/components/StatsHorizontal/StatsHorizontal";
import Table from "../@core/components/StatsHorizontal/Table";
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import { useEffect, useState } from "react";
import { userList } from "../core/services/api/userList";



const Users = () => {

  const [users , setUsers] = useState([])
  console.log('qqq',users);

  const getAllUsersList = async()=>{
    try {
      const result = await userList()
      console.log('aaaaa',result)
      setUsers(result.listUser)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getAllUsersList(); 
},[]);

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
    <Table />
  </div>
    
  );
};

export default Users;
