const { allure } = require('allure-mocha/runtime');

function step(stepname, name, screenshot) {
  allure.step(stepname, () => {
    if (screenshot) {
      allure.attachment('screen', () => {
        return screenshot;
      }, 'image/png')()
    }
  });
}

module.exports = {
  step
}