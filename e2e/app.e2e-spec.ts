import { BcsgPage } from './app.po';

describe('bcsg App', () => {
  let page: BcsgPage;

  beforeEach(() => {
    page = new BcsgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bcsg works!');
  });
});
