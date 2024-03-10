import { Container } from "react-bootstrap";
import TshirtForm from "../components/TshirtForm";
import { InventoryProvider } from "../store/inventory-context";
import TShirtList from "../components/TshirtList";

const UserPage = (props) => {
  return (
    <Container>
      <InventoryProvider>
        <TshirtForm />
        <TShirtList />
      </InventoryProvider>
    </Container>
  );
};

export default UserPage;
