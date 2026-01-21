const { test } = require("@playwright/test");

test("Googlemaps", async function ({ browser }) {
  const context = await browser.newContext();
  const page = await context.newPage();

  const search =
    "Massage Centre in Kilpauk - Green Day Spa | க்ரின் டே ஸ்பா | Abu palace hotel | Best Spa in Chennai";
  const place =
    "Massage Centre in Kilpauk - Green Day Spa | க்ரின் டே ஸ்பா | Abu palace hotel | Best Spa in Chennai";

  await page.goto("https://www.google.com/maps");

  await page.locator("#searchboxinput").fill(search);
  await page.locator("#searchbox-searchbutton").click();

  await page.waitForTimeout(1500);

  const locName = page.locator(".hfpxzc");
  if ((await locName.count()) > 0) {
    await page.waitForSelector(".hfpxzc", { timeout: 10000 });
    for (var i = 0; i < (await locName.count()); i++) {
      const name = await page
        .locator("div[class*='fontHeadlineSmall']")
        .nth(i)
        .textContent();
      if (name === place) {
        await locName.nth(i).click();
        break;
      }
    }
  }

  await page.waitForSelector(".Gpq6kf.NlVald", { timeout: 10000 });
  const revButton = page.locator(".Gpq6kf.NlVald");

  for (var i = 0; i < (await revButton.count()); i++) {
    if ((await revButton.nth(i).textContent()) === "Reviews") {
      await revButton.nth(i).click();
      console.log("test");
      break;
    } else {
      console.log("fail");
    }
  }

  await page.waitForSelector(".wiI7pd", { timeout: 10000 });
  const actualReviews = page.locator(".d4r55.fontTitleMedium");
  const reviews = page.locator(".MyEned");

  const scrollableDiv = page.locator(
    "div[aria-label='" + place + "'] div.m6QErb.DxyBCb.kA9KIf.dS8AEf.XiKgde"
  );

  let previousScroll = 0;

  // Keep scrolling until no new reviews load
  while (true) {
    await page.evaluate(
      (el) => el.scrollBy(0, el.scrollHeight),
      await scrollableDiv.elementHandle()
    );
    await page.waitForTimeout(1500);

    const currentScroll = await page.evaluate(
      (el) => el.scrollTop,
      await scrollableDiv.elementHandle()
    );

    if (currentScroll === previousScroll) {
      console.log("✅ No more reviews to load, stopping scroll.");
      break;
    }

    previousScroll = currentScroll;
  }

  for (let i = 0; i < (await reviews.count()); i++) {
    const review = reviews.nth(i);
    const moreButton = review.locator("span button");

    // Check if the "More" button exists and is visible
    if ((await moreButton.count()) > 0) {
      await moreButton.click();
      await page.waitForTimeout(1000); // optional small wait to let text expand
    }

    const reviewText = await review.textContent();
    console.log(`${i + 1}. ${reviewText.trim()}`);
  }

  console.log(await actualReviews.count());
  await page.pause();
});
