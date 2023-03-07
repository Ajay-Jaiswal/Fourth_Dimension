import { Outlet , Link} from "react-router-dom";
import Typewriter from "typewriter-effect";
import headskull from '../headsckull.gif'




import '../App.css'


const Layout = () => {
  
  return (
    <>
    
      <nav className="navigation">
        
        
      <h1 style={{margin: 80, color: "light gold"}}><i>4D</i></h1> <img src={headskull} />
      <Typewriter

 onInit={(typewriter)=> {

 typewriter
  
 .typeString("I Am God Of Death")
   
 .pauseFor(1000)
 .deleteAll()
 .typeString("Death it is Truth")
 .start();
 }}
 />
      
        <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="/SignUp" smooth={true} duration={500}>SignUp</Link>
          </li>
          <li>
            <Link to="/Login" smooth={true} duration={500}>Login</Link>
          </li>
          <li>
            <Link to="/blogs" smooth={true} duration={500}>Crime</Link>
          </li>
          <li>
            <Link to="/contact" smooth={true} duration={500}>Criminal</Link>
          </li>
          
         
        </ul>
        </div>


      
      </nav>

  <Outlet/>
      
    </>
  )
};

export default Layout;