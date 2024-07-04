export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  let query = 0;
  if (weakMap.get(endpoint)) query = weakMap.get(endpoint);
  weakMap.set(endpoint, query + 1);
  if (query + 1 >= 5) throw new Error('Endpoint load is high');
}
