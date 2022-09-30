//let studentName={name:""};
document.addEventListener('DOMContentLoaded', contentLoaded);
function contentLoaded() {
    var _a;
    (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", keyUp);
}
function keyUp(event) {
    calculateNumericOutput();
}
function calculateNumericOutput() {
    var studentName = document.getElementById('name').value;
    var totalNameValue = 0;
    for (var index = 0; index < studentName.length; index++) {
        totalNameValue += studentName.charCodeAt(index);
    }
    document.getElementById('output').innerText = "Total is:" + totalNameValue;
}
