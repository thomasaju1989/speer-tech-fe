import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">details</Link>
          </li>
          <li>
            <Link to="/archive">archive</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;