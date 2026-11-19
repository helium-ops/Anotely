import { useAuth } from "../context/AuthProvider";
import NewDashboard from './NewDashboard'
import ExistingUserDashboard from "./ExistingUserDashboard";

const Dashboard = () => {
    const { currentUser } = useAuth();
    const subjects = currentUser?.subjects || [];
    return(
      subjects.length === 0 ? <NewDashboard/> : <ExistingUserDashboard/>
    )
}

export default Dashboard
