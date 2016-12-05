function _vrbo_widgetInit() {
    "use strict";
    if (document.getElementById("_vrbo_cal_widget_" + _vrbo_listing_id).getElementsByTagName("iframe").length > 0) {
        document.getElementById("_vrbo_cal_widget_" + _vrbo_listing_id).getElementsByTagName("iframe")[0].parentNode.removeChild(document.getElementById("_vrbo_cal_widget_" + _vrbo_listing_id).getElementsByTagName("iframe")[0]);
    }
    var a, c;
    var e = document.getElementById("_vrbo_cal_widget_" + _vrbo_listing_id);
    e.style.position = "relative";
    e.style.marginLeft = "auto";
    e.style.marginRight = "auto";
    var b = document.getElementById("_vrbo_cal_link_" + _vrbo_listing_id);
    b.style.position = "absolute";
    b.style.textAlign = "center";
    b.style.fontFamily = "Verdana,Tahoma,sans-serif";
    b.style.fontSize = "10px";
    b.style.borderTop = "1px solid #C2D9EA";
    b.style.padding = "5px 0 0";
    b.style.bottom = "16px";
    b.style.left = "20px";
    b.style.width = "283px";
    if (_vrbo_orientation == "horizontal") {
        if (_vrbo_months == 1) {
            b.style.left = "11px";
            b.style.width = "150px";
            e.style.width = "172px";
        } else {
            b.style.left = "16px";
            e.style.width = "314px";
        }
        a = (_vrbo_months > 1) ? "219" : "265";
        c = (_vrbo_months > 1) ? "314" : "172";
    } else {
        b.style.left = "11px";
        b.style.width = "150px";
        e.style.width = "172px";
        a = "265";
        if (_vrbo_months == 2) {
            a = "405";
        } else {
            if (_vrbo_months == 3) {
                a = "548";
            }
        }
        c = "172";
    }
    var d = document.createElement("iframe");
    d.src = _vrbo_base_url + "/haow/widgets/vrbominicalendar.html?id=" + _vrbo_listing_id + "&months=" + _vrbo_months + "&orientation=" + _vrbo_orientation + "&bgcolor=" + _vrbo_bg_color;
    if (typeof (_vrbo_widget) != "undefined") {
        d.src = d.src + "&widget=true";
    }
    d.height = a;
    d.width = c;
    d.frameBorder = 0;
    d.scrolling = "no";
    document.getElementById("_vrbo_cal_widget_" + _vrbo_listing_id).appendChild(d);
}
_vrbo_widgetInit();