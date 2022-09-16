import { ChangeEvent, FC } from 'react';
import S from './LoginForm.styled';

interface LoginFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  value: string;
}

const LoginForm: FC<LoginFormProps> = ({ onChange, onSubmit, value }) => (
  <S.Form onSubmit={onSubmit}>
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input value={value} onChange={onChange} placeholder="카카오계정 (이름)" />
        <S.Input placeholder="비밀번호 (관상용)" disabled />
      </S.InputWrapper>
      <S.Button type="submit">로그인</S.Button>
      <S.Text>(비밀번호 필요없습니당)</S.Text>
    </S.Wrapper>
  </S.Form>
);

export default LoginForm;
