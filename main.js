function pasteit(theField)

{

  var editor = document.getElementById("ta1");

  editor.focus();

  editor.select();



  document.execCommand('Paste');

}

function copyToClipboard(s)

{

  var input = document.getElementById("ta1");

  input.focus();

  input.select();

  document.execCommand('Copy');



  if (document.selection) {

    document.selection.empty();

  } else if (window.getSelection) {

    window.getSelection().removeAllRanges();

  }

}