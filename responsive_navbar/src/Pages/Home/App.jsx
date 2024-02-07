import "./App.css";
function App() {
  const showSidebar = () =>{
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  const closeSidebar = () =>{
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  return (
    <>
      <nav>
      <ul className="sidebar">
          <li onClick={closeSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
          <li><a>Login</a></li>
          <li><a>Signup</a></li>
          <li><a>Products</a></li>
          <li><a>Contant</a></li>
        </ul>
        <ul>
          <li><a>Dotnote</a></li>
          <li className="hideOnMobile"><a>Login</a></li>
          <li className="hideOnMobile"><a>Signup</a></li>
          <li className="hideOnMobile"><a>Products</a></li>
          <li className="hideOnMobile"><a>Contant</a></li>
          <li onClick={showSidebar} className="menu-button">
          <a>
          <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
