import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

const dropzone = new Dropzone('#dropzone'{
    directDefaultMessage: 'Sube qui tu imagen',
    acceptedFiles: '.png, jpg, .jpeg, .gif',
    addRemoveLinks: true,
    directRemoveFile: 'Borrar archivo',
    maxFiles: 1,
    uploadMultiple: false,
})
