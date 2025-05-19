import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <header>
      <nav>
        <img src={reactLogo} alt="React Logo" />
        <span>React Facts</span>
        {/* <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
