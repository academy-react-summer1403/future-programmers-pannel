import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
} from "reactstrap";
import CardMedal from "../@core/components/card-medal/CardMedal";
import StatsCard from "../@core/components/state-card/StatsCard";
import GoalOverview from "../@core/components/goal-overview/GoalOverview";
import RevenueReport from "../@core/components/RevenueReport/RevenueReport";
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useContext } from "react";
import { useSkin } from '@hooks/useSkin'

const Home = () => {
  const { colors } = useContext(ThemeColors),
  { skin } = useSkin(),
  labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
  gridLineColor = 'rgba(200, 200, 200, 0.2)',
  successColorShade = '#28dac6'


  return (
    <div>
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <CardMedal />
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='8' sm='12'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
        <Col lg='4' sm='12'>
        {/* <div>how</div> */}
          <GoalOverview success={colors.success.main} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
