//package.json - manifest file that contain all information relateed project/module

const lodash=require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems=lodash.flattenDeep(items);

console.log(newItems);