var stateObject = {
    "Hà Nội": {
        "Thanh Xuân": ["Khuất Duy Tiến", "Nguyễn Xiển"],
        "Hai Bà Trưng": ["Vĩnh Tuy", "Minh Khai"],
        "Đống Đa": ["Đông Các", "Xã Đàn"],
    },
    "Quảng Ninh": {
        "Hạ Long": ["Yết Kiêu", "Cao Xanh"],
        "Cảm phả": ["Bái Tử Long", "Cột 8"]
    },
    "Hà Nam": {
        "Phủ lý": ["Đường 3", "Phú Xuyên"],
        "Hùng Thắng": ["Ba Lan", ""]
    },
}
window.onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}