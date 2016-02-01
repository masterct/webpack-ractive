
import validations from './validations';
const errorClass = 'has-error text-danger';

function addErrorMessage (field, errorMessage) {
  var parent = field.parentElement;
  var fieldErorMessageId = field.id + 'ErrorMessage';
  var messageText = document.getElementById(fieldErorMessageId);

  if (parent.className.search(errorClass) === -1) {
    parent.className = parent.className + ' has-error text-danger';
  }

  if (messageText) {
    return messageText.innerHTML = errorMessage;
  }

  messageText = document.createElement('p');
  messageText.innerHTML = errorMessage;
  messageText.id = fieldErorMessageId;
  parent.appendChild(messageText);
}

function removeErrorMessage (field) {
  var parent = field.parentElement;
  var fieldErorMessageId = field.id + 'ErrorMessage';
  parent.className = parent.className.replace(errorClass, '');

  if (document.getElementById(fieldErorMessageId)) {
    parent.removeChild(parent.lastChild);
  }
}

export default function(field, submitBtn) {
  var checkMethods = [];
  var checkAttributes = ['required', 'type', 'min', 'max'];
  var isValid = false;

  checkAttributes.forEach(function(attribute) {
    if (field.hasAttribute(attribute)) {
      checkMethods.push(validations[attribute](field));
    }
  });

  Promise.all(checkMethods).then(function(results){
    console.log('validation sucess', results);
    removeErrorMessage(field);
  }, function(errorMsg){
    addErrorMessage(field, errorMsg);
    console.log('validation errors', errorMsg);
  });
};
