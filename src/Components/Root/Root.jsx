import { Outlet } from "react-router-dom";
import Header from "../Header/Header";



const Root = () => {
    return (
        <div className="font-1">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;