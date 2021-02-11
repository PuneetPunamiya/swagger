import logo from './logo.svg';
import './App.css';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const App = () => <SwaggerUI url="http://localhost:8000/schema/swagger.json" />;

export default App;
