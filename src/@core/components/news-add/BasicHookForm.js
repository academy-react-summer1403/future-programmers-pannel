// ** Third Party Components
import toast from 'react-hot-toast'
import { Check } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, Label, Input, Form, Row, Col } from 'reactstrap'

import { selectThemeColors } from '@utils'
import { useState, useEffect } from 'react'
import getNewsCategory from '../../../core/services/api/getNewsCategory'

// const newsCategory = [
//   { id: '1', categoryName: 'اخبار پژوهشگاه' },
//   { id: '2', categoryName: 'اخبار حواشی پژوهشگاه' }
// ]

const data = {subject:'Tailwind css',googleTopic:"asqwerty",googleDesc:'23', shortDesc :'09111111111', keyWord:'sdsdsdsdsdsd', newsCategory : 'فعال', desc:'99887766'};

const BasicHookForm = () => {
  const [newsCategory, setNewsCategory] = useState([])
  const [addNews, setAddNews]= useState({Title:'', GoogleTitle:'',GoogleDescribe:'',MiniDescribe:'',Describe:'',Keyword:'',IsSlider:'',NewsCatregoryId:'',Image:''})
  console.log(newsCategory)
  // console.log(addNews)

  const getCategories = async()=>{
    try {
    const result = await getNewsCategory()
    setNewsCategory(result)
    } catch (error) {
    
    }
}

const postNews = async()=>{
  try {
  const result = await getNewsCategory()
  setAddNews(result)
  } catch (error) {
  
  }
}

useEffect(()=>{
  getCategories();
},[]);



  
  // ** Hooks
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = addNews => {
    if (Object.values(addNews).every(field => field.length > 0)) {
      toast(
        <div className='d-flex'>
          <div className='me-1'>
            <Avatar size='sm' color='success' icon={<Check size={12} />} />
          </div>
          <div className='d-flex flex-column'>
            <h6>خبر با موفقیت ثبت شد</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <strong>عنوان خبر</strong>: {addNews.Title}
              </li>
              <li>
                <strong>توضیح کوتاه</strong>: {addNews.MiniDescribe}
              </li>
              <li>
                <strong>کلمات کلیدی</strong>: {addNews.Keyword}
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      for (const key in addNews) {
        if (addNews[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleReset = () => {
    reset({
      emailBasic: '',
      firstNameBasic: '',
      lastNameBasic: ''
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>اطلاعات را وارد نمائید</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className='gy-1 pt-75'>
            <Col md={6} xs={12}>
                <Label className='form-label' for='subject'>
                  عنوان خبر
                </Label>
                <Input onChange={(e)=>setAddNews({...addNews,Title:e.target.value})} id='subject' placeholder='John' invalid={errors.subject && true} />

                {/* <Controller
                  defaultValue=''
                  control={control}
                  id='subject'
                  name='subject' */}

                  {/* render={({ field }) => (
                  )}
                /> */}
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='googleTopic'>
                  عنوان گوگل
                </Label>
                <Input onChange={(e)=>setAddNews({...addNews,GoogleTitle:e.target.value})} id='googleTopic' placeholder='John' invalid={errors.subject && true} />

                {/* <Controller
                  defaultValue=''
                  control={control}
                  id='googleTopic'
                  name='googleTopic'
                  render={({ field }) => (
                    <Input {...field} id='googleTopic' placeholder='Doe' invalid={errors.googleTopic && true} />
                  )}
                /> */}
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='googleDesc'>
                  توضیحات گوگل
                </Label>
                <Input onChange={(e)=>setAddNews({...addNews,GoogleDescribe:e.target.value})} id='googleDesc' placeholder='John' invalid={errors.subject && true} />

                {/* <Controller
                  defaultValue=''
                  control={control}
                  id='googleDesc'
                  name='googleDesc'
                  render={({ field }) => (
                    <Input {...field} type='textarea' name='googleDesc' id='googleDesc' rows='3' placeholder='Textarea' invalid={errors.googleDesc && true}/>
                  )}
                /> */}
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='shortDesc'>
                  توضیح کوتاه
                </Label>
                <Input onChange={(e)=>setAddNews({...addNews,MiniDescribe:e.target.value})} id='shortDesc' placeholder='John' invalid={errors.subject && true} />
                
                {/* <Controller
                  defaultValue=''
                  control={control}
                  id='shortDesc'
                  name='shortDesc'
                  render={({ field }) => (
                    <Input {...field} type='textarea' name='shortDesc' id='shortDesc' rows='3' placeholder='Textarea' invalid={errors.shortDesc && true}/>
                  )}
                /> */}
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='keyWord'>
                  کلمات کلیدی
                </Label>
                <Input onChange={(e)=>setAddNews({...addNews,Keyword:e.target.value})} id='keyWord' placeholder='John' invalid={errors.subject && true} />

                {/* <Controller
                  defaultValue=''
                  control={control}
                  id='keyWord'
                  name='keyWord'
                  render={({ field }) => (
                    <Input {...field} id='keyWord' placeholder='john.doe.007' invalid={errors.keyWord && true} />
                  )}
                /> */}
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='newsCategory'>
                  دسته بندی خبر
                </Label>
                <select class="form-select form-select-md" id='newsCategory'  >
                {newsCategory?.map((item, index)=>{
                  return(
                    <option key={index}>{item.categoryName}</option>
                  )
                })}
                </select>
            </Col>
            <Col xs={12}>
                <Label className='form-label' for='desc'>
                  توضیحات دوره 
                </Label>
                <Input onChange={(e)=>setAddNews({...addNews,Describe:e.target.value})} type='textarea' name='desc' id='desc' rows='3' placeholder='Textarea' invalid={errors.desc && true}/>

                {/* <Controller
                  defaultValue=''
                  control={control}
                  id='desc'
                  name='desc'
                  render={({ field }) => (
                    <Input {...field} type='textarea' name='desc' id='desc' rows='3' placeholder='Textarea' invalid={errors.desc && true}/>
                  )}
                /> */}
            </Col>
            <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary' >
                  Submit
                </Button>
                <Button outline color='secondary' type='reset' onClick={handleReset}>
                  Reset
                </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default BasicHookForm
