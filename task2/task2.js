
let currentImageIndex = 0;
const images = document.getElementsByClassName('albumImage');
const album=["https://icolleges.in/wp-content/uploads/2020/12/nsu.jpg","https://gyaanarth.com/wp-content/uploads/2022/07/IMG_7053.jpg","https://th.bing.com/th/id/OIP.TMtcHFkZ_bk9zfgfaTBqhQHaEk?w=299&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7","https://images.static-collegedunia.com/public/college_data/images/campusimage/1406793695image009.jpg"]

function prevImage(){
  currentImageIndex =currentImageIndex!==0?currentImageIndex-1:0;
  for (let i = 0; i < images.length; i++) {
      images[i].src = album[currentImageIndex];
  }
}
function nextImage() {
  currentImageIndex =currentImageIndex===album.length-1?currentImageIndex:currentImageIndex+1;
  for (let i = 0; i < images.length; i++) {
      images[i].src = album[currentImageIndex];
  }
}
