import { ConnectClientPage } from './app.po';

describe('connect-client App', function() {
  let page: ConnectClientPage;

  beforeEach(() => {
    page = new ConnectClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
