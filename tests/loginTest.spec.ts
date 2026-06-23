import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {RegisterPage} from '../pages/RegisterPage';

test.describe('Login', () => {
    test('Successful Login', async ({page}) => {
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);

        //cadastra primeiro o usuário para depois logar
        await registerPage.gotoRegisterPage();
        await registerPage.fillRegisterForm('email@exemplo.com', 'Nome Completo', '123456', '123456');
        await registerPage.clickRegisterButton();
           
        
        await expect(registerPage.modalText).toBeVisible();
  
        await registerPage.closeModalButton.click();

        //login
        await loginPage.gotoLoginPage();
        await loginPage.login('email@exemplo.com', '123456');
        await expect(page).toHaveURL('https://bugbank.netlify.app/home');

    
    });
    
    test('Login with wrong password', async ({page}) => {
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);

        await registerPage.gotoRegisterPage();
        await registerPage.fillRegisterForm('email@exemplo.com', 'Nome Completo', '123456', '123456');
        await registerPage.clickRegisterButton();
           
        
        await expect(registerPage.modalText).toBeVisible();
  
        await registerPage.closeModalButton.click();        

        //login com senha errada
        await loginPage.gotoLoginPage();
        await loginPage.login('email@exemplo.com', 'wrong');
        await expect(loginPage.modalText).toHaveText(/Tente novamente/);
        
        await loginPage.closeModalButton.click();
    });

    test('Login with an unregistered email', async ({page}) => {
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);

        await registerPage.gotoRegisterPage();
        await registerPage.fillRegisterForm('email@exemplo.com', 'Nome Completo', '123456', '123456');
        await registerPage.clickRegisterButton();
           
        
        await expect(registerPage.modalText).toBeVisible();
  
        await registerPage.closeModalButton.click();        

        //login com email não cadastrado
        await loginPage.gotoLoginPage();
        await loginPage.login('teste@exemplo.com', '123456');
        await expect(loginPage.modalText).toHaveText(/Tente novamente/);
        
        await loginPage.closeModalButton.click();
    });

    test('Login with an invalid email', async ({page}) => {
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);

        await registerPage.gotoRegisterPage();
        await registerPage.fillRegisterForm('email@exemplo.com', 'Nome Completo', '123456', '123456');
        await registerPage.clickRegisterButton();
           
        
        await expect(registerPage.modalText).toBeVisible();
  
        await registerPage.closeModalButton.click();        

        //login com email de formato inválido
        await loginPage.gotoLoginPage();
        await loginPage.login('testexemplo.com', '123456');
        await expect(loginPage.warningText).toHaveText(/E-mailFormato inválidoSenhaAcessarRegistrarConheça/);
       
       
    });
  
});