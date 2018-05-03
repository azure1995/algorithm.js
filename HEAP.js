exports.Heap = class HEAP {
    MAX_HEAPIFY(arr,i){
        let l=LEFT(i),r=RIGHT(i)
        let largest = i
        if (l<arr.heap_size && arr[l]>arr[largest]) {
            largest = l            
        } 
        if(r<arr.heap_size && arr[r]>arr[largest]) {
            largest = r
        }
        if(largest!=i){
            [arr[largest],arr[i]]=[arr[i],arr[largest]]
            this.MAX_HEAPIFY(arr,largest)
        }
    }
    MIN_HEAPIFY(arr,i){
        let l=LEFT(i),r=RIGHT(i)
        let smallest = i
        if (l<arr.heap_size && arr[l]<arr[smallest]) {
            smallest = l            
        } 
        if(r<arr.heap_size && arr[r]<arr[smallest]) {
            smallest = r
        }
        if(smallest!=i){
            [arr[smallest],arr[i]]=[arr[i],arr[smallest]]
            this.MIN_HEAPIFY(arr,smallest)
        }
    }
    BUILD_MAX_HEAP(arr){
        arr.heap_size=arr.length
        for (let i = parseInt(arr.length/2)-1; i>=0; i--) {
            this.MAX_HEAPIFY(arr,i)
        }
        return arr
    }
    BUILD_MIN_HEAP(arr){
        arr.heap_size=arr.length
        for (let i = parseInt(arr.length/2)-1; i>=0; i--) {
            this.MIN_HEAPIFY(arr,i)
        }
        return arr
    }
    MAX_HEAP_SORT(arr){
        this.BUILD_MAX_HEAP(arr)
        for (let i = arr.length-1; i >0; i--) {
            [arr[0],arr[i]]=[arr[i],arr[0]]
            arr.heap_size--            
            this.MAX_HEAPIFY(arr,0)
        }
        delete arr.heap_size
    }
    MIN_HEAP_SORT(arr){
        this.BUILD_MIN_HEAP(arr)
        for (let i = arr.length-1; i >0; i--) {
            [arr[0],arr[i]]=[arr[i],arr[0]]
            arr.heap_size--            
            this.MIN_HEAPIFY(arr,0)
        }
        delete arr.heap_size
    }
}

exports.MAX_HEAP = class MAX_HEAP extends exports.Heap {
    constructor(arr){
        super()
        this.max_heap = this.BUILD_MAX_HEAP(arr)
        this.max_heap.heap_size = arr.length
    }
    HEAP_MAXIMUM(){
        return this.max_heap[0]
    }
    HEAP_EXTRACT_MAX(){
        if(this.max_heap.heap_size<1){
            console.error('No elements!');
        } else{
                let max = this.max_heap[0]
                this.max_heap[0] = this.max_heap[this.max_heap.heap_size-1]
                this.max_heap.heap_size--
                this.MAX_HEAPIFY(this.max_heap,0)
                return max
        }
    }
    HEAP_INCREASE_KEY(i,key){
        if (key<this.max_heap[i]) {
            console.error('new key is smaller than current key')
        } else{
            this.max_heap[i]=key
            while (i>=0 && this.max_heap[PARENT(i)]<this.max_heap[i]) {
                [this.max_heap[PARENT(i)],this.max_heap[i]]=[this.max_heap[i],this.max_heap[PARENT(i)]]
                i=PARENT(i)
            }
        }
    }
    MAX_HEAP_INSERT(key){
        this.max_heap.heap_size++
        this.max_heap[this.max_heap.heap_size-1]=-Infinity
        this.HEAP_INCREASE_KEY(this.max_heap.heap_size-1,key)
    }
}
function PARENT(i){
    return parseInt((i-1)/2)
}
function LEFT(i){
    return 2*i+1
}
function RIGHT(i){
    return 2*i+2
}

module.exports = exports