import { Builder } from "selenium-webdriver"
import { setWorldConstructor } from "@cucumber/cucumber";


class BBDWorld {
    driver:any = null;

    constructor(){
        
    }


    async openBrowser(url:string){
        if(!this.driver)
            this.driver = await new Builder().forBrowser("chrome").build()
        await this.driver.get(url)
    }

    async closeBrowser(){
        if(this.driver)
            await this.driver.quit()
    }       

}

setWorldConstructor(BBDWorld)