var size = 0;
function categories_flood_assumed_area(feature, value) {
                switch(value) {case "0.0-0.5":
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(161,231,253,0.7)'})
    })];
                    break;
case "0.5-1.0":
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(0,148,246,0.7)'})
    })];
                    break;
case "1.0-2.0":
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(40,65,227,0.7)'})
    })];
                    break;
case "2.0-5.0":
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(10,10,110,0.7)'})
    })];
                    break;}};
var styleCache_flood_assumed_area={}
var style_flood_assumed_area = function(feature, resolution){
    var value = feature.get("SAFIELD001");
    var style = categories_flood_assumed_area(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_flood_assumed_area[key]){
        var text = new ol.style.Text({
              font: '11.7px \'MS UI Gothic\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_flood_assumed_area[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_flood_assumed_area[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};
