document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.servicio-btn');
  botones.forEach(button => {
    button.addEventListener('click', () => {
      const currentInfo = button.nextElementSibling;

  



      document.querySelectorAll('.servicio-info').forEach(info => {
        if (info !== currentInfo) {
          info.style.display = 'none';
        }
      });

      currentInfo.style.display =
        currentInfo.style.display === 'block' ? 'none' : 'block';
    });
  });
});

