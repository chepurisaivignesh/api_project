const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '428d8d849amsh162eeeac8d87d3cp169c57jsncb99bed2f59f',
		'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
	}
};

const optionsnews = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '428d8d849amsh162eeeac8d87d3cp169c57jsncb99bed2f59f',
		'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
	}
};

async function printCryptoData(){
    let response= await fetch('https://binance43.p.rapidapi.com/ticker/24hr', options);
    let listdict= await response.json();
    console.log(listdict)
    let i=10;
    while (i <50){
        let paradiv=document.createElement("div")
        paradiv.style.backgroundColor='grey';
        paradiv.style.margin='0.5rem';
        paradiv.style.padding="0.5rem";
        paradiv.style.borderRadius="1rem";
        let para=document.createElement("p");
        para.appendChild(document.createTextNode(`Rank ${i+1}`));
        para.appendChild(document.createElement("br"));
        para.appendChild(document.createTextNode(`Symbol: `+listdict[i]["symbol"]));
        para.appendChild(document.createElement("br"));
        para.appendChild(document.createTextNode(`High Price: `+listdict[i]["highPrice"]));
        para.appendChild(document.createElement("br"));
        paradiv.appendChild(para)
        document.getElementById("details").appendChild(paradiv)
        i++;
    // document.getElementById("demo").innerHTML=text;
}
}

async function cryptoNews(){
    let response= await fetch('https://crypto-news-live3.p.rapidapi.com/news', optionsnews);
    let listdict= await response.json();
    console.log(listdict)
    let j=0;
    while (j<10){
        let news=document.createElement("a");
        news.appendChild(document.createTextNode(listdict[j]["title"]));
        news.href=listdict[j]["url"];
        news.target="_blank";
        document.getElementById("newsgrid").appendChild(news);
        document.getElementById("newsgrid").appendChild(document.createElement("br"));
        j++;
    }

}

async function top10(){
    let response= await fetch('https://binance43.p.rapidapi.com/ticker/24hr', options);
    let listdict= await response.json();
    let k=0;
    while (k<10){
        let rankdiv=document.createElement("div");
        rankdiv.style.backgroundColor="aliceblue";
        rankdiv.style.borderRadius="0.75rem";
        let rank=document.createElement("h5");
        rank.style.paddingTop="0.7rem";
        rank.style.textAlign="center";
        rank.appendChild(document.createTextNode(`Top ${k+1}`));
        let ranksymbol=document.createElement("h3");
        ranksymbol.style.textAlign="center";

        ranksymbol.appendChild(document.createTextNode(listdict[k]["symbol"]));
        rankdiv.appendChild(rank);
        rankdiv.appendChild(ranksymbol);
        document.getElementById("top10grid").appendChild(rankdiv)
        k++;
}
}

printCryptoData();
cryptoNews();
top10();