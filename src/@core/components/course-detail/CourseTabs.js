// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import {Bookmark, Link, Book, MessageCircle, FileText } from 'react-feather'

// ** User Components
// import InvoiceList from './InvoiceList'
import Groups from './Groups'
import Users from './Users'
import CommentTab from './CommentTab'
import Payment from './Payment'

const CourseTabs = ({ active, toggleTab }) => {
  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <Book className='font-medium-3 me-50' />
            <span className='fw-bold'>کاربر ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'>گروه ها </span>
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
            <span className='fw-bold'>پرداختی ها  </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <Users />
        </TabPane>
        <TabPane tabId='2'>
          <Groups />
        </TabPane>
        <TabPane tabId='3'>
        <CommentTab />
        </TabPane>
        <TabPane tabId='4'>
          <Payment />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default CourseTabs
