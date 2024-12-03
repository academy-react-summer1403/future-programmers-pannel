import { Field, Form, Formik } from 'formik'
import React, { Fragment } from 'react'
import { Button, Col, Label, Row } from 'reactstrap'
import toast from 'react-hot-toast'
import { AddReplyCourseComment } from '../../../core/services/api/addCourseReplyComment'

function Reply({CommentId,CourseId}) {
    
    const handleReply = async(e)=>{
        const formData = new FormData();
        formData.append("CommentId",e.CommentId)
        formData.append("CourseId",e.CourseId)
        formData.append("Title",e.Title)
        formData.append("Describe",e.Describe)   
        const result = await AddReplyCourseComment(formData)
        toast.success(result.message)
    }
  return (
    <Fragment>
        <div className='text-center mb-2'>
            <h1 className='mb-1'>پاسخ خود را بنویسید</h1>
        </div>
        <Formik 
            initialValues={{CommentId:CommentId, CourseId:CourseId, Title:'پاسخ ادمین ', Describe:''}} 
            onSubmit={handleReply}
        >
            <Form>
                <Row className='gy-1 pt-75'>
                    <Col md={12} xs={12}>
                        <Field 
                        class="form-control form-control-md" 
                        id='Describe' 
                        name='Describe' 
                        />
                    </Col>
                    <Col xs={12} className='text-center mt-2 pt-50'>
                        <Button type='submit' className='me-1' color='primary'>
                        ثبت
                        </Button>
                    </Col>
                </Row> 
            </Form>
        </Formik>
    </Fragment>
    
  )
}

export default Reply