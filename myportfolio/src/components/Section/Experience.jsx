import React from "react";
import styled from "styled-components";
import { experience } from "../../data/data/constants";
import ExperienceCard from "../cards/ExperienceCard.jsx";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 960px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const Experience = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My work experience as a software engineer and work with different
          companies and projects
        </Desc>
        <VerticalTimeline>
          {experience.map((exp, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={exp}
              position={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
