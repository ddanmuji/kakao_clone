import { roomInstance as instance } from '.';

export interface MakeChatRoomRequest {
  opponentId: string;
}

export const fetchChatRoomList = () => instance.get('/');
export const fetchChatRoomDetail = (roomId: string) => instance.get(`/${roomId}`);
export const makeChatRoom = (body: MakeChatRoomRequest) => instance.post('/', body);
