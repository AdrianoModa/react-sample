import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Option 3</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default App;
