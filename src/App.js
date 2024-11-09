import Logo from './assets/Logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <footer>
        <p>Feito por @leckliss</p>
      </footer>
    </div>
  );
}


