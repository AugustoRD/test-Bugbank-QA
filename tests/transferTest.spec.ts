import {expect, test, BrowserContext, Page} from '@playwright/test';
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

        const match = modalText.match(/A conta (\d+)-(\d+) foi criada com sucesso/);
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
      
        await transferPage.gotoTransferPage();
        await transferPage.fillTransferForm(reciverAccount, reciverDigit, '100', 'Transferência de teste');
        await expect(transferPage.modalText).toBeVisible();
        await expect(transferPage.modalText).toHaveText(/realizada com sucesso/); 
        await transferPage.closeModalButton.click();
        await expect(page).toHaveURL('https://bugbank.netlify.app/bank-statement');
        await expect(transferPage.extractValue).toHaveText(/100,00/);
     });

    test('Transfer denied due to zero value', async ({page}) => {
       
        await transferPage.gotoTransferPage();
        await transferPage.fillTransferForm(reciverAccount, reciverDigit, '0', 'Transferência de teste');
        await expect(transferPage.modalText).toBeVisible();
        await expect(transferPage.modalText).toHaveText(/0 ou negativo/); 
        await transferPage.closeModalButton.click();
     });

     
    test('Transfer denied due to negative value', async ({page}) => {

        await transferPage.gotoTransferPage();
        await transferPage.fillTransferForm(reciverAccount, reciverDigit, '-2', 'Transferência de teste');
        await expect(transferPage.modalText).toBeVisible();
        await expect(transferPage.modalText).toHaveText(/0 ou negativo/); 
        await transferPage.closeModalButton.click();
     });

     test('Transfer denied due to insufficient balance', async ({page}) => {

        await transferPage.gotoTransferPage();
        await transferPage.fillTransferForm(reciverAccount, reciverDigit, '2000', 'Transferência de teste');
        await expect(transferPage.modalText).toBeVisible();
        await expect(transferPage.modalText).toHaveText(/saldo suficiente/); 
        await transferPage.closeModalButton.click();
     });

     test('Transfer declined due to non-existent account', async ({page}) => {
      
        await transferPage.gotoTransferPage();
        await transferPage.fillTransferForm('000000', '0', '100', 'Transferência de teste');
        await expect(transferPage.modalText).toBeVisible();
        await expect(transferPage.modalText).toHaveText(/Conta inválida ou inexistente/); 
        await transferPage.closeModalButton.click();
     });

});