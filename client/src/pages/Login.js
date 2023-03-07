
  import React, {useState} from 'react';
import '../App.css'

const Login = () => {
    const[user,setUser] = useState({
       email: '', password: ''})
      let name = 0
      let value = 0 ;
        const handleSubmit  = (e) => {
                  console.log(e)
                  name = e.target.name
                  value = e.target.value
                  setUser({...user,[name]: value})
                  
        }
        const PostData = async(e) => {
            e.preventDefault();
    
            const { email, password} = user;
    
            const res = await fetch('http://localhost:4000/register',{
                method : 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                     email, password
                })
            });
            const data = await res.json();
    
            if(data.status === 422 || !data){
                window.alert('Invalid R')
                console.log('invalid')
            } else{
                window.alert('login Sucessfull');
                console.log('Login Sucessfull');
            }
        }
        
        return(
            
          <div method="POST" className="form" >
            
              <div className="form-body">
                  <div className="email">
                      <label className="form__label" for="email">Email </label>
                      <input  type="email" id="email" className="form__input" name='email' placeholder="Email" value= {user.email} onChange={handleSubmit}/> </div>
                  <div className="password">
                      <label className="form__label" for="password">Password </label>
                      <input className="form__input" type="password"  id="password" name='password' placeholder="Password" value= {user.password} onChange={handleSubmit}/>
                  </div>
                 
              </div>
              <div class="footer">
                  <button type="submit" class="btn" onClick = {PostData}>Register</button>
              </div>  
              <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
    
              
          </div>  
              
        )       
  };
  
  export default Login;