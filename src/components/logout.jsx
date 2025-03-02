import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = async () => {
    try {
        const response = await fetch("http://localhost:8080/logout", {
            method: "POST",
            credentials: "include",
        });

        if (response.ok) {
            console.log("Logout successful");
        } else {
            console.log("Logout failed", response.status);
        }
    } catch (e) {
        console.log("Not logged out", e);
    }
};

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            await Logout();
            navigate("/login"); 
        };

        handleLogout();
    }, [navigate]);

    return <p>Logging out...</p>;
};

export default LogoutPage;
