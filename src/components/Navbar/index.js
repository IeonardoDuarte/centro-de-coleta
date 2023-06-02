import Image from "next/image";
import "./styles.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav_bar">
        <div className="brand">
          <a className="link">
            <Image src="Logo.svg" width={45} height={45} />
            <span className="title">Centro de coleta sustentável</span>
          </a>  
        </div>
      </nav>
    </>
  )
}