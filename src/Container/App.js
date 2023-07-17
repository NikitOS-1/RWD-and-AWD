import style from "./App.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  const active = "active";
  const styleClasses = [style.app, style.container, style[`${active}`]].join(
    " "
  );
  return (
    <div className={styleClasses}>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
