import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-top: 36px;
`;

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 24px;
`;

const Label = styled.div`
  margin-top: 4px;
`;

export default {
  Container,
  IconButton,
  Icon,
  Label,
};
