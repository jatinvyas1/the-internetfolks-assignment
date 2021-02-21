import React from 'react'
import {AboutUs,Features,Description,FeatureCard,FeatureImage,FeatureCardContainer, BlueConnector,CardHeading,CardText} from "./aboutUsContainerElements"
import BrandIcon from "./icon-brand-recognition.svg";
import DetailedRecords from "./icon-detailed-records.svg";
import Customizable from "./icon-fully-customizable.svg"; 
function AboutUsContainer() {
    const cardcontent = [
        {
            image:BrandIcon,
            mainContent:"Brand Recognition",
            text:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instill a confidence in your content."
        },
        {
            image:DetailedRecords,
            mainContent:"Detailed Records",
            text:"Gain insights into who is clicking your links. Knowing when and where people engage with your content and helps inform better decisions."
        },
        {
            image:Customizable,
            mainContent:"Fully Customizable",
            text:"Improve brand awareness and content discoverability through custom links, supercharging audience engagement."
        }
    ]
    return (
        <AboutUs>
            <Features>
            Avanced Statistics
            </Features>
            <Description>
            Track how your links are performinfacross the web with our advanced statistics dashboard.
            </Description>
            <FeatureCardContainer>
            {cardcontent.map((card,index)=>(
                <FeatureCard top={index*3}>
                    <FeatureImage>
                        <img src={card.image}/>
                    </FeatureImage>
                    <CardHeading>{card.mainContent}</CardHeading>
                    <CardText>{card.text}</CardText>
                </FeatureCard>
                ))}
            </FeatureCardContainer>
            <BlueConnector/>
        </AboutUs>
    )
}

export default AboutUsContainer