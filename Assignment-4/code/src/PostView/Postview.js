import './PostView.css';
import data1 from '../Mock-data/data'
import { Link } from 'react-router-dom';


const Postview=()=> {
  const api=data1


  return (
    <>
    <header className='heading'>
      <h1 style={{width:'90%',paddingLeft:'150px'}}><Link to="*">Instaclone</Link></h1>
      <img  style={{width:'50px',height:'50px',padding:'10px 100px 0 0'}}
      src={'https://cdn-icons-png.flaticon.com/128/1077/1077042.png'}>
      </img>
    </header>
    <div className="site-container">
      {api.map((data,idx)=>{
        const {name,location,likes,description,date,PostImage}=data
        const monthNames = ["January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"];
        const date1=eval(date).getDate().toString()+" "+monthNames[eval(date).getMonth()]+" "+eval(date).getFullYear().toString()
        return(
        <div className='boxs' key={idx}>
        <div className="top">
          <div style={{display:'flex',flexDirection:'column',width:'90%'}}>
          <p style={{paddingLeft:'20px'}}><strong>{name}</strong><br></br>{location}</p>
          </div>
          <div style={{paddingTop:'20px'}}><strong>...</strong></div>
        </div>
        <img src={PostImage} style={{width:'inherit',height:'150px'}}></img>
        <div className="mid">
          <img style={{width:'20px',height:'20px'}}
          src={'https://cdn-icons-png.flaticon.com/128/833/833300.png'}>
          </img>
          <img style={{width:'20px',height:'20px',paddingLeft:'15px'}}
          src={'https://cdn-icons-png.flaticon.com/128/2526/2526496.png'}>
          </img>
          <p style={{margin:'0',position:'absolute',right:'10px'}}>{date1}</p>
        </div>
        <div className="footer">
          <p style={{margin:'0'}}>{likes} likes</p>
          <h3 style={{marginTop:'5px'}}>{description}</h3>
        </div>
        
        </div>
        )
      })}
    </div>
    </>);
}


export default Postview;