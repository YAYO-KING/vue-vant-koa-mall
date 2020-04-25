import moment from 'moment';

const install = function (Vue, options) {

    Vue.prototype.gSexFormat = (sex) => {
        if (sex === 'MALE') {
            return "男";
        } else if (sex === 'FEMALE') {
            return "女";
        } else {
            return "";
        }
    };

    Vue.prototype.gRowSexFormat = (row, column) => {
        let sex = row[column.property];
        if (sex === 1) {
            return "男";
        } else if (sex === 0) {
            return "女";
        } else {
            return "未知";
        }
    };

    //备注格式处理
    Vue.prototype.gRemarkFormat = (row, column) => {
        let content = row[column.property];
        return content.replace(/\n/g, '<br/>');
    };

    //大坑  之前命名过timeFormat，和elementUI中的方法重名，导致datetime的时间组价你无法使用
    Vue.prototype.gTimeFormat = (date) => {
        if ((!date && typeof (date) != "undefined" && date != 0) || date == '') {
            return '';
        } else {
            return moment(date).format("YYYY-MM-DD HH:mm:ss");
        }
    };

    Vue.prototype.gDateFormat = (date) => {
        if ((!date && typeof (date) != "undefined" && date != 0) || date == '') {
            return '';
        } else {
            return moment(date).format("YYYY-MM-DD");
        }
    };

    Vue.prototype.gHourFormat = (date) => {
        if ((!date && typeof (date) != "undefined" && date != 0) || date == '') {
            return '';
        } else {
            return moment(date).format("HH:mm:ss");
        }
    };


    Vue.prototype.gRoleFormat = (roleArr) => {
        if (roleArr) {
            return roleArr.map(role => {
                return role.roleName
            }).join(',');
        } else {
            return ''
        }
    };

    Vue.prototype.validateRules = (formName, _this) => {
        return _this.$refs[formName].validate().then(() => {
            return true;
        }).catch(() => {
            _this.$notify({
                message: '输入有误',
                type: 'danger'
            });
            return false;
        });
    };
};

export default install;
