import ProfilePage from './ProfilePage';
import {UserContext} from './UseContent';

function App() {
const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

 return 
 <UserContext.Provider value= {userdata}>
<ProfilePage userData={userData} />;
 </UserContext.Provider>
 
}

export default App;
