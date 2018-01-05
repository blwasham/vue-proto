import jsonHelpers from './jsonHelpers.js';
import _ from 'lodash';

// TODO: this should probably come from env variable (ie - app-name)
const storagePrefix = 'medical';

// used for VuePrefix.write function in main.js
function write(k, v) {
  let prefixedKey = `${storagePrefix}-${k}`;
  let parsedVal = jsonHelpers.safeParse(v);
  let parsedValObj = _.get(parsedVal, 'data.model', parsedVal);
  let parsedValStr = jsonHelpers.safeStringify(parsedValObj);

  return localStorage.setItem(prefixedKey, parsedValStr);
}

function read(k) {
  let prefixedKey = `${storagePrefix}-${k}`;

  // get item from storage and safeParse
  let item = localStorage.getItem(prefixedKey);
  let parsedItem = jsonHelpers.safeParse(item);

  // return empty from storage if error or actually empty
  if (_.isError(parsedItem) || _.isEmpty(parsedItem)) {
    return {};
  } else {
    return parsedItem;
  }
}

export default { read, write };
