import { userInstance as instance } from '.';

interface User {
  username: string;
}

export const login = (body: User) => instance.post('/login', body);
export const logout = () => instance.post('/logout');
export const fetchUserList = () => instance.get('/');
export const fetchMyProfile = () => instance.get('/me');
