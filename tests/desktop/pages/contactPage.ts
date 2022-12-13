export class ContactPage {
    //contacts_block

    phoneOne = "text=+7 (800) 333-17-63";
    phoneTwo = "text=+7 (495) 215-03-87";
    emailContactOne = "text=info@ddos-guard.net";
    emailContactTwo = "text=pr@ddos-guard.net";

    technicalSupport = "//p[@class='contacts-info__list__item--text']//span[1]";
    technicalChatSupport = "(//div[contains(@class,'tawk-chat-panel-inner tawk-flex')])[2]"


    //FormBlock
    multiSelect = "//span[text()[normalize-space()='Выберите тему']]";
    listSelectOne = 'span:has-text("Продажи")';
    listSelectTwo = '#contacts-form li:has-text("Поддержка") span';
    listSelectThree = 'span:has-text("Общие вопросы")'
    listMultiSelect = [this.listSelectOne, this.listSelectTwo, this.listSelectThree];
    randListMultiSelect = this.listMultiSelect[Math.floor(Math.random() * this.listMultiSelect.length)];
    inputFormTextarea = "textarea";
    inputFormName = "(//input[@class='ui-input__input'])[1]";
    inputFormPhone = "(//input[@class='ui-input__input'])[2]";
    inputFormEmail = "(//input[@class='ui-input__input'])[3]";
    checkboxForm = "(//input[@class='ui-checkbox__input']/following-sibling::div)[1]";
    emailTest = "a.frolov@ddos-guard.net";


}