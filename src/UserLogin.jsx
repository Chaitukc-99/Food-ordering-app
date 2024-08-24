import { useState } from 'react'

const UserLogin = () => {
  const [data, setData] = useState({ username: '', Password: '' })
  const { username, Password } = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("user : " + username + " Password : " + Password)
  }
  return (
    <form onSubmit={handleSubmit} className="border-2 w-screen h-screen p-2 m-2 bg">
      <h1 className='text-xl font-bold text-center'>Login Form</h1>
      <div className=' bg-black w-2/12 pl-6 pt-8 pb-6 text-white rounded-xl m-auto mt-20'>
        <h3 className='pb-3'><label>Username</label></h3>
        <input className='text-black' type='text' name='username' value={username} onChange={handleChange} />
        <h3 className='pt-2 pb-2'><label>Password</label></h3>
        <input className='text-black' type='password' name='Password' value={Password} onChange={handleChange} /><br />
        <input className='border-s-white pt-2 pb-2 pr-1 border-2 mt-4 mb-2 rounded-lg' type='submit' name='Submit' />
      </div>
    </form>
  )
}

export default UserLogin;