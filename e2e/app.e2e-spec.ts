import { NGPortfolioPage } from './app.po';

describe('ngportfolio App', function() {
  let page: NGPortfolioPage;

  beforeEach(() => {
    page = new NGPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
