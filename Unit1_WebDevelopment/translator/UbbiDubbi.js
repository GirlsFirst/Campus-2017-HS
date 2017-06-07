function English_to_UbbiDubbi() {
    var toTranslate = document.getElementById("translate_this").value;
    var inUbbiDubbi = "";

    for (i = 0; i < toTranslate.length; i++){
      if (toTranslate.charAt(i) == 'a' ||
          toTranslate.charAt(i) == 'e' ||
          toTranslate.charAt(i) == 'i' ||
          toTranslate.charAt(i) == 'o' ||
          toTranslate.charAt(i) == 'u'){
        inUbbiDubbi += ('ub')
      }
      inUbbiDubbi += toTranslate.charAt(i);
    }

    document.getElementById("translate_this").value = inUbbiDubbi;
}
