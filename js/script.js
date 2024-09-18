// |-----| SweetAlert2 "Newsletter Subscription" alert |-----| //
function newsletter() {
    Swal.fire({
        title: "¡Felicidades!",
        text: "Ahora recibirás noticias semanales",
        icon: "success",

        confirmButtonColor: '#FB8500',
        confirmButtonText: 'Entendido'
    });
}
// |-----| SweetAlert2 "Newsletter Subscription" alert |-----| //

// |-----| SweetAlert2 "Contact" alert |-----| //
function sendMessage() {
    Swal.fire({
        title: "¡Felicidades!",
        text: "Tu mensaje se ha enviado con éxito",
        icon: "success",

        confirmButtonColor: '#FB8500',
        confirmButtonText: 'Entendido'
    });
}
// |-----| SweetAlert2 "Contact" alert |-----| //

// |-----| SweetAlert2 "Comment" alert |-----| //
function sendComment() {
    Swal.fire({
        title: "¡Felicidades!",
        text: "Tu comentario se ha publicado con éxito",
        icon: "success",

        confirmButtonColor: '#FB8500',
        confirmButtonText: 'Entendido'
    });
}
// |-----| SweetAlert2 "Comment" alert |-----| //

// |-----| SweetAlert2 "Register" alert |-----| //
function successfullRegister() {
    Swal.fire({
        title: "¡Felicidades!",
        text: "Te has registrado con éxito",
        icon: "success",

        confirmButtonColor: '#FB8500',
        confirmButtonText: '<a href="signin.html" class="text-white link-underline link-underline-opacity-0">Entendido</a>',
    });
}
// |-----| SweetAlert2 "Register" alert |-----| //

// |-----| SweetAlert2 "LogOut" alert |-----| //
function logout() {
  Swal.fire({
    title: "¿Estás seguro que quieres cerrar sesión?",
    text: "¡Tendrás que iniciar tu sesión nuevamente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Cerrar",
    confirmButtonColor: "#FB8500",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      // Redirigir a /index.html después de confirmar el cierre de sesión
      window.location.href = "/index.html";
    }
  });
}
// |-----| SweetAlert2 "LogOut" alert |-----| //

// |-----| User Profile - Personal Info Tab JavaScript |-----| //
const profileForm = document.getElementById('profileForm');
const inputs = profileForm.querySelectorAll('input');
const labels = profileForm.querySelectorAll('label');
const editButton = document.getElementById('editButton');
const actionButtons = document.getElementById('actionButtons');

editButton.addEventListener('click', function() {
  inputs.forEach(input => {
    input.disabled = false;
    input.required = true;
  });

  labels.forEach(label => {
    label.classList.add('required-input');
  });

  actionButtons.classList.remove('d-none');
  editButton.classList.add('d-none');
});

// |-----| SweetAlert2 "Update User Info Success" alert |-----| //
function updateUser() {
  Swal.fire({
    title: "¡Felicidades!",
    text: "Tus datos se han actualizado correctamente",
    icon: "success",
    confirmButtonColor: '#FB8500',
    confirmButtonText: '<a href="profile.html" class="text-white link-underline link-underline-opacity-0">Entendido</a>'
  }).then((result) => {
    if (result.isConfirmed) {
      // Código que quieres ejecutar cuando se presiona el botón en la alerta
      inputs.forEach(input => {
        input.disabled = false;
        input.required = true;
      });

      labels.forEach(label => {
        label.classList.add('required-input');
      });

      actionButtons.classList.remove('d-none');
      editButton.classList.add('d-none');
    }
  });
}
// |-----| SweetAlert2 "Update User Info Success" alert |-----| //

// |-----| SweetAlert2 "Update User Info Cancel" alert |-----| //
function cancelUpdate() {
  Swal.fire({
    title: "¿Estás seguro que quieres cancelar?",
    text: "¡Tus cambios no se verán reflejados!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#FB8500",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
        inputs.forEach(input => {
          input.disabled = true;
          input.required = false;
        });

        labels.forEach(label => {
          label.classList.remove('required-input');
        });

        actionButtons.classList.add('d-none');
        editButton.classList.remove('d-none');
    }
  });
}
// |-----| SweetAlert2 "Update User Info Cancel" alert |-----| //
// |-----| User Profile - Personal Info Tab JavaScript |-----| //

// |-----| User Profile - Password Tab JavaScript |-----| //
const toggleCurrentPassword = document.getElementById('toggleCurrentPassword');
const toggleNewPassword = document.getElementById('toggleNewPassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

const currentPassword = document.getElementById('currentPassword');
const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');

// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility(inputField, toggleIcon) {
  if (inputField.type === 'password') {
    inputField.type = 'text';
    toggleIcon.classList.remove('bi-eye');
    toggleIcon.classList.add('bi-eye-slash');
  } else {
    inputField.type = 'password';
    toggleIcon.classList.remove('bi-eye-slash');
    toggleIcon.classList.add('bi-eye');
  }
}

toggleCurrentPassword.addEventListener('click', function() {
  togglePasswordVisibility(currentPassword, toggleCurrentPassword);
});

toggleNewPassword.addEventListener('click', function() {
  togglePasswordVisibility(newPassword, toggleNewPassword);
});

toggleConfirmPassword.addEventListener('click', function() {
  togglePasswordVisibility(confirmPassword, toggleConfirmPassword);
});
// |-----| User Profile - Password Tab JavaScript |-----| //