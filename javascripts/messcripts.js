$(document).ready(function(){

    $("a.newonglet").click(function(){
        window.open(this.href);
        return false;    
    });
    
    switch(window.location.hostname) {
        case "proj.isn.noordover.fr":
            $(".VO").css("display","inline-block");
            $(".VD").css("display","none");
            break;  
        default:
            document.title = 'LOC-'+document.title;
            $("body > header > h1").prepend("LOC-");
            $("body > header > h1").css("background-color","green");
            $("body > header > p").prepend("Version locale du ");
            $(".VO").css("display","inline-block");
            $(".VD").css("display","inline-block");
            break;  
    }
    
});
