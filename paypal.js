process.stdin.resume();
process.stdin.setEncoding('utf8');

// const input = [1, 1, 2, 3, 4, 5, 5, 4, 5 ,5 ,5]
var input = [1, 1, 2, 3, 4, 5, 5, 4];
// var input = [4, 2, 9, 1, 8, 3];
const arr = [];


for (var i=0; i < input.length; i++) arr.push({ index: i, val: input[i]})

arr.sort((a,b) => (a.val < b.val) ? -1 : (a.val > b.val) ? 1 : 0);
// console.log('arr', arr);

var ans = [];

for (var i = 0; i < arr.length; i++) {
    const {index, val} = arr[i];
   
    if (ans.length === 0) {
        ans.push([]);
    }
    var IsNewArrNotReq = false;

    for (var j = 0; j < ans.length; j++) {
        if (ans[j].length === 0) {
            ans[j].push(index);
            IsNewArrNotReq = true;
            break;  
        }
        else {
            var indexJ = ans[j][ans[j].length-1];
            // var NewVal = ans[j][ans[j].length-1];
            if (input[indexJ] !== val) {
            // if (NewVal !== val) {
                ans[j].push(index);
                IsNewArrNotReq = true;
                break;
            }
        }
    }
    if (!IsNewArrNotReq) {
        ans.push([]);
        ans[ans.length-1].push(index);

    }
}

for (var i=0; i < ans.length; i++) {
    console.log(ans[i]);
}