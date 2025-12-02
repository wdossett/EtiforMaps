var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_STBKconcessions_2 = new ol.format.GeoJSON();
var features_STBKconcessions_2 = format_STBKconcessions_2.readFeatures(json_STBKconcessions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STBKconcessions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STBKconcessions_2.addFeatures(features_STBKconcessions_2);
var lyr_STBKconcessions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STBKconcessions_2, 
                style: style_STBKconcessions_2,
                popuplayertitle: 'STBK concessions',
                interactive: true,
                title: '<img src="styles/legend/STBKconcessions_2.png" /> STBK concessions'
            });
var format_STBK_TCL_3 = new ol.format.GeoJSON();
var features_STBK_TCL_3 = format_STBK_TCL_3.readFeatures(json_STBK_TCL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STBK_TCL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STBK_TCL_3.addFeatures(features_STBK_TCL_3);
var lyr_STBK_TCL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STBK_TCL_3, 
                style: style_STBK_TCL_3,
                popuplayertitle: 'STBK_TCL',
                interactive: false,
                title: '<img src="styles/legend/STBK_TCL_3.png" /> STBK_TCL'
            });
var format_ActiveAACs2025_4 = new ol.format.GeoJSON();
var features_ActiveAACs2025_4 = format_ActiveAACs2025_4.readFeatures(json_ActiveAACs2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActiveAACs2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActiveAACs2025_4.addFeatures(features_ActiveAACs2025_4);
var lyr_ActiveAACs2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActiveAACs2025_4, 
                style: style_ActiveAACs2025_4,
                popuplayertitle: 'Active AACs 2025',
                interactive: true,
                title: '<img src="styles/legend/ActiveAACs2025_4.png" /> Active AACs 2025'
            });
var group_Other = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Other'});
var group_STBK = new ol.layer.Group({
                                layers: [lyr_STBKconcessions_2,lyr_STBK_TCL_3,lyr_ActiveAACs2025_4,],
                                fold: 'open',
                                title: 'STBK'});

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(true);lyr_STBKconcessions_2.setVisible(true);lyr_STBK_TCL_3.setVisible(true);lyr_ActiveAACs2025_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleHybrid_1,group_STBK];
lyr_STBKconcessions_2.set('fieldAliases', {'desc_type': 'desc_type', 'nom_foret': 'nom_foret', 'layer': 'layer', 'Forest _Op': 'Forest _Op', 'Active_AAC': 'Active_AAC', 'Area (ha)': 'Area (ha)', 'TCL_area (ha)': 'TCL_area (ha)', 'TCL%': 'TCL%', });
lyr_STBK_TCL_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_ActiveAACs2025_4.set('fieldAliases', {'UFA': 'UFA', 'AAC': 'AAC', 'Area (ha)': 'Area (ha)', 'TCL (ha)': 'TCL (ha)', 'TCL%': 'TCL%', });
lyr_STBKconcessions_2.set('fieldImages', {'desc_type': 'TextEdit', 'nom_foret': 'TextEdit', 'layer': 'TextEdit', 'Forest _Op': 'TextEdit', 'Active_AAC': 'TextEdit', 'Area (ha)': 'TextEdit', 'TCL_area (ha)': 'TextEdit', 'TCL%': 'TextEdit', });
lyr_STBK_TCL_3.set('fieldImages', {'fid': 'Range', 'DN': 'Range', });
lyr_ActiveAACs2025_4.set('fieldImages', {'UFA': 'TextEdit', 'AAC': 'TextEdit', 'Area (ha)': 'TextEdit', 'TCL (ha)': 'TextEdit', 'TCL%': 'TextEdit', });
lyr_STBKconcessions_2.set('fieldLabels', {'desc_type': 'hidden field', 'nom_foret': 'inline label - always visible', 'layer': 'hidden field', 'Forest _Op': 'inline label - always visible', 'Active_AAC': 'hidden field', 'Area (ha)': 'inline label - always visible', 'TCL_area (ha)': 'inline label - always visible', 'TCL%': 'inline label - always visible', });
lyr_STBK_TCL_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_ActiveAACs2025_4.set('fieldLabels', {'UFA': 'hidden field', 'AAC': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'TCL (ha)': 'inline label - always visible', 'TCL%': 'inline label - always visible', });
lyr_ActiveAACs2025_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});