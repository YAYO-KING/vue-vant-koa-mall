(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        //var rem = width / 6.4; // 将屏幕宽度分成6.4份， 1份为1rem
        var rem = width / 7.5; //375px的屏幕宽度，1rem就是50px；在750px的设计稿上，100px就是1rem； 整个屏幕宽7.5rem
        docEl.style.fontSize = rem + 'px';
        // console.log(0.14*rem);
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);
