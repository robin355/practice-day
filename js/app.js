// const student = {
//     name: 'Rubel Hasan',
//     age: 22,
//     ismarried: false,
//     department: {
//         departmentName: 'computer',
//         CIName: 'Jahid Hasan',
//         semester: [1, 2, 3, 4, 5, 6, 7, 8],
//     },
//     friends: ['rahim', 'karim', 'Rayhan', 'Rakib'],
//     teacher: () => {
//         return ('hello');
//     }
// }
// const [one, two, three] = student.friends;
// const result = `
// My name is ${student.name}.I am ${student.age} years old.My Department Name:${student.department.departmentName}.${student.teacher()} EveryOne.
// My  Best friend ${three}.
// `;
// // console.log(result);
// // const arrow = () => {
// //     return 89;
// // }
// // console.log(arrow());
// // const arrow2 = (num) => {
// //     const div = num / 17;
// //     return div;
// // }
// // console.log(arrow2(554).toFixed(2));
// const arrow3 = (num1, num2) => {
//     const sum = num1 + num2;
//     return div = sum / 2;
// }
// // console.log(arrow3(554, 450).toFixed(2));
// const arrow4 = (x, y) => {
//     const num1 = x + 7;
//     const num2 = y + 7;
//     const sum = num1 + num2;
//     return sum;
// }
// // console.log(arrow4(20, 25))
// const numbers = [14, 25, 36, 47, 58, 69];
// const result2 = numbers.map(number => number * 7);
// console.log(result2);
const loadPhoto = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await res.json();
    displayPhoto(data.slice(0, 50))
}
const displayPhoto = photos => {
    const divContainer = document.getElementById('div-container');
    photos.forEach(photo => {
        // console.log(photo);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img onclick="detailPhoto(${photo.id})" src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `;
        divContainer.appendChild(div);
    });

}
const detailPhoto = async (photoId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
    const data = await res.json();
    displaydetailPhotos(data);
}

const displaydetailPhotos = data => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
    <img  src="${data.thumbnailUrl}" class="card-img-top w-100" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</p>
    </div>
</div>
    `;
    detailContainer.appendChild(div);
}

loadPhoto();