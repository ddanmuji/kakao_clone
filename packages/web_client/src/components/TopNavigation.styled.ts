import styled from '@emotion/styled';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 12px;
  right: 12px;
  height: 36px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const ActionItemGroup = styled.div`
  display: flex;
`;

const ActionItem = styled.div`
  font-size: 20px;
  padding: 0 12px;
`;

export default {
  Container,
  Title,
  ActionItemGroup,
  ActionItem,
};
