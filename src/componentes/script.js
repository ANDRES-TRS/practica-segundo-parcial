document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const titleContainer = document.getElementById('titleContainer');
  
    button.addEventListener('click', function () {
      // Alternar la visibilidad del título
      titleContainer.classList.toggle('hidden');
    });
  });
  