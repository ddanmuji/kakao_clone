import { FC } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiChatNewLine } from 'react-icons/ri';
import { HiOutlineMusicNote } from 'react-icons/hi';
import S from './TopNavigation.styled';

interface TopNavigationProps {
  title: string;
}

const TopNavigation: FC<TopNavigationProps> = ({ title }) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.ActionItemGroup>
      <S.ActionItem>
        <BiSearchAlt2 />
      </S.ActionItem>
      <S.ActionItem>
        <RiChatNewLine />
      </S.ActionItem>
      <S.ActionItem>
        <HiOutlineMusicNote />
      </S.ActionItem>
      <S.ActionItem>
        <AiOutlineSetting />
      </S.ActionItem>
    </S.ActionItemGroup>
  </S.Container>
);

export default TopNavigation;
