import {Row, Col} from "reactstrap";
import { useState } from "react";
import CourseTabs from "../../../../@core/components/course-list/CourseTabs";

function index() {
const [active, setActive] = useState('1')

const toggleTab = tab => {
  if (active !== tab) {
    setActive(tab)
  }
}

  return (
    <div className='app-user-view'>
    <Row>
      <Col xl='12' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
        <CourseTabs  active={active} toggleTab={toggleTab}/> {/**/}
      </Col>
    </Row>
  </div>
  )
}

export default index