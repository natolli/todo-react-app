import React from "react";
import { HomePageContainer, MainText, SideText } from "./home-page.styles";
import { CustomButton } from "../../components/custom-button/custom-button.component";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <MainText>Manage Your Tasks.</MainText>
      <SideText>
        Regain clarity and calmness by getting all those tasks out of your head
        and onto your to-do list (no matter where you are or what device you
        use).
      </SideText>
      <CustomButton>Get Started</CustomButton>
    </HomePageContainer>
  );
};
