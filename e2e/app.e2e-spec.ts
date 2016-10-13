import { APMAngular2Page } from './app.po';

describe('apm-angular-2 App', function() {
  let page: APMAngular2Page;

  beforeEach(() => {
    page = new APMAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
