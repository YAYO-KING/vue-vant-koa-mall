const NotEmpty = [
    {required: true, message: '输入不能为空', trigger: 'onBlur'},
];
const TypeEmpty = [
    {required: true, message: '输入不能为空', trigger: 'onBlur'},
];
const NumberRule = [
    {required: true, message: '输入不能为空', trigger: 'onBlur'},
    // {type: 'number', message: '必须为数字类型', trigger: ['onBlur', 'onChange']}
];
const TelRule = [
    {
        required: true,
        message: '请输入手机号码',
        trigger: 'onBlur'
    },
    {
        validator: function (rule, value, callback) {
            if (/^1[34578]\d{9}$/.test(value) == false) {
                callback(new Error("请输入正确的手机号"));
            } else {
                callback();
            }
        }, trigger: 'onBlur'
    }
];
const EmailRule = [
    {
        required: true,
        message: '请输入邮箱地址',
        trigger: 'onBlur'
    },
    {
        type: 'email',//要检验的类型（number，email，date等）
        message: '请输入正确的邮箱地址',
        trigger: 'onBlur'
    }
];
const DateRule = [
    {
        required: true,
        message: '请输入日期',
        trigger: 'onBlur'
    },
    {
        type: 'date',
        message: '请输入正确的日期地址',
        trigger: 'onBlur'
    }
];
export default {
    NotEmpty, NumberRule, TelRule, EmailRule, DateRule, TypeEmpty
};
