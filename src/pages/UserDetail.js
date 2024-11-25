import { Col, Row } from "reactstrap"
import UserInfoCard from "../@core/components/user-detail/UserInfoCard"
import UserTabs from "../@core/components/user-detail/UserTabs"
import getUserDetail from "../core/services/api/getUserDetail";
// ** Styles
import '@styles/react/apps/app-users.scss'

// import { getUser } from '../@core/components/user-detail/data2'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function UserDetail() {
  const [active, setActive] = useState('1')
  const [detail, setDetail]=useState([])
  // console.log(detail)

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  // ** Hooks
  const { id } = useParams()

  const getDetail = async ()=>{
    try {
        const result = await getUserDetail(id)
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
        <UserInfoCard detail={detail} />
      </Col>
      <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
        <UserTabs  active={active} toggleTab={toggleTab} detail={detail}/>
      </Col>
    </Row>
  </div>
  )
}

export default UserDetail