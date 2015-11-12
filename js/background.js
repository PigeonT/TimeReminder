(function(){
    "use strict";

    //options for notifications 
    var options = {
        "type": "basic",
        "title": "Do not forget to check in!",
        "message": "Do not forget to check in!",
        "iconUrl": "resources/icon.png"
    };
    //get today date
    var now = new Date(Date.now());
    var today = now.getDate() + "." + now.getMonth() + "." + now.getYear();
    
    //save today date to chrome.storage.local    
    function saveToday(today){
        //save today date to chrome.storage.local
        //get last date 
        chrome.storage.local.get('time', function(beforDate) {
               
           if(beforDate.time != today) {
               chrome.notifications.create(options);
               chrome.storage.local.remove('time');
               chrome.storage.local.set(
                    {'time': today }
                );
           }         
        });
    }
      
    //program fire event 
    chrome.runtime.onStartup.addListener(function() {
        
        saveToday(today);
    });  

})(window)
