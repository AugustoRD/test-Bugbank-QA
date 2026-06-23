import {expect, test} from '@playwright/test';
import {RegisterPage} from '../pages/RegisterPage';

test.describe('Create Account', () => {
    
    
    test('Create Account without Balance', async ({page}) => {
        const registerPage = new RegisterPage(page);

        await registerPage.gotoRegisterPage();
        await registerPage.fillRegisterForm('email@exemplo.com', 'Nome Completo', '123456', '123456');
        await registerPage.clickRegisterButton();
           
        
        await expect(registerPage.modalText).toBeVisible();

        await expect(registerPage.modalText).toHaveText(/foi criada com sucesso/);  
         
        await registerPage.closeModalButton.click();

    });


});
   
