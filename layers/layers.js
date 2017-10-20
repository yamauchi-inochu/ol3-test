//ベースマップの追加
var attribution = new ol.Attribution({
    html: 'Tiles © <a href="https://maps.gsi.go.jp/development/ichiran.html#std">国土地理院</a>'
  });

var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [

  new ol.layer.Tile({
      'title': 'OSM',
      'type': 'base',
      source: new ol.source.OSM()
  }),
  new ol.layer.Tile({
      'title': 'Stamen Terrain',
      'type': 'base',
      source: new ol.source.Stamen({
          layer: 'terrain'
      })
  }),
  new ol.layer.Tile({
    'title': '地理院地図',
    'type': 'base',
              source: new ol.source.XYZ({
                attributions: [attribution],
                url: 'http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
              })
            })
  ]
});

//レイヤの指定
var format_refugefirststage = new ol.format.GeoJSON();
var features_refugefirststage = format_refugefirststage.readFeatures(geojson_refugefirststage,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_refugefirststage = new ol.source.Vector();
jsonSource_refugefirststage.addFeatures(features_refugefirststage);var lyr_refugefirststage = new ol.layer.Vector({
                source:jsonSource_refugefirststage,
                style: style_refugefirststage,
                title: "一次避難所"
            });

var format_flood_assumed_area = new ol.format.GeoJSON();
var features_flood_assumed_area = format_flood_assumed_area.readFeatures(geojson_flood_assumed_area,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flood_assumed_area = new ol.source.Vector();
jsonSource_flood_assumed_area.addFeatures(features_flood_assumed_area);var lyr_flood_assumed_area = new ol.layer.Vector({
                source:jsonSource_flood_assumed_area,
                style: style_flood_assumed_area,
                title: "想定浸水区域"
            });

lyr_refugefirststage.setVisible(true);lyr_flood_assumed_area.setVisible(true);

//以下の順を入れ替えると描画順が変わる
var layersList = [baseLayer,lyr_flood_assumed_area,lyr_refugefirststage];

lyr_flood_assumed_area.set('fieldAliases', {'SAUID': 'ID', 'SAUPDATE': '更新日', 'SAFIELD000': '区分', 'SAFIELD001': '想定浸水深(m)', });
lyr_refugefirststage.set('fieldAliases', {'SAFIELD003': '種別', 'SAFIELD004': '名称', 'SAFIELD005': '屋外・屋内', 'SAFIELD006': '住所', });

lyr_flood_assumed_area.set('fieldImages', {'SAUID': 'TextEdit', 'SAUPDATE': 'TextEdit', 'SAFIELD000': 'TextEdit', 'SAFIELD001': 'TextEdit', });
lyr_refugefirststage.set('fieldImages', {'SAFIELD003': 'SAFIELD003', 'SAFIELD004': 'TextEdit', 'SAFIELD005': 'TextEdit', 'SAFIELD006': 'TextEdit', });

lyr_flood_assumed_area.set('fieldLabels', {'SAUID': 'inline label', 'SAUPDATE': 'inline label', 'SAFIELD000': 'inline label', 'SAFIELD001': 'inline label', });
lyr_refugefirststage.set('fieldLabels', {'SAFIELD003': 'inline label', 'SAFIELD004': 'inline label', 'SAFIELD005': 'inline label', 'SAFIELD006': 'inline label', 'test': 'inline label', });

lyr_refugefirststage.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
