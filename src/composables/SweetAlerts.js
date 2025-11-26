import Swal from 'sweetalert2'
export function alertBase($text, $icon = 'info', $title = '', $footer = '') {
  return Swal.fire({
    icon: $icon,
    title: $title,
    text: $text,
    footer: $footer,
  })
}

export function confirmBase(
  html = '¡Confirma usted que desea realizar esta acción,<br> no se podrá revertir, o cambiar! <br> ' +
    '<strong class="text-orange-400"><input type="checkbox" id="confirm_was_made" value="1"> <label for="confirm_was_made">Confirmado?</label></strong>',
  title = 'Confirmación de acción',
) {
  return Swal.fire({
    icon: 'question',
    title: title,
    html: html,
    showCancelButton: true,
    confirmButtonText: '<i class="fa-solid fa-paper-plane fa-lg mr-2"></i> Enviar',
    preConfirm: () => {
      if (document.getElementById('confirm_was_made').is(':checked')) {
        return true
      } else {
        alert('Debe confirmar si desea realizar la acción')
        return false
      }
    },
  }).then((result) => {
    return !!result.value
  })
}
