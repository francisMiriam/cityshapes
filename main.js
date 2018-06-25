function loadSubPage() {
      // e.preventDefault();
      
      var x = document.forms["subPageForm"]["subPageId"].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
    switch (x.toLowerCase()) {
        case 'f49':
        location.assign("f49.html");
        break;
        case 'f58':
        location.assign("f58.html");
            break;
    
        default:
        alert ("ivaled nummber")
            break;
    }
        
        return false;
    }