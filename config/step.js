require("mocha-allure-reporter");

function step(stepname, stepFunc, screenshot) {
  allure.createStep(stepname, () => {
    stepFunc()
    if (screenshot) {
      allure.createAttachment('screen', () => {
        return screenshot;
      }, 'image/png')()
    }
  })();
}

module.exports = {
  step
}