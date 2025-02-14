const products = [
            { name: 'JA 2 SE', price: 907.00, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e99f9a19-a561-4df6-8537-32acbca68dfe/JA+2+SE+%28GS%29.png' },
            { name: 'JA 2 Scratch Black', price: 801.00, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e91aab1-1507-4078-ad7a-0e11864cfc25/JA+2+SCRATCH+BLING+EP.png' },
            { name: 'Air Jordan 1 Low', price: 921.25, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/35e9a24e-6337-4fda-abbb-6bc8e31c12c1/WMNS+AIR+JORDAN+1+LOW.png' },
            { name: 'Nike Air Max 1', price: 58.00, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/822a80f9-3925-4439-a01c-fd306be33fbe/W+NIKE+AIR+MAX+1+%2787+T.png' },
            { name: 'Nike Tiempo Legend', price: 35.15, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c614fd42-4f10-475c-b791-00d61e801a07/LEGEND+10+CLUB+FG%2FMG.png' },
            { name: 'Nike Free Metcon', price: 621.00, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e467e562-4c7a-4e5d-9302-9e9104528d33/W+NIKE+FREE+METCON+6.png' },
            { name: 'Nike Waffle Nav', price: 751.00, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/758293c6-ace1-4f1f-a8a9-639711885067/NIKE+WAFFLE+NAV.png' },
            { name: 'Nike Streakfly', price: 595.25, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/770a12bf-dcf3-4921-abfd-2aa7b9f7652a/NIKE+ZOOMX+STREAKFLY.png' },
            { name: 'Nike Air Max ', price: 858.00, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/822a80f9-3925-4439-a01c-fd306be33fbe/W+NIKE+AIR+MAX+1+%2787+T.png' },
            { name: 'Nike Legend', price: 995.15, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c614fd42-4f10-475c-b791-00d61e801a07/LEGEND+10+CLUB+FG%2FMG.png' }
        ];


        const cart = [];

        // Function to display products
        function displayProducts() {
            const productList = document.getElementById('product-list');
            products.forEach((product, index) => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" />
                    <p>Price: ₱${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${index})">Add to Cart</button>
                `;
                productList.appendChild(productDiv);
            });
        }

        // Function to add items to the cart
        function addToCart(index) {
            const product = products[index];
            cart.push(product);
            updateCartDisplay();
        }

        // Function to update the cart display
        function updateCartDisplay() {
            const cartDisplay = document.getElementById('cart-display');
            const totalPriceElement = document.getElementById('total-price');

            cartDisplay.innerHTML = ''; // Clear previous cart display
            let total = 0;

            cart.forEach((item) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerText = `${item.name} - ₱${item.price.toFixed(2)}`;
                cartDisplay.appendChild(cartItem);
                total += item.price; // Calculate total price
            });

            totalPriceElement.innerText = `₱${total.toFixed(2)}`; // Update total price display
        }

        // Initial call to display products
        displayProducts();