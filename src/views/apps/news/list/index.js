import {Row, Col} from "reactstrap";
import StatsHorizontal from "../../../../@core/components/news-list/StatsHorizontal";
import NewsTable from "../../../../@core/components/news-list/NewsTable";
import { User, UserCheck, UserX } from 'react-feather'
import { newsCount, newsList } from "../../../../core/services/api/newsList";
import { useEffect, useState } from "react";

function index() {

  const [news, setNews] = useState([])
  const [allNews, setAllNews] = useState([])
  const [statics , setStatics] = useState([]);
  const [search, setSearch] = useState('')
  const [activation, setActivation] = useState({ value: '', label: 'انتخاب وضعیت' })

  const getAllNewsList = async(search, activation)=>{
    try {
      const result = await newsList("", "", search, activation)
      setNews(result.news)
      
    } catch (error) {
      
    }
  }

  const getNewsStatic = async()=>{
    try {
      const result = await newsCount(1000, 1)
      setStatics(result.news)
      setAllNews(result.totalCount)
    } catch (error) {
      
    }
  }
  const active = statics?.filter((e)=>e.isActive==true)
  const activeNumber = active.length
  const inactive = statics?.filter((e)=>e.isActive=false)
  const inactiveNumber = inactive.length


  useEffect(()=>{
    getAllNewsList(search, activation?.value); 
    getNewsStatic();
},[search, activation?.value]);

// useEffect(() => {

// }, [])


  return (
    <div className='app-user-list'>
    <Row>
      <Col lg='4' sm='6'>
        <StatsHorizontal
          color='primary'
          statTitle='تعداد خبرها '
          icon={<User size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{allNews}</h3>}
        />
      </Col>
      <Col lg='4' sm='6'>
        <StatsHorizontal
          color='success'
          statTitle=' خبر فعال'
          icon={<UserCheck size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{activeNumber}</h3>}
        />
      </Col>
      <Col lg='4' sm='6'>
        <StatsHorizontal
          color='danger'
          statTitle='خبر غیر فعال'
          icon={<UserX  size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>{inactiveNumber}</h3>}
        />
      </Col>
      {/* <Col lg='3' sm='6'>
        <StatsHorizontal
          color='success'
          statTitle='دانشجویان'
          icon={<UserX size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
        />
      </Col> */}
    </Row>
    <NewsTable news={news} setSearch={setSearch} setActivation={setActivation} activation={activation} />
  </div>

  )
}

export default index