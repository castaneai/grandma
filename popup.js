function PopupCtrl($scope) {

    chrome.tabs.getSelected(null, function(tab) {
        var cookieOptions = {
            'url': tab.url
        };

        console.dir(tab.url);

        chrome.cookies.getAll(cookieOptions, function(cookies) {
            $scope.cookies = cookies;
            $scope.$apply();
        });
    });

}
