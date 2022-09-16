import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { LoginForm } from '../components';
import { LoginLayout } from '../layouts';
import { login } from '../libs/apis/userApi';

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState('');
  const onChangeLoginData = (e: ChangeEvent<HTMLInputElement>) => setLoginData(e.target.value);

  const mutation = useMutation((username: string) => login({ username }));

  const onSubmitLoginForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(loginData, {
      onSuccess: (data) => {
        console.log(data);
        if (data?.statusText === 'OK') navigate('/friends');
      },
    });
  };

  return (
    <LoginLayout>
      <LoginForm value={loginData} onChange={onChangeLoginData} onSubmit={onSubmitLoginForm} />
    </LoginLayout>
  );
};

export default Login;
