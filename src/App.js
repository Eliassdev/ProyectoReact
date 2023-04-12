import NavBar from "./components/NavBar";
import Main from "./components/Main";
import ProductosContainer from "./components/ProductosContainer";



function App() {
  return (
     <>
      <Main titulo="Bienvenidos a Wave Boards" ></Main>
      <NavBar></NavBar>
      <ProductosContainer parrafo= "La lista de productos"></ProductosContainer>


      <footer>
        <p>copyright</p>
        </footer>
     </>
  );
}

export default App;
 