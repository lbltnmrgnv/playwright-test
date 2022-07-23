
import { stepAllure} from './allure';

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