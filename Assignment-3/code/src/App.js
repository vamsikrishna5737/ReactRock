import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"
var arrow1=">"
function App(Props) {
  const {Name,EmployeeID,Appointment,Email,Phone,profileImg}=Props.Person
  return (
    <div className="site-container">
      <div className='header'>
        <p style={{fontSize:'40px',color:'silver'}}>{arrow}</p>
        <div style={{margin:'0px 0px 0px 40%' }}>
          <h3>{Name}</h3>
          <h3 style={{color:'silver'}}>{EmployeeID}</h3>
        </div>
        <button style={{height:'30px',width:'70px',margin:'0 10px 0 250px',background:'black',color:'white'}}>print</button>
      </div>
      <div className='customer-info'>
        <h3>Appointment: {Appointment}</h3>
        <h3>Email: {Email}</h3>
        <h3>Phone: {Phone}</h3>
      </div>
      <div className='order-info'>
        <div>
          <h3>Status</h3>
          <li style={{marginTop:'10px'}}>In Progress</li>
          </div>
        <div style={{margin:'0px 0px 0px 25%' }}>
          <h3>door</h3>
          <p style={{marginTop:'10px'}}>Mark</p>
          </div>
        <div style={{margin:'0 10px 0 250px'}}>
          <h3>time</h3>
          <p style={{marginTop:'10px'}}>10:30 (25-05-2016)</p>
          </div>

      </div>
      <div className='product-list'>
        <div>
          <input type={'checkbox'} style={{margin:'40px 0 0 0 ',width:'2vw',height:'2vw',
          outline:'2px solid goldenrod',
          outlineOffset:'-2px',
          cursor:'pointer'}}></input>
        </div>
        <div>
          <img src={profileImg}></img>
        </div>
        <div style={{margin:'10px 0 0 15px'}}>
          <h3>Boltaart Bosbessen</h3>
          <br></br>
          <p style={{color:'rgb(160, 157, 157)'}}>Overheerlijke Boltaart met Bosbessen Uit de keuken Van de</p>
        </div>
        <div style={{margin:'30px 0 0 250px'}}> <p style={{fontSize:'40px',color:'silver'}}>{arrow1}</p></div>

      </div>
    
    </div>
  );
}

export default App;
