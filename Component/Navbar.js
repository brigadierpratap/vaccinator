import Image from "next/image";
import Link from "next/link";

function NavbarComp() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark "
        style={{
          width: "100%",
          paddingLeft: "4%",
          paddingRight: "4%",
        }}
      >
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand nav-brand">
              <Image src="/inj.svg" width={30} height={30} className="mr-2" />
              Vaccinator
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/add-alert">
                  <a className="nav-link active">Add Alert</a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="https://github.com/brigadierpratap">
                  <a
                    className="nav-link active nav-social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/git.svg" width={30} height={30} />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://www.linkedin.com/in/pawan-singh-4b3b8618b">
                  <a
                    className="nav-link active nav-social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/lin.svg" width={30} height={30} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavbarComp;
