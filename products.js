function generateProductImages(product) {
    const imagePath = product.image;
    const extension = imagePath.split('.').pop(); // Lấy phần mở rộng của file (jpg/png)
    const baseName = imagePath.replace(`.${extension}`, ''); // Lấy tên file không có đuôi
    
    return [
        imagePath, // Hình ảnh chính
        `${baseName}.1.${extension}`, // Hình phụ 1
        `${baseName}.2.${extension}`, // Hình phụ 2
        `${baseName}.3.${extension}`  // Hình phụ 3
    ];
}
// Dữ liệu sản phẩm
const productsData = [
    // T-SHIRT / ÁO THUN
    {
        id: 1,
        name: 'SNP Limmi Baby Tee',
        price: '230.000₫',
        image: 'images/products/p1.jpg',
        category: 'tshirt',
        details: {
            material: '100% cotton cao cấp, định lượng 220gsm',
            features: [
                'Form dáng baby tee năng động, trẻ trung',
                'Họa tiết được in cao cấp với công nghệ DTG',
                'Đường may tỉ mỉ, chắc chắn',
                'Cổ viền bo được dệt riêng theo thiết kế',
                'Phù hợp với nhiều phong cách mix&match'
            ],
            size_guide: {
                S: 'Ngang 49cm - Dài 65cm',
                M: 'Ngang 51cm - Dài 67cm',
                L: 'Ngang 53cm - Dài 69cm',
                XL: 'Ngang 55cm - Dài 71cm'
            },
            care_instructions: `
                - Giặt máy ở chế độ nhẹ nhàng
                - Nhiệt độ nước không quá 30 độ C
                - Không sử dụng chất tẩy mạnh
                - Không vắt mạnh, để khô tự nhiên
                - Ủi ở nhiệt độ thấp, không ủi trực tiếp lên hình in
            `
        }
    },

    {
        id: 2,
        name: 'SNP Lace Baby Tee',
        price: '224.000₫',
        image: 'images/products/p2.jpg',
        category: 'tshirt'
    },
    {
        id: 3,
        name: 'SNP Baby Tee Mabel',
        price: '210.000₫',
        image: 'images/products/p3.jpg',
        category: 'tshirt'
    },
    {
        id: 4,
        name: 'SNP Baby Tee Una',
        price: '214.000₫',
        image: 'images/products/p4.jpg',
        category: 'tshirt'
    },
    {
        id: 5,
        name: 'SNP Tee Cá Đáng Yêu',
        price: '248.000₫',
        image: 'images/products/p5.jpg',
        category: 'tshirt'
    },
    {
        id: 6,
        name: 'SNP Tee I Cá U',
        price: '237.000₫',
        image: 'images/products/p6.jpg',
        category: 'tshirt'
    },
    {
        id: 7,
        name: 'SNP Tee Kiều',
        price: '225.000₫',
        image: 'images/products/p7.jpg',
        category: 'tshirt'
    },
    {
        id: 8,
        name: 'SNP Tee Bé Cá',
        price: '215.000₫',
        image: 'images/products/p8.jpg',
        category: 'tshirt'
    },
    {
        id: 9,
        name: 'SNP Polo Academy - WHITE',
        price: '195.000₫',
        image: 'images/products/p41.jpg',
        category: 'quan'
    },    

    // JACKET / ÁO KHOÁC
    {
        id: 10,
        name: 'SNP Jacket The Vibe Stealer-Trắng',
        price: '275.000₫',
        image: 'images/products/p9.jpg',
        category: 'jacket'
    },
    {
        id: 11,
        name: 'SNP Jacket The Vibe Stealer-Đen',
        price: '275.000₫',
        image: 'images/products/p10.jpg',
        category: 'jacket'
    },
    {
        id: 12,
        name: 'SNP Jacket Surfing-White',
        price: '275.000₫',
        image: 'images/products/p11.jpg',
        category: 'jacket'
    },
    {
        id: 13,
        name: 'SNP Jacket Surfing-Violet',
        price: '275.000₫',
        image: 'images/products/p12.jpg',
        category: 'jacket'
    },
    {
        id: 14,
        name: 'SNP Jacket Surfing-Pink',
        price: '275.000₫',
        image: 'images/products/p13.jpg',
        category: 'jacket'
    },
    {
        id: 15,
        name: 'SNP Jacket Surfing-Blue',
        price: '275.000₫',
        image: 'images/products/p14.jpg',
        category: 'jacket'
    },
    {
        id: 16,
        name: 'SNP Jacket Original-Trắng',
        price: '275.000₫',
        image: 'images/products/p15.jpg',
        category: 'jacket'
    },
    {
        id: 17,
        name: 'SNP Jacket Original-Đen',
        price: '275.000₫',
        image: 'images/products/p16.jpg',
        category: 'jacket'
    },
    
    // HOODIE/SWEATER
    {
        id: 18,
        name: 'SNP LS Jersey-Đen',
        price: '195.000₫',
        image: 'images/products/p17.jpg',
        category: 'hoodie'
    },
    {
        id: 19,
        name: 'SNP LS Jersey-White',
        price: '195.000₫',
        image: 'images/products/p18.jpg',
        category: 'hoodie'
    },
    {
        id: 20,
        name: 'SNP LS Jersey-Xanh biển',
        price: '195.000₫',
        image: 'images/products/p19.jpg',
        category: 'hoodie'
    },
    {
        id: 21,
        name: 'SNP Hoodie Basic Black',
        price: '275.000₫',
        image: 'images/products/p20.jpg',
        category: 'hoodie'
    },
    {
        id: 22,
        name: 'SNP Hoodie Basic White',
        price: '275.000₫',
        image: 'images/products/p21.jpg',
        category: 'hoodie'
    },
    {
        id: 23,
        name: 'SNP Sweater Seam',
        price: '275.000₫',
        image: 'images/products/p22.jpg',
        category: 'hoodie'
    },
    {
        id: 24,
        name: 'SNP Hoodie Zip Logo-Đen',
        price: '275.000₫',
        image: 'images/products/p23.jpg',
        category: 'hoodie'
    },
    {
        id: 25,
        name: 'SNP Hoodie Zip Logo-Trắng',
        price: '275.000₫',
        image: 'images/products/p24.jpg',
        category: 'hoodie'
    },    
// ÁO CROPTOP
{
    id: 26,
    name: 'SNP Lolita Jersey Croptop',
    price: '220.000₫',
    image: 'images/products/p25.jpg',
    category: 'croptop'
},
{
    id: 27,
    name: 'SNP Chumie Croptop',
    price: '197.000₫',
    image: 'images/products/p26.jpg',
    category: 'croptop'
},
{
    id: 28,
    name: 'SNP Croptop INTE',
    price: '195.000₫',
    image: 'images/products/p27.jpg',
    category: 'croptop'
},
{
    id: 29,
    name: 'SNP Croptop Hebe',
    price: '99.000₫',
    image: 'images/products/p28.jpg',
    category: 'croptop'
},
{
    id: 30,
    name: 'SNP Rubber Tag Croptop Shirt',
    price: '195.000₫',
    image: 'images/products/p29.jpg',
    category: 'croptop'
},
{
    id: 31,
    name: 'SNP Croptop Don\'t Kill My Vibe-Xanh biển',
    price: '195.000₫',
    image: 'images/products/p30.jpg',
    category: 'croptop'
},
{
    id: 32,
    name: 'SNP Croptop Don\'t Kill My Vibe-Tím',
    price: '195.000₫',
    image: 'images/products/p31.jpg',
    category: 'croptop'
},
{
    id: 33,
    name: 'SNP Croptop Don\'t Kill My Vibe-Trắng',
    price: '195.000₫',
    image: 'images/products/p32.jpg',
    category: 'croptop'
},

// BALO
{
    id: 34,
    name: 'SNP Simi Backpack',
    price: '350.000₫',
    image: 'images/products/p33.jpg',
    category: 'balo'
},
{
    id: 35,
    name: 'SNP Mallow Backpack',
    price: '339.000₫',
    image: 'images/products/p34.jpg',
    category: 'balo'
},
{
    id: 36,
    name: 'SNP Aimee Ribbon Backpack',
    price: '339.000₫',
    image: 'images/products/p35.jpg',
    category: 'balo'
},
{
    id: 37,
    name: 'SNP Commiu Backpack',
    price: '287.000₫',
    image: 'images/products/p36.jpg',
    category: 'balo'
},
{
    id: 38,
    name: 'SNP Rette Backpack',
    price: '275.000₫',
    image: 'images/products/p37.jpg',
    category: 'balo'
},
{
    id: 39,
    name: 'SNP Scholastic Backpack',
    price: '259.000₫',
    image: 'images/products/p38.jpg',
    category: 'balo'
},
{
    id: 40,
    name: 'SNP INTE Backpack',
    price: '287.000₫',
    image: 'images/products/p39.jpg',
    category: 'balo'
},
{
    id: 41,
    name: 'SNP Lid Backpack',
    price: '239.000₫',
    image: 'images/products/p40.jpg',
    category: 'balo'
},

// QUẦN
{
    id: 42,
    name: 'SNP 2Box Jean - WHITE',
    price: '245.000₫',
    image: 'images/products/p42.png',
    category: 'quan'
},
{
    id: 43,
    name: 'SNP Daddy Jean - BLACK',
    price: '245.000₫',
    image: 'images/products/p43.jpg',
    category: 'quan'
},
{
    id: 44,
    name: 'SNP Skinny Jean-Blue',
    price: '225.000₫',
    image: 'images/products/p44.jpg',
    category: 'quan'
},
{
    id: 45,
    name: 'SNP Skinny Jean-Grey',
    price: '225.000₫',
    image: 'images/products/p45.jpg',
    category: 'quan'
},
{
    id: 46,
    name: 'SNP Thigh Destroyed Jeans-Light Blue',
    price: '225.000₫',
    image: 'images/products/p46.jpg',
    category: 'quan'
},
{
    id: 47,
    name: 'SNP Short Jean Black',
    price: '205.000₫',
    image: 'images/products/p47.jpg',
    category: 'quan'
},
{
    id: 48,
    name: 'SNP Blue Pocket Jeans',
    price: '225.000₫',
    image: 'images/products/p48.jpg',
    category: 'quan'
},

// VÍ
{
    id: 49,
    name: 'SNP Long Wallet Label',
    price: '190.000₫',
    image: 'images/products/p49.jpg',
    category: 'vi'
},
{
    id: 50,
    name: 'SNP Wallet Label',
    price: '170.000₫',
    image: 'images/products/p50.jpg',
    category: 'vi'
},
{
    id: 51,
    name: 'SNP Long Wallet Logo',
    price: '110.000₫',
    image: 'images/products/p51.jpg',
    category: 'vi'
},
{
    id: 52,
    name: 'SNP Wallet Logo',
    price: '170.000₫',
    image: 'images/products/p52.jpg',
    category: 'vi'
},
{
    id: 53,
    name: 'SNP Long Wallet Cow',
    price: '190.000₫',
    image: 'images/products/p53.jpg',
    category: 'vi'
},
{
    id: 54,
    name: 'SNP Wallet Cow',
    price: '170.000₫',
    image: 'images/products/p54.jpg',
    category: 'vi'
},
{
    id: 55,
    name: 'SNP Fishy Chocker',
    price: '90.000₫',
    image: 'images/products/c1.jpg',
    category: 'vi',
    details: {
        material: 'Dây đeo cao cấp,thép không ghỉ',
        features: [
            'Thiết kế độc đáo từ bộ sưu tập Bé Cá Ngỗ Ngược',
            'Mặt charm hình cá được làm thủ công tỉ mỉ',
            'Dây choker có thể điều chỉnh độ dài',
            'Kích thước charm: 3.5 x 2.5 cm',
            'Chiều dài dây: 38-42cm (có thể điều chỉnh)',
            'Sản phẩm nằm trong BST Bé Cá Ngỗ Ngược'

        ],
        colors: 'Màu bạc (Silver)',
        care_instructions: `
            - Tránh tiếp xúc với nước và các chất tẩy rửa mạnh
            - Lau nhẹ nhàng bằng khăn mềm khi cần làm sạch
            - Bảo quản trong hộp hoặc túi riêng khi không sử dụng
            - Tránh va đập mạnh để giữ form dáng của sản phẩm
            - Không đeo khi tắm hoặc bơi
        `,
    }
}
,
{
    id: 56,
    name: 'SNP Fishy Leather Keychain',
    price: '75.000₫',
    image: 'images/products/c2.jpg',
    category: 'vi'
},
{
    id: 57,
    name: 'SNP Fishy Pouch',
    price: '205.000₫',
    image: 'images/products/c3.jpg',
    category: 'vi'
},
{
    id: 58,
    name: 'SNP Fishy Bag',
    price: '325.000₫',
    image: 'images/products/c4.jpg',
    category: 'vi'
},
{
    id: 59,
    name: 'SNP Drawstring Tote Bag',
    price: '295.000₫',
    image: 'images/products/c5.jpg',
    category: 'vi'
},

{
    id: 60,
    name: 'SNP Binky Top',
    price: '185.000₫',
    image: 'images/products/c7.jpg',
    category: 'vi'
},

];


const products = productsData.map(product => ({
    ...product,
    images: generateProductImages(product)
}));

// Tạo HTML cho sản phẩm
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <a href="product-detail.html?id=${product.id}"> <!-- Thêm link với product ID -->
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="quick-view">
                    <button class="quick-view-btn" onclick="quickView(${product.id})">
                        QUICK VIEW
                    </button>
                </div>
            </div>
            <div class="product-info">
                <a href="product-detail.html?id=${product.id}"> <!-- Thêm link với product ID -->
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                </a>
            </div>
        </div>
    `;
}


// Hiển thị sản phẩm
const ITEMS_PER_PAGE = 8;
let currentPage = 1;

// Hiển thị sản phẩm
function displayProducts(category = 'all') {
    const productGrid = document.getElementById('productGrid');
    let filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    // Nếu là category 'all', áp dụng phân trang
    if (category === 'all') {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        filteredProducts = filteredProducts.slice(startIndex, endIndex);
        
        // Hiển thị phân trang nếu cần
        if (products.length > ITEMS_PER_PAGE) {
            updatePagination(products.length);
        }
    }
    
    productGrid.innerHTML = filteredProducts
        .map(product => createProductCard(product))
        .join('');
}

// Thêm hàm phân trang
function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const paginationContainer = document.querySelector('.pagination');
    
    if (!paginationContainer) {
        // Tạo container pagination nếu chưa có
        const container = document.createElement('div');
        container.className = 'pagination';
        document.getElementById('productGrid').after(container);
    }
    
    const paginationHTML = `
        <button onclick="changePage('prev')" ${currentPage === 1 ? 'disabled' : ''}>
            Previous
        </button>
        <span>Page ${currentPage} of ${totalPages}</span>
        <button onclick="changePage('next')" ${currentPage === totalPages ? 'disabled' : ''}>
            Next
        </button>
    `;
    
    document.querySelector('.pagination').innerHTML = paginationHTML;
}

// Thêm hàm chuyển trang
function changePage(direction) {
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    }
    
    displayProducts('all');
}

// Sửa lại event listener cho category buttons
document.querySelector('.category-buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Reset currentPage khi chuyển category
        currentPage = 1;
        
        // Ẩn pagination khi không ở category 'all'
        const paginationContainer = document.querySelector('.pagination');
        if (paginationContainer) {
            paginationContainer.style.display = e.target.dataset.category === 'all' ? 'flex' : 'none';
        }
        
        // Display products for selected category
        const category = e.target.dataset.category;
        displayProducts(category);
    }
});


// Đảm bảo các sản phẩm được hiển thị ngay khi trang được tải
window.onload = function() {
    displayProducts('all');
};

