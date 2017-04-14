import { browser, element, by } from 'protractor';

export class BcsgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bcsg-root h1')).getText();
  }
}
