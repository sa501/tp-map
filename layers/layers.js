var wms_layers = [];

var format_tun_gouvernorats_utm_0 = new ol.format.GeoJSON();
var features_tun_gouvernorats_utm_0 = format_tun_gouvernorats_utm_0.readFeatures(json_tun_gouvernorats_utm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tun_gouvernorats_utm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tun_gouvernorats_utm_0.addFeatures(features_tun_gouvernorats_utm_0);
var lyr_tun_gouvernorats_utm_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tun_gouvernorats_utm_0, 
                style: style_tun_gouvernorats_utm_0,
                interactive: true,
                title: '<img src="styles/legend/tun_gouvernorats_utm_0.png" /> tun_gouvernorats_utm'
            });

lyr_tun_gouvernorats_utm_0.setVisible(true);
var layersList = [lyr_tun_gouvernorats_utm_0];
lyr_tun_gouvernorats_utm_0.set('fieldAliases', {'IDG': 'IDG', 'NOMG': 'NOMG', 'IDPAYS': 'IDPAYS', });
lyr_tun_gouvernorats_utm_0.set('fieldImages', {'IDG': 'TextEdit', 'NOMG': 'TextEdit', 'IDPAYS': 'TextEdit', });
lyr_tun_gouvernorats_utm_0.set('fieldLabels', {'IDG': 'no label', 'NOMG': 'no label', 'IDPAYS': 'no label', });
lyr_tun_gouvernorats_utm_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});