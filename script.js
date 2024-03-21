const accessKey = 'm1Zd5fZdVuzj5meVtBxdx2hEcDW7XXHsbQ_jpXTgo4U'

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');


// here we create new variables;
let keyword='';
let page=1;





// now we create a async function and use api
async function searchImages(){
keyword = searchBox.value;//here we put searchBox's value inside the keyword variable. 
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

const responce = await fetch(url);//here we await and fetch the url link
const data = await responce.json();//now here we convert the responce into json()

// console.log(data)//here we chech the image and url will come or not in console

// now here we create a new variable result and put the data inside the results
const results = data.results;
// here we use map() method
results.map((result)=>{
// whatever code we will write here  that will be executed for each element of that array so here we will create a new elemnt image
const image = document.createElement('img');
image.src = result.urls.small;//so this will the add the image in img tag
// so we have added one image and next we have to add one link so that user will click on that image and that will be detected the another web sites and unsplace website..
// after we have to create a anchor tag 
const imageLink = document.createElement('a');
// so next we have to add href link
imageLink.href = result.links.html;//it will add one link into the anchor(a)

// so that we have to add one more things that target _blank so that the link will open in new tab
imageLink.target = '_blank'//this will open the link into the new tab

// so next we place the img into the a 
imageLink.appendChild(image);
// so after this we want to place anchor(image) into the search result div
searchResult.appendChild(imageLink)
})

//now we want that the show-more-btn display after displaying the images..
showMoreBtn.style.display='block';//so this btn will be displayed after displaying the images..

}
// here the function is end


searchForm.addEventListener('submit', (e)=>{
e.preventDefault();//this method is used to stop process of submition
page = 1;//so everytime we will enter new keyword then page will became 1;


// now we call the function here
searchImages()
});



// now we want that when we click on showmorebtn more image will load for that we add event listener on showmorebtn

showMoreBtn .addEventListener('click',()=>{
    // in this we have to add pages
    page++;
    searchImages()
} )
