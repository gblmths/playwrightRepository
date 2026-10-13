import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = page.getById('user-name');
        this.passwordInput = page.getById('password');
        this.loginButton = page.getById('login-button');
    } 

    async open() {
        await this.goto();
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }   
}    