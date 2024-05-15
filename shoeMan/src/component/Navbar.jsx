import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="./images/brand_logo.png" alt="logo" />
        </div>
        <div className="nav-item">
          <ul className="nav-links">
            <li href="#">Home</li>
            <li href="#">Locations</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
      </nav>
    </>
  );
}
