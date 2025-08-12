function sumClass(className) {
    let classValue = document.getElementsByClassName(className);
    let sum = 0;
    for (let classIndex = 0; classIndex < classValue.length; classIndex++) {
        sum += parseInt(classValue[classIndex].innerHTML);
    }
    return sum;
}
