document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('spoilerModal'));
    myModal.show();

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    function mostrarToast() {
        var toastEl = document.getElementById('toast-formulario');
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('opinion').value = '';
    }

    document.getElementById('form-opinion').addEventListener('submit', function (event) {
        event.preventDefault();
        mostrarToast();
    });
    
  
   
});
