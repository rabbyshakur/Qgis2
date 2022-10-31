var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_camp_boundary_1 = new ol.format.GeoJSON();
var features_camp_boundary_1 = format_camp_boundary_1.readFeatures(json_camp_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camp_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camp_boundary_1.addFeatures(features_camp_boundary_1);
var lyr_camp_boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_camp_boundary_1, 
                style: style_camp_boundary_1,
                interactive: true,
                title: '<img src="styles/legend/camp_boundary_1.png" /> camp_boundary'
            });
var format_health_facility_2 = new ol.format.GeoJSON();
var features_health_facility_2 = format_health_facility_2.readFeatures(json_health_facility_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_health_facility_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_health_facility_2.addFeatures(features_health_facility_2);
var lyr_health_facility_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_health_facility_2, 
                style: style_health_facility_2,
                interactive: true,
                title: '<img src="styles/legend/health_facility_2.png" /> health_facility'
            });
var format_latrine_bathroom_location_3 = new ol.format.GeoJSON();
var features_latrine_bathroom_location_3 = format_latrine_bathroom_location_3.readFeatures(json_latrine_bathroom_location_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_latrine_bathroom_location_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_latrine_bathroom_location_3.addFeatures(features_latrine_bathroom_location_3);
var lyr_latrine_bathroom_location_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_latrine_bathroom_location_3, 
                style: style_latrine_bathroom_location_3,
                interactive: true,
                title: '<img src="styles/legend/latrine_bathroom_location_3.png" /> latrine_bathroom_location'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_camp_boundary_1.setVisible(true);lyr_health_facility_2.setVisible(true);lyr_latrine_bathroom_location_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_camp_boundary_1,lyr_health_facility_2,lyr_latrine_bathroom_location_3];
lyr_camp_boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Settlement': 'Settlement', 'Union': 'Union', 'Name_Alias': 'Name_Alias', 'SSID': 'SSID', 'SMSD__Cnam': 'SMSD__Cnam', 'NPM_Name': 'NPM_Name', 'Area_Acres': 'Area_Acres', 'PeriMe_Met': 'PeriMe_Met', 'Camp_Name': 'Camp_Name', 'Area_SqM': 'Area_SqM', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_health_facility_2.set('fieldAliases', {'id': 'id', });
lyr_latrine_bathroom_location_3.set('fieldAliases', {'Block': 'Block', 'Name of st': 'Name of st', 'No of latr': 'No of latr', 'No of bath': 'No of bath', 'GPS latitu': 'GPS latitu', 'GPS longit': 'GPS longit', 'Functional': 'Functional', 'Condition': 'Condition', 'ORGANISATI': 'ORGANISATI', 'Facility I': 'Facility I', 'Sector ID': 'Sector ID', 'Male (M)': 'Male (M)', 'Female (F)': 'Female (F)', 'M/F block': 'M/F block', 'Common (M&': 'Common (M&', 'Elderly/ D': 'Elderly/ D', 'Function_1': 'Function_1', 'Super stru': 'Super stru', 'Privacy of': 'Privacy of', 'lockable f': 'lockable f', 'Female / m': 'Female / m', 'Female lat': 'Female lat', 'Cyclone ti': 'Cyclone ti', 'Hand washi': 'Hand washi', 'Function_2': 'Function_2', 'Latrine ac': 'Latrine ac', 'Function_3': 'Function_3', 'Function_4': 'Function_4', 'Visibility': 'Visibility', 'Community': 'Community', 'Action to': 'Action to', 'Remarks': 'Remarks', });
lyr_camp_boundary_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Settlement': 'TextEdit', 'Union': 'TextEdit', 'Name_Alias': 'TextEdit', 'SSID': 'TextEdit', 'SMSD__Cnam': 'TextEdit', 'NPM_Name': 'TextEdit', 'Area_Acres': 'TextEdit', 'PeriMe_Met': 'TextEdit', 'Camp_Name': 'TextEdit', 'Area_SqM': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_health_facility_2.set('fieldImages', {'id': 'TextEdit', });
lyr_latrine_bathroom_location_3.set('fieldImages', {'Block': '', 'Name of st': '', 'No of latr': '', 'No of bath': '', 'GPS latitu': '', 'GPS longit': '', 'Functional': '', 'Condition': '', 'ORGANISATI': '', 'Facility I': '', 'Sector ID': '', 'Male (M)': '', 'Female (F)': '', 'M/F block': '', 'Common (M&': '', 'Elderly/ D': '', 'Function_1': '', 'Super stru': '', 'Privacy of': '', 'lockable f': '', 'Female / m': '', 'Female lat': '', 'Cyclone ti': '', 'Hand washi': '', 'Function_2': '', 'Latrine ac': '', 'Function_3': '', 'Function_4': '', 'Visibility': '', 'Community': '', 'Action to': '', 'Remarks': '', });
lyr_camp_boundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Settlement': 'no label', 'Union': 'no label', 'Name_Alias': 'no label', 'SSID': 'no label', 'SMSD__Cnam': 'no label', 'NPM_Name': 'no label', 'Area_Acres': 'no label', 'PeriMe_Met': 'no label', 'Camp_Name': 'no label', 'Area_SqM': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_health_facility_2.set('fieldLabels', {'id': 'no label', });
lyr_latrine_bathroom_location_3.set('fieldLabels', {'Block': 'no label', 'Name of st': 'no label', 'No of latr': 'no label', 'No of bath': 'no label', 'GPS latitu': 'no label', 'GPS longit': 'no label', 'Functional': 'no label', 'Condition': 'no label', 'ORGANISATI': 'no label', 'Facility I': 'no label', 'Sector ID': 'no label', 'Male (M)': 'no label', 'Female (F)': 'no label', 'M/F block': 'no label', 'Common (M&': 'no label', 'Elderly/ D': 'no label', 'Function_1': 'no label', 'Super stru': 'no label', 'Privacy of': 'no label', 'lockable f': 'no label', 'Female / m': 'no label', 'Female lat': 'no label', 'Cyclone ti': 'no label', 'Hand washi': 'no label', 'Function_2': 'no label', 'Latrine ac': 'no label', 'Function_3': 'no label', 'Function_4': 'no label', 'Visibility': 'no label', 'Community': 'no label', 'Action to': 'no label', 'Remarks': 'no label', });
lyr_latrine_bathroom_location_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});