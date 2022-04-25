Prediction_1= "";
Prediction_2= "";

camera = document.getElementById("camera");
Webcam.attach(camera);

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id= "captured_img" src= "'+data_uri+'">';
});

}

console.log("ml5 version", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sQQcJFnXa/model.json", modelLoaded);

function modelLoaded() {
console.log("MODEL IS LOADED SUCCESSFULLY");
}

function speak() {
speak_data1= "The first Prediction is" + Prediction_1;
speak_data2= "And the second Prediction is" + Prediction_2;

synth= window.speechSynthesis;
utterthis= new SpeechSynthesisUtterance(speak_data1 + speak_data2);
synth.speak(utterthis);
}
