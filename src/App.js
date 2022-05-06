import { Button } from "reactstrap";
import { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ModalX from "./ModalX";
import ModalY from "./ModalY";
import StateContext from "./StateContext";

export default function App() {
  const [state, setState] = useState({});
  const themeContext = useMemo(() => ({ state, setState }), [state, setState]);
  const handleOpenModal = (e, modal) => {
    setState({ modal });
  };

  return (
    <StateContext.Provider value={themeContext}>
      <div className="App">
        {state.modal === "ModalX" && <ModalX />}
        {state.modal === "ModalY" && <ModalY />}
        <Button color="primary" onClick={(e) => handleOpenModal(e, "ModalX")}>
          Open Modal X
        </Button>
        <Button color="primary" onClick={(e) => handleOpenModal(e, "ModalY")}>
          Open Modal Y
        </Button>
      </div>
    </StateContext.Provider>
  );
}
