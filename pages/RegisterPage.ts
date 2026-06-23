import {Page, Locator} from '@playwright/test';

export class RegisterPage {

    readonly page: Page;
    readonly email: Locator;
    readonly name: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly createWithBalance: Locator;
    readonly registerButton: Locator;
    readonly createAccount: Locator; 
    readonly modalText: Locator;
    readonly closeModalButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('[name="email"]').nth(1);
        this.name = page.locator('[name="name"]');
        this.password = page.locator('[name="password"]').nth(1);
        this.confirmPassword = page.locator('[name="passwordConfirmation"]');
        this.createWithBalance = page.locator('#toggleAddBalance');
        this.registerButton = page.getByRole('button', { name:'Registrar' });
        this.createAccount = page.getByRole('button', { name: 'Cadastrar' });
        this.modalText = page.locator('#modalText');
        this.closeModalButton = page.locator('#btnCloseModal');
    }

    async gotoRegisterPage() {
        await this.page.goto('https://bugbank.netlify.app/');
        await this.registerButton.click();
    }

    async fillRegisterForm(email: string, name: string, password: string, confirmPassword: string) {
        await this.email.fill(email);
        await this.name.fill(name);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
    }

    async activeCreateWithBalance() {
        await this.createWithBalance.click();
    }

    async clickRegisterButton() {
        await this.createAccount.click();
    }

}