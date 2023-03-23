export default function HeadProfile() {
  return (
    <div class="flex-shrink-0 dropdown">
      <a href="#a" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#a">New project...</a></li>
        <li><a class="dropdown-item" href="#a">Settings</a></li>
        <li><a class="dropdown-item" href="#a">Profile</a></li>
        <li>
          <hr class="dropdown-divider"/>
        </li>
        <li><a class="dropdown-item" href="#a">Sign out</a></li>
      </ul>
    </div>
  )
}