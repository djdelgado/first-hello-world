/* globals $ _ */
$(document).on('ready', onDocReady); 

function onDocReady(){
    $.getJSON('data/product.json', onProductData)
    .fail(function(){
        console.log('get.JSON on product.json failed');
    });
}
function onProductData(products){
    //initialize the ui
    initializeUI(products);
    //show all products
    showProducts(products);
    createSearch();
    searchClick(products);
    filterForm(products, filterButton(products));
    myFilter(products);
    priceAscending(products);
    priceDescending(ascending(products));
}

function initializeUI(products) {
    //create product ul
    $('<ul>')
        .attr('id', 'products')
        .addClass('list-products')
        .appendTo('main');
}

function showProducts(products){
    //clear any products in DOM
    $('#products')
        .empty()
        .append(createProductListItems(products));
    //add event listeners    
}

function createProductListItems(products){
    return _.map(products, function(product){
        return $('<li>')
                    .addClass('li-product')
                    .addClass('container')
                    .addClass('flex-it')
                    .data('product', product)
                    .append(createProductImageDiv(`img/product/thumbs/${product.image}`, 'product-thumb'))
                    .append(createProductDetailDiv(product.desc, product.price, product.stock))
                    .attr('data-target', ".bd-example-modal-lg").attr('data-toggle', "modal")
                    .on('click', function(){
                        showProductDetails(product);
                    })
                    
    });
}

function createProductImageDiv(url, cssClass){
    //use jq to create a div that wraps an img using url as src
        return $('<div>')
                    .attr('id', 'product-image')
                    .addClass(cssClass)
                    .append($('<img>').attr('src', url));
}

function createProductDetailDiv(desc, price, stock){
    // create div with 3 child divs, one for each param with unique class
    return $('<div>')
                .addClass('div-product-details')
                .append($('<div>').addClass('desc').text(desc))
                .append($('<div>').addClass('price').text("Price: $" + price.toFixed(2)))
                .append($('<div>').addClass('stock').text("In Stock: " + stock));
                
}

// function onProductClicked(event){
//     const product = $(event.currentTarget).data('products');
//     showProductDetails(product);
// }

function showProductDetails(product){
    //creat markup for product details
    //show it in popup
    return $('.modal-content').css('display', 'flex')
            .empty()
            .append($('<img>').attr('src', `img/product/${product.image}`).addClass('popup-img'))
            .append($('<ul>').append($('<li>').text(product.desc))
            .append($('<li>').text(product.specs))
            .append($('<li>').text("Colors: " + product.availableColors))
            .append($('<li>').text("Price: $" + product.price))
            .append($('<li>').text("In Stock: " + product.stock)));
            
};


function createSearch(products){
    $('<div>')
        .attr('id', 'search-bar')
        .append($('<form>').addClass('flex-row').append($('<input>').addClass('textbox').attr('type', 'text'))
        .append($('<input>').addClass('clickme').attr('type', 'button').attr('value', "Search")))
        .appendTo('nav');
    
      
}

function searchClick(products){
    $('.clickme').on('click', function(){
            showProducts(search(products, $('.textbox').val()));
            })
    $('.textbox').keypress(function(e){
                if (e.which === 13){
                    e.preventDefault();
                    showProducts(search(products, $('.textbox').val()));
                }
            })        
}


function search(collection, term){
    //create something to collect your output
    //iterate through collection
    
    //_.reduce(collection, function(value))
        //recursive case: is this value a collection?
        //if yes, call search(value, term)
        
        //base case: is it a string? does it contain term? 
        //if yes, collect this product into your output
        
        //return the output
    return _.reduce(collection, function(combine, value){
        if(typeof value === 'object'){
            if(search(value, term).length){
                combine.push(value);
            }
        } else {
            if(_.contains(value.toString().toLowerCase(), term.toLowerCase())){
                combine.push(value);
            }
        } return combine;
        
    }, []);    
        
}

function filterButton(products){
    let allTypes = _.map(products, function(product){
                return product.type;
        });
    
    return _.unique(allTypes);
}

function filterForm(products, types){
    return _.map(types, function(type){
            return $('<li>')
                    .attr('class', 'dropdown')
                    .text(type)
                    .on('click', function(){
                        showProducts(myFilter(products, type));
                    })
                    .appendTo('nav');
            })
}


function myFilter(products, type){
    return _.filter(products, function(product){
        if(product['type'] === type){
            return product;
        }
    });
}


function priceAscending(products){
    return $('<input>')
                .addClass('prices-button')
                .attr('type', 'button')
                .attr('value','Price Ascending')
                .on('click', function(){
                    showProducts(ascending(products))
                })
                .appendTo('main');
}
function priceDescending(products){
    return $('<input>')
                .addClass('prices-button')
                .attr('type', 'button')
                .attr('value',"Price Descending")
                .on('click', function(){
                    showProducts(descending(products))
                })
                .appendTo('main');
}

function ascending(products){
    return products.sort(function(obj1, obj2){
                return obj1.price - obj2.price;
        });
}
function descending(products){
       return products.reverse();
}

