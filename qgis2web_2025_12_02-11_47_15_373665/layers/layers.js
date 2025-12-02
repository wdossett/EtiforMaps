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
var format_ALPIUFA_2 = new ol.format.GeoJSON();
var features_ALPIUFA_2 = format_ALPIUFA_2.readFeatures(json_ALPIUFA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALPIUFA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALPIUFA_2.addFeatures(features_ALPIUFA_2);
var lyr_ALPIUFA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALPIUFA_2, 
                style: style_ALPIUFA_2,
                popuplayertitle: 'ALPI UFA',
                interactive: true,
    title: 'ALPI UFA<br />\
    <img src="styles/legend/ALPIUFA_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/ALPIUFA_2_1.png" /> 0 - 10<br />\
    <img src="styles/legend/ALPIUFA_2_2.png" /> 10 - 15<br />\
    <img src="styles/legend/ALPIUFA_2_3.png" /> 15 - 20<br />\
    <img src="styles/legend/ALPIUFA_2_4.png" /> 20 - 25<br />\
    <img src="styles/legend/ALPIUFA_2_5.png" /> 25 - 30<br />\
    <img src="styles/legend/ALPIUFA_2_6.png" /> 30 - 35<br />\
    <img src="styles/legend/ALPIUFA_2_7.png" /> 35 - 40<br />\
    <img src="styles/legend/ALPIUFA_2_8.png" /> 40 - 40.85<br />' });
var format_UFALabels_3 = new ol.format.GeoJSON();
var features_UFALabels_3 = format_UFALabels_3.readFeatures(json_UFALabels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UFALabels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UFALabels_3.addFeatures(features_UFALabels_3);
var lyr_UFALabels_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UFALabels_3, 
                style: style_UFALabels_3,
                popuplayertitle: 'UFA Labels',
                interactive: false,
                title: '<img src="styles/legend/UFALabels_3.png" /> UFA Labels'
            });
var format_ALPI_forestcoverloss2124_4 = new ol.format.GeoJSON();
var features_ALPI_forestcoverloss2124_4 = format_ALPI_forestcoverloss2124_4.readFeatures(json_ALPI_forestcoverloss2124_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALPI_forestcoverloss2124_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALPI_forestcoverloss2124_4.addFeatures(features_ALPI_forestcoverloss2124_4);
var lyr_ALPI_forestcoverloss2124_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALPI_forestcoverloss2124_4, 
                style: style_ALPI_forestcoverloss2124_4,
                popuplayertitle: 'ALPI_forest cover loss 21-24',
                interactive: false,
                title: '<img src="styles/legend/ALPI_forestcoverloss2124_4.png" /> ALPI_forest cover loss 21-24'
            });
var format_ActiveAACsin2025_5 = new ol.format.GeoJSON();
var features_ActiveAACsin2025_5 = format_ActiveAACsin2025_5.readFeatures(json_ActiveAACsin2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActiveAACsin2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActiveAACsin2025_5.addFeatures(features_ActiveAACsin2025_5);
var lyr_ActiveAACsin2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActiveAACsin2025_5, 
                style: style_ActiveAACsin2025_5,
                popuplayertitle: 'Active AACs in 2025',
                interactive: true,
                title: '<img src="styles/legend/ActiveAACsin2025_5.png" /> Active AACs in 2025'
            });
var group_ALPI = new ol.layer.Group({
                                layers: [lyr_ALPIUFA_2,lyr_UFALabels_3,lyr_ALPI_forestcoverloss2124_4,lyr_ActiveAACsin2025_5,],
                                fold: 'open',
                                title: 'ALPI'});
var group_AACs = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AACs'});
var group_Limites = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Limites'});
var group_Decoupages = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Decoupages'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_ALPIUFA_2.setVisible(true);lyr_UFALabels_3.setVisible(true);lyr_ALPI_forestcoverloss2124_4.setVisible(true);lyr_ActiveAACsin2025_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleHybrid_1,group_ALPI];
lyr_ALPIUFA_2.set('fieldAliases', {'Id': 'Id', 'AAC': 'AAC', 'Ann�e_d\'': 'Ann�e_d\'', 'Superf': 'Superf', 'Bloc_quin': 'Bloc_quin', 'Location Name': 'Location Name', 'UFA': 'UFA', 'join': 'join', 'Tree Cover loss (ha)': 'Tree Cover loss (ha)', });
lyr_UFALabels_3.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'ACRES': 'ACRES', 'TOPONYME': 'TOPONYME', 'name': 'name', 'OBJECTID': 'OBJECTID', 'INDICATIF': 'INDICATIF', 'AFF_CODE': 'AFF_CODE', 'FOR_CLASSI': 'FOR_CLASSI', 'ARRETE_NO': 'ARRETE_NO', 'ARRETE_TYP': 'ARRETE_TYP', 'ARRETE_DAT': 'ARRETE_DAT', 'SURFACE_HA': 'SURFACE_HA', 'ATBT': 'ATBT', 'CLASSE': 'CLASSE', 'ATTRIBUT': 'ATTRIBUT', 'AAC': 'AAC', 'UFE': 'UFE', 'type_': 'type_', 'desc_type': 'desc_type', 'nom_foret': 'nom_foret', 'nom_conces': 'nom_conces', 'rfa_ha': 'rfa_ha', 'date_class': 'date_class', 'statu_clas': 'statu_clas', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'created_da': 'created_da', 'created_us': 'created_us', 'globalid': 'globalid', 'sup_adm_ha': 'sup_adm_ha', 'sup_sig_ha': 'sup_sig_ha', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'exploitant': 'exploitant', 'Superficie': 'Superficie', 'title': 'title', 'layer': 'layer', 'path': 'path', });
lyr_ALPI_forestcoverloss2124_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'path': 'path', });
lyr_ActiveAACsin2025_5.set('fieldAliases', {'AAC': 'AAC', 'UFA': 'UFA', 'Area (ha)': 'Area (ha)', 'TCL 21-24': 'TCL 21-24', });
lyr_ALPIUFA_2.set('fieldImages', {'Id': 'Range', 'AAC': 'TextEdit', 'Ann�e_d\'': 'Range', 'Superf': 'TextEdit', 'Bloc_quin': 'TextEdit', 'Location Name': 'TextEdit', 'UFA': 'TextEdit', 'join': 'TextEdit', 'Tree Cover loss (ha)': 'TextEdit', });
lyr_UFALabels_3.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'ACRES': 'TextEdit', 'TOPONYME': 'TextEdit', 'name': 'TextEdit', 'OBJECTID': 'TextEdit', 'INDICATIF': 'TextEdit', 'AFF_CODE': 'TextEdit', 'FOR_CLASSI': 'TextEdit', 'ARRETE_NO': 'TextEdit', 'ARRETE_TYP': 'TextEdit', 'ARRETE_DAT': 'DateTime', 'SURFACE_HA': 'TextEdit', 'ATBT': 'TextEdit', 'CLASSE': 'TextEdit', 'ATTRIBUT': 'TextEdit', 'AAC': 'TextEdit', 'UFE': 'TextEdit', 'type_': 'TextEdit', 'desc_type': 'TextEdit', 'nom_foret': 'TextEdit', 'nom_conces': 'TextEdit', 'rfa_ha': 'TextEdit', 'date_class': 'TextEdit', 'statu_clas': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'created_da': 'TextEdit', 'created_us': 'TextEdit', 'globalid': 'TextEdit', 'sup_adm_ha': 'TextEdit', 'sup_sig_ha': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'exploitant': 'TextEdit', 'Superficie': 'TextEdit', 'title': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ALPI_forestcoverloss2124_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ActiveAACsin2025_5.set('fieldImages', {'AAC': 'TextEdit', 'UFA': 'TextEdit', 'Area (ha)': 'TextEdit', 'TCL 21-24': 'TextEdit', });
lyr_ALPIUFA_2.set('fieldLabels', {'Id': 'hidden field', 'AAC': 'inline label - always visible', 'Ann�e_d\'': 'hidden field', 'Superf': 'hidden field', 'Bloc_quin': 'hidden field', 'Location Name': 'hidden field', 'UFA': 'hidden field', 'join': 'hidden field', 'Tree Cover loss (ha)': 'inline label - always visible', });
lyr_UFALabels_3.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'ACRES': 'no label', 'TOPONYME': 'no label', 'name': 'no label', 'OBJECTID': 'no label', 'INDICATIF': 'no label', 'AFF_CODE': 'no label', 'FOR_CLASSI': 'no label', 'ARRETE_NO': 'no label', 'ARRETE_TYP': 'no label', 'ARRETE_DAT': 'no label', 'SURFACE_HA': 'no label', 'ATBT': 'no label', 'CLASSE': 'no label', 'ATTRIBUT': 'no label', 'AAC': 'no label', 'UFE': 'no label', 'type_': 'no label', 'desc_type': 'no label', 'nom_foret': 'no label', 'nom_conces': 'no label', 'rfa_ha': 'no label', 'date_class': 'no label', 'statu_clas': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'created_da': 'no label', 'created_us': 'no label', 'globalid': 'no label', 'sup_adm_ha': 'no label', 'sup_sig_ha': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', 'exploitant': 'no label', 'Superficie': 'no label', 'title': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ALPI_forestcoverloss2124_4.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'layer': 'hidden field', 'path': 'no label', });
lyr_ActiveAACsin2025_5.set('fieldLabels', {'AAC': 'inline label - always visible', 'UFA': 'hidden field', 'Area (ha)': 'inline label - always visible', 'TCL 21-24': 'inline label - always visible', });
lyr_ActiveAACsin2025_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});