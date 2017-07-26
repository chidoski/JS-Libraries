function change(letter)
{
  var new_word = letter.replace( /-/g,'_');
  console.log(new_word);
}


change("hello-world");
change("dogs-are-awesome");
change("blah");
