import React,{useState,useEffect} from 'react'
import { getUser, updateUser } from './services/user.service';
import { getCurrentUserDetail, isLoggedIn } from './auth'
import { useParams } from 'react-router-dom'


function UpdateUser() {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    console.log(userId);
    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        intrest: "",
      });

    useEffect(() => {
        getUser(userId).then(data => {
          console.log(data);
          setUser({ ...data })
        })
      }, [])

      useEffect(() => {
        updateUser(userId).then(data => {
          console.log(data);
          setUser({ ...data })
        })
      }, [])
    
   
    const [currentUser,setCurrentUser] = useState(null)
    const[login,setLogin] = useState(false)
    useEffect(() => {
        setCurrentUser(getCurrentUserDetail())
        setLogin(isLoggedIn)
    },[])
   
  return (
    <div className="App">
    <h1>Update User Data  </h1>
    <table border="1" style={{ float: 'left' }}>
      <tbody>
        
        {/* {
          user.map((item, i) =>
            <tr key={i}>
              <td>ID:{item.id}</td>
              <td>NAME:{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.intrest}</td>
              <td>{item.password}</td>
              <td><button onClick={() => currentUser(item.id)}>Update</button></td>

            </tr>
          )
        } */}
      </tbody>
    </table>
    <div>
      <input type="text" value={data.name} onChange={(e)=>{setData(e.target.value)}} />Name <br /><br />
      <input type="text" value={data.email} onChange={(e)=>{setData(e.target.value)}} />Email <br /><br />
      <input type="text" value={data.mobile}  onChange={(e)=>{setData(e.target.value)}} /> Mobile<br /><br />
      <input type="text" value={data.password}  onChange={(e)=>{setData(e.target.value)}} /> Password<br /><br />
      <input type="text" value={data.intrest}  onChange={(e)=>{setData(e.target.value)}} />Intrest <br /><br />

      <button onClick={updateUser} >Update User</button>  
    </div>
  </div>
);
}
  

export default UpdateUser