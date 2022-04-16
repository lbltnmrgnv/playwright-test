require("mocha-allure-reporter");

function addStep(stepname, screenshot) {
  const step = allure.createStep(stepname, () => {
    if (screenshot) {
      allure.createAttachment('Screen', () => {
        return screenshot;
      }, 'png')();
    }
  });
  return step();
}

module.exports = {
    addStep
}