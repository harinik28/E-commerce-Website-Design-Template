import { Link, Outlet } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useSelector } from "react-redux";

const Header = () => {
    const { cart } = useSelector((state) => state.product);

    const cartCount = Object.values(cart).reduce((total, item) => total + item.count, 0);

    return (
        <>
            <div className="header d-flex justify-content-around align-items-center bg-secondary">
                <h1 className="mb-0">Brand</h1>
                <SearchInput />
                <Link className="text-decoration-none" to='/cart'>
                    <button
                        className="d-flex justify-content-around align-items-center gap-2 btn btn-light"
                        style={{ fontSize: "20px", marginBottom: 0, width: "125px", textAlign: "center" }}
                    >
                        <i className="fa-solid fa-cart-shopping"></i> Cart&#x0028;{cartCount || 0}&#x0029;
                    </button>
                </Link>
            </div>
            <Outlet />
        </>
    );
};

export default Header;
