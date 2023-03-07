import React, { useState, useEffect } from 'react'




const Blogs = () => {

 const[user,setUser] = useState({
        name: '', lname: '',email: '', password: '', ConfirmPassword: '' })
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
    
            const {name, lname, email, password, cpassword} = user;
    
            const res = await fetch('http://localhost:4000/signup',{
                method : 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name, lname, email, password, cpassword
                })
            });
            const data = await res.json();
            console.log(data)
    
            if(data.status === 422 || !data){
                window.alert('Invalid R')
                console.log('invalid')
            } else{
                window.alert('Registration Sucessfull');
                console.log('Registration Sucessfull');
            }
        }
        
        return(
            
          <div method="POST" className="form" >
            
              <div className="form-body">
                
                  <div className="username">
                      <label className="form__label" for="firstName">First Name </label>
                      <input className="form__input" type="text" id="firstName" name='name' placeholder="First Name" value= {user.name} onChange={handleSubmit}/>
                  </div>
                  <div className="lastname">
                      <label className="form__label" for="lastName">Last Name </label>
                      <input  type="text" name="lname" id="lastName"  className="form__input"  placeholder="LastName" value= {user.lname} onChange={handleSubmit}/>
                  </div>
                  <div className="email">
                      <label className="form__label" for="email">Email </label>
                      <input  type="email" id="email" className="form__input" name='email' placeholder="Email" value= {user.email} onChange={handleSubmit}/> </div>
                      <div className="Mobile">
                      <label className="form__label" for="Mobile">Mobile No. </label>
                      <input  type="number" id="Mobile" className="form__input" name='Mobile' placeholder="Mobile no." value= {user.mobile} onChange={handleSubmit}/> </div>
                  <div className="password">
                      <label className="form__label" for="password">Password </label>
                      <input className="form__input" type="password"  id="password" name='password' placeholder="Password" value= {user.password} onChange={handleSubmit}/>
                  </div>
                  <div className="confirm-password">
                      <label className="form__label" for="cpassword">Confirm Password </label>
                      <input className="form__input" type="password" id="cpassword" name='cpassword' placeholder="Confirm Password" value = {user.cpassword} onChange={handleSubmit}/>
                  </div>
    
                 
                  
              </div>
              <div class="footer">
                  <button type="submit" class="btn" onClick = {PostData}>Register</button>
              </div>  
    
    
              
          </div>  
              
        )      
}

export default Blogs

/*
  title: { type: String}, 
    crime: { type: String, required: true }, 
    description: { type: String, required: true } ,
    criminal: { type: String, required: true }, 
    offense: { type: String, required: true},
    guilt: { type: Boolean , default: false}
*/
