import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "../reducers/login_reducer";
import { useRouter } from "next/router";

const Navbar = ({ cookies }) => {
    const { user } = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const router = useRouter();

    const logout = () => {
        dispatch(logoutAsync());
    };

    React.useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);


    return <div className="h-14 bg-slate-900 fixed top-0 w-screen flex justify-end items-center space-x-3 p-4">
        <button onClick={logout}>
            Logout
        </button>
    </div>;
};

export default Navbar;