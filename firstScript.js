const { By, Builder, Browser, Select } = require("selenium-webdriver");
const assert = require("assert");
(async function helloSelenium() {
  // Enter session
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  // Open the web
  await driver.get("https://www.selenium.dev/selenium/web/web-form.html");
  // Take title of the web (getTitle())
  let title = await driver.getTitle();
  // Find element (by name) and put keys into it
  let textInput = await driver.findElement(By.name("my-text"));
  textInput.sendKeys("Witam");
  // Find element (by name)
  let passwordInput = await driver.findElement(By.name("my-password"));
  passwordInput.sendKeys("Haslo");
  // Find element by tagname (example: li, p ...)
  let textAreaInput = await driver.findElement(By.tagName("textarea"));
  textAreaInput.sendKeys("hasd");
  // Minimize windows
  driver.manage().window().maximize();
  // Find disable input
  let result = await driver.findElement(By.name("my-disabled")).isDisplayed();
  // Find dropdown menu and choose one of the option
  let dropdownMenu = await driver.findElement(By.name("my-select"));
  dropdownMenu.click();
  // Initialize select
  const select = new Select(dropdownMenu);
  // Choose by visible text ("Two")
  // await select.selectByVisibleText("Two");
  // Choose by value
  await select.selectByValue("1");
  // Find element and type given string
  let datalistMenu = await driver.findElement(By.name("my-datalist"));
  datalistMenu.click();
  datalistMenu.sendKeys("Chicago");
  // Upload input
  let fileInput = await driver.findElement(By.name("my-file"));
  // Why double \\
  await fileInput.sendKeys("C:\\Users\\Joged\\OneDrive\\Obrazy\\Saved Pictures\\plane.jpg")
  // Find checkbox and check it
  let firstCheckBox = await driver.findElement(By.id("my-check-1"));
  firstCheckBox.click();
  // Find radiobox and check it
  let firstRadioBox = await driver.findElement(By.id("my-radio-1"));
  firstRadioBox.click();
  /* Change color (to do)
  let colorBox = await driver.findElement(By.name("my-colors"));
  driver.executeScript(colorBox.sendKeys('000000'))
  */
  // Change range
  let rangeBox = await driver.findElement(By.name("my-range"));
  // Initialize actions and perform async
  const actions = driver.actions({ async: true });
  // Move mouse to the right (50) // Perform is to make action.
  await actions.move({ x: 50, y: 0, origin: rangeBox }).press().perform();
})();
