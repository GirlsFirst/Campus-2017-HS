function showStory() {
  document.getElementById('inputWords').style.display = 'none';
  fillStory();
  document.getElementById('story').style.display = 'block';
}

function fillStory(){
  document.getElementById("name").innerHTML = document.getElementById("inputName").value;
  document.getElementById("pastTenseVerb").innerHTML = document.getElementById("inputPastTenseVerb").value;
  document.getElementById("relative").innerHTML = document.getElementById("inputRelative").value;
  document.getElementById("verb").innerHTML = document.getElementById("inputVerb").value;
}
