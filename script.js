function threeSum(arr, target) {
// write your code here
	arr.sort();
	let diff = Integer.MAX_VALUE;

	for(let i=0;i<arr.length-2;i++){
		let j = i+1;
		let k = arr.length-1;
		while(j<k){
			let sum = arr[i] + arr[j] + arr[k];
			if(sum==target)return target;
			if(sum<target)j++;
			else k--;
			if(Math.abs(diff)>Math.abs(target-sum))
				diff = target-sum;
				// System.out.println(diff);
		}
	}
	return target-diff;
  
}

module.exports = threeSum;
