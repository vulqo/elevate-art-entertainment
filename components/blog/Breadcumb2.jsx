import Link from "next/link";
import React from "react";

export default function Breadcumb2({ title = "Artículo" }) {
  return (
    <div
      className="breadcumb-wrapper style2"
      style={{ background: "linear-gradient(135deg, #15181d 0%, #20242b 55%, #2b313a 100%)" }}
    >
      <div className="container-fluid">
        <div className="breadcumb-content">
          <ul className="breadcumb-menu">
            <li>
              <Link scroll={false} href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/blog">
                Blog
              </Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
