import { map } from 'lodash';

export default function mult(arr, num) {
  return map(arr, (elem) => elem * num);
}
