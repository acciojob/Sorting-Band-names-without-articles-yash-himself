//your code here
let ul =document.getElementById("band");
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let ar =[];
let j=0;
arr.forEach((i)=>{
i=i.replace("The ","")
i=i.replace("A ","")
i=i.replace("An ","")
ar[j]=i;
j++
})
ar.sort()

for(let i=0;i<arr.length;i++){
	for(let j=0;j<ar.length;j++){
			if(arr[j].includes(ar[i])){
      	ar[i]=arr[j];
      }
      
	}
	let l = document.createElement("li");
	l.innerHTML=`${ar[i]}`
	ul.appendChild(l);
}



