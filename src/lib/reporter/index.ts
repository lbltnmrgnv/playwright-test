import { allure } from 'allure-mocha/runtime'
import { stepAllure } from './allure';
import { ContentType } from 'allure-js-commons';

export function step(stepName: string | Function) {

  return function (_targetL: Object, _name: string, descriptor: PropertyDescriptor) {
    const originalValue = descriptor.value;

    descriptor.value = function (...args) {
      let localStepName = stepName;
      localStepName = '\n' + ((typeof localStepName === 'string' ? localStepName : localStepName(this.name)) as string);
      return stepAllure(localStepName, originalValue.bind(this, ...args));
    }

    return descriptor;
  }
}

export const feature = (description) => {
  allure.feature(description);
}

export const story = (description) => {
  allure.story(description);
}

export const suite = (description) => {
  allure.suite(description);
}

export async function attachScreenshot(title, png) {
  return allure.attachment(title, Buffer.from(png, 'base64'), ContentType.PNG);
}

export function attachJsonData(title: string, data: object | string) {
  let attachedData
  typeof data === 'object' ? attachedData = JSON.stringify(data, null, 2) : attachedData = data
  return allure.attachment(title, attachedData, ContentType.JSON);
}