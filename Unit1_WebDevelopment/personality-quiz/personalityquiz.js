function score(){
  var hermione_choices = 0; //number of times someone picked something appropriate to Hermione
  var bellatrix_choices = 0; //number of tims someone picked something appropriate to Bellatrix
  var molly_choices = 0; //number of tims someone picked something appropriate to Molly

  var choice = document.querySelector('input[name = "q1"]:checked').value;
  if (choice == 'reading'){
    hermione_choices++;
  } else if (choice == 'with my family'){
    molly_choices++;
  } else if (choice == 'playing with fire'){
    bellatrix_choices++;
  }

  var choice = document.querySelector('input[name = "q2"]:checked').value;
  if (choice == 'brain'){
    hermione_choices++;
  } else if (choice == 'heart'){
    molly_choices++;
  } else if (choice == 'power'){
    bellatrix_choices++;
  }

  var choice = document.querySelector('input[name = "q3"]:checked').value;
  if (choice == 'otters'){
    hermione_choices++;
  } else if (choice == 'weasels'){
    molly_choices++;
  } else if (choice == 'none'){
    bellatrix_choices++;
  }

  if (hermione_choices > molly_choices && hermione_choices > bellatrix_choices){
    alert("you're Hermione");
  } else if (molly_choices > hermione_choices && molly_choices > bellatrix_choices) {
    alert("You're Molly Weasley");
  } else if (bellatrix_choices > hermione_choices && bellatrix_choices > molly_choices) {
    alert("You're Bellatrix");
  } else { //two characters tied
    alert("You're Nymphadora Tonks");
  }

}
