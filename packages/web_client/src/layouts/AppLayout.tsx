import { FC, ReactNode } from 'react';
import { BottomNavigation, TopNavigation } from '../components';
import S from './AppLayout.styled';

interface AppLayoutProps {
  children: ReactNode;
  title: string;
}

const AppLayout: FC<AppLayoutProps> = ({ children, title }) => (
  <S.Container>
    <S.Wrapper>
      <TopNavigation title={title} />
      {children}
      <BottomNavigation />
    </S.Wrapper>
  </S.Container>
);

export default AppLayout;
