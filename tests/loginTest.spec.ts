import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {RegisterPage} from '../pages/RegisterPage';

test.describe('Login', () => {
    let loginPage: LoginPage;
    let registerPage: RegisterPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        registerPage = new RegisterPage(page);

        //cadastra primeiro o usuário para depois logar
        await registerPage.gotoRegisterPage();
        await registerPage.fillRegisterForm('email@exemplo.com', 'Nome Completo', '123456', '123456');
        await registerPage.clickRegisterButton();
           
        await expect(registerPage.modalText).toBeVisible();
  
        await registerPage.closeModalButton.click();

        await loginPage.gotoLoginPage();
    });


    test('Successful Login', async ({page}) => {

        //login
        await loginPage.login('email@exemplo.com', '123456');
        await expect(page).toHaveURL('https://bugbank.netlify.app/home');

    });
    
    test('Login with wrong password', async ({page}) => {     

        //login com senha errada
        await loginPage.login('email@exemplo.com', 'wrong');
        await expect(loginPage.modalText).toHaveText(/Tente novamente/);
        
        await loginPage.closeModalButton.click();
    });

    test('Login with an unregistered email', async ({page}) => {    

        //login com email não cadastrado
        await loginPage.login('teste@exemplo.com', '123456');
        await expect(loginPage.modalText).toHaveText(/Tente novamente/);
        
        await loginPage.closeModalButton.click();
    });

    test('Login with an invalid email', async ({page}) => {    

        //login com email de formato inválido
        await loginPage.login('testexemplo.com', '123456');
        await expect(loginPage.warningText).toHaveText(/E-mailFormato inválidoSenhaAcessarRegistrarConheça/); 
    });
});