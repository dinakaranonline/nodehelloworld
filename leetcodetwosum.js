/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsLength = nums.length;
    let resultFound=false;
    if(!resultFound){
    for(j=0;j<numsLength;j++){
        
    for(i=0;i<numsLength;i++){
        //console.log('looping'+i);
        if(j!=i && !resultFound){
        var num1=nums[j];
        var num2=nums[i];
        console.log(num1,num2,target);
        if(target === num1+num2) {
            resultFound=true;
            return [j,i];
        }
            
        }
    }
    }
    }
};

var nums=[3,3];
var target=6;
var result=twoSum(nums,target);