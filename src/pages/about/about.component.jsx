import React from "react";
import { Container, Title, Description, Ending } from "./about.styles";

export const AboutPage = () => {
  return (
    <Container>
      <Title>Todo app</Title>
      <Description>
        This is a simple todo app thats made with react and firebase. The app
        uses styled components for styling, context for state management and
        firebase for database and auth
      </Description>
      <Ending>Designed by: Natoli Lemma</Ending>
    </Container>
  );
};
