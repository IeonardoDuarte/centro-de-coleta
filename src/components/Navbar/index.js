import "./styles.css";

export default function Navbar() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <nav className="navbar">
        <a className="home-btn" href="/">
          <i className="fas fa-recycle"></i>
          <span>DOE AGORA</span>
        </a>
      </nav>
    </>
  )
}