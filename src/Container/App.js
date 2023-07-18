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
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
