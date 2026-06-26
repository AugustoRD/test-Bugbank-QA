import {Page, Locator} from '@playwright/test';

export class TransferPage {
    readonly page: Page;
    readonly accountNumber: Locator;
    readonly digitAccount: Locator;
    readonly transferValue: Locator;
    readonly transferDescription: Locator;
    readonly transferButton: Locator;
    readonly modalText: Locator;
    readonly closeModalButton: Locator;
    readonly homeTransferButton: Locator;
    readonly extractValue: Locator;
    

    constructor(page: Page) {
        this.page = page; 
        this.accountNumber = page.locator('[name="accountNumber"]');
        this.digitAccount = page.locator('[name="digit"]');
        this.transferValue = page.locator('[name="transferValue"]');
        this.transferDescription = page.locator('[name="description"]');
        this.transferButton = page.getByRole('button', { name: 'Transferir agora' });
        this.modalText = page.locator('#modalText');
        this.closeModalButton = page.locator('#btnCloseModal');
        this.homeTransferButton = page.locator('#btn-TRANSFERÊNCIA');
        this.extractValue = page.locator('#textTransferValue');

    }

     async gotoTransferPage() {
       await this.homeTransferButton.click();;
    }

    async gotoExtractPage() {
        await this.page.goto('https://bugbank.netlify.app/bank-statement');
    }

    async fillTransferForm(accountNumber: string, digitAccount: string, transferValue: string, transferDescription: string) {
        await this.accountNumber.fill(accountNumber);
        await this.digitAccount.fill(digitAccount);
        await this.transferValue.fill(transferValue);
        await this.transferDescription.fill(transferDescription);
        await this.transferButton.click();

    }
}