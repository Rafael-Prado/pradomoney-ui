import { PradomoneyUiPage } from './app.po';

describe('pradomoney-ui App', () => {
  let page: PradomoneyUiPage;

  beforeEach(() => {
    page = new PradomoneyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
