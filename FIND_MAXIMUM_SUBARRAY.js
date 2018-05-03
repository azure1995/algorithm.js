module.exports = function FIND_MAXIMUM_SUBARRY(arr){
    let left=right=0,max=0
    arr.reduce((sum,ele,index) => {
        sum+=ele
        if(sum<=0){
            sum=0
            left = index + 1
        } else if(max<sum){
                max=sum
                right=index
            }
        return sum
    },0)
    return arr.slice(left,right+1)
}