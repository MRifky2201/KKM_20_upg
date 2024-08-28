// Script untuk mengontrol animasi slider
$(document).ready(function(){
    let slideCount = $('.slider .team-member').length;
    $('.slider').css('width', slideCount * 200 + 'px');
    
    // Mengontrol toggling menu
    $('#mobile-menu').on('click', function() {
        $('.nav-menu').toggleClass('active');
    });
});

document.querySelectorAll('.card').forEach(card => {
    const cardId = card.getAttribute('data-card');
    let currentImageIndex = 0;
  
    // Array gambar berdasarkan cardId
    const images = {
      1: [
        "../img/galeri/day1-a.jpg",
        "../img/galeri/day1-b.jpg",
        "../img/galeri/day1-c.jpg",
        "../img/galeri/day1-d.jpg"
      ],
      2: [
        "../img/galeri/day2-a.jpg",
        "../img/galeri/day2-b.jpg",
        "../img/galeri/day2-c.jpg"
      ],
      3: [
        "../img/galeri/day3-a.jpg",
        "../img/galeri/day3-b.jpg",
        "../img/galeri/day3-c.jpg"
      ],
      4: [
        "../img/galeri/day4-a.jpg",
        "../img/galeri/day4-b.jpg",
        "../img/galeri/day4-c.jpg",
        "../img/galeri/day4-d.jpg",
        "../img/galeri/day4-e.jpg"
      ],
      5: [
        "../img/galeri/day5-a.jpg",
        "../img/galeri/day5-b.jpg",
      ],
      6: [
        "../img/galeri/day6-a.jpg",
        "../img/galeri/day6-b.jpg",
      ],
      7: [
        "../img/galeri/day7-a.jpg",
        "../img/galeri/day7-b.jpg",
        "../img/galeri/day7-c.jpg",
      ],
      8: [
        "../img/galeri/day8-a.jpg",
        "../img/galeri/day8-b.jpg",
      ],
      9: [
        "../img/galeri/day9-a.jpg",
        "../img/galeri/day9-b.jpg",
        "../img/galeri/day9-c.jpg",
        "../img/galeri/day9-d.jpg"
      ],
      10: [
        "../img/galeri/day10-a.jpg",
        "../img/galeri/day10-b.jpg",
        "../img/galeri/day10-c.jpg",
        "../img/galeri/day10-d.jpg",
        "../img/galeri/day10-e.jpg",
        "../img/galeri/day10-f.jpg",
        "../img/galeri/day10-g.jpg"
      ],
      11: [
        "../img/galeri/day11-a.jpg",
        "../img/galeri/day11-b.jpg",
        "../img/galeri/day11-c.jpg"
      ],
      12: [
        "../img/galeri/day12-a.jpg",
        "../img/galeri/day12-b.jpg",
        "../img/galeri/day12-c.jpg",
        "../img/galeri/day12-d.jpg",
        "../img/galeri/day12-e.jpg"
      ],
      13: [
        "../img/galeri/day13-a.jpg",
        "../img/galeri/day13-b.jpg",
      ],
      14: [
        "../img/galeri/day14-a.jpg",
        "../img/galeri/day14-b.jpg",
        "../img/galeri/day14-c.jpg",
        "../img/galeri/day14-d.jpg",
        "../img/galeri/day14-e.jpg",
        "../img/galeri/day14-f.jpg",
      ],
      15: [
        "../img/galeri/day15-a.jpg",
        "../img/galeri/day15-b.jpg",
        "../img/galeri/day15-c.jpg",
        "../img/galeri/day15-d.jpg",
      ],
      16: [
        "../img/galeri/day16-a.jpg",
        "../img/galeri/day16-b.jpg",
        "../img/galeri/day16-c.jpg",
        "../img/galeri/day16-d.jpg",
        "../img/galeri/day16-e.jpg",
      ],
      17: [
        "../img/galeri/day17-a.jpg",
        "../img/galeri/day17-b.jpg",
        "../img/galeri/day17-c.jpg",
        "../img/galeri/day17-d.jpg",
        "../img/galeri/day17-e.jpg",
        "../img/galeri/day17-f.jpg",
        "../img/galeri/day17-g.jpg",
      ],
      18: [
        "../img/galeri/day18-a.jpg",
        "../img/galeri/day18-b.jpg",
        "../img/galeri/day18-c.jpg",
        "../img/galeri/day18-d.jpg",
        "../img/galeri/day18-e.jpg",
        "../img/galeri/day18-f.jpg",
        "../img/galeri/day18-g.jpg",
      ],
      19: [
      ],
      20: [
        "../img/galeri/day20-a.jpg",
        "../img/galeri/day20-b.jpg",
        "../img/galeri/day20-c.jpg",
        "../img/galeri/day20-d.jpg",
        "../img/galeri/day20-e.jpg",
        "../img/galeri/day20-f.jpg",
        "../img/galeri/day20-g.jpg",
        "../img/galeri/day20-h.jpg",
      ],
      21: [
        "../img/galeri/day21-a.jpg",
        "../img/galeri/day21-b.jpg",
        "../img/galeri/day21-c.jpg",
        "../img/galeri/day21-d.jpg",
        "../img/galeri/day21-e.jpg",
        "../img/galeri/day21-f.jpg",
      ],
      22: [
        "../img/galeri/day22-a.jpg",
        "../img/galeri/day22-b.jpg",
        "../img/galeri/day22-c.jpg",
        "../img/galeri/day22-d.jpg",
      ],
      23: [
        "../img/galeri/day23-a.jpg",
        "../img/galeri/day23-b.jpg",
        "../img/galeri/day23-c.jpg",
      ],
      24: [
        "../img/galeri/day24-a.jpg",
        "../img/galeri/day24-b.jpg",
        "../img/galeri/day24-c.jpg",
        "../img/galeri/day24-d.jpg",
        "../img/galeri/day24-e.jpg",
        "../img/galeri/day24-f.jpg",
        "../img/galeri/day24-g.jpg",
        "../img/galeri/day24-h.jpg",
        "../img/galeri/day24-i.jpg",
        "../img/galeri/day24-j.jpg",
        "../img/galeri/day24-k.jpg",
        "../img/galeri/day24-l.jpg",
      ],
      25: [
        "../img/galeri/day25-a.jpg",
        "../img/galeri/day25-b.jpg",
        "../img/galeri/day25-c.jpg",
        "../img/galeri/day25-d.jpg",
        "../img/galeri/day25-e.jpg",
        "../img/galeri/day25-f.jpg",
        "../img/galeri/day25-g.jpg",
        "../img/galeri/day25-h.jpg",
        "../img/galeri/day25-i.jpg",
        "../img/galeri/day25-j.jpg",
        "../img/galeri/day25-k.jpg",
        "../img/galeri/day25-l.jpg",
        "../img/galeri/day25-m.jpg",
        "../img/galeri/day25-n.jpg",
      ],
      26: [
        "../img/galeri/day26-a.jpg",
        "../img/galeri/day26-b.jpg",
      ],
      27: [
      ],
      28: [
        "../img/galeri/day28-a.jpg",
        "../img/galeri/day28-b.jpg",
        "../img/galeri/day28-c.jpg",
        "../img/galeri/day28-d.jpg",
        "../img/galeri/day28-e.jpg",
        "../img/galeri/day28-f.jpg",
        "../img/galeri/day28-g.jpg",
        "../img/galeri/day28-h.jpg",
        "../img/galeri/day28-i.jpg",
        "../img/galeri/day28-j.jpg",
      ],
      29: [
        "../img/galeri/day29-a.jpg",
        "../img/galeri/day29-b.jpg",
        "../img/galeri/day29-c.jpg"
      ],
    };
  
    const imageElement = card.querySelector('.poster img');
  
    // Update image based on current index
    function updateImage() {
      imageElement.src = images[cardId][currentImageIndex];
    }
  
    // Navigate to previous image
    card.querySelector('.prev').addEventListener('click', () => {
      currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images[cardId].length - 1;
      updateImage();
    });
  
    // Navigate to next image
    card.querySelector('.next').addEventListener('click', () => {
      currentImageIndex = (currentImageIndex < images[cardId].length - 1) ? currentImageIndex + 1 : 0;
      updateImage();
    });
  });

  document.querySelectorAll('.card').forEach(card => {
    card.querySelector('.desc').addEventListener('click', function() {
        this.classList.toggle('full');
    });
});

  