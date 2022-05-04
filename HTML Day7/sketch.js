
function loadFile(){
    loadStrings("sample.txt",fileloaded);
}

function fileloaded(data){
    createP(join(data,"<br/>"));    
}

 function setup(){
     noCanvas();
     createFileInput();

    var button = select("#loadfile");
    button.mousePressed(loadFile);
 }