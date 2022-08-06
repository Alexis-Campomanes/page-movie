
import './App.css';
import { MoviesGrid } from './componentes/MoviesGrid';
import styles from "./module.css/app.module.css"

export function App() {
  return (
    <div className="App">
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
      
    </div>
  );
}


