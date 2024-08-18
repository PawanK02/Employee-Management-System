import './App.css';
import AddComp from './Components/AddComp';
import ListComp from "./Components/ListComp";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListComp />
    },
    {
      path: "/details",
      element: <AddComp />
    },
    {
      path: '/details/:id',
      element: <AddComp />
    }
  ])
  return (
    <div className="App-header">
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
      </div>
  );
}

export default App;
