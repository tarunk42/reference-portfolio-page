import React from 'react';
import { DiFirebase, DiReact, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I just have superficial knowledge about these topics. lol. Whaddya thought? Imma some kinda expert.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experoence with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experoence with <br/>
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>ML/AI</ListTitle>
          <ListParagraph>
            Experoence with <br/>
            Tools like tensorflow.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
