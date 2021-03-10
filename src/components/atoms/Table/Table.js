import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import projectsServices from '../../../services/projects';

const StyledTable = styled(Table)`
  width: calc(102% + 20px);
  position: relative;
  left: -20px;
`;

const StyledTh = styled(Th)`
  background-color: #f6f9fc;
  color: #8898aa;
  text-align: left;
  padding: 1rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #e9ecef;
  border: 1px solid #f6f9fc;
  &:first-child {
    padding-left: 20px;
  }
  &:last-child {
    padding-right: 20px;
  }
`;

const StyledTd = styled(Td)`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  &:first-child {
    padding-left: 20px;
  }
  &:last-child {
    padding-right: 20px;
  }
`;

const StyledImage = styled.img`
  max-width: 50px;
`;

const StyleProjectName = styled.div`
  display: flex;
  align-items: center;
`;

const TableExample = ({ type }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await projectsServices.fakeFetchAll(type);
    setData(result);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <StyledTable cellPadding="20" cellSpacing="0">
      <Thead>
        <Tr>
          <StyledTh>PROJECT</StyledTh>
          <StyledTh>BUDGET</StyledTh>
          <StyledTh>STATUS</StyledTh>
        </Tr>
      </Thead>
      <Tbody>
        {data.length > 0 &&
          data.map((item) => (
            <Tr>
              <StyledTd>
                <StyleProjectName>
                  <StyledImage alt={item.name} src={item.imageLink} />
                  <div>{item.name}</div>
                </StyleProjectName>
              </StyledTd>
              <StyledTd>{item.budget}</StyledTd>
              <StyledTd>{item.status}</StyledTd>
            </Tr>
          ))}
      </Tbody>
    </StyledTable>
  );
};

export default TableExample;
