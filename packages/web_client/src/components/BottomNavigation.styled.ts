import styled from '@emotion/styled';

const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  font-size: 24px;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
`;

export default {
  Container,
  NavList,
  NavItem,
  NavButton,
};
