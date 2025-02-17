
import { useSession } from "../SessionProvider";


// useSession Hook ret data from sessionProvider (loggedIn user Data)
const Profile = () => {
  const session = useSession();
  return <p>Email: {session?.email || "Not logged in"}</p>;
};

export default Profile;