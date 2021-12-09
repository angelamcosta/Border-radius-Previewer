$('#borderRadius1, #borderRadius2, #borderRadius3, #borderRadius4').focusout(function () {
    if ($(this).val()) {
        getBorderRadius(this.id.charAt(this.id.length - 1) - 1, $('#' + this.id).val().trim(), getText());
    }
});

function getText() {
    var elem, style;

    elem = document.querySelector('#borderRadiusPreviewer');
    style = getComputedStyle(elem).getPropertyValue('border-radius');

    return style;
}

function getBorderRadius(field, value, borderRadius) {
    if (!/\s/.test(borderRadius)) {
        borderRadius = (borderRadius + ' ').repeat(4).trimEnd();
    }
    var valueList = borderRadius.split(' ');
    valueList[field] = value + 'px';

    setBorderRadius(valueList.join(' '));
}

function setBorderRadius(value) {
    $('#borderRadiusPreviewer').css('border-radius', value);

    setText(value);
}

function setText(style) {
    $('#borderRadiusText').val('border-radius: ' + style + ';');
}

function copyText() {
    var copyText = document.getElementById('borderRadiusText');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
}

setText(getText());
