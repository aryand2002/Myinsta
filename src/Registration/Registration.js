import React,{useState} from 'react'
import { Button, Form, Input} from 'antd';
import {useNavigate,Link} from 'react-router-dom'


function Header() {

  const [data,setData]=useState({})
  const navigate=useNavigate()




  function Filesubmit(values){
    setData(values)
    localStorage.setItem('name', values.name);
    localStorage.setItem('username', values.username);
    localStorage.setItem('password', values.pswd);
    localStorage.setItem('email', values.email);
    navigate('/')
      
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center flex-col items-center gap-4'>
      <Form className='w-64 h-[75%]  border-solid border border-[#bcbcba] px-5 py-5 flex items-center flex-col gap-0 mt-[40px]' onFinish={Filesubmit}>
      <h1 className='font-bold text-base'>INSTAGRAM</h1>
      <p className='text-xs text-center font-bold text-[#4f4e4d]'>Sign up to see photos and videos from your friends.</p>
        <Form.Item name='mobile'>
          <Input placeholder='Mobile Number or email' className='w-52 h-7 text-[11px] mt-2' />
        </Form.Item>

        <Form.Item  className='-mt-3' name='pswd'>
          <Input placeholder='Password' className='w-52 h-7 text-[11px]' />
        </Form.Item>

        <Form.Item  className='-mt-3' name='name'>
          <Input placeholder='Fullname' className='w-52 h-7 text-[11px]' />
        </Form.Item>

        <Form.Item  className='-mt-3' name='username'>
          <Input placeholder='Username' className='w-52 h-7 text-[11px]' />
        </Form.Item>
        
      <p className='text-[9px] text-gray-500 text-center'>People who use our service may have uploaded your contact information to Instagram. <span className='text-blue-950'>Learn More</span>
      </p>

      <p className='text-[9px] text-gray-500 text-center mt-3'>By signing up, you agree to our <span className='text-blue-950'>Terms , Privacy Policy and Cookies Policy .</span> </p>

        <Form.Item className='ml-4 mt-4 '>
              <Button type="primary" htmlType="submit" className='-ml-6 w-52 h-7 text-xs'  >
                Sign up
              </Button>
        </Form.Item>
      </Form>
      <div className='border-solid border border-[#bcbcba] w-64 h-[40px] flex justify-center items-center text-[12px] '>
        <p>Have an account?<span className='font-bold text-blue-600 cursor-pointer'><Link to='/'>Log in</Link></span></p>
      </div>
      </div>
    </>
  )
}

export default Header