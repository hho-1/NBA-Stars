import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import veri from "./helpers/data"                               //Eger datada export default yoksa, normal default varsa bu satirda {veri} seklinde cagirman yeterli

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer data={veri}/>
    </Container>
  );
}

export default App;
