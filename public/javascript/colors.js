const accordionLabelEl = document.querySelectorAll('.dot-div');
const statusElArr =  document.querySelectorAll('.status-clr');

console.log(statusElArr)
for (let i = 0; i < statusElArr.length; i++) {
    const statusEl = statusElArr[i].textContent;
if (statusEl === 'Pending') {
    accordionLabelEl[i].setAttribute('class','pending')
} else if (statusEl === 'Ready to Apply') {
    accordionLabelEl[i].setAttribute('class', 'ready-to-apply')
} else if (statusEl === 'Submitted'){
    accordionLabelEl[i].setAttribute('class', 'submitted')
} else if (statusEl === 'Accepted') {
    accordionLabelEl[i].setAttribute('class', 'accepted')
} else if (statusEl === 'Declined') {
    accordionLabelEl[i].setAttribute('class', 'declined')
}
};
