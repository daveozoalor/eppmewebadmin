import { EppmewebadminPage } from './app.po';

describe('eppmewebadmin App', function() {
  let page: EppmewebadminPage;

  beforeEach(() => {
    page = new EppmewebadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
