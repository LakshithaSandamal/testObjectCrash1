import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useDispatch } from 'react-redux'
import { login } from '../../store/authSlice/service'

const Login = () => {
  const dispatch = useDispatch();
  const [credential,setCredential] = React.useState({email:"",password:""})
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-blue-300/25'>
        <div className="w-[420px] shadow-lg p-5 flex flex-col gap-4 bg-white rounded-lg">
          <label>Email</label>
          <Input type="email" placeholder="Enter email" onChange={e=>setCredential({...credential,email:e.target.value})}/>
          <label>Password</label>
          <Input type="email" placeholder="Enter password" onChange={e=>setCredential({...credential,password:e.target.value})}/>
          <Button onClick={()=>dispatch(login(credential))}>Login</Button>
        </div>
    </div>
  )
}

export default Login