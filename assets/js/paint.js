function configureListeners() {
    // let images = // select img elements  
    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {        
    // iterate over images and add mouseover event listeners
    document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
    document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)      
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
    if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    // let element = document.getElementById('ppg');
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    // let color = document.getElementById('color');    
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function changeImage(elementId) {
    let image = document.getElementById('imgDisplay');
    image.src = elementId.src;
}

function getProductInfo(partNumber) {
    // function getProductInfo(paintColor) {
    let price;
    let colorName;  

    switch (partNumber) {         
    // set variables for price and color name and invoke a function to update the price      
        case 'pn1':           
            price = '$19.99'
            colorName = 'Lime Green'
            updatePrice(colorName, "Price per gallon:  " + price)           
            break;                   
    // set variables for price and color name and invoke a function to update the price    
        case 'pn2':
            price = '$12.99'
            colorName = 'Medium Brown' 
            updatePrice(colorName, "Price per gallon:  " + price)       
            break;            
    // set variables for price and color name and invoke a function to update the price 
        case 'pn3':
            price = '$11.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, "Price per gallon:  " + price)    
            break;    
    // set variables for price and color name and invoke a function to update the price  
        case 'pn4':
            price = '$14.99'
            colorName = 'Bright Red'            
            updatePrice(colorName, "Price per gallon:  " + price)   
            break;  
    // set variables for price and color name and invoke a function to update the price 
        case 'pn5':
            price = '$9.99'
            colorName = 'Solid White' 
            updatePrice(colorName, "Price per gallon:  " + price)               
            break;  
    // set variables for price and color name and invoke a function to update the price    
        case 'pn6':
            price = '$15.99'
            colorName = 'Solid Black'   
            updatePrice(colorName, "Price per gallon:  " + price)              
            break;   
    // set variables for price and color name and invoke a function to update the price 
        case 'pn7':
            price = '$8.99'
            colorName = 'Medium Blue'       
            updatePrice(colorName, "Price per gallon:  " + price)          
            break;   
// set variables for price and color name and invoke a function to update the price  
        case 'pn8':
            price = '$16.99'
            colorName = 'Light Purple'      
            updatePrice(colorName, "Price per gallon:  " + price)           
            break;   
// set variables for price and color name and invoke a function to update the price 
        case 'pn9':
            price = '$17.99'
            colorName = 'Bright Yellow'                       
            updatePrice(colorName, "Price per gallon:  " + price)    
            break;  
        default:              
}

function updatePrice(colorName, price) {       
    // let ppg = document.getElementById('ppg');
    // ppg.textContent = price;
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
    // select element with corresponding id
    // display price

    // let color = document.getElementById('color-price');
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    // select element with corresponding id
    //display color name
    }
}
