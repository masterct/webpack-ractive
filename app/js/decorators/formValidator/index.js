import validate from './validate';
export default function(node, params) {
    var validationBtn = node.lastChild;
    validationBtn.disabled = true;

    node.addEventListener('change', function(evt) {
        validate(evt.target, validationBtn);
    });

    return {
        teardown: function() {}
    };
};
