import { QMainWindow, QWidget, FlexLayout } from "@nodegui/nodegui";

import login, {
  buttonLogin,
  textError,
  textPassword,
  textUser,
} from "./views/login";
import simulator, {
  inputMonto,
  inputTasa,
  inputNumCuotas,
  inputCuotaMes,
  cancel,
  generar,
} from "./views/simulator";

// VENTANA//
const win = new QMainWindow();
win.setWindowTitle("Sistema de Credito"); //COLOCARLE TITULO A LA VENTANA

//CONTENEDOR PADRE//

const view = new QWidget();
view.setObjectName("rootview"); //ASIGNAR CLASE
view.setLayout(new FlexLayout()); //DISPLAY FLEX

view.layout?.addWidget(login);

//funcionalidad de boton login//

buttonLogin.addEventListener("clicked", () => {
  const password = textPassword.text();
  const user = textUser.text();
  console.log(user, password);
  if (user === "angie" && password === "1234ammu") {
    view.layout?.removeWidget(login);
    login.close();
    view.update();
    view.layout?.addWidget(simulator);
    simulator.show();
  } else {
    textError.setText("Usuario y/o clave incorrecto");
    textError.setInlineStyle("color:red; flex: 1 ;");
  }
  win.update();
  win.updateGeometry();
});

cancel.addEventListener("clicked", () => {
  view.layout?.removeWidget(simulator);
  simulator.close();
  view.update();
  view.layout?.addWidget(login);
  login.show();
  view.update();

  win.update();
  win.updateGeometry();
});

generar.addEventListener("clicked", () => {
  const aplicarTasa =
    (parseInt(inputMonto.text(), 10) * parseInt(inputTasa.text(), 10)) / 100;

  const cuotaMensual =
    (parseInt(inputNumCuotas.text(), 10) * aplicarTasa +
      parseInt(inputMonto.text(), 10)) /
    parseInt(inputNumCuotas.text(), 10);

  inputCuotaMes.setText(cuotaMensual.toString());
});

win.setCentralWidget(view);

win.setStyleSheet(`
  #rootview {
    background-color: #212121;
    align-items: 'center';
    justify-content:'center';
  }

 `);

win.show();

(global as any).win = win;
