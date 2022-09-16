import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  align-items: center;
  gap: 64px;
`;

export default {
  Container,
  Wrapper,
};
