// 1. Front-end: Xây dựng giao diện người dùng

// 2. Back-end: Xây dựng logic xử lý + cơ sở dữ liệu

// API -> Application Programming Interface

// Cổng giao tiếp giữa các phần mềm
// Backend (OK) -> API (URL) -> Fetch -> JSON/XML
// -> JSON.parse -> Javascript types
/// -> Render ra giao diện với HTML


var postApi = 'https://dummyjson.com/products'

// stream
fetch(postApi)
    .then(function(response) {
        // JSON.parse: JSON -> Javascript types
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.products.map(function(post) {
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.description}</p>
            </li>`
        })

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;

    });


// fetch(postApi)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => alert(err))
