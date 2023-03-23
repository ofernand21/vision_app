export default function Siebar() {
  return (
    <>
      <aside className="d-flex flex-nowrap">
        <h1 className="visually-hidden">Sidebars examples</h1>

        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-white">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg className="bi pe-none me-2" width="40" height="32"></svg>
            <span className="fs-4">Sidebar</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#a" className="nav-link active" aria-current="page">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Home
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link text-dark">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link text-dark">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link text-dark">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Products
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link text-dark">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Customers
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a href="#a" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-white text-small shadow">
              <li><a className="dropdown-item" href="#a">New project...</a></li>
              <li><a className="dropdown-item" href="#a">Settings</a></li>
              <li><a className="dropdown-item" href="#a">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#a">Sign out</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
}