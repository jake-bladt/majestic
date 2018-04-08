import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';
import Node from '../../stores/Node';
import InfoBlock from './InfoBlock';

const Content = styled.div`
  flex-grow: 1;
`;

const RightContent = styled.div`
  align-items: center;
  display: flex;
`;

const FileName = styled.div`
  font-size: 22px;
  color: #0a0723;
`;

const FilePath = styled.div`
  font-size: 14px;
  color: #0a0723;
`;

const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  background: #d5e9fd;
  padding: 10px;
  border-radius: 5px;
`;

const InfoBar = styled.div`
  color: #0a0723;
  font-weight: 600;
  margin-top: 5px;
  font-size: 13px;
`;

interface HeaderProps {
  testFile: Node;
  onRunFile: () => void;
}

export default function Header({ testFile, onRunFile }: HeaderProps) {
  return (
    <Container>
      <Content>
        <FileName>{testFile.label}</FileName>
        <FilePath>{testFile.path}</FilePath>
        <InfoBar>
          <InfoBlock
            icon="code"
            label={`${testFile.totalTests} Tests`}
            color="blue"
          />
          <InfoBlock
            icon="tick"
            label={`${testFile.totalPassedTests} Passed Tests`}
            color="green"
          />
          <InfoBlock
            icon="cross"
            label={`${testFile.totalFailedTests} Failed Tests`}
            color="red"
          />
          <InfoBlock
            icon="time"
            label={`${testFile.executionTime} ms`}
            color="orange"
          />
        </InfoBar>
      </Content>
      <RightContent>
        <Button
          onClick={() => {
            onRunFile();
          }}
        >
          Run File
        </Button>
      </RightContent>
    </Container>
  );
}