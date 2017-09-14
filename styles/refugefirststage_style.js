var size = 0;
function categories_refugefirststage(feature, value) {
                switch(value) {case "全災害":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(113,55,229,1.0)'})})
    })];
                    break;
case "全災害時":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,114,57,1.0)'})})
    })];
                    break;
case "全災害時（土砂災害危険区域内）":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(20,212,87,1.0)'})})
    })];
                    break;
case "風水害時":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(162,230,35,1.0)'})})
    })];
                    break;
case "風水害時（土砂災害危険区域内）":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,114,190,1.0)'})})
    })];
                    break;}};
var styleCache_refugefirststage={}
var style_refugefirststage = function(feature, resolution){
    var value = feature.get("SAFIELD003");
    var style = categories_refugefirststage(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_refugefirststage[key]){
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
        styleCache_refugefirststage[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_refugefirststage[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};