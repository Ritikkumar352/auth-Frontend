import { Navigate } from "react-router-dom";
import { useSession } from "../SessionProvider";

const PrivateRouter = ({ children }) => {
  const session = useSession();

  if (session === undefined) {
    return <p>Please wait, Loading....</p>;
  }

  console.log(session?.userId, "session user id");

  if (!session?.userId) {
    console.log("You are not logged in, please login --- [[Private route]]");
    return <Navigate to="/login" />;
  }

  return children; // Render children if the user is logged in
};

export default PrivateRouter;
