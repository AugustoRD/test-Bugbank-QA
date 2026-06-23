import {Page, Locator} from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly email: Locator;

  readonly password: Locator;

  readonly loginButton: Locator;

  readonly modalText: Locator;

  readonly closeModalButton: Locator;

  readonly warningText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('[name="email"]').nth(0);
    this.password = page.locator('[name="password"]').nth(0);
    this.loginButton = page.getByRole('button', { name: 'Acessar' });
    this.modalText = page.locator('#modalText');
    this.closeModalButton = page.locator('#btnCloseModal');
    this.warningText = page.locator('div').nth(3);
  }

  async gotoLoginPage() {
    await this.page.goto('https://bugbank.netlify.app/');
  }



  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
}

}