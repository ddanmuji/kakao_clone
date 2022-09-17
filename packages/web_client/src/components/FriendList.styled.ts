import styled from '@emotion/styled';

const Container = styled.div``;

const Summary = styled.span`
  margin: 4px 0;
  padding: 24px 0 0 0;
  font-size: 12px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 64px 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

const AvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

const UsernameWrapper = styled.div`
  margin-left: 8px;
`;

const Username = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

export default {
  Container,
  Summary,
  List,
  Item,
  AvatarWrapper,
  Avatar,
  UsernameWrapper,
  Username,
};
