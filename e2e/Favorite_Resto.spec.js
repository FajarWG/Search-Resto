const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('#exploreContent');
  I.see('There is no favorite restaurant', '#resto-item__not__found');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.seeElement('#exploreContent');
  I.see('There is no favorite restaurant', '#resto-item__not__found');

  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('#resto-item');
  I.seeElement('#items a');

  const firstResto = locate('#items a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#resto-item');
  const favoritedRestoTitle = await I.grabTextFrom('#items a');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('There is no favorite restaurant', '#resto-item__not__found');
  I.amOnPage('/');
  I.wait(3);
  I.waitForElement('#resto-item');
  I.seeElement('#items a');
  const firstResto = locate('#items a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(10);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#resto-item a');
  const firstRestolike = locate('#items a').first();
  const favoritedRestoTitle = await I.grabTextFrom(firstRestolike);
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
  I.click(firstRestolike);
  I.wait(10);
  I.seeElement('#unfavoriteButton');
  I.click('#unfavoriteButton');
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#resto-item__not__found');
  const onFav = await I.grabTextFrom('#resto-item__not__found');
  assert.strictEqual(onFav, 'There is no favorite restaurant');
});
