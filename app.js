// Khởi tạo carousel
$(document).ready(function () {
    // Sử dụng Bootstrap Carousel mặc định thay vì tự xử lý
    $('#productCarousel').carousel({
        interval: 5000, // Thời gian chuyển slide (5 giây)
        wrap: true // Cho phép quay vòng
    });
});

// Quản lý sản phẩm
class ProductManager {
    constructor() {
        this.productsPerPage = 8;
        this.currentPage = 1;
        this.currentCategory = 'all';
    }


    displayProducts(category = null) {
        const productContainer = document.getElementById('productGrid');
        if (!productContainer) return;

        // Cập nhật category hiện tại
        this.currentCategory = category || this.currentCategory;
        this.currentPage = 1;

        let filteredProducts = this.currentCategory && this.currentCategory !== 'all' ? 
            products.filter(p => p.category === this.currentCategory) : 
            products;

        if (filteredProducts.length === 0) {
            productContainer.innerHTML = '<div class="col-12 text-center"><p>Không tìm thấy sản phẩm nào.</p></div>';
            return;
        }

        productContainer.innerHTML = filteredProducts
            .slice(0, this.productsPerPage)
            .map(product => this.createProductCard(product))
            .join('');

        this.updateLoadMoreButton(filteredProducts.length);
        this.attachProductDetailHandlers();
    }

    loadMore() {
        const productContainer = document.getElementById('productGrid');
        let filteredProducts = this.currentCategory && this.currentCategory !== 'all' ? 
            products.filter(p => p.category === this.currentCategory) : 
            products;

        const start = this.currentPage * this.productsPerPage;
        const end = start + this.productsPerPage;
        const newProducts = filteredProducts.slice(start, end);
        
        if (newProducts.length > 0) {
            const newProductsHtml = newProducts
                .map(product => this.createProductCard(product))
                .join('');
            
            productContainer.insertAdjacentHTML('beforeend', newProductsHtml);
            this.currentPage++;
            this.attachProductDetailHandlers();
        }

        this.updateLoadMoreButton(filteredProducts.length);
    }

    updateLoadMoreButton(totalProducts) {
        const loadMoreBtn = document.getElementById('load-more');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 
                this.currentPage * this.productsPerPage >= totalProducts ? 'none' : 'block';
        }
    }

    attachProductDetailHandlers() {
        document.querySelectorAll('.product-detail-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                this.showProductDetail(productId);
            });
        });
    }

    showProductDetail(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Tạo modal nếu chưa tồn tại
        let modal = document.getElementById('productModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'productModal';
            modal.className = 'modal fade';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${product.name}</h5>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${product.image}" class="img-fluid" alt="${product.name}">
                            </div>
                            <div class="col-md-6">
                                <h3>${product.name}</h3>
                                <p class="price">
                                    ${product.price.toLocaleString()}₫ 
                                    ${product.oldPrice ? `<span class="text-muted"><del>${product.oldPrice.toLocaleString()}₫</del></span>` : ''}
                                </p>
                                <p>${product.description || 'Chưa có mô tả cho sản phẩm này.'}</p>
                                <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
                                    <i class="fas fa-shopping-cart"></i> Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $(modal).modal('show');
    }
}

// Khởi tạo và xử lý sự kiện khi trang đã load
document.addEventListener('DOMContentLoaded', function() {
    const productManager = new ProductManager();

    // Xử lý dropdown menu sản phẩm
    document.querySelectorAll('.dropdown-menu .dropdown-item[data-category]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            if (category) {
                const productSection = document.querySelector('.product-section');
                if (productSection) {
                    productSection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Cập nhật trạng thái active của buttons
                    document.querySelectorAll('.category-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    const categoryBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
                    if (categoryBtn) {
                        categoryBtn.classList.add('active');
                    }
                    
                    productManager.displayProducts(category);
                }
            }
        });
    });

    // Xử lý category buttons
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            productManager.displayProducts(category);
        });
    });

    // Xử lý nút Load More
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => productManager.loadMore());
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Hiển thị sản phẩm ban đầu
    productManager.displayProducts('all');
});
// Initialize product carousel with enhanced features
$(document).ready(function() {
    const productCarousel = $('#productCarousel');
    
    productCarousel.carousel({
        interval: 5000,
        touch: true,
        pause: 'hover'
    });

    // Add smooth transitions
    productCarousel.on('slide.bs.carousel', function(e) {
        const $animatingElems = $(e.relatedTarget)
            .find('[data-aos]');
        
        $animatingElems.each(function() {
            const elem = $(this);
            elem.removeClass('aos-animate');
            
            setTimeout(function() {
                elem.addClass('aos-animate');
            }, 50);
        });
    });

    // Quick view functionality
    $('.btn-quick-view').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const productCard = $(this).closest('.product-card');
        const productData = {
            title: productCard.find('.product-title').text(),
            price: productCard.find('.current-price').text(),
            image: productCard.find('img').attr('src'),
            originalPrice: productCard.find('.original-price del').text()
        };

        showQuickViewModal(productData);
    });
});

// Quick view modal function
function showQuickViewModal(product) {
    const modalHtml = `
        <div class="modal fade" id="quickViewModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${product.title}</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${product.image}" class="img-fluid" alt="${product.title}">
                            </div>
                            <div class="col-md-6">
                                <div class="product-details">
                                    <div class="price-wrapper">
                                        <span class="current-price">${product.price}</span>
                                        <span class="original-price"><del>${product.originalPrice}</del></span>
                                    </div>
                                    <div class="product-actions mt-4">
                                        <button class="btn btn-primary btn-block">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    $('#quickViewModal').remove();
    
    // Add new modal to body
    $('body').append(modalHtml);
    
    // Show modal
    $('#quickViewModal').modal('show');
}
// Add this to your app.js
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach(img => imageObserver.observe(img));
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Responsive menu toggle
    const menuToggle = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('.navbar-collapse');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
      });
    }
  });
  