import {Row, Col} from "reactstrap";
import StatsHorizontal from "../../../../@core/components/news-list/StatsHorizontal";
import Table from "../../../../@core/components/news-list/Table";
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

function index() {
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

  )
}

export default index