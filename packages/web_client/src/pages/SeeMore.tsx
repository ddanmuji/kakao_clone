import { IconButtonList, UserInfo } from '../components';
import { AppLayout } from '../layouts';

const SeeMore = () => {
  return (
    <AppLayout title="더 보기">
      <UserInfo username={'Jebong'} telNo="+8210 9999 9999" />
      <IconButtonList />
    </AppLayout>
  );
};

export default SeeMore;
