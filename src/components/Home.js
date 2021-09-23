import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
            title='Model S'
            discription='Order Online for Touchless Delivery'
            backgroundImg='model-s.jpg'
            leftbutton='Custom Order'
            rightbutton='Existing Invantory'
        
            />

            <Section
            title='Model Y'
            discription='Order Online for Touchless Delivery'
            backgroundImg='model-y.jpg'
            leftbutton='Custom Order'
            rightbutton='Existing Invantory'
        
            />

            
            <Section
            title='Model X'
            discription='Order Online for Touchless Delivery'
            backgroundImg='model-x.jpg'
            leftbutton='Custom Order'
            rightbutton='Existing Invantory'
        
            />

            <Section
            title='Model 3'
            discription='Order Online for Touchless Delivery'
            backgroundImg='model-3.jpg'
            leftbutton='Custom Order'
            rightbutton='Existing Invantory'
        
            />

            <Section
            title='Lowest Cost Solar Panner In India'
            discription='Money Back Guaranntee'
            backgroundImg='solar-panel.jpg'
            leftbutton='Order Now'
            rightbutton='Learn More'
        
            />

            <Section
            title='Solar For New Roof'
            discription='Solar Roof Costs Less than a New Roof Plus Solar Panels'
            backgroundImg='solar-roof.jpg'
            leftbutton='Order Now'
            rightbutton='Learn More'
        
            />

            <Section
            title='Accessories'
            discription=''
            backgroundImg='accessories.jpg'
            leftbutton='Shop Now'
            // rightbutton='Learn More'
        
            />

            

           
        </Container>
    )
}

export default Home

const Container=styled.div`
        height:10vh;
`