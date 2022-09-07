const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const browserOptions = {
    headless: true,
    defaultViewport: null,
    devtools: true,
};
let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    
    page = await browser.newPage();
    await page.goto(`file://${path.resolve(__dirname, '../index.html')}`);
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    
}, 30000);

afterAll(async () => {
    await browser.close();
} );
 describe('`index.html` file', () => {
     test('No changes were made to `index.html` file', async () => {
            const indexHtml = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8').replace(/(\r\n|\n|\r|\ )/gm,"");
            const pageHtml = `<!DOCTYPEhtml><htmllang="en"><head><metacharset="UTF-8"/><metaname="viewport"content="width=device-width,initial-scale=1.0"/><title>NotificationPopup</title><linkrel="stylesheet"href="style.css"></head><body><divclass="notification"><buttonclass="close"><imgsrc="icon-close.png"alt=""/></button>Thisisanotification!</div></body></html>`;
            expect(pageHtml).toBe(indexHtml);
        });
} );
describe("Notification popup", () => {
    test('the notification popup is always displayed at right bottom corner', async () => {
        await page.setViewport({
            width: 1920,
            height: 1080
        });
        const notificationPopup = await page.$('.notification');
        const notificationPopupPosition = await notificationPopup.boundingBox();
        // get notification popup position
        const notificationPopupX = notificationPopupPosition.x;
        const notificationPopupY = notificationPopupPosition.y;
        expect(notificationPopupX).toBeGreaterThan(1920 /2);
        expect(notificationPopupY).toBeGreaterThan(1080 /2);
        // change viewport and test
        await page.setViewport({
            width: 2000,
            height: 800
        });
        const notificationPopupPosition2 = await notificationPopup.boundingBox();
        const notificationPopupX2 = notificationPopupPosition2.x;
        const notificationPopupY2 = notificationPopupPosition2.y;
        expect(notificationPopupX2).toBeGreaterThan(2000 /2);
        expect(notificationPopupY2).toBeGreaterThan(800 /2);
    } );
} );
describe("Close button (X)", () => {
    test('the close button is displayed at the top right corner of the notification', async () => {
        await page.setViewport({
            width: 1920,
            height: 1080
        });
        // get close button position
        const notificationPopup = await page.$('.notification');

        const notificationPopupPosition = await notificationPopup.boundingBox();
        const notificationPopupX = notificationPopupPosition.x;
        const notificationPopupY = notificationPopupPosition.y;

        const closeButton = await page.$('.close');
        const closeButtonPosition = await closeButton.boundingBox();
        const closeButtonX = closeButtonPosition.x;
        const closeButtonY = closeButtonPosition.y;
        console.log(closeButtonX, closeButtonY);
        expect(closeButtonX + notificationPopupPosition.width).toBeGreaterThan(notificationPopupX );
        expect(closeButtonY + notificationPopupPosition.height).toBeGreaterThan(notificationPopupY);
        expect(closeButtonX).toBeLessThan(1920);
        expect(closeButtonY).toBeLessThan(1080);
       
    } );
    test('the close button\'s size is (32px x 32px).', async () => {
       
        const closeButton = await page.$('.close');
        const closeButtonPosition = await closeButton.boundingBox();
        const closeButtonX = closeButtonPosition.x;
        const closeButtonY = closeButtonPosition.y;
        console.log(closeButtonX, closeButtonY);
        expect(closeButtonPosition.width).toBe(32);
        expect(closeButtonPosition.height).toBe(32);
       
    } );
} );