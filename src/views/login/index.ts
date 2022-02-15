import {
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QLineEdit,
  EchoMode,
} from "@nodegui/nodegui";

//CONTENEDOR HIJO//
const viewchild = new QWidget();
viewchild.setObjectName("viewchild");
viewchild.setLayout(new FlexLayout());

//TITULO LOGIN//

const title = new QLabel();
title.setObjectName("titleLogin");
title.setText("Login"); //AGREGAR TEXTO

//CONTENEDOR DE USUARIO//

const containerUser = new QWidget();
containerUser.setObjectName("container-user");
containerUser.setLayout(new FlexLayout());

const labeluser = new QLabel();
labeluser.setObjectName("user");
labeluser.setText("Usuario");

const textUser = new QLineEdit();
textUser.setObjectName("inputUser");
textUser.setPlaceholderText("Ingrese usuario");

//CONTENEDOR DE PASSWORD//

const containerPassword = new QWidget();
containerPassword.setObjectName("container-password");
containerPassword.setLayout(new FlexLayout());

const labelpassword = new QLabel();
labelpassword.setObjectName("password");
labelpassword.setText("Clave");

const textPassword = new QLineEdit();
textPassword.setObjectName("passwordInput");
textPassword.setPlaceholderText("***********");
textPassword.setEchoMode(EchoMode.Password); //ASIGNAR TIPO PASSWORD

//BOTON//

const buttonLogin = new QPushButton();
buttonLogin.setObjectName("ingresar");
buttonLogin.setText("Ingresar");

//message

const textError = new QLabel();
textError.setObjectName("error");

containerUser.layout?.addWidget(labeluser);
containerUser.layout?.addWidget(textUser);
containerPassword.layout?.addWidget(labelpassword);
containerPassword.layout?.addWidget(textPassword);
viewchild.layout?.addWidget(title);
viewchild.layout?.addWidget(containerUser);
viewchild.layout?.addWidget(containerPassword);
viewchild.layout?.addWidget(buttonLogin);
viewchild.layout?.addWidget(textError);

viewchild.setStyleSheet(`
#viewchild{
    background-color:#F4F6F6;
    border-radius:20px;
    padding:30px;
    height: '50%';
    width:'25%';
    align-items:'center';
    justify-content:'center';
  }

  #titleLogin{
    font-size: 24px;
    font-weight: 'bold';
    margin: 20px 0px 20px 0px;
  }

  #container-user,
  #container-password{
    flex-direction: 'row';
    justify-content:'space-between';
    margin-bottom: 20px;
    width:'100%';
  }

  #user, #password{
    width: '50%';
  }

  #inputUser, #passwordInput{
    border-style:'none';
    padding:5px;
    border-radius:20px;
  }

  #ingresar{
    background-color:#D4AC0D;
    border-style:'none';
    border-radius:15px;
    padding:10px;
    width:'100%';
  }
  #ingresar:hover{
    background-color:#F1C40F;
  }

`);

export default viewchild;
export {
  textPassword,
  textUser,
  buttonLogin,
  textError
}