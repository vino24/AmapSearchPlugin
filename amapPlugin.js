(function () {

    function getMapLocation(keyword) {
        if (!keyword)
            window.location = './mapSearch.html?nw=1';
        else {
            window.location = './mapSearch.html?s=' + keyword + '&nw=1';
        }
    }

    function getStorage() {
        return new Promise(function (resolve, reject) {
            resolve({
                pic: localStorage.getItem('pic'),
                name: localStorage.getItem('name')
            });
        })
    }

    window.getMapLocation = getMapLocation;
    window.getStorage = getStorage;
})()
