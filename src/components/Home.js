import {
  Button,
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Table,
  Col,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap

function Home() {
  return (
    <div>
      <h4>Welcome</h4>

      <ul>
        <li>
          <a target="_blank" href="https://react-bootstrap.github.io/" class="link-info">
            React Boostrap
          </a>
        </li>
        <li>
          <a target="_blank" href="https://app.supabase.io/" class="link-info">
            Firebase Supabase
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
