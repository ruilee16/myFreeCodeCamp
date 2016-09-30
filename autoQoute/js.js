function getQuote(quotes){
		
	var bt=Math.round(Math.random()*4);
	
	var temp=quotes.filter(function(a){
		
			return a.id==1;
		});
		
		var html="";
		temp.forEach(function(val){
			html+="<h1>"+val.tex+"</h1>";
		})
		alert(document.getElementById("chinese").innerHTML);
		document.getElementById("chinese").innerHTML="html";
	}