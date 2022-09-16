import { FC } from 'react';
import Avatar from '../assets/Avatar';
import S from './UserInfo.styled';

interface UserInfoProps {
  telNo: string;
  username: string;
}

const UserInfo: FC<UserInfoProps> = ({ telNo, username }) => (
  <S.Container>
    <S.ImageWrapper>
      <Avatar />
    </S.ImageWrapper>
    <S.Info>
      <S.UserName>{username}</S.UserName>
      <S.PhoneNumber>{telNo}</S.PhoneNumber>
    </S.Info>
  </S.Container>
);

export default UserInfo;
