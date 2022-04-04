import logo from './logo.svg';
import './App.css';




function App(props) {
 const {name,location,age,bloodGroup,profileImg}=props.employee;
    
return(
  <div className="container">
    <img src={profileImg} alt="image"></img>
    <div className='data'>
    <h1>{name}</h1>
    <h4>Location</h4>
    <h2>{location}</h2>
    <h4>Blood group</h4>
    <h2>{bloodGroup}</h2>
    <h4>Age</h4>
    <h2>{age}</h2>
    </div>
    
</div>
)
}



export default App;
