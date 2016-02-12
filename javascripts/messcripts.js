$(document).ready(function(){

    $("a.newonglet").click(function(){
        window.open(this.href);
        return false;    
    });
    
    switch(window.location.hostname) {
        case "isn.noordover.fr":
            $("body > header > p").prepend("Dernière version supervisée (VO) du ");
            $(".VO").css("display","inline-block");
            $(".VD").css("display","none");
            break;  
        case "isnnoordo.github.io":
            document.title = 'DEV-'+document.title;
            $("body > header > h1").prepend("DEV-");
            $("body > header > h1").css("background-color","red");
            $("body > header > p").prepend("Version de développement (VDev) du ");
            $(".VO").css("display","none");
            $(".VD").css("display","inline-block");
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
