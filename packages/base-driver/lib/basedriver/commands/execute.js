// @ts-check
import _ from 'lodash';
import {errors, makeArgs, checkParams} from '../../protocol';

/**
 * @param {SessionBase} Base
 * @returns {ExecuteBase}
 */
export function ExecuteMixin(Base) {
  /**
   * @implements {IExecuteCommands}
   */
  class ExecuteCommands extends Base {
    /**
     * @this {Driver}
     * @param {string} script
     * @param {[Record<string, any>]|[]} protoArgs
     */
    async executeMethod(script, protoArgs) {
      // the w3c protocol will give us an array of arguments to apply to a javascript function.
      // that's not what we're doing. we're going to look for a JS object as the first arg, so we
      // can perform validation on it. we'll ignore everything else.
      if (!protoArgs || !_.isArray(protoArgs) || protoArgs.length > 1) {
        throw new errors.InvalidArgumentError(
          `Did not get correct format of arguments for execute method. Expected zero or one ` +
            `arguments to execute script and instead received: ${JSON.stringify(protoArgs)}`
        );
      }
      let args = protoArgs[0] ?? {};
      if (!_.isPlainObject(args)) {
        throw new errors.InvalidArgumentError(
          `Did not receive an appropriate execute method parameters object. It needs to be ` +
            `deserializable as a plain JS object`
        );
      }

      const Driver = /** @type {DriverClass} */ (this.constructor);
      const availableScripts = _.keys(Driver.executeMethodMap);
      const commandMetadata = Driver.executeMethodMap[script];
      if (!commandMetadata) {
        throw new errors.UnsupportedOperationError(
          `Unsupported execute method '${script}'. Available methods ` +
            `are: ${availableScripts.join(', ')}`
        );
      }
      let argsToApply = [];
      if (!commandMetadata.params) {
        commandMetadata.params = {required: [], optional: []};
      } else {
        commandMetadata.params.required ??= [];
        commandMetadata.params.optional ??= [];
        checkParams(commandMetadata.params, args, null);
      }
      argsToApply = makeArgs({}, args, commandMetadata.params, null);
      return await this[Driver.executeMethodMap[script].command](...argsToApply);
    }
  }
  return ExecuteCommands;
}

/**
 * @typedef {import('@appium/types').ExecuteCommands} IExecuteCommands
 * @typedef {import('@appium/types').Driver} Driver
 * @typedef {import('@appium/types').DriverClass} DriverClass
 * @typedef {import('./session').SessionBase} SessionBase
 * @typedef {import('../driver').BaseDriverBase<import('@appium/types').TimeoutCommands & import('@appium/types').EventCommands & import('@appium/types').FindCommands & import('@appium/types').LogCommands & import('@appium/types').SettingsCommands & import('@appium/types').SessionCommands & IExecuteCommands>} ExecuteBase
 */
