import { FiMail, FiCalendar, FiScissors, FiGift } from 'react-icons/fi';
import S from './IconButtonList.styled';

const IconButtonList = () => (
  <S.Container>
    <S.IconButton>
      <S.Icon>
        <FiMail />
      </S.Icon>
      <S.Label>메일</S.Label>
    </S.IconButton>
    <S.IconButton>
      <S.Icon>
        <FiCalendar />
      </S.Icon>
      <S.Label>캘린더</S.Label>
    </S.IconButton>
    <S.IconButton>
      <S.Icon>
        <FiScissors />
      </S.Icon>
      <S.Label>헤어샵</S.Label>
    </S.IconButton>
    <S.IconButton>
      <S.Icon>
        <FiGift />
      </S.Icon>
      <S.Label>선물하기</S.Label>
    </S.IconButton>
  </S.Container>
);

export default IconButtonList;
