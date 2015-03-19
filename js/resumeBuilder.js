//$("#main").append("Tester!");
//var awesomeThoughs = "My name is Tester and I am AWESOME!";
//var funThoughts = awesomeThoughs.replace("AWESOME", "FUN");
//$('#main').append(funThoughts);
//console.log(awesomeThoughs);

var name = "Tester";
var role = "Developer";
var flag = "%data%";
var formattedName = HTMLheaderName.replace(flag, name);
var formattedRole = HTMLheaderRole.replace(flag, role);
//$("#header").append(formattedName);
//$("#header").append(formattedRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
