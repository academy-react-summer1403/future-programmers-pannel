import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import WizardVertical from '../../../../@core/components/course-add/WizardVertical'

function index() {
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <WizardVertical />
        </Col>
      </Row>
    </Fragment>
  )
}

export default index