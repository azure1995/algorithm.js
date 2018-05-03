module.exports = function MERGE_SORT(arr,p=0,r=arr.length-1){
    if (p<r) {
        let q=parseInt((p+r)/2)
        MERGE_SORT(arr,p,q)
        MERGE_SORT(arr,q+1,r)
        MERGE(arr,p,q,r)
    }
}

function MERGE(arr,p,q,r){
    let left = [...arr.slice(p,q+1),Infinity]
    let right = [...arr.slice(q+1,r+1),Infinity]
    let il=ir=0
    for (let i = p; i <= r; i++) {
        arr[i] = left[il]<right[ir]?left[il++]:right[ir++]        
    }
}