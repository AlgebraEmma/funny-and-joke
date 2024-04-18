function welcome() {
  var name_id = document.getElementById("name_id").value;
  var password_id = document.getElementById("password_id").value;
  var output = document.getElementById("output_text");
  //document.getElementById("demo").innerHTML = x;
  
  if(name_id=="game"&password_id=="123"){
    output.innerHTML="pass";
    window.open("home_page.html","_parent");
  }
  else{
    output.innerHTML = "fail";
  }
}

function cal_linear_motion() {
  var a = Number(document.getElementById("acceleration").value);
  var s = Number(document.getElementById("distance").value);
  var t = Number(document.getElementById("time").value);
  var u = Number(document.getElementById("pre_velocity").value);
  var v = Number(document.getElementById("final_velocity").value);
  var solution = document.getElementById("solution");
  var monitor = document.getElementById("monitor");
  monitor.innerHTML = "a=" + a + "," + "s=" + s + "," + "t=" + t + "," + "u=" + u + "," + "v=" + v ;
  
if(a==0&s==0){
  a= (v-u)/t;
  s=((u+v)*t)/2;
  solution.innerHTML = "a=" + a +"m/s<sup>2</sup>" + "<br>" + "s=" + s +"m";
}
else if(a==0&t==0){
  a=((Math.pow(v,2))-(Math.pow(u,2)))/(2*s);
  t=(s*2)/(u+v);
  solution.innerHTML = "a=" + a +"m/s<sup>2</sup>" + "<br>" + "t=" + t +"s";
}
else if(a==0&u==0){
  a=(-2*(s-(v*t)))/(Math.pow(t,2));
  u=((2*s)/t)-v;
  solution.innerHTML = "a=" + a +"m/s<sup>2</sup>" + "<br>" + "u=" + u +"m/s";
}
else if(a==0&v==0){
  a=(2*(s-(u*t)))/(Math.pow(t,2));
  v=((2*s)/t)-u;
  solution.innerHTML = "a=" + a +"m/s<sup>2</sup>" + "<br>" + "v=" + v +"m/s";
}
else if(s==0&t==0){
  s=((Math.pow(v,2))-(Math.pow(u,2)))/(2*a);
  t=(v-u)/a;
  solution.innerHTML = "s=" + s +"m" + "<br>" + "t=" + t +"s";
}
else if(s==0&u==0){
  s=(v*t)-(a*(Math.pow(t,2)))/2;
  u=v-(a*t);
  solution.innerHTML = "s=" + s +"m" + "<br>" + "u=" + u +"m/s";
}
else if(s==0&v==0){
  s=(u*t)+(a*(Math.pow(t,2)))/2;
  v=u+(a*t);
  solution.innerHTML = "s=" + s +"m" + "<br>" + "v=" + v +"m/s";
}
else if(t==0&u==0){
  t=((2*v)+(Math.sqrt((Math.pow(2*v,2))-(4*a*(2*s)))))/(2*a);
  u=Math.sqrt((Math.pow(v,2))-(2*a*s));
  solution.innerHTML = "t=" + t +"s" + "<br>" + "u=" + u +"m/s";
}
else if(t==0&v==0){
  t=((-2*u)+(Math.sqrt((Math.pow(2*u,2))+(4*a*(2*s)))))/(2*a);
  v=Math.sqrt((Math.pow(u,2))+(2*a*s));
  solution.innerHTML = "t=" + t +"s" + "<br>" + "v=" + v +"m/s";
}
else if(u==0&v==0){
  u=(s-((a*(Math.pow(t,2)))/2))/t;
  v=(s+((a*(Math.pow(t,2)))/2))/t;
  solution.innerHTML = "u=" + u +"m/s" + "<br>" + "v=" + v +"m/s";
}
else{
    solution.innerHTML = "FAIL";
}

/*
if(a==0){
  if(s>0&t>0&u>0&v==0){
    a=(2*(s-(u*t)))/(Math.pow(t,2));
  }
  else if(s>0&t>0&v>0&u==0){
    a=(-2*(s-(v*t)))/(Math.pow(t,2));
  }
  else if(s>0&u>0&v>0&t==0){
    a=((Math.pow(v,2))-(Math.pow(u,2)))/(2*s);
  }
  else if(t>0&u>0&v>0&s==0){
    a= (v-u)/t;
  }
  solution.innerHTML = "a=" + a +"m/s<sup>2</sup>";
}
//find s
else if(s==0){
  if(a>0&t>0&u>0&v==0){
    s=(u*t)+(a*(math.pow(t,2)))/2;
  }
  else if(a>0&t>0&v>0&u==0){
    s=(v*t)-(a*(math.pow(t,2)))/2;
  }
  else if(a>0&u>0&v>0&t==0){
    s=((Math.pow(v,2))-(Math.pow(u,2)))/(2*a);
  }
  else if(t>0&u>0&v>0&a==0){
    s=((u+v)*t)/2;
  }
  solution.innerHTML = "s=" + s +"m";
}
//find t
else if(t==0){
  if(a>0&s>0&u>0&v==0){
    t=((-2*u)+(math.sqrt((math.pow(2*u,2))+(4*a*(2*s)))))/(2*a);
  }
  else if(a>0&s>0&v>0&u==0){
    t=((2*v)+(math.sqrt((math.pow(2*v,2))-(4*a*(2*s)))))/(2*a);
  }
  else if(a>0&u>0&v>0&s==0){
    t=(v-u)/a;
  }
  else if(s>0&u>0&v>0&a==0){
    t=(s*2)/(u+v);
  }
  solution.innerHTML = "t=" + t +"s";
}
//find u
else if(u==0){
  if(a>0&s>0&t>0&u>0&v==0){
    u=(s-((a*(math.pow(t,2)))/2))/t;
  }
  else if(a>0&s>0&v>0&t==0){
    u=math.sqrt((math.pow(v,2))-(2*a*s));
  }
  else if(a>0&t>0&v>0&s==0){
    u=v-(a*t);
  }
  else if(s>0&t>0&v>0&a==0){
    u=((2*s)/t)-v;
  }
  solution.innerHTML = "u=" + u +"m/s";
}
//find v
else if(v==0){
  if(s>0&t>0&u>0&a==0){
    v=((2*s)/t)-u;
  }
  else if(a>0&t>0&u>0&s==0){
    v=u+(a*t);
  }
  else if(a>0&s>0&u>0&t==0){
    v=math.sqrt((math.pow(u,2))+(2*a*s));
  }
  else if(a>0&s>0&t>0&u==0){
    v=(s+((a*(math.pow(t,2)))/2))/t;
  }
}
*/
}


