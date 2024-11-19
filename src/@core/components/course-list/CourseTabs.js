// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import {Bookmark, Link, Book, MessageCircle, FileText } from 'react-feather'

// ** User Components
// import InvoiceList from './InvoiceList'
// import  from './ReserveTab'
// import  from './Connections'
import YourCourse from './YourCourse'
import TeacherCourse from './TeacherCourse'
import ReserveCourse from './ReserveCourse'

const CourseTabs = ({ active, toggleTab }) => {
  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <Book className='font-medium-3 me-50' />
            <span className='fw-bold'> دوره های شما</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'>دوره های رزرو شده</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <MessageCircle className='font-medium-3 me-50' />
            <span className='fw-bold'> دوره های استاد</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <YourCourse />
        </TabPane>
        <TabPane tabId='2'>
          <ReserveCourse />
        </TabPane>
        <TabPane tabId='3'>
        <TeacherCourse />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default CourseTabs
