import React from "react";
import WorkingImage from "./illustration-working.svg";
import {
  MainContainer,
  ImageContainer,
  TextWrapper,
  TagLine,
  Description,
  StartedButton,
  StaticContainer,
} from "./containerElements";
function StaticContainerHome() {
  return (
    <StaticContainer>
      <TextWrapper>
        <TagLine>More than just shorter links</TagLine>
        <Description>
          Build you brands recognition and get detailed insights on how your
          links are performing.
        </Description>
        <StartedButton>Get Started</StartedButton>
      </TextWrapper>
      <ImageContainer>
        <img src={WorkingImage} />
      </ImageContainer>
    </StaticContainer>
  );
}

export default StaticContainerHome;
