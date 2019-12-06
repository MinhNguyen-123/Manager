
$('#birth').datetimepicker({
    format: 'MM/DD/YYYY'
});

$('#state').select2({
    theme: "bootstrap"
});

/* validate */

// validation when select change
$("#state").change(function () {
    $(this).valid();
})

// validation when inputfile change
$("#uploadImg").on("change", function () {
    $(this).parent('form').validate();
})

$("#exampleValidation").validate({
    validClass: "success",
    rules: {
        gender: {
            required: true
        },
        confirmpassword: {
            equalTo: "#password"
        },
        birth: {
            date: true
        },
        uploadImg: {
            required: true,
        },
    },
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
    },
});


// form kiểm tra mật khẩu validate
$("#formPassWordPros").validate({
    validClass: "success",
    rules: {
        passwordOld: {
            required: true
        },
        password: {
            required: true
        },
        confirmpassword: {
            date: true
        },
    },
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
    },
});


// input chọn giờ
$('#checkin').datetimepicker({
    format: 'h:mm A',
});

$('#checkout').datetimepicker({
    format: 'h:mm A',
});


// Dbclick delete
var SweetAlert2Demo = function () {
    //== Demos
    var initDemos = function () {
        $('#alert_demo_8').dblclick(function (e) {
            swal({
                title: 'Bạn có chắc không?',
                type: 'warning',
                buttons: {
                    cancel: {
                        visible: true,
                        text: 'HỦY BỎ',
                        className: 'btn btn-danger'
                    },
                    confirm: {
                        text: 'ĐỒNG Ý , XÓA',
                        className: 'btn btn-success'
                    }
                }
            }).then((willDelete) => {
                if (willDelete) {
                    swal("Xóa thông tin thành công", {
                        icon: "success",
                        buttons: {
                            confirm: {
                                className: 'btn btn-success'
                            }
                        }
                    });
                } else {
                    swal("Bạn đã hủy tác vụ xóa", {
                        buttons: {
                            confirm: {
                                className: 'btn btn-success'
                            }
                        }
                    });
                }
            });
        })

    };

    return {
        //== Init
        init: function () {
            initDemos();
        },
    };
}();

//== Class Initialization
jQuery(document).ready(function () {
    SweetAlert2Demo.init();
});


  
// Click delete
  //== Class definition
  var SweetAlert2Demo = function () {
    //== Demos
    var initDemos = function () {
        $('#delete').click(function (e) {
            swal({
                title: 'Bạn có chắc không?',
                type: 'warning',
                buttons: {
                    cancel: {
                        visible: true,
                        text: 'HỦY BỎ',
                        className: 'btn btn-danger'
                    },
                    confirm: {
                        text: 'ĐỒNG Ý , XÓA',
                        className: 'btn btn-success'
                    }
                }
            }).then((willDelete) => {
                if (willDelete) {
                    swal("Xóa thông tin thành công", {
                        icon: "success",
                        buttons: {
                            confirm: {
                                className: 'btn btn-success'
                            }
                        }
                    });
                } else {
                    swal("Bạn đã hủy tác vụ xóa", {
                        buttons: {
                            confirm: {
                                className: 'btn btn-success'
                            }
                        }
                    });
                }
            });
        })

    };

    return {
        //== Init
        init: function () {
            initDemos();
        },
    };
}();

//== Class Initialization
jQuery(document).ready(function () {
    SweetAlert2Demo.init();
});  
