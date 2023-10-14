// Đối tượng `Validator`
function Validator(options) 
{
    function getParent (element, selector) {
        var parentElement = element.parentElement;
        while (parentElement) {
            if (parentElement.matches(selector)) {
                return parentElement;
            }
            parentElement = element.parentElement;
        }
    }
    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var parentElement =  getParent(inputElement, options.formGroupSelector);
        var errorElement = parentElement.querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                        );
                    break;
                default: 
                    errorMessage = rules[i](inputElement.value);
            }
        if (errorMessage) break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            parentElement.classList.remove('invalid');
        }
        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);

    if (formElement)
    {
        // Khi submit form 
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);

                if (!isValid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onsubmit === 'function') {
                    var enableInput = formElement.querySelectorAll('[name]:not([disable])')

                    var formValue = Array.from(enableInput).reduce( function (values, input) {
                        values[input.name] = input.value
                            return values;
                    }, {});
                    options.onsubmit(formValue)
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit()
                }
            } else {
                console.log('Có lỗi');
            }
        }
        // Lấy qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ..)
        options.rules.forEach((rule) => {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)

            } else {
                selectorRules[rule.selector] = [rule.test]
            }
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var parentElement = inputElement.parentElement
                    var errorElement = parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

// Define rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi -> Trả ra message lỗi
// 2. Khi hợp lệ -> Không trả ra các gì cả (undefined)
Validator.isRequired = function (selector, message) 
{
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        } 
    }
}
Validator.isEmail = function (selector, message) 
{
    return {
        selector: selector,
        test: function (value) 
        {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min}`;
        }
    }
}
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
                return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}