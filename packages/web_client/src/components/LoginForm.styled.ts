import styled from '@emotion/styled';

const Form = styled.form`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 3px;

  > :first-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 8px 12px;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[400]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: none;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.gray[200]};
  padding: 10px 0;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export default {
  Form,
  Wrapper,
  InputWrapper,
  Input,
  Button,
  Text,
};
