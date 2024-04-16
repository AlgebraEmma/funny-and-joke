function myFunction() {
  var x = document.getElementById("myText").value;
  var output = document.getElementById("output_text");
  //document.getElementById("demo").innerHTML = x;
  if(x=="เกม"){
    output.innerHTML="คนดี";
  }
  else if(x=="ภูผา"){
    output.innerHTML="หลานย่าวาส";
  }
  else if(x=="ปรางค์"){
    output.innerHTML="แม่น้องเวฬา";
  }
  else if(x=="เอก"){
    output.innerHTML="เอกดาวปีศาจ";
  }
  else{
    output.innerHTML="fail";
  }
}
