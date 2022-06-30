fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data[0]);
    for(let i of data){
        let img = document.createElement('img');
        let div = document.createElement('div');
        let smallDiv = document.createElement('div');
        smallDiv.innerHTML = i.description;
        img.setAttribute('src', i.image_url);
        img.style.width = '40px';
        img.style.height = '150px';
        div.style.margin = '0 20px 20px 20px';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        smallDiv.style.paddingLeft = '20px';
        document.body.append(div);
        div.append(img);
        div.append(smallDiv);
        div.onclick = function(e){
            if(e.target == img){
                localStorage.setItem('id', i.id);
                console.log('new localstorage');
            }
        };
    }
  })
  .catch((err) => {
    console.log(err);
  });
