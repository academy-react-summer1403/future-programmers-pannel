import {Row, Col} from "reactstrap";
import StatsHorizontal from "../../../../@core/components/news-list/StatsHorizontal";
import Table from "../../../../@core/components/news-list/Table";
import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import { newsList } from "../../../../core/services/api/newsList";
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
      setAllNews(result.totalCount)
    } catch (error) {
      
    }
  }

  const getNewsStatic = async()=>{
    try {
      const result = await newsList(1000, 1)
      setStatics(result.news)
      console.log(setStatics)
    } catch (error) {
      
    }
  }
  // const expire = statics?.filter((e)=>e.isActive=="true")
  // const expireNumber = expire.length
  // const notExpire = statics?.filter((e)=>e.isActive="false")
  // const notExpireNumber = notExpire.length


  useEffect(()=>{
    getAllNewsList(search); 
    getNewsStatic();
},[search]);

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
          renderStats={<h3 className='fw-bolder mb-75'></h3>}
        />
      </Col>
      <Col lg='4' sm='6'>
        <StatsHorizontal
          color='danger'
          statTitle='خبر غیر فعال'
          icon={<UserX  size={20} />}
          renderStats={<h3 className='fw-bolder mb-75'></h3>}
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
    <Table news={news} setSearch={setSearch} setActivation={setActivation} activation={activation} />
  </div>

  )
}

export default index