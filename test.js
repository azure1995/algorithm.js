const INSERTION_SORT = require('./INSERTION_SORT')
const MERGE_SORT = require('./MERGE_SORT')
const FIND_MAXIMUM_SUBARRAY = require('./FIND_MAXIMUM_SUBARRAY')
const { MAX_HEAP } = require('./HEAP')
var a=[-3,1,-2,7,11,-2,-5,-6,7]
var heap = new MAX_HEAP(a)
heap.MAX_HEAP_INSERT(13)
console.log(heap.HEAP_MAXIMUM())