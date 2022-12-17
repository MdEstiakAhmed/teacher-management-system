import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useCheckAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("tms_token");
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return isAuthenticated;
}
 
export default useCheckAuth;