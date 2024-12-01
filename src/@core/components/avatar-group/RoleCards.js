// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Row, Col} from "reactstrap";

// ** Custom Components
import AvatarGroup from "./";

// ** FAQ Illustrations

const RoleCards = ({ data }) => {
  return (
    <Fragment>
      <Row>
        {data.map((item, index) => {
          return (
            <Col key={index} xl={4} md={6}>
              <AvatarGroup data={item.users} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default RoleCards;
