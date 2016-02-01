
const defaults = {
  telPattern: /^((\+|00)33\s?|0)[1-9](\s?\d{2}){4}$/,
  telPatternDescription: 'ex : 0612345678, +0033612345678',
  emailPattern: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
};

function checkRequired (field) {
  return new Promise(function (fulfill, reject) {
    if(field.value === 'undefined' || field.value === null || field.value.length === 0) {
      return reject('Ce champ est obligatoire');
    }
    fulfill(field);
  });
}

function checkPattern (field) {
  return new Promise(function (fulfill, reject) {
    console.log('pattern', field.pattern);
    console.log(field.value)
    var value = field.value;
    var regexp = new RegExp(field.pattern);
    console.log(value.match(regexp));
    if (!value.match(regexp)) {
      return reject('Ce champ ne respecte pas le format suivant : ' + field.patternDescription);
    }
    fulfill(field);
  });
}

function checkEqual (field) {
  return new Promise(function (fulfill, reject) {
    if(field.value !== field.match) {
      return reject('ce champ doit être identique à celui-ci :' + field.match);
    }
    fulfill(field);
  });
}

function checkMin (field) {
  return new Promise(function (fulfill, reject) {
    var value = (field.type === 'text')? field.value.length : field.value;
    var message = field.type === 'text'? 'avoir une longueur' : 'être';

    if(value < field.min) {
      return reject('La valeur de ce champ doit '+ message +' supérieure à ' + field.min);
    }
    fulfill(field);
  });
}

function checkMax (field) {
  return new Promise(function (fulfill, reject) {
    var value = (field.type === 'text')? field.value.length : field.value;
    var message = field.type === 'text'? 'avoir une longueur' : 'être';

    if(value > field.max) {
      return reject('La valeur de ce champ doit '+ message +' inférieure à ' + field.max);
    }

    fulfill(field);
  });
}

function checkTelPattern (field) {
  if(!field.pattern) {
    field.pattern = defaults.telPattern;
    field.patternDescription = field.patternDescription || defaults.telPatternDescription;
  }
  return checkPattern(field);
}

function checkType (field) {
  switch (field.type) {
    case 'tel':
    console.log('tel');
    return checkTelPattern(field);
    break;

  }
}

export default {
  type: checkType,
  required: checkRequired,
  pattern: checkPattern,
  min: checkMin,
  max: checkMax
};
