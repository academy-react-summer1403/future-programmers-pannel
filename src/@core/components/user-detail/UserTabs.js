// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import {Bookmark, Link, Book, MessageCircle, FileText } from 'react-feather'

// ** User Components
// import InvoiceList from './InvoiceList'
import ReserveTab from './ReserveTab'
import Connections from './Connections'
import UserProjectsList from './UserProjectsList'
import CommentTab from './CommentTab'
import OtherInformation from './OtherInformation'

const UserTabs = ({ active, toggleTab, detail }) => {
  const [course, setCourse] = useState([]);
  const [reserveCourse, setReserveCourse] = useState([])
  const [comment, setComment] = useState([])

  const courses = detail.courses;
  setCourse(courses);
  // console.log(course)

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <Book className='font-medium-3 me-50' />
            <span className='fw-bold'>دوره ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'>دوره های رزرو</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <MessageCircle className='font-medium-3 me-50' />
            <span className='fw-bold'>کامنت ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <FileText className='font-medium-3 me-50' />
            <span className='fw-bold'>سایر اطلاعات کاربر</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '5'} onClick={() => toggleTab('5')}>
            <Link className='font-medium-3 me-50' />
            <span className='fw-bold'>ارتباط با کاربر</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <UserProjectsList />
        </TabPane>
        <TabPane tabId='2'>
          <ReserveTab />
        </TabPane>
        <TabPane tabId='3'>
        <CommentTab />
        </TabPane>
        <TabPane tabId='4'>
          <OtherInformation />
        </TabPane>
        <TabPane tabId='5'>
          <Connections />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
