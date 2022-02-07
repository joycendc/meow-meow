import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div style={{ display: "flex", padding: "0 8rem" }}>
        <Link href="/" className="navbar-brand">
          <p className="link">Home</p>
        </Link>
        <Link href="/cats" className="navbar-brand">
          <p className="link">Cats</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
