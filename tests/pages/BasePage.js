export class BasePage { 
    constructor(page) {
        this.page = page;
    }


    async goto(path = '') {
        await this.page.goto('https://www.saucedemo.com/'+ path);

    }
}