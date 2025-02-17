import { useSession } from "../SessionProvider";

const Dashboard = () => {
  const session = useSession();
  return <h1>Welcome, {session?.userName || "Guest"}!</h1>;
};

export default Dashboard;