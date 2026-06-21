import React, { useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle'
import ProjectCard from '@components/Cards/ProjectCards'
import { projects } from '@data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Web Apps to Machine
          learning. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === 'all'}
            onClick={() => setToggle('all')}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'web app'}
            onClick={() => setToggle('web app')}
          >
            WEB APP&apos;S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'machine learning'}
            onClick={() => setToggle('machine learning')}
          >
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
