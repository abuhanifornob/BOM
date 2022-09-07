const showAlear = () => {
    alert("This is alert Button");
}

const showConfirm = () => {
    const ans = confirm('Do you Want to me? ');
    if (ans) {
        alert('Please send Mony 500 Taka Now!!!!! ');
    } else {
        console.log("no i din't you");
    }
}

const showPromt = () => {
    const input = prompt('I Need your Name');
    if (!!input) {
        window.location.assign('href.html');
    } else {
        console.log(input);
    }

}