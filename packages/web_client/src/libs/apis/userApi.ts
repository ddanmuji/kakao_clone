import { userInstance as instance } from '.';

interface User {
  username: string;
}

export const login = (body: User) => instance.post('/user/login', body);
export const logout = () => instance.post('/user/logout');
export const fetchUserList = () => instance.get('/user');
export const fetchMyProfile = () => instance.get('/user/me');
