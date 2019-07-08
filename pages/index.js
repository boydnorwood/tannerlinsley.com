import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import {
  Section,
  Pane,
  Box,
  P,
  Heading,
  Small,
  Avatar
} from 'components/Styles'

const Info = styled(Small)`
  font-style: italic;
  opacity: 0.5;
`

const Description = styled(P)`
  margin: 0;
`

export default () => (
  <div>
    <Section>
      <Pane>
        <Box>
          <Avatar />
        </Box>
        <Box
          style={{
            width: '300px'
          }}
        >
          <P>A blog about Javascript, React, and Front End Programming</P>
        </Box>
      </Pane>
    </Section>
    <Section>
      <Heading>
        <Link href="blog/react-hooks-the-rebirth-of-state-management">
          React Hooks, the rebirth of State Management and beyond.
        </Link>
      </Heading>
      <Info>February 8, 2019</Info>
      <Description>
        In late 2018 React Hooks were announced, and within minutes, I knew they
        would change everything.
      </Description>
    </Section>
    <Section>
      <Heading>
        <Link href="blog/the-similarities-between-open-source-work-and-running-a-tech-startup">
          The similarities between open source work and running a tech startup.
        </Link>
      </Heading>
      <Info>February 7, 2018</Info>
      <Description>
        After building and maintaining plenty of open source projects, I have
        drawn some parallels to running a startup.
      </Description>
    </Section>
  </div>
)
