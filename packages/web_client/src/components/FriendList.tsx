import { FC } from 'react';
import S from './FriendList.styled';

interface FriendListProps {
  count: any;
  rows: any;
  onClickItem: (opponentId: string) => () => void;
}

const FriendList: FC<FriendListProps> = ({ count, rows, onClickItem }) => (
  <S.Container>
    <S.Summary>친구 {count}</S.Summary>
    <S.List>
      {rows.map((row: any) => (
        <S.Item key={row.id} onClick={onClickItem(row.id)}>
          <S.AvatarWrapper>
            <S.Avatar />
          </S.AvatarWrapper>
          <S.UsernameWrapper>
            <S.Username>{row.username}</S.Username>
          </S.UsernameWrapper>
        </S.Item>
      ))}
    </S.List>
  </S.Container>
);

export default FriendList;
