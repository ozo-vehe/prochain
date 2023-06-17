import { Link } from "react-router-dom";
// import { useCelo } from '@celo/react-celo';
// import { useCelo } from '@celo/react-celo';

const Menu = () => (
  <>
    <Link to="/">
      <p>Explore</p>{" "}
    </Link>   
  </>
);

const Navbar = () => {
  // const { address } = useCelo();
  // console.log(useCelo());
  const address = '0x000000000000'

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">          
          <Link to="/">
            <h1>ProChain</h1>
            <p>Track your product on the blockchain today</p>
          </Link>
        </div>
        <div className="navbar-links_container">
          <Menu />
          {address && (
            <Link to="/">
              <p>Logout</p>
            </Link>
          )}
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="navbar-sign">
        {!address ? (
          <>
            <button type="button" className="secondary-btn">
              Connect wallet
            </button>
          </>
        ) : (
          <>
            <Link
              to={`https://alfajores-blockscout.celo-testnet.org/address/${address}/transactions`}
            >
              <button type="button" className="secondary-btn">
                {/* {truncateAddress(address)} */}
                0x000000000000000000000000
              </button>
            </Link>
            <Link to="/create">
              <button type="button" className="primary-btn">
                Add
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
