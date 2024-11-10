import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold ">OOpsss</h1>
           <Link to={'/'} >
                <button className="btn my-10">Go Back to home</button>
           </Link>

        </div>
    );
};

export default ErrorElement;