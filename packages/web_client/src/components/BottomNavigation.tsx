import { Link } from 'react-router-dom';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import S from './BottomNavigation.styled';

const BottomNavigation = () => (
  <S.Container>
    <S.NavList>
      <S.NavItem>
        <Link to="/friends">
          <S.NavButton>
            <BiUser />
          </S.NavButton>
        </Link>
      </S.NavItem>
      <S.NavItem>
        <Link to="/rooms">
          <S.NavButton>
            <BsChatDots />
          </S.NavButton>
        </Link>
      </S.NavItem>
      <S.NavItem>
        <Link to="/more">
          <S.NavButton>
            <AiOutlineEllipsis />
          </S.NavButton>
        </Link>
      </S.NavItem>
    </S.NavList>
  </S.Container>
);

export default BottomNavigation;
