let apiURL ="https://restcountries.eu/rest/v2/all";

fetch(apiURL).then((data)=>{
    return data.json();
}).then((data)=>{
    data.forEach(element => {
       // console.log(element);
        let cname=element.name;
        let flag=element.flag;
        let ccapital =element.capital;
        let ccode= element.alpha2Code+", "+element.alpha3Code;
        let cregion = element.region;
        let latLong = element.latlng;
        //console.log(latLong);
        //weather
        let lat = element.latlng[0];
        let long = element.latlng[1];
        let wetherKey ="86f45ffb22232a6c7069f06bf87078c5"

        
       // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

        let wetherURL="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+wetherKey;

        fetch(wetherURL).then((data)=>{
            return data.json();
        }).then((data)=>{
            let counTemp = data;
            console.log(counTemp)
            //console.log(cname)
        }).catch((err)=>{
            console.log(err)
        })
        
        //console.log(wetherURL);
        // console.log(cname);
        // console.log(flag);
        // console.log(ccapital);
        // console.log(ccode);        
        // console.log(cregion);
        // console.log(long);
        // console.log(lat);

        let card = document.createElement('div');
        card.className ='card mycol col-lg-3';
        //card.id='idcard';
        document.querySelector('body').appendChild(card);

        let head = document.createElement('h5');
        head.className='card-title ctitle';
        let countryName=document.createTextNode(cname);
        head.appendChild(countryName);
        card.appendChild(head);

        let image = document.createElement("img");
        image.className='card-img-top';
        image.setAttribute("src",flag);
        image.setAttribute("alt",cname);        
        card.appendChild(image); 

        let ul = document.createElement('ul');
        ul.className="list-group list-group-flush";
        card.appendChild(ul);

        let li1 = document.createElement('li');
        li1.className='list-group-item'
        li1.id='capital'
        let capitalName = document.createTextNode("capital :"+" "+ccapital);
        li1.appendChild(capitalName);
        ul.appendChild(li1);
    
        let li2 = document.createElement('li');
        li2.className='list-group-item'
        let counterCode = document.createTextNode("Code :"+" "+ccode);
        li2.appendChild(counterCode);
        ul.appendChild(li2);

        let li3 = document.createElement('li');
        li3.className='list-group-item'
        let countryRegion = document.createTextNode("Region :"+" "+cregion);
        li3.appendChild(countryRegion);
        ul.appendChild(li3);

        let li4 = document.createElement('li');
        li4.className='list-group-item'
        let counLong = document.createTextNode("latlong :"+" "+latLong);
        li4.appendChild(counLong);
        ul.appendChild(li4);

        let button = document.createElement('button');
        button.className='btn myBtn btn-outline-secondary';
        button.setAttribute('type','button');
        button.setAttribute('data-bs-toggle','modal');
        button.setAttribute('data-bs-target','#staticBackdrop')
        //event Listner
        //button.addEventListener("click",weatherFunction);
        let buttonNote = document.createTextNode("Click for wether");
        button.appendChild(buttonNote);
        card.appendChild(button);


        //model 
        let modelData = document.createElement('div');
        modelData.className='modal fade';
        modelData.id='staticBackdrop';
        modelData.setAttribute('data-bs-backdrop','static')
        modelData.setAttribute('data-bs-keyboard','false')
        modelData.setAttribute('tabindex','-1')
        modelData.setAttribute('aria-labelledby','staticBackdropLabel')
        modelData.setAttribute('aria-hidden','true')
        document.querySelector('body').appendChild(modelData);


        let mainModel = document.createElement('div');
        mainModel.className='modal-dialog modal-dialog-centered';
        modelData.appendChild(mainModel);

        let contentModel = document.createElement('div');
        contentModel.className='modal-content';
        mainModel.appendChild(contentModel);

        let modelHeader =document.createElement('div');
        modelHeader.className='modal-header'
        contentModel.appendChild(modelHeader);

        let modelHeading = document.createElement('h5');
        modelHeading.className='modal-title';
        modelHeading.id='staticBackdropLabel';
        let modelTitle = document.createTextNode(cname);
        modelHeading.appendChild(modelTitle);
        modelHeader.appendChild(modelHeading);

        let modelClose=document.createElement('button');
        modelClose.className='btn-close';
        modelClose.setAttribute('type','button');
        modelClose.setAttribute('data-bs-dismiss','modal');
        modelClose.setAttribute('aria-label','Close');
        modelHeader.appendChild(modelClose);

        let modelBody = document.createElement('div');
        modelBody.className='modal-body';
        contentModel.appendChild(modelBody);
        let bodyText =document.createTextNode('model body')
        modelBody.appendChild(bodyText);
        contentModel.appendChild(modelBody);

        let modelFooter = document.createElement('div');
        modelFooter.className='modal-footer';
        contentModel.appendChild(modelFooter);

        let mfooterClose =document.createElement('button');
        mfooterClose.className='btn btn-secondary';
        mfooterClose.setAttribute('data-bs-dismiss','modal')
        let mfcText = document.createTextNode('Close');
        mfooterClose.appendChild(mfcText);
        modelFooter.appendChild(mfooterClose);

       

         function weatherFunction(){
                console.log(Hii)

         }
        

       
       
    });

}).catch((err)=>{
    console.log(err)

})




// let manaj = () => {
//     console.log('hii');
// }

