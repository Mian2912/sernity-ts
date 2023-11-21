Feature: Iniciar sesion en el sistema swag labs

    Como usuario de la plataforma swag labs para loguearse
    debera ingresar la credenciales correctas del usuario
    para poder ingresar a la plataforma

    Scenario: Inicio de sesion erroneo
        Given El Usuario ingresa al sistema "https://www.saucedemo.com/"
        When El usuario Ingresa el usuario "miguel@mail.com"
        And El usuario ingresa la contraseña "zksjkljsla"
        And El usuario da click en el boton
        Then el usuario debera ver la siguiente alerta "Epic sadface: Username and password do not match any user in this service"

    Scenario: Inicio de sesion correcto
        Given El usuario ingresa a la web "https://www.saucedemo.com/"
        When El usuario Ingresa el usuario correcto "standard_user"
        And El usuario Ingresa la contraseña correcto "secret_sauce"
        And El usuario dara click en el boton 
        Then El usuario observara el siguiente texto "Swag Labs"

    Scenario: Ingresar a la tienda swag labs
        Given el usuario ingresa al pagina "https://www.saucedemo.com/"
        When el usuario ingresa las credenciales "standard_user" y "secret_sauce"
        And el usuario observa que se logueo "Swag Labs"
        Then el usuario ve los productos de la tienda