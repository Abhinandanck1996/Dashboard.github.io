import React from 'react';
import {AiFillAmazonCircle} from 'react-icons/ai';
import Mymap from './map.png';
import Mychat from './chat.png';
import Myorder from './order.png';
import Myproduct from './product.png'
import {FaBorderAll,FaAngledown,FaRocketchat,FaFileInvoice,FaRProject,FaUsers,FaFirstOrder} from 'react-icons/fa'

const Dashboard = () => {
    return ( 
      <section className="dashboard-sec">
        <article>
        <div className="dashboard-div">
           <h2>Dashboard</h2>
        </div>
      <div>
      <div className="dashboard-div1">
        <div className='dashboard-div12'>
          <div className='icon-div'>
                <AiFillAmazonCircle style={{marginTop:"5px",color:"#fff"}}/>
            </div>
            <div className='text-div'>
                <p>Revenue</p>
                <span>$21,456</span>
                <p className='p'>+2.65%</p>
            </div>
          </div>
          <div className='dashboard-div12'>
          <div className='icon-div'>
                <FaFirstOrder style={{marginTop:"5px",color:"#fff"}}/>
            </div>
            <div className='text-div'>
                <p>Orders</p>
                <span>5643</span>
                <p className='p1'>-0.82%</p>
            </div>
            
          </div>
          <div className='dashboard-div12'>
          <div className='icon-div'>
                <FaUsers style={{marginTop:"5px",color:"#fff"}}/>
            </div>
            <div className='text-div'>
                <p>Customers</p>
                <span>45254</span>
                <p className='p2'>-1.04%</p>
            </div>
            
          </div>
        </div>
      <div className="dashboard-div14">
      <div >
           <h2>Overview</h2>
        </div>
        <div className='text-div12'>
                <p>This Month</p>
                <div style={{display:"flex",alignItems:"center"}}>
                <span>$24,568</span>
                <p className='p3'>+2.65%</p>
                </div>
            </div>
            <div className='text-div14'>
               <div>
               <p>Orders</p>
                <span>5643</span>
               </div>
                <div>
                <p>Sales</p>
                <span>$24,568</span>
                
                </div>
                
            </div>
           <div  className='text-div14'>
           <div>
               <p>Order Value</p>
                <span>12.03%</span>
               </div>
                <div>
                <p>Customers</p>
                <span>21,456</span>
                
                </div>
           </div>
           <div  className='text-div14'>
           <div>
               <p>Income</p>
                <span>$35,652</span>
               </div>
                <div  >
                <p>Expenses</p>
                <span>$12,248</span>
                
                </div>
           </div>
         
      </div>
      <div className="img">
<img src={Mymap} alt="Map" />
      </div>
      </div>
    <div className="image-div">
      <div><img src={Mychat} alt="Map" /></div>
      <div><img src={Myorder} alt="Map" /></div>
      <div className="image-div1"><img src={Myproduct} alt="Map" /></div>
    </div>
            
        </article>
      </section>
     );
}
 
export default Dashboard;