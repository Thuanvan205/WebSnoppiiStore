class ProductDetail {
    constructor() {
        this.initializeProduct();
        this.setupEventListeners();
    }

    initializeProduct() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);

        if (!product) {
            this.handleProductNotFound();
            return;
        }

        this.displayProductGallery(product);
        this.displayProductInfo(product);
        this.displayRelatedProducts(product);
    }

    displayProductGallery(product) {
        const mainImage = product.images[0];
        const galleryHTML = `
            <div class="product-slider-container">
                <div class="product-main-image">
                    <img src="${mainImage}" class="img-fluid" alt="${product.name}" id="mainImage">
                </div>
                <div class="product-thumbnails-container">
                    <div class="product-thumbnails">
                        ${product.images.map((image, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" 
                                 onclick="productDetail.changeImage('${image}', this)">
                                <img src="${image}" class="img-fluid" alt="${product.name}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    
        document.getElementById('productGallery').innerHTML = galleryHTML;
    }


    displayProductInfo(product) {
        const infoHTML = `
            <h1 class="product-title mb-3">${product.name}</h1>
            <div class="product-price mb-4">
                <span class="current-price">Price: ${product.price}</span>
            </div>
            <div class="product-description mb-4">
                <h5>Mô tả sản phẩm:</h5>
                <p>${this.getProductDescription(product)}</p>
            </div>
            <div class="product-size mb-4">
                <h5>Kích thước:</h5>
                <div class="size-options">
                    ${this.generateSizeButtons()}
                </div>
            </div>
            <div class="product-quantity mb-4">
                <h5>Số lượng:</h5>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="productDetail.decreaseQuantity()">-</button>
                    <input type="number" id="quantity" value="1" min="1" max="10">
                    <button class="quantity-btn" onclick="productDetail.increaseQuantity()">+</button>
                </div>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary btn-lg mr-3" onclick="productDetail.addToCart()">
                    <i class="fas fa-shopping-cart"></i> Thêm vào giỏ hàng
                </button>
                <button class="btn btn-outline-primary btn-lg" onclick="productDetail.buyNow()">
                    Mua ngay
                </button>
            </div>
            <div class="product-meta mt-4">
                <p><strong>Danh mục:</strong> ${this.getCategoryName(product.category)}</p>
                <p><strong>Mã sản phẩm:</strong> SNP-${product.id}</p>
            </div>
        `;

        document.getElementById('productInfo').innerHTML = infoHTML;
    }

    displayRelatedProducts(product) {
        const relatedProducts = products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);

        const relatedHTML = `
            <h3 class="mb-4">Sản phẩm liên quan</h3>
            <div class="row">
                ${relatedProducts.map(p => `
                    <div class="col-md-3 mb-4">
                        <div class="product-card text-center">
                            <a href="product-detail.html?id=${p.id}">
                                <img src="${p.images[0]}" alt="${p.name}" class="img-fluid mb-3">
                                <h5>${p.name}</h5>
                                <p class="price">${p.price}</p>
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        document.getElementById('relatedProducts').innerHTML = relatedHTML;
    }

    generateSizeButtons() {
        const sizes = ['S', 'M', 'L', 'XL'];
        return sizes.map(size => `
            <button class="size-btn" data-size="${size}">${size}</button>
        `).join('');
    }

    getCategoryName(category) {
        const categoryNames = {
            'tshirt': 'Áo thun',
            'jacket': 'Áo khoác',
            'hoodie': 'Hoodie/Sweater',
            'croptop': 'Áo croptop',
            'balo': 'Balo',
            'quan': 'Quần',
            'vi': 'Ví',
            'accessory': 'Phụ kiện'
        };
        return categoryNames[category] || category;
    }

    getProductDescription(product) {
        if (product.description) {
            return product.description;
        }

        // Nếu có details, hiển thị thông tin chi tiết
        if (product.details) {
            return `
                ${product.name}
                <br><br>
                ${product.details.material ? `- Chất liệu: ${product.details.material}<br>` : ''}
                ${product.details.features ? product.details.features.map(feature => `- ${feature}<br>`).join('') : ''}
                ${product.details.care_instructions ? `<br>Hướng dẫn bảo quản:<br>${product.details.care_instructions}` : ''}
            `;
        }

        // Mô tả mặc định
        return `
            ${product.name} - Sản phẩm mới nhất từ Snoppii. 
            <br><br>
            - Chất liệu cao cấp<br>
            - Thiết kế độc đáo<br>
            - Đường may tỉ mỉ, chắc chắn<br>
            - Kiểu dáng thời trang<br>
            - Xuất xứ: Việt Nam
        `;
    }

    setupEventListeners() {
        // Sẽ được gọi sau khi DOM đã được load
        document.addEventListener('DOMContentLoaded', () => {
            this.setupSizeButtons();
            this.setupQuantityInput();
        });
    }

    setupSizeButtons() {
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    setupQuantityInput() {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput) {
            quantityInput.addEventListener('change', (e) => {
                let value = parseInt(e.target.value);
                if (isNaN(value) || value < 1) value = 1;
                if (value > 10) value = 10;
                e.target.value = value;
            });
        }
    }

changeImage(src, thumb) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
        }, 300);
        
        document.querySelectorAll('.thumbnail').forEach(item => {
            item.classList.remove('active');
        });
        thumb.classList.add('active');
    }
}


    increaseQuantity() {
        const input = document.getElementById('quantity');
        const currentValue = parseInt(input.value);
        if (currentValue < 10) {
            input.value = currentValue + 1;
        }
    }

    decreaseQuantity() {
        const input = document.getElementById('quantity');
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    }

    addToCart() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const quantity = parseInt(document.getElementById('quantity').value);
        const selectedSize = document.querySelector('.size-btn.active')?.dataset.size;

        if (!selectedSize) {
            alert('Vui lòng chọn kích thước');
            return;
        }

        // Thêm vào giỏ hàng (có thể implement sau)
        console.log('Thêm vào giỏ hàng:', {
            productId,
            quantity,
            size: selectedSize
        });
        
        alert('Đã thêm sản phẩm vào giỏ hàng!');
    }

    buyNow() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const quantity = parseInt(document.getElementById('quantity').value);
        const selectedSize = document.querySelector('.size-btn.active')?.dataset.size;

        if (!selectedSize) {
            alert('Vui lòng chọn kích thước');
            return;
        }

        // Chuyển đến trang thanh toán (có thể implement sau)
        console.log('Mua ngay:', {
            productId,
            quantity,
            size: selectedSize
        });
        
        // Chuyển hướng đến trang thanh toán
        // window.location.href = `checkout.html?productId=${productId}&quantity=${quantity}&size=${selectedSize}`;
    }

    handleProductNotFound() {
        const content = `
            <div class="text-center py-5">
                <h2>Không tìm thấy sản phẩm</h2>
                <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                <a href="index.html" class="btn btn-primary">Quay về trang chủ</a>
            </div>
        `;
        document.querySelector('.container').innerHTML = content;
    }
}

// Khởi tạo
const productDetail = new ProductDetail();
