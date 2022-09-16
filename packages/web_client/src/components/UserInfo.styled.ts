import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  margin-top: 64px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Info = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const PhoneNumber = styled.span`
  font-size: 16px;
  margin: 8px 0 0 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export default {
  Container,
  ImageWrapper,
  Image,
  Info,
  UserName,
  PhoneNumber,
};
