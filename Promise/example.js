// Để hiểu bài này cần nắm được:
// 1. Array
// 2. Function, callback
// 3. Promise
// 4. DOM

// Sẽ gặp những vấn đề
// Callback hell
// Promise hell

// Async/ Await

var users = [
    {
        id: 1,
        name: 'Tran Quang Linh',
    },
    {
        id: 2,
        name: 'Vu Thi Thuy Trang',
    },
    {
        id: 3,
        name: 'Tran Thi Cam Van',
    },
    // ...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Cam on anh^^'
    }
]

// 1. Lay comments
// 2. Tu comments lay ra user_id
// tu user_id lay ra user tương ứng

// Fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        });
        setTimeout(function() {
            resolve(result)
        }, 1000)
    }, 1000);
}

getComments()
    .then(function(comments) {{
        var userIds = comments.map(function(comment) {
            return comment.user_id
        });

        getUsersByIds(userIds)
         .then(function(users) {
        return {
            users: users,
            comments: comments,
        }
    })
    .then(function(data) {
       var commentBlock = document.getElementById('comment-block')

       var html = '';
       data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            })
            html += `<li>${user.name}: ${comment.content}</li>`
       })

       commentBlock.innerHTML = html;
    })
    }
});
