import { useState } from "react";

const UserLogin = () => {
  const sampleData = {
    userName: "",
    email: "",
    password: ""
  }
  const [userInfo, setUserInfo] = useState(sampleData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
    console.log(userInfo)

  }

  return (
    <form className="">
      <div className="flex-col p-10"><h1 className="text-center p-2 font-bold">UserLogin</h1>
        <div className="p-40 m-40 w-150 shadow-lg rounded-lg  bg-violet-950">
          <div className="m-auto text-center w-8/12 p-4"><span className="text-left m-auto p-4 text-white">Username</span>
            <input type="text" name="userName" placeholder="enter your name" className="align-baseline" value={userInfo.userName} onChange={handleChange}></input>
          </div>
          <div className="m-auto text-center w-8/12 p-4">
            <span className="m-auto px-8 text-left  text-white">Email</span>
            <input type="email" name="email" placeholder="enter your mail" className="align-baseline" value={userInfo.email} onChange={handleChange} ></input>
          </div>
          <div className="m-auto text-center w-8/12 p-4">
            <span className="m-auto p-4 text-left  text-white">Password</span>
            <input type="password" name="password" placeholder="enter your password" className="align-baseline" value={userInfo.password} onChange={handleChange}></input>
          </div>
        </div>
      </div>
    </form>
  )
}

export default UserLogin;