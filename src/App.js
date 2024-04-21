import Header from "./components/Header";
import { useThemeContext } from "./context";

function App() {
  const theme = useThemeContext();
  const darkMode = theme.darkMode;

  return (
    <div
      dir="rtl"
      className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
    >
      <Header />
      <div className="container p-4"></div>
    </div>
  );
}

export default App;
