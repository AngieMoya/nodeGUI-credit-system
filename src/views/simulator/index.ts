import {
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QLineEdit,
  EchoMode,
} from "@nodegui/nodegui";

const container = new QWidget();
container.setObjectName("main");
container.setLayout(new FlexLayout());

const title = new QLabel();
title.setText("Sistema de crédito");
title.setObjectName("title-sis");

//CONTAINER MONTO A FINANCIAR//

const container_monto = new QWidget();
container_monto.setObjectName("container-monto");
container_monto.setLayout(new FlexLayout());

const monto = new QLabel();
monto.setObjectName("label-monto");
monto.setText("Monto a financiar $ ");

const inputMonto = new QLineEdit();
inputMonto.setObjectName("input-monto");
inputMonto.setPlaceholderText("Ingrese valor a financiar");
inputMonto.setEchoMode(EchoMode.Normal)

//CONTAINER TASA DE INTERES//

const container_tasa = new QWidget();
container_tasa.setObjectName("container-tasa");
container_tasa.setLayout(new FlexLayout());

const tasa = new QLabel();
tasa.setObjectName("label-tasa");
tasa.setText("Tasa de interes % ");

const inputTasa = new QLineEdit();
inputTasa.setObjectName("input-tasa");
inputTasa.setPlaceholderText("Ingrese tasa de interes");

// CONTAINER NUMERO DE CUOTAS//

const container_numCuotas = new QWidget();
container_numCuotas.setObjectName("container-numCuotas");
container_numCuotas.setLayout(new FlexLayout());

const numCuotas = new QLabel();
numCuotas.setObjectName("label-numCuotas");
numCuotas.setText("Numero de cuotas");

const inputNumCuotas = new QLineEdit();
inputNumCuotas.setObjectName("input-numCuotas")
inputNumCuotas.setPlaceholderText("Ingrese el numero de cuotas");

//CONTAINER CUOTA MENSUAL//

const container_cuotaMes = new QWidget();
container_cuotaMes.setObjectName("container-cuotaMes");
container_cuotaMes.setLayout(new FlexLayout());

const cuotaMes = new QLabel();
cuotaMes.setObjectName("label-cuotaMes");
cuotaMes.setText("Cuota mensual $ ");

const inputCuotaMes = new QLineEdit();
inputCuotaMes.setObjectName("input-cuotaMes");
inputCuotaMes.setEnabled(false);

// CONTAINER BOTONES//

const container_buttons = new QWidget();
container_buttons.setObjectName("buttons");
container_buttons.setLayout(new FlexLayout());

// boton cancelar //

const cancel = new QPushButton();
cancel.setObjectName("button-cancel");
cancel.setText("Cancelar");

// boton generar//

const generar = new QPushButton();
generar.setObjectName("button-generar");
generar.setText("Generar");

//

container_monto.layout?.addWidget(monto);
container_monto.layout?.addWidget(inputMonto);
container_tasa.layout?.addWidget(tasa);
container_tasa.layout?.addWidget(inputTasa);
container_numCuotas.layout?.addWidget(numCuotas);
container_numCuotas.layout?.addWidget(inputNumCuotas);
container_cuotaMes.layout?.addWidget(cuotaMes);
container_cuotaMes.layout?.addWidget(inputCuotaMes);
container_buttons.layout?.addWidget(cancel);
container_buttons.layout?.addWidget(generar);
container.layout?.addWidget(title);
container.layout?.addWidget(container_monto);
container.layout?.addWidget(container_tasa);
container.layout?.addWidget(container_numCuotas);
container.layout?.addWidget(container_cuotaMes);
container.layout?.addWidget(container_buttons);

container.setStyleSheet(`

    #main{
    background-color:#F4F6F6;
    border-radius:20px;
    height: '50%';
    width:'35%';
    align-items:'center';
    justify-content:'center';
    padding:60px;
  }

  #title-sis{
    font-size: 24px;
    font-weight: 'bold';
    margin: 10px 0px 20px 0px;
    text-align:'center';
  }

  #container-monto,
  #container-tasa,
  #container-numCuotas,
  #container-cuotaMes,
  #buttons{
    flex-direction: 'row';
    justify-content:'space-between';
    margin-bottom: 10px;
    width:'100%';
  }

  #label-monto,
  #label-tasa,
  #label-numCuotas,
  #label-cuotaMes{
      width:'50%';
  }

  #input-monto,
  #input-tasa,
  #input-numCuotas,
  #input-cuotaMes{
      width:'50%';
      border-style:'none';
      padding:5px;
  }

  #button-cancel,
  #button-generar{
    background-color:#D4AC0D;
    border-style:'none';
    border-radius:15px;
    padding:10px;
    width:'47%';
  }

  #button-cancel:hover,
  #button-generar:hover{
    background-color:#F1C40F;
  }

`);

export default container;
export{
  inputMonto,
  inputTasa,
  inputNumCuotas,
  inputCuotaMes,
  cancel,
  generar
}
