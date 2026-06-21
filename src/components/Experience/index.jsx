import React from 'react'
import styled from 'styled-components'
import { experience } from '@data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`

const ExperienceCard = styled.div`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const CompanyLogo = styled.img`
  display: none;
`

const ExperienceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

const RoleAndCompany = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`

const Role = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Company = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Description = styled.ul`
  list-style: disc;
  margin: 12px 0 0 20px;
  padding: 0;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-left: 16px;
  }

  li {
    margin-bottom: 8px;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`

const SkillTag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + '15'};
  padding: 4px 12px;
  border-radius: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary + '10'} 0%, ${({ theme }) => theme.primary + '05'} 100%);

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 10px;
  }
`

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My professional journey includes working on cutting-edge technologies and innovative solutions.
        </Desc>
        <ExperienceContainer>
          {experience.map((exp) => (
            <ExperienceCard key={exp.id}>
              <ExperienceInfo>
                <RoleAndCompany>
                  <div>
                    <Role>{exp.role}</Role>
                    <Company>{exp.company}</Company>
                  </div>
                  <Date>{exp.date}</Date>
                </RoleAndCompany>
                <Description>
                  {exp.desc.split('\n').map((line, idx) => {
                    if (line.trim()) {
                      return <li key={idx}>{line.trim()}</li>
                    }
                    return null
                  })}
                </Description>
                <SkillsContainer>
                  {exp.skills.map((skill, idx) => (
                    <SkillTag key={idx}>{skill}</SkillTag>
                  ))}
                </SkillsContainer>
              </ExperienceInfo>
            </ExperienceCard>
          ))}
        </ExperienceContainer>
      </Wrapper>
    </Container>
  )
}

export default Experience
