api para obtener categories
'https://dummyjson.com/products/categories

api para obtener productos por categories

*** Al presionar una categoria se debera de consumir el api y obtener los productos que pertenecen a la categoria ***
- Utilizar el maquetado que se encuentra en la etiqueta <template> con el id #template-product
url : https://dummyjson.com/products/category/{categorie}
example: https://dummyjson.com/products/category/smartphones


******* Product *******

{
"id": 1,
"title": "iPhone 9",
"description": "An apple mobile which is nothing like apple",
"price": 549,
"discountPercentage": 12.96,
"rating": 4.69,
"stock": 94,
"brand": "Apple",
"category": "smartphones",
"thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
"images": [
"https://i.dummyjson.com/data/products/1/1.jpg",
"https://i.dummyjson.com/data/products/1/2.jpg",
"https://i.dummyjson.com/data/products/1/3.jpg",
"https://i.dummyjson.com/data/products/1/4.jpg",
"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
]
}

Utilizar  las propiedades 
- id
- title
- price
- stock
- discountPercentage
- brand
- utilizar del arreglo images la imagen de la posicion 2

*** Por medio de las propiedades discountPercentage y price calcular el total para el descuento ***

*** Solo se deberan de habilitar el boton "Agregar" si el producto tiene igual o mas de  50pza en stock  utilizar la funcion FILTER() ***

*** Guardar en el localstorage el  producto al presionar el boton "Agregar"  ***

*** Los productos que ya se encuentran en el localstorage no se maquetaran utilizar la funcion FIND() para validar ***

*** Al presionar el boton "Eliminar" se eliminara el product. Se debera de pedir connfirmación de borrar con la funcion confirm()  "¿Desea eliminar el product {{nombre-del-producto}} "***

*** En el apartado {{Nombre categoria seleccionada}} se debera de poner el nombre de la categoria seleccionada ***

*** En el apartado Total productos {{cantidad}} poner la cantidad de productos que regresa la categoria seleccionada  ***