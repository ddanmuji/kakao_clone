import { FC, ReactNode } from 'react';
import { Logo } from '../assets';
import S from './LoginLayout.styled';

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout: FC<LoginLayoutProps> = ({ children }) => (
  <S.Container>
    <S.Wrapper>
      <Logo />
      {children}
    </S.Wrapper>
  </S.Container>
);

export default LoginLayout;
