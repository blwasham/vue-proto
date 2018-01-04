import _ from 'lodash';

export function safeParse(str) {
  return _.attempt(JSON.parse.bind(null, str));
}

export function safeStringify(obj) {
  return _.attempt(JSON.stringify.bind(null, obj));
}

export default { safeParse, safeStringify };
