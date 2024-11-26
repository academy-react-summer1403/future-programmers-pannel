// ** Third Party Components
import classnames from 'classnames'
import { Users, BookOpen, UserCheck, PenTool } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { statics } from '../../../core/services/api/siteStatics'
import getComment from '../../../core/services/api/getComment'

const StatsCard = ({ cols }) => {
  

  const renderData = () => {

    const [number, setNumber] = useState([])
    const [comment, setComment] = useState([])

    const getSiteStatics = async()=>{
      try {
      const result = await statics()
      setNumber(result)
      } catch (error) {
      
      }
    }

    const getusercomment = async()=>{
      try {
        const result = await getComment(10000, 1)
        setComment(result.comments)
      } catch (error) {
        
      }
    }
    const usercomment = comment.length
    console.log(usercomment)



  useEffect(()=>{
    getSiteStatics();
    getusercomment();
},[]);
const data = [
  {
    title: number?.teacherCount,
    subtitle: 'کاربران',
    color: 'light-primary',
    icon: <Users size={24} />
  },
  {
    title: number?.courseCount,
    subtitle: 'دوره ها',
    color: 'light-info',
    icon: <BookOpen size={24} />
  },
  {
    title: number?.teacherCount,
    subtitle: 'اساتید',
    color: 'light-danger',
    icon: <UserCheck size={24} />
  },
  {
    title: usercomment,
    subtitle: 'کامنت ها',
    color: 'light-success',
    icon: <PenTool size={24} />
  }
]


    return data.map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = index === 2 ? 'sm' : colMargin[0]
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <Avatar color={item.color} icon={item.icon} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>آمار سایت</CardTitle>
        <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
