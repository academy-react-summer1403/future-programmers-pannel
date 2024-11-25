// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5> خوش آمدید</h5>
        <CardText className='font-small'>خوش آمدید</CardText>
        
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
