import React from 'react';
import {FooterContainer,LogoContainer,SocialIcon,IconContainer} from './footerElements';
import LinksCard from './linksCard';
import Facebook from "./icon-facebook.svg";
import Pinterest from "./icon-pinterest.svg";
import Twitter from './icon-twitter.svg';
import Instagram from "./icon-instagram.svg";
import Logo from "./logo.svg";
const linksContent = [
    {name:"Features",links:["Link Shortening","Branded Links","Analytics"]},
    {name:"Resources",links:["Blog","Developers","Support"]},
    {name:"Company",links:["About","Our Team","Careers","Contact"]}
]
function Footer() {
    return (
        <FooterContainer>
            <LogoContainer>
            <img src={Logo} color="white"/>
            </LogoContainer>
            {linksContent.map((feature)=>(<LinksCard feature={feature}/>))}
            <IconContainer>
            <SocialIcon src={Facebook}/>
            <SocialIcon src={Twitter}/>
            <SocialIcon src={Pinterest}/>
            <SocialIcon src={Instagram}/>
            </IconContainer>
        </FooterContainer>
    )
}

export default Footer
