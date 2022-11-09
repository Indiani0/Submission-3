const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
    I.amOnPage('/');

    I.waitForElement('.restaurant__name a', 10);
    I.seeElement('.restaurant__name a');
    const firstResto = locate('.restaurant__name a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.waitForElement('#likeButton', 10);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');

    const likedRestoName = await I.grabTextFrom('.restaurant__name');

    assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('searching restaurants', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
   
    I.amOnPage('/');
   
    I.waitForElement('.restaurant__name a', 10);
    I.seeElement('.restaurant__name a');
   
    const names = [];
   
    for (let i = 1; i <= 3; i++) {
      I.click(locate('.restaurant__name a').at(i));
      I.waitForElement('#likeButton', 10);
      I.seeElement('#likeButton');
      I.click('#likeButton');
      names.push(await I.grabTextFrom('.restaurant__name'));
      I.amOnPage('/');
    }
   
    I.amOnPage('/#/favorite');
    I.seeElement('#query');
});
