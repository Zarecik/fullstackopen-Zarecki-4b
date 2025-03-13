import ReactDOM from 'react-dom/client';
import App from './App';

const notes = [
  { content: 'HTML is easy' },
  { content: 'Browser can execute only JavaScript' },
  { content: 'GET and POST are the most important methods of HTTP protocol' }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
);

