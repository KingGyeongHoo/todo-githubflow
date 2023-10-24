import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todolist from "./Components/Todolist";
import { todolist } from "./data/todolist";
import { useState } from "react";
function App() {
  const [list, setList] = useState(todolist)
  return (
    <>
      <header>
        <Header />
      </header>
      <main><Todolist list={list} setList={setList}/></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
