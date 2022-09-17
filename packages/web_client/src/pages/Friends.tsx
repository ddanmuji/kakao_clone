import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { FriendList, Profile } from '../components';
import { AppLayout } from '../layouts';
import { fetchChatRoomList, makeChatRoom } from '../libs/apis/roomApi';
import { fetchMyProfile, fetchUserList } from '../libs/apis/userApi';

const Friends = () => {
  const navigate = useNavigate();

  const { data: profileData } = useQuery<AxiosResponse<any>, AxiosError>(
    'fetchMyProfile',
    fetchMyProfile,
  );

  const { data: userData } = useQuery<AxiosResponse<any>, AxiosError>(
    'fetchMyUserList',
    fetchUserList,
  );

  const { data: chatRoomListData } = useQuery<AxiosResponse<any>, AxiosError>(
    'fetchChatRoomList',
    fetchChatRoomList,
  );

  const mutation = useMutation('makeChatRoom', (request: any) => makeChatRoom(request));

  const onCreateChatRoom = (opponentId: string) => () => {
    const chatRoom = chatRoomListData?.data.find((room: any) => room.opponentId === opponentId);
    if (chatRoom) navigate(`/rooms/${chatRoom.id}`);
    else mutation.mutate({ opponentId }, { onSuccess: (data) => navigate(`room/${data.data.id}`) });
  };

  return (
    <AppLayout title="친구">
      {profileData && <Profile username={profileData.data.username} />}
      {userData && (
        <FriendList
          count={userData.data.count}
          rows={userData.data.rows}
          onClickItem={onCreateChatRoom}
        />
      )}
    </AppLayout>
  );
};

export default Friends;
