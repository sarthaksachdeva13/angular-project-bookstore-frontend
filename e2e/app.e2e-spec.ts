import { StoreFrontPage } from './app.po';

describe('store-front App', () => {
  let page: StoreFrontPage;

  beforeEach(() => {
    page = new StoreFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
