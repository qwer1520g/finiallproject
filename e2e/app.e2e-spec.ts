import { HeroPage } from './app.po';

describe('hero App', () => {
  let page: HeroPage;

  beforeEach(() => {
    page = new HeroPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
