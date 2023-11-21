"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver");
const chai_1 = require("chai");
let username = "//input[contains(@id,'user-name')]";
let password = "//input[contains(@id,'password')]";
let button = "//input[contains(@id,'login-button')]";
(0, cucumber_1.Given)('El Usuario ingresa al sistema {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield this.openBrowser(string);
    });
});
(0, cucumber_1.When)('El usuario Ingresa el usuario {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        //Write code here that turns the phrase above into concrete actions
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(username)).sendKeys(string);
    });
});
// When('El usuario Ingresa el usuario {string}', function (string) {
//     Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });
(0, cucumber_1.When)('El usuario ingresa la contraseña {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(password)).sendKeys(string);
    });
});
(0, cucumber_1.When)('El usuario da click en el boton', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(button)).click();
    });
});
(0, cucumber_1.Then)('el usuario debera ver la siguiente alerta {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        let code = "";
        yield this.driver.findElement(selenium_webdriver_1.By.xpath("//h3[@data-test='error']")).getText().then((text) => code = text);
        (0, chai_1.expect)(code).to.eql(string);
        yield this.closeBrowser();
    });
});
(0, cucumber_1.Given)('El usuario ingresa a la web {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.openBrowser(string);
    });
});
(0, cucumber_1.When)('El usuario Ingresa el usuario correcto {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(username)).sendKeys(string);
    });
});
(0, cucumber_1.When)('El usuario Ingresa la contraseña correcto {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(password)).sendKeys(string);
    });
});
(0, cucumber_1.When)('El usuario dara click en el boton', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(button)).click();
    });
});
(0, cucumber_1.Then)('El usuario observara el siguiente texto {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let text = yield this.driver.findElement(selenium_webdriver_1.By.xpath("//div[@class='app_logo']")).getText();
        (0, chai_1.expect)(text).to.eql(string);
        yield this.closeBrowser();
    });
});
(0, cucumber_1.Given)('el usuario ingresa al pagina {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.openBrowser(string);
    });
});
(0, cucumber_1.When)('el usuario ingresa las credenciales {string} y {string}', function (string, string2) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(username)).sendKeys(string);
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(password)).sendKeys(string2);
        yield this.driver.findElement(selenium_webdriver_1.By.xpath(button)).click();
    });
});
(0, cucumber_1.When)('el usuario observa que se logueo {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let text = yield this.driver.findElement(selenium_webdriver_1.By.xpath("//div[@class='app_logo']")).getText();
        (0, chai_1.expect)(text).to.equal(string);
    });
});
(0, cucumber_1.Then)('el usuario ve los productos de la tienda', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath("(//div[@class='inventory_item_name '])[2]")), 5000);
        let elements = yield this.driver.findElements(selenium_webdriver_1.By.xpath("(//div[@class='inventory_item_name '])"));
        elements.forEach((element) => {
            console.log(element.dri);
        });
        yield this.closeBrowser();
    });
});
