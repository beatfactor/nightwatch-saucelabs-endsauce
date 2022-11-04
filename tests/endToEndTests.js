describe('When called with valid config', () => {
  this.tags = ['happyPath'];

  before((browser) => browser.navigateTo('https://www.davidmello.com/'));

  it('Passing test should return in progress and passed', async (browser) => {
    await browser.waitForElementVisible('body').assert.titleContains('David Mello');

    const result = await browser.endSauce();
    await browser.assert.equal(result.status, 'in progress');
    await browser.assert.equal(result.passed, true);
  });

  after((browser) => {
    browser.end();
  });
});
