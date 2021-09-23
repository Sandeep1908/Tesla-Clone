import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title,discription,backgroundImg,leftbutton,rightbutton}) {
    return (
        <Wrap bgimage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{discription}</p>
            </ItemText>
        </Fade>
          <ButtonGroup>
          <Fade bottom>
            <Buttons>
                <LeftButton>
                    {leftbutton}
                </LeftButton>

                {rightbutton &&
                    <RightButton>
                        {rightbutton}
                    </RightButton>
                }
            </Buttons>
        </Fade>
          <DownArrow src="./images/images/down-arrow.svg" />
          </ButtonGroup>

          
        </Wrap>
    )
}

export default Section

const Wrap =styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props=>`url("./images/images/${props.bgimage}")`}

    
    
    `
    const ItemText=styled.div`
    text-align:center;
    padding-top:10vh;
    `
    const Buttons=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:786px)
    {
        transition:2s;
        flex-direction:column;
    }

    `
    const LeftButton=styled.div`
    background-color:#262323;
    width:256px;
    heigth:50px;
    color:white;
    opacity:.85;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    cursor:pointer;
    text-transform:uppercase;
    padding:10px;
    font-size:12px;
    margin:15px;


`
const RightButton=styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:.65;
    font-weight:bold;
`


const DownArrow=styled.img`
    margin-top:20px;
    height:40px;
    animation:animateDown infinite 1.5s;


`
const ButtonGroup=styled.div`
    display:flex;
    flex-direction:column;
`
