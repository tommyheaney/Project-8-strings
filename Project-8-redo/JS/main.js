// concat() Method
function full_Sentence() {
  var part_1 = "I have ";
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence.";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}
// concat() Method End


// slice() Method
function slice_Method() {
    var Sentence = "All work and no play makes Tommy a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
// slice() Method End


// toString() Method
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
// toString() Method End


// toPrecision() Method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
// toPrecision() Method End