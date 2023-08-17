function parent() {
    const a = 10;
    function child() {
        console.log(a);
    }
    child();
}
parent();