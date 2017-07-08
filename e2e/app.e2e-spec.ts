import { TestAppsPage } from './app.po';

describe('test-apps App', () => {
  let page: TestAppsPage;

  beforeEach(() => {
    page = new TestAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
