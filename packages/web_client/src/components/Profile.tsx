import { FC } from 'react';
import { Avatar } from '../assets';
import S from './Profile.styled';

interface ProfileProps {
  username: string;
  thumbnailImage?: string;
}

const Profile: FC<ProfileProps> = ({ username, thumbnailImage }) => (
  <S.Container>
    <S.AvatarWrapper>
      {thumbnailImage ? <S.Avatar src={thumbnailImage} /> : <Avatar />}
    </S.AvatarWrapper>
    <S.UsernameWrapper>
      <S.Username>{username}</S.Username>
    </S.UsernameWrapper>
  </S.Container>
);

export default Profile;
