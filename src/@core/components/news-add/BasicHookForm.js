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

const newsCategory = [
  { value: 'news1', label: 'اخبار پژوهشگاه' },
  { value: 'news2', label: 'اخبار حواشی پژوهشگاه' }
]

const data = {subject:'Tailwind css',googleTopic:"asqwerty",googleDesc:'23', shortDesc :'09111111111', keyWord:'sdsdsdsdsdsd', newsCategory : 'فعال', desc:'99887766'};

const BasicHookForm = () => {
  // ** Hooks
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      toast(
        <div className='d-flex'>
          <div className='me-1'>
            <Avatar size='sm' color='success' icon={<Check size={12} />} />
          </div>
          <div className='d-flex flex-column'>
            <h6>خبر با موفقیت ثبت شد</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <strong>عنوان خبر</strong>: {data.subject}
              </li>
              <li>
                <strong>عنوان گوگل</strong>: {data.googleTopic}
              </li>
              <li>
                <strong>توضیحات گوگل</strong>: {data.googleDesc}
              </li>
              <li>
                <strong>توضیح کوتاه</strong>: {data.shortDesc}
              </li>
              <li>
                <strong>کلمات کلیدی</strong>: {data.keyWord}
              </li>
              <li>
                <strong>دسته بندی</strong>: {data.newsCategory}
              </li>
              <li>
                <strong>توضیحات</strong>: {data.desc}
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
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
                <Controller
                  defaultValue=''
                  control={control}
                  id='subject'
                  name='subject'
                  render={({ field }) => (
                    <Input {...field} id='subject' placeholder='John' invalid={errors.subject && true} />
                  )}
                />
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='googleTopic'>
                  عنوان گوگل
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='googleTopic'
                  name='googleTopic'
                  render={({ field }) => (
                    <Input {...field} id='googleTopic' placeholder='Doe' invalid={errors.googleTopic && true} />
                  )}
                />
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='googleDesc'>
                  توضیحات گوگل
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='googleDesc'
                  name='googleDesc'
                  render={({ field }) => (
                    <Input {...field} type='textarea' name='googleDesc' id='googleDesc' rows='3' placeholder='Textarea' invalid={errors.googleDesc && true}/>
                  )}
                />
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='shortDesc'>
                  توضیح کوتاه
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='shortDesc'
                  name='shortDesc'
                  render={({ field }) => (
                    <Input {...field} type='textarea' name='shortDesc' id='shortDesc' rows='3' placeholder='Textarea' invalid={errors.shortDesc && true}/>
                  )}
                />
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='keyWord'>
                  کلمات کلیدی
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='keyWord'
                  name='keyWord'
                  render={({ field }) => (
                    <Input {...field} id='keyWord' placeholder='john.doe.007' invalid={errors.keyWord && true} />
                  )}
                />
            </Col>
            <Col md={6} xs={12}>
                <Label className='form-label' for='newsCategory'>
                  دسته بندی خبر
                </Label>
                <Select
                  id='newsCategory'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={newsCategory}
                  theme={selectThemeColors}
                  defaultValue={newsCategory[newsCategory.findIndex(i => i.value === data.newsCategory)]}
                />
            </Col>
            <Col xs={12}>
                <Label className='form-label' for='desc'>
                  توضیحات دوره 
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='desc'
                  name='desc'
                  render={({ field }) => (
                    <Input {...field} type='textarea' name='desc' id='desc' rows='3' placeholder='Textarea' invalid={errors.desc && true}/>
                  )}
                />
            </Col>
            <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
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
