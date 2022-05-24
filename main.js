function setup() {
  canvas = createCanvas(475, 475);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelloaded)
  synth=window.speechSynthesis
}
function modelloaded(){
  console.log("modeloaded")
}
function draw(){
  image(video,0,0,475,475)
classifier.classify(video,gotresults)
}
function gotresults(error,results) {
  if (error) {
    console.log(error)
  } else {
    console.log(results)
    document.getElementById("a").innerHTML=results[0].label
    document.getElementById("b").innerHTML=results[0].confidence
    utterthis=new SpeechSynthesisUtterance(results[0].label)
synth.speak(utterthis)
  }
}