class Form{
    constructor(){

    }

display(){

    var title = createElement('h2');
    title.html("CAR RACING GAME");
    title.position(600,0);

    var Input=createInput("NAME");
    Input.position(630,200);

    var button=createButton("Play");
    button.position(680,300);

    button.mousePressed(function(){
        Input.hide();
        button.hide();

        var name = Input.value();

        var greeting=createElement('h3');
        greeting.html("Hello "+name);
        greeting.position(130,160)
    })
}
}