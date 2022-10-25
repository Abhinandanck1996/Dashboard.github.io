import {FaSearch} from 'react-icons/fa';
import {GiUsaFlag} from 'react-icons/gi';
import{FiGrid,FiSettings} from 'react-icons/fi';
import{MdNotificationAdd} from 'react-icons/md';
import MyGirl from './girl1.png';
import{ImNotification} from 'react-icons/im'


const Product = () => {
    return (
        <section className="product-sec">
          <article>
          <div className="product-div">
            <FaSearch style={{color:"#666",paddingLeft:"10px",paddingRight:"10px"}}/>
            <GiUsaFlag style={{color:"#FFBFC2",paddingLeft:"10px",paddingRight:"10px"}}/>
            <FiGrid style={{color:"#666",paddingLeft:"5px",paddingRight:"5px"}}/>
            <MdNotificationAdd style={{color:"#666",paddingLeft:"5px",paddingRight:"5px"}}/>
            <FiSettings style={{color:"#666",paddingLeft:"5px",paddingRight:"5px"}}/><img src={MyGirl} width={20} style={{paddingLeft:"5px",paddingRight:"5px"}}/>
          </div>
          <div className="bgcolor"></div>
         <div className="bgcolor1">
         <div className="bgcolor-img">
          <img src={MyGirl} width={60}/>
          <div className='text-div' style={{textAlign:"center",paddingTop:"6px"}}>
                <span style={{marginTop:"30px"}}>Jennifer Bennet</span>
                <p>Product Designer</p>
            
            </div>
          </div>
         <div className='product-text' style={{paddingBottom:"30px",borderBottom:"1px solid #eaeaea"}}>
         <div className='text-div' >
                <span>1,269</span>
                <p>Products</p>
            </div>
            <div className='text-div'>
                <span>5.6k</span>
                <p>Followers</p>
                
            </div>
         </div>
         <div className="earning-div dashboard-div">
          <h2>Earnings</h2>
          <ImNotification style={{marginRight:"5px"}}/>
         </div>
         <div className="border-bottom">
          <h2>76%</h2>
          <p>$26,256</p>
          <span>Earning this Month</span>
         </div>
         <div className="flex-box">
         <p className='p'>+2.65%</p>
         <span>From Previous Period</span>
               
         </div>
         <div className="text-content dashboard-div">
         <h2>Recent Activity</h2>
         <div className="flex-content">
          <div className="flex-content1">
            <p>12</p>
            <span>Sep</span>
          </div>
          <div className="flex-content2">
            <p>Responded to need "Volunteer Activities"</p>
          </div>
         </div>
         <div className="flex-content" style={{marginTop:"10px"}}>
          <div className="flex-content1">
            <p>11</p>
            <span>Sep</span>
          </div>
          <div className="flex-content2">
            <p>Responded to need "Volunteer Activities" <a href="#">Read more</a></p>
          </div>
         </div>
         <div className="flex-content" style={{marginTop:"10px"}}>
          <div className="flex-content1">
            <p>10</p>
            <span>Sep</span>
          </div>
          <div className="flex-content2">
            <p>Responded to need "Volunteer Activities"</p>
          </div>
         </div>
         </div>
         </div>
        
          </article>
        </section>
      );
}
 
export default Product;