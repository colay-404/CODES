function show_result(){
    let SNK = document.querySelector("#SNK").value;
    let FL = document.querySelector("#FL").value;
    let CP2 = document.querySelector("#CP2").value;
    let DLD = document.querySelector("#DLD").value;
    let DM = document.querySelector("#DM").value;
    let PE = document.querySelector("#PE").value;
    let WST = document.querySelector("#WST").value;
    let NSTP = document.querySelector("#NSTP").value;

    let to = parseFloat(SNK) + parseFloat(FL) + parseFloat(CP2) + parseFloat(DLD) + parseFloat(DM) + parseFloat(PE) + parseFloat(WST) + parseFloat(NSTP)
    let per = (to * 100) / 800;

    if(per >= 99){
                    document.querySelector(".gra").innerHTML ="1.0";         
                        }else if(per >= 94){
                            document.querySelector(".gra").innerHTML ="1.1";
                                }else if(per >=93){
                                    document.querySelector(".gra").innerHTML ="1.2+";
                                        }else if(per >= 92){
                                            document.querySelector(".gra").innerHTML ="1.3";
                                                }else if(per >= 91){
                                                    document.querySelector(".gra").innerHTML ="1.4";
                                                        }else if(per >= 90){
                                                            document.querySelector(".gra").innerHTML ="1.5";
                                                                }else if(per >= 89){
                                                                    document.querySelector(".gra").innerHTML ="1.6";
                                                                        }else if(per >= 88){
                                                                            document.querySelector(".gra").innerHTML ="1.7";
                                                                                }else if(per >= 87){
                                                                                    document.querySelector(".gra").innerHTML ="1.8";
                                                                                        }else if(per >= 86){
                                                                                            document.querySelector(".gra").innerHTML ="1.9";
                                                                                                }else if(per >= 85){
                                                                                                    document.querySelector(".gra").innerHTML ="2.0";
                                                                                                }else if(per >= 84){
                                                                                            document.querySelector(".gra").innerHTML ="2.1";
                                                                                        }else if(per >= 83){
                                                                                    document.querySelector(".gra").innerHTML ="2.2";
                                                                                }else if(per >= 82){
                                                                            document.querySelector(".gra").innerHTML ="2.3";
                                                                        }else if(per >= 81){
                                                                    document.querySelector(".gra").innerHTML ="2.4";
                                                                }else if(per >= 80){
                                                            document.querySelector(".gra").innerHTML ="2.5";
                                                        }else if(per >= 79){
                                                    document.querySelector(".gra").innerHTML ="2.6";
                                                }else if(per >= 78){
                                            document.querySelector(".gra").innerHTML ="2.7";
                                        }else if(per >= 77){
                                    document.querySelector(".gra").innerHTML ="2.8";
                                }else if(per >= 76){
                            document.querySelector(".gra").innerHTML ="2.9";
                        }else if(per >= 75){
                    document.querySelector(".gra").innerHTML ="3.0";
                }else{
            document.querySelector(".gra").innerHTML = "You are FAIL";
         }
                                                                                                 
        document.querySelector(".to").innerHTML = to;
        document.querySelector(".per").innerHTML = per;

        if(per > 40){
            document.querySelector(".result h2").innerHTML = "You pass!";
                }else{
                    document.querySelector(".result h2").innerHTML = "You are FAIL";
                }   
}