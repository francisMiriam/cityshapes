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
            case 'g52':
        location.assign("g52.html");
            break;
            case 'g57':
        location.assign("g57.html");
            break;
            case 'p46':
        location.assign("p46.html");
            break;
            case 'p59':
        location.assign("p59.html");
            break;
            case 's65':
        location.assign("s65.html");
            break;
            case 's56':
        location.assign("s56.html");
            break;
            case 'w41':
        location.assign("w41.html");
            break;
            case 'w51':
        location.assign("w51.html");
            break;
    
        default:
        alert ("ivaled nummber")
            break;
    }
        
        return false;
    }