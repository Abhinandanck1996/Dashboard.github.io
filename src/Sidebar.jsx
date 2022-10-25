import { useRef, useState } from 'react';
import {FaBorderAll,FaAngledown,FaRocketchat,FaFileInvoice,FaRProject,FaUser,FaWpforms} from 'react-icons/fa'
import {IoMdArrowDropdown} from 'react-icons/io'
import {SlCalender} from 'react-icons/sl'
import {SiFiles,SiHackthebox} from 'react-icons/si';
import {BsMailbox2,BsWifi,BsFillInboxesFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi';
import Hot from './hot.jpg'


const Sidebar = () => {
    let[state,setState]=useState(true)
    let[state1,setState1]=useState(true)
    let DropDownRef=useRef()
    let DropDownRef1=useRef()
    let HandleClick=()=>{
        setState(!state)
        if (state==true) {
            DropDownRef.current.classList.add("open")
        }
        else{
            DropDownRef.current.classList.remove("open")
        }
    }
    let HandleClick1=()=>{
        setState1(!state1)
        if (state1==true) {
            DropDownRef1.current.classList.add("open1")
        }
        else{
            DropDownRef1.current.classList.remove("open1")
        }
    }
    return ( 
        <section className="sidebar-sec">
            <article>
                <div className="sidebar-div">
                    <p>Menu</p>
                </div>
                <div className="sidebar-div1">
                    <ul>
                        <li ><FaBorderAll style={{position:"absolute",top:"54px",left:"15px"}}/> <a href="#">Dashboard</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-100px",cursor:'pointer'}} onClick={HandleClick}/>
                        <ul className='sidebar-li' ref={DropDownRef}><li><a href="#">Ecommerce</a></li>
                        <li><a href="#" style={{color:"#eaeaea"}}>Saas</a></li>
                        <li><a href="#"style={{color:"#eaeaea"}}>Crypto</a></li></ul></li>
                    </ul>
                </div>
                <div className="sidebar-div">
                    <p>applications</p>
                </div>
                <div className="sidebar-div1">
                    <ul>
                        <li ><SlCalender  style={{position:"relative",top:"2px",left:"-10px",marginLeft:"-15px"}}/><a href="#">Calender</a></li>
                        <li><FaRocketchat style={{position:"relative",top:"2px",left:"-10px",marginLeft:"-15px"}}/><a href="#">Chat</a><p style={{fontSize:"8px",position:'relative',top:"-28px",right:"-150px",padding:"5px",background:"#e80000",width:"9%",textAlign:'center',borderRadius:"12px"}}>Hot</p></li>
                        <li style={{marginTop:"-15px"}}><SiFiles style={{position:"relative",top:"2px",left:"-10px",marginLeft:"-15px"}}/><a href="#">File Manager</a></li>
                        <li><BsMailbox2 style={{position:"relative",top:"2px",left:"-10px",marginLeft:"-15px"}}/><a href="#">Ecommerce</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-96px",cursor:'pointer'}} onClick={HandleClick1}/>
                        <ul className='sidebar-li1' ref={DropDownRef1}>
                        <li><a href="#" style={{color:"#eaeaea",marginLeft:"-39px"}}>Saas</a></li>
                        <li><a href="#"style={{color:"#eaeaea",marginLeft:"-39px"}}>Crypto</a></li></ul></li>
                        <li ><TfiEmail  style={{position:"relative",top:"2px",left:"-10px",marginLeft:"-15px"}}/><a href="#">Email</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-132px",cursor:'pointer'}}/></li>
                        <li ><FaFileInvoice  style={{position:"relative",top:"2px",left:"-10px",marginLeft:"-15px"}}/><a href="#">Invoices</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-116px",cursor:'pointer'}}/></li>
                        <li ><FaRProject style={{position:"relative",top:"2px",left:"-10px",marginLeft:"-15px"}}/><a href="#">Projects</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-116px",cursor:'pointer'}}/></li>
                        <li ><BsWifi style={{position:"relative",top:"2px",left:"-10px",marginLeft:"-15px"}}/><a href="#">Contcts</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-119px",cursor:'pointer'}}/></li>
                    </ul>
                </div>
                <div className="sidebar-div">
                    <p>layouts</p>
                </div>
                <div className="sidebar-div">
                    <p>pages</p>
                </div>
                <div className="sidebar-div1">
                    <ul>
                        <li ><FaUser style={{position:"relative",top:"2px",left:"-20px"}}/><a href="#" style={{marginLeft:"-12px"}}>Authenications</a><p style={{fontSize:"8px",position:'relative',top:"-28px",right:"-155px",padding:"5px",background:"aqua",color:"#fff",fontWeight:"bold",width:"5%",borderRadius:"50%",textAlign:'center'}}>8</p>
                       </li>
                       <li style={{marginTop:"-15px"}}><SiHackthebox style={{position:"relative",top:"4px",left:"-7px",marginLeft:"-12px"}}/><a href="#">Utility</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-126px",cursor:'pointer'}}/></li>
                    </ul>
                </div>
                <div className="sidebar-div">
                    <p>components</p>
                </div>
                <div className="sidebar-div1">
                    <ul>
                        <li ><BsFillInboxesFill style={{position:"relative",top:"4px",left:"-17px"}}/><a href="#" style={{marginLeft:"-10px"}}>UI Element</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-96px",cursor:'pointer'}}/></li>
                        <li><FaWpforms style={{position:"relative",top:"4px",left:"-17px"}}/><a href="#" style={{marginLeft:"-10px"}}>Form</a><IoMdArrowDropdown style={{position:"relative",top:"5px",right:"-129px",cursor:'pointer'}}/></li>
                    </ul>
                </div>
            </article>
        </section>
     );
}
 
export default Sidebar;