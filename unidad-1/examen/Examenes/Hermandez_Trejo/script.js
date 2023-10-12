<script>
        {}
        document.getElementById("addToCartButton").addEventListener("click", function() {
            
            var selectElement = document.getElementById("guitarSelect");
           
            var selectedIndex = selectElement.selectedIndex;
         
            var selectedOption = selectElement.options[selectedIndex];
            var selectedValue = selectedOption.value;
            var selectedText = selectedOption.text;

           
            alert("Has agregado al carrito: " + selectedText);
        });
    </script>