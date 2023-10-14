
// JSON server: API Server (FakeAPI)/Mock API --> OK
// CRUD
//     - Create: Tạo mới -> POST
//     - Read: Lấy dữ liệu -> GET
//     - Update: Chỉnh sửa -> PUT/PATCH
//     - Delete: Xóa -> DELETE
var coursesApi = ' http://localhost:3000/courses'
fetch(coursesApi)
    .then(res => res.json())
    .then(json => console.log(json))