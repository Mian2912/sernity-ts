import { Given, When, Then } from "@cucumber/cucumber";
import { By, TouchSequence, until } from "selenium-webdriver"
import { expect } from "chai";


let username:string = "//input[contains(@id,'user-name')]"
let password:string = "//input[contains(@id,'password')]"
let button:string = "//input[contains(@id,'login-button')]"

Given('El Usuario ingresa al sistema {string}', async function (string)  {
    // Write code here that turns the phrase above into concrete actions
    await this.openBrowser(string);
});

When('El usuario Ingresa el usuario {string}', async function (string) {
    //Write code here that turns the phrase above into concrete actions
    await this.driver.findElement(By.xpath(username)).sendKeys(string);
});

// When('El usuario Ingresa el usuario {string}', function (string) {
//     Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });


When('El usuario ingresa la contraseña {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.findElement(By.xpath(password)).sendKeys(string);
});

When('El usuario da click en el boton', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.findElement(By.xpath(button)).click();
});

Then('el usuario debera ver la siguiente alerta {string}', async function (string)  {
    // Write code here that turns the phrase above into concrete actions
    let code:string = "";
    await this.driver.findElement(By.xpath("//h3[@data-test='error']")).getText().then((text:string) => code = text)
    expect(code).to.eql(string)
    await this.closeBrowser();
});

Given('El usuario ingresa a la web {string}', async function (string) {
    await this.openBrowser(string)
});

When('El usuario Ingresa el usuario correcto {string}', async function (string) {
    
    await this.driver.findElement(By.xpath(username)).sendKeys(string);
});

When('El usuario Ingresa la contraseña correcto {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.findElement(By.xpath(password)).sendKeys(string)
});

When('El usuario dara click en el boton', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.findElement(By.xpath(button)).click()
});

Then('El usuario observara el siguiente texto {string}', async function (string) {
    let text = await this.driver.findElement(By.xpath("//div[@class='app_logo']")).getText()
    expect(text).to.eql(string)
    await this.closeBrowser();
});



Given('el usuario ingresa al pagina {string}', async function (string) {
    await this.openBrowser(string);
});


When('el usuario ingresa las credenciales {string} y {string}', async function (string, string2) {
    await this.driver.findElement(By.xpath(username)).sendKeys(string)
    await this.driver.findElement(By.xpath(password)).sendKeys(string2)
    await this.driver.findElement(By.xpath(button)).click()
});

When('el usuario observa que se logueo {string}', async function (string) {
    let text = await this.driver.findElement(By.xpath("//div[@class='app_logo']")).getText()
    expect(text).to.equal(string);
});

Then('el usuario ve los productos de la tienda', async function () {
    await this.driver.wait(until.elementLocated(By.xpath("(//div[@class='inventory_item_name '])[2]")), 5000)
    let elements = await this.driver.findElements(By.xpath("(//div[@class='inventory_item_name '])"))
    elements.forEach((element:any) => {
        console.log(element.dri)
        
    });
    await this.closeBrowser();
});

