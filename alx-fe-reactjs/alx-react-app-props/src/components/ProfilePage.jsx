import { useContext } from 'react';
import UserInfo from './UserInfo'

function ProfilePage() {
    const userData = useContext(useContext)
    return <UserInfo  />;
}

export default ProfilePage;
