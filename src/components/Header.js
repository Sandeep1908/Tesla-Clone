import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from 'react-redux'

function Header() {
    const [Burgurstatus,setBurgurstatus]=useState(false);
    const models=useSelector(state=>state.car.cars)
    
    return (
        <Container>
            <a href="#">
                <img src="./images/images/logo.svg" alt="" />
            </a>

            <Menu>
                {models && models.map((cars,index)=>{
                    return <a href="#" key={index}>{cars}</a>
                })}   
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            <CustomIcon onClick={()=>setBurgurstatus(true)}/>
            </RightMenu>

            <BurgurNav show={Burgurstatus}>
                <Close>
                    <CustomClose onClick={()=>setBurgurstatus(false)}/>
                </Close>

                {models && models.map((cars,index)=>{
                    return <li><a href="#" key={index}>{cars}</a></li>
                })} 
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test-Drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilites</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </BurgurNav>
        </Container>
    )
}

export default Header

const Container= styled.div`
    font-size:16px;
    min-height:50px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 30px;
    margin:10px;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:100;
`
const Menu=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
    a{
        font-weight:600;
        // text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
        color:black;
    }
    @media(max-width:754px){
        display:none;
    }
`
const RightMenu=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    a{
    font-weight:600;
    // text-transform:uppercase;
    margin-right:20px;
    color:black;
    }
`
const CustomIcon=styled(MenuIcon)`
    cursor:pointer;
    
`
const BurgurNav=styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    background:white;
    display:flex;
    flex-direction:column;
    text-align:start;
    width:300px;
    z-index:16;
    padding:20px;
    list-style:none;
    transform:${props=> props.show ?'translateX(0)':'translateX(100%)'};
    transition:transform .3s ease-in;
    overflow:scroll;
    
    li{
        padding:15px;
        
        
        a{
            font-weight:600;
            color:black;
        }
    }
   
`

const Close=styled.div`
    display:flex;
    justify-content:flex-end;
  
 
    
`

const CustomClose=styled(CloseIcon)`
    cursor:pointer;
`