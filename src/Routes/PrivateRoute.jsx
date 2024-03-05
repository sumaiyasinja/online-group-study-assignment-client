import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} =useAuth()
    const location= useLocation()

    if(loading){
        return <div className="flex justify-center items-center h-screen w-screen"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>

    }
    if(user){
        return children
     }
    
    return <Navigate state={location?.pathname} to='/login' ></Navigate>
    };

    PrivateRoute.propTypes = {
        children: PropTypes.node,
      };
export default PrivateRoute;