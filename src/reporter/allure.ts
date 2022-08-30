import {allure} from 'allure-mocha/runtime'
import {ContentType} from 'allure-js-commons';

async function attachScreenshot(title, png) {
  return allure.attachment(title, Buffer.from(png, 'base64'), ContentType.PNG);
}

function attachJsonData(title: string, data: string) {
  return allure.attachment(title, data, ContentType.JSON);
}

async function stepAllure(name, callback) {
  // @ts-ignore
  const step = allure.startStep(name);

  try {
    const result = await callback();
    if (result) {
      allure.attachment(`${name} result`, JSON.stringify(result.body || result, null, 2), ContentType.JSON);
    }
    // set success result
    step.step.stepResult.status = 'passed';
    step.endStep();
    return result;

  } catch (error) {
    // set fail result
    step.step.stepResult.status = 'broken';
    step.endStep();

    throw error;
  }

}

export {
  stepAllure,
  attachScreenshot,
  attachJsonData
}