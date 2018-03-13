import { Ng4ChartingsPage } from './app.po';

describe('ng4-chartings App', () => {
  let page: Ng4ChartingsPage;

  beforeEach(() => {
    page = new Ng4ChartingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
