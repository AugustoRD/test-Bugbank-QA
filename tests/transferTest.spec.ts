import {expect, test} from '@playwright/test';
import {RegisterPage} from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { TransferPage } from '../pages/TransferPage';

test.describe('Transfer', () => {

    let loginPage: LoginPage;
    let registerPage: RegisterPage;
    let transferPage: TransferPage;

    let reciverAccount: string;
    let reciverDigit: string;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        registerPage = new RegisterPage(page);
        transferPage = new TransferPage(page);

        //cadastra primeiro o usuário 
        await registerPage.gotoRegisterPage();
        await registerPage.fillRegisterForm('semsaldo@exemplo.com', 'Usuário SemSaldo', '123456', '123456');
        
        await registerPage.clickRegisterButton();
        await expect(registerPage.modalText).toBeVisible();

        const modalText = await registerPage.modalText.innerText();

        const match = modalText.match(/A conta (\d+)-(\d+) foi criada com sucesso!/);
        if (match) {
            reciverAccount = match[1];
            reciverDigit = match[2];
        }
        await registerPage.closeModalButton.click();

        //segundo usuário com saldo de 1000
        await registerPage.gotoRegisterPage();
        await registerPage.fillRegisterForm('comsaldo@exemplo.com', 'Usuário ComSaldo', '123456', '123456');
        await registerPage.activeCreateWithBalance();

        await registerPage.clickRegisterButton();
        await expect(registerPage.modalText).toBeVisible();

        await registerPage.closeModalButton.click();

        //Login com o usuário com saldo
        await loginPage.gotoLoginPage();
        await loginPage.login('comsaldo@exemplo.com', '123456');
        await expect(page).toHaveURL('https://bugbank.netlify.app/home');
        
    });
    

    test('Transfer completed successfully', async ({page}) => {
        //const registerPage = new RegisterPage(page);
        await transferPage.gotoTransferPage();
        await transferPage.fillTransferForm(reciverAccount, reciverDigit, '100', 'Transferência de teste');
     });

});