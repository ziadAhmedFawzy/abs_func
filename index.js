// function abs

function changePostiveToNegativeAndRevers(num) {
    if(num < 0)
    {
        return num = num - num - num;
    }
    else {
        return num;
    };
};

console.log(changePostiveToNegativeAndRevers(-50));
console.log(changePostiveToNegativeAndRevers(50));


let btn = document.getElementById('go-now');

btn.onclick = function() {
    location.href = ""
}