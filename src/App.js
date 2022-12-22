import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <body>
            <header>
                <NavBar></NavBar>
            </header>

            <main>
                <ItemListContainer greeting="Aca van cosas :)"></ItemListContainer>
            </main>
        </body>
    );
}

export default App;