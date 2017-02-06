import { CjugPrimengPage } from './app.po';

describe('cjug-primeng App', function() {
  let page: CjugPrimengPage;

  beforeEach(() => {
    page = new CjugPrimengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
