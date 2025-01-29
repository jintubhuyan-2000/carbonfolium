var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_3 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_4 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WorldImagery_5 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldTerrain_6 = new ol.layer.Tile({
            'title': 'World Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldStreetMap_7 = new ol.layer.Tile({
            'title': 'World Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_NationalGeographic_8 = new ol.layer.Tile({
            'title': 'National Geographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldBoundariesandPlaces_9 = new ol.layer.Tile({
            'title': 'World Boundaries and Places',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_DarkGray_10 = new ol.layer.Tile({
            'title': 'Dark Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_LightGray_11 = new ol.layer.Tile({
            'title': 'Light Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldOcean_12 = new ol.layer.Tile({
            'title': 'World Ocean',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldTransportation_13 = new ol.layer.Tile({
            'title': 'World Transportation',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldTopoMap_14 = new ol.layer.Tile({
            'title': 'World Topo Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_EastSingbhum_B8_contrast_15 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_B8_contrast',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_B8_contrast_15.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_B8_corr_16 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_B8_corr',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_B8_corr_16.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_B8_diss_17 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_B8_diss',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_B8_diss_17.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_B8_var_18 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_B8_var',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_B8_var_18.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_B8_19 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_B8',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_B8_19.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_B4_20 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_B4',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_B4_20.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_B3_21 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_B3',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_B3_21.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_B2_22 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_B2',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_B2_22.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_NDWI_23 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_NDWI',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_NDWI_23.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_EastSingbhum_NDVI_24 = new ol.layer.Image({
                            opacity: 1,
                            title: 'EastSingbhum_NDVI',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/EastSingbhum_NDVI_24.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var lyr_predicted_25 = new ol.layer.Image({
                            opacity: 1,
                            title: 'predicted',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/predicted_25.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9579464.729640, 2536350.042308, 9675887.944234, 2634054.885421]
                            })
                        });
var format_EastSingbhumVillage_26 = new ol.format.GeoJSON();
var features_EastSingbhumVillage_26 = format_EastSingbhumVillage_26.readFeatures(json_EastSingbhumVillage_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EastSingbhumVillage_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EastSingbhumVillage_26.addFeatures(features_EastSingbhumVillage_26);
var lyr_EastSingbhumVillage_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EastSingbhumVillage_26, 
                style: style_EastSingbhumVillage_26,
                popuplayertitle: 'EastSingbhumVillage',
                interactive: true,
                title: '<img src="styles/legend/EastSingbhumVillage_26.png" /> EastSingbhumVillage'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_GoogleTerrain_3.setVisible(true);lyr_GoogleTerrainHybrid_4.setVisible(true);lyr_WorldImagery_5.setVisible(true);lyr_WorldTerrain_6.setVisible(true);lyr_WorldStreetMap_7.setVisible(true);lyr_NationalGeographic_8.setVisible(true);lyr_WorldBoundariesandPlaces_9.setVisible(true);lyr_DarkGray_10.setVisible(true);lyr_LightGray_11.setVisible(true);lyr_WorldOcean_12.setVisible(true);lyr_WorldTransportation_13.setVisible(true);lyr_WorldTopoMap_14.setVisible(true);lyr_EastSingbhum_B8_contrast_15.setVisible(true);lyr_EastSingbhum_B8_corr_16.setVisible(true);lyr_EastSingbhum_B8_diss_17.setVisible(true);lyr_EastSingbhum_B8_var_18.setVisible(true);lyr_EastSingbhum_B8_19.setVisible(true);lyr_EastSingbhum_B4_20.setVisible(true);lyr_EastSingbhum_B3_21.setVisible(true);lyr_EastSingbhum_B2_22.setVisible(true);lyr_EastSingbhum_NDWI_23.setVisible(true);lyr_EastSingbhum_NDVI_24.setVisible(true);lyr_predicted_25.setVisible(true);lyr_EastSingbhumVillage_26.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,lyr_GoogleTerrain_3,lyr_GoogleTerrainHybrid_4,lyr_WorldImagery_5,lyr_WorldTerrain_6,lyr_WorldStreetMap_7,lyr_NationalGeographic_8,lyr_WorldBoundariesandPlaces_9,lyr_DarkGray_10,lyr_LightGray_11,lyr_WorldOcean_12,lyr_WorldTransportation_13,lyr_WorldTopoMap_14,lyr_EastSingbhum_B8_contrast_15,lyr_EastSingbhum_B8_corr_16,lyr_EastSingbhum_B8_diss_17,lyr_EastSingbhum_B8_var_18,lyr_EastSingbhum_B8_19,lyr_EastSingbhum_B4_20,lyr_EastSingbhum_B3_21,lyr_EastSingbhum_B2_22,lyr_EastSingbhum_NDWI_23,lyr_EastSingbhum_NDVI_24,lyr_predicted_25,lyr_EastSingbhumVillage_26];
lyr_EastSingbhumVillage_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SID': 'SID', 'DID': 'DID', 'TID': 'TID', 'VILL_CODE': 'VILL_CODE', 'C_CODE01': 'C_CODE01', 'NAME': 'NAME', 'UID': 'UID', 'CENSUS_COD': 'CENSUS_COD', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'SUB_DIST': 'SUB_DIST', 'TOWN_VILL': 'TOWN_VILL', 'WARD': 'WARD', 'EB': 'EB', 'LEVEL': 'LEVEL', 'NAME_1': 'NAME_1', 'TRU': 'TRU', 'No_HH': 'No_HH', 'TOT_P': 'TOT_P', 'TOT_M': 'TOT_M', 'TOT_F': 'TOT_F', 'P_06': 'P_06', 'M_06': 'M_06', 'F_06': 'F_06', 'P_SC': 'P_SC', 'M_SC': 'M_SC', 'F_SC': 'F_SC', 'P_ST': 'P_ST', 'M_ST': 'M_ST', 'F_ST': 'F_ST', 'P_LIT': 'P_LIT', 'M_LIT': 'M_LIT', 'F_LIT': 'F_LIT', 'P_ILL': 'P_ILL', 'M_ILL': 'M_ILL', 'F_ILL': 'F_ILL', 'TOT_WORK_P': 'TOT_WORK_P', 'TOT_WORK_M': 'TOT_WORK_M', 'TOT_WORK_F': 'TOT_WORK_F', 'MAINWORK_P': 'MAINWORK_P', 'MAINWORK_M': 'MAINWORK_M', 'MAINWORK_F': 'MAINWORK_F', 'MAIN_CL_P': 'MAIN_CL_P', 'MAIN_CL_M': 'MAIN_CL_M', 'MAIN_CL_F': 'MAIN_CL_F', 'MAIN_AL_P': 'MAIN_AL_P', 'MAIN_AL_M': 'MAIN_AL_M', 'MAIN_AL_F': 'MAIN_AL_F', 'MAIN_HH_P': 'MAIN_HH_P', 'MAIN_HH_M': 'MAIN_HH_M', 'MAIN_HH_F': 'MAIN_HH_F', 'MAIN_OT_P': 'MAIN_OT_P', 'MAIN_OT_M': 'MAIN_OT_M', 'MAIN_OT_F': 'MAIN_OT_F', 'MARGWORK_P': 'MARGWORK_P', 'MARGWORK_M': 'MARGWORK_M', 'MARGWORK_F': 'MARGWORK_F', 'MARG_CL_P': 'MARG_CL_P', 'MARG_CL_M': 'MARG_CL_M', 'MARG_CL_F': 'MARG_CL_F', 'MARG_AL_P': 'MARG_AL_P', 'MARG_AL_M': 'MARG_AL_M', 'MARG_AL_F': 'MARG_AL_F', 'MARG_HH_P': 'MARG_HH_P', 'MARG_HH_M': 'MARG_HH_M', 'MARG_HH_F': 'MARG_HH_F', 'MARG_OT_P': 'MARG_OT_P', 'MARG_OT_M': 'MARG_OT_M', 'MARG_OT_F': 'MARG_OT_F', 'NON_WORK_P': 'NON_WORK_P', 'NON_WORK_M': 'NON_WORK_M', 'NON_WORK_F': 'NON_WORK_F', 'ST_CODE': 'ST_CODE', 'DIST_CODE': 'DIST_CODE', 'THSIL_CODE': 'THSIL_CODE', 'BLOCK_CODE': 'BLOCK_CODE', 'V_CT_CODE': 'V_CT_CODE', 'VILL_NAME': 'VILL_NAME', 'AREA': 'AREA', 'T_HH': 'T_HH', 'T_P': 'T_P', 'T_M': 'T_M', 'T_F': 'T_F', 'SC_P': 'SC_P', 'SC_M': 'SC_M', 'SC_F': 'SC_F', 'ST_P': 'ST_P', 'ST_M': 'ST_M', 'ST_F': 'ST_F', 'EDU_FAC': 'EDU_FAC', 'P_SCH': 'P_SCH', 'RANG_P_SCH': 'RANG_P_SCH', 'M_SCH': 'M_SCH', 'RANG_M_SCH': 'RANG_M_SCH', 'S_SCH': 'S_SCH', 'S_S_SCH': 'S_S_SCH', 'COLLEGE': 'COLLEGE', 'RANG_COLL': 'RANG_COLL', 'IND_SCH': 'IND_SCH', 'TR_SCH': 'TR_SCH', 'ADLT_LT_CT': 'ADLT_LT_CT', 'OTH_SCH': 'OTH_SCH', 'MEDI_FAC': 'MEDI_FAC', 'ALL_HOSP': 'ALL_HOSP', 'RANG_ALL': 'RANG_ALL', 'AYU_HOSP': 'AYU_HOSP', 'UN_HOSP': 'UN_HOSP', 'HOM_HOSP': 'HOM_HOSP', 'ALL_DISP': 'ALL_DISP', 'AYU_DISP': 'AYU_DISP', 'UN_DISP': 'UN_DISP', 'HOM_DISP': 'HOM_DISP', 'MCW_CNTR': 'MCW_CNTR', 'RANG_MCW': 'RANG_MCW', 'M_HOME': 'M_HOME', 'CWC': 'CWC', 'H_CNTR': 'H_CNTR', 'PH_CNTR': 'PH_CNTR', 'RANG_PHC': 'RANG_PHC', 'PHS_CNT': 'PHS_CNT', 'FWC_CNTR': 'FWC_CNTR', 'TB_CLN': 'TB_CLN', 'N_HOME': 'N_HOME', 'RMP': 'RMP', 'SMP': 'SMP', 'CHW': 'CHW', 'OTH_CNTR': 'OTH_CNTR', 'DRNK_WAT_F': 'DRNK_WAT_F', 'RANG_WAT_F': 'RANG_WAT_F', 'TAP': 'TAP', 'WELL': 'WELL', 'TANK': 'TANK', 'TUBEWELL': 'TUBEWELL', 'HANDPUMP': 'HANDPUMP', 'RIVER': 'RIVER', 'CANAL': 'CANAL', 'LAKE': 'LAKE', 'SPRING': 'SPRING', 'OTHER': 'OTHER', 'SOU_SUMM': 'SOU_SUMM', 'RANG_SS': 'RANG_SS', 'SS_CODE': 'SS_CODE', 'P_T_FAC': 'P_T_FAC', 'POST_OFF': 'POST_OFF', 'RANG_PO': 'RANG_PO', 'TELE_OFF': 'TELE_OFF', 'POST_TELE': 'POST_TELE', 'PHONE': 'PHONE', 'RANG_PHONE': 'RANG_PHONE', 'COMM_FAC': 'COMM_FAC', 'BS_FAC': 'BS_FAC', 'RANG_BS': 'RANG_BS', 'RS_FAC': 'RS_FAC', 'RANG_RS': 'RANG_RS', 'NW_FAC': 'NW_FAC', 'RANG_NW': 'RANG_NW', 'BANK_FAC': 'BANK_FAC', 'COMM_BANK': 'COMM_BANK', 'RANG_COMM': 'RANG_COMM', 'COOP_BANK': 'COOP_BANK', 'RANG_COOP': 'RANG_COOP', 'CRSOC_FAC': 'CRSOC_FAC', 'AC_SOC': 'AC_SOC', 'RANG_ACS': 'RANG_ACS', 'NAC_SOC': 'NAC_SOC', 'RANG_NAC': 'RANG_NAC', 'OTHER_SOC': 'OTHER_SOC', 'RANG_OTH': 'RANG_OTH', 'RC_FAC': 'RC_FAC', 'C_V_HALL': 'C_V_HALL', 'RANG_CV': 'RANG_CV', 'SP_CL_FAC': 'SP_CL_FAC', 'RANG_SPCL': 'RANG_SPCL', 'ST_AU_FAC': 'ST_AU_FAC', 'RANG_STAU': 'RANG_STAU', 'APP_PR': 'APP_PR', 'APP_MR': 'APP_MR', 'APP_FP': 'APP_FP', 'APP_NAVRIV': 'APP_NAVRIV', 'APP_NAVCAN': 'APP_NAVCAN', 'APP_NW': 'APP_NW', 'NEAR_TOWN': 'NEAR_TOWN', 'DIST_TOWN': 'DIST_TOWN', 'POWER_SUPL': 'POWER_SUPL', 'POWER_DOM': 'POWER_DOM', 'POWER_AGR': 'POWER_AGR', 'POWER_OTH': 'POWER_OTH', 'POWER_ALL': 'POWER_ALL', 'PAP_MAG': 'PAP_MAG', 'NEWS_PAP': 'NEWS_PAP', 'MAGAZINE': 'MAGAZINE', 'A_INCEXP': 'A_INCEXP', 'TOT_INC': 'TOT_INC', 'TOT_EXP': 'TOT_EXP', 'MAN_COMM1': 'MAN_COMM1', 'MAN_COMM2': 'MAN_COMM2', 'MAN_COMM3': 'MAN_COMM3', 'LAND_FORES': 'LAND_FORES', 'CANAL_GOVT': 'CANAL_GOVT', 'CANAL_PVT': 'CANAL_PVT', 'WELL_WO_EL': 'WELL_WO_EL', 'WELL_W_EL': 'WELL_W_EL', 'TW_WO_EL': 'TW_WO_EL', 'TW_W_EL': 'TW_W_EL', 'TANK_IRR': 'TANK_IRR', 'RIVER_IRR': 'RIVER_IRR', 'LAKE_IRR': 'LAKE_IRR', 'W_FALL': 'W_FALL', 'OTH_IRR': 'OTH_IRR', 'TOT_IRR': 'TOT_IRR', 'UN_IRR': 'UN_IRR', 'CULT_WASTE': 'CULT_WASTE', 'AREA_NA_CU': 'AREA_NA_CU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EastSingbhumVillage_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'SID': 'TextEdit', 'DID': 'TextEdit', 'TID': 'TextEdit', 'VILL_CODE': 'TextEdit', 'C_CODE01': 'TextEdit', 'NAME': 'TextEdit', 'UID': 'TextEdit', 'CENSUS_COD': 'TextEdit', 'STATE': 'TextEdit', 'DISTRICT': 'TextEdit', 'SUB_DIST': 'TextEdit', 'TOWN_VILL': 'TextEdit', 'WARD': 'TextEdit', 'EB': 'TextEdit', 'LEVEL': 'TextEdit', 'NAME_1': 'TextEdit', 'TRU': 'TextEdit', 'No_HH': 'TextEdit', 'TOT_P': 'TextEdit', 'TOT_M': 'TextEdit', 'TOT_F': 'TextEdit', 'P_06': 'TextEdit', 'M_06': 'TextEdit', 'F_06': 'TextEdit', 'P_SC': 'TextEdit', 'M_SC': 'TextEdit', 'F_SC': 'TextEdit', 'P_ST': 'TextEdit', 'M_ST': 'TextEdit', 'F_ST': 'TextEdit', 'P_LIT': 'TextEdit', 'M_LIT': 'TextEdit', 'F_LIT': 'TextEdit', 'P_ILL': 'TextEdit', 'M_ILL': 'TextEdit', 'F_ILL': 'TextEdit', 'TOT_WORK_P': 'TextEdit', 'TOT_WORK_M': 'TextEdit', 'TOT_WORK_F': 'TextEdit', 'MAINWORK_P': 'TextEdit', 'MAINWORK_M': 'TextEdit', 'MAINWORK_F': 'TextEdit', 'MAIN_CL_P': 'TextEdit', 'MAIN_CL_M': 'TextEdit', 'MAIN_CL_F': 'TextEdit', 'MAIN_AL_P': 'TextEdit', 'MAIN_AL_M': 'TextEdit', 'MAIN_AL_F': 'TextEdit', 'MAIN_HH_P': 'TextEdit', 'MAIN_HH_M': 'TextEdit', 'MAIN_HH_F': 'TextEdit', 'MAIN_OT_P': 'TextEdit', 'MAIN_OT_M': 'TextEdit', 'MAIN_OT_F': 'TextEdit', 'MARGWORK_P': 'TextEdit', 'MARGWORK_M': 'TextEdit', 'MARGWORK_F': 'TextEdit', 'MARG_CL_P': 'TextEdit', 'MARG_CL_M': 'TextEdit', 'MARG_CL_F': 'TextEdit', 'MARG_AL_P': 'TextEdit', 'MARG_AL_M': 'TextEdit', 'MARG_AL_F': 'TextEdit', 'MARG_HH_P': 'TextEdit', 'MARG_HH_M': 'TextEdit', 'MARG_HH_F': 'TextEdit', 'MARG_OT_P': 'TextEdit', 'MARG_OT_M': 'TextEdit', 'MARG_OT_F': 'TextEdit', 'NON_WORK_P': 'TextEdit', 'NON_WORK_M': 'TextEdit', 'NON_WORK_F': 'TextEdit', 'ST_CODE': 'TextEdit', 'DIST_CODE': 'TextEdit', 'THSIL_CODE': 'TextEdit', 'BLOCK_CODE': 'TextEdit', 'V_CT_CODE': 'TextEdit', 'VILL_NAME': 'TextEdit', 'AREA': 'TextEdit', 'T_HH': 'TextEdit', 'T_P': 'TextEdit', 'T_M': 'TextEdit', 'T_F': 'TextEdit', 'SC_P': 'TextEdit', 'SC_M': 'TextEdit', 'SC_F': 'TextEdit', 'ST_P': 'TextEdit', 'ST_M': 'TextEdit', 'ST_F': 'TextEdit', 'EDU_FAC': 'TextEdit', 'P_SCH': 'TextEdit', 'RANG_P_SCH': 'TextEdit', 'M_SCH': 'TextEdit', 'RANG_M_SCH': 'TextEdit', 'S_SCH': 'TextEdit', 'S_S_SCH': 'TextEdit', 'COLLEGE': 'TextEdit', 'RANG_COLL': 'TextEdit', 'IND_SCH': 'TextEdit', 'TR_SCH': 'TextEdit', 'ADLT_LT_CT': 'TextEdit', 'OTH_SCH': 'TextEdit', 'MEDI_FAC': 'TextEdit', 'ALL_HOSP': 'TextEdit', 'RANG_ALL': 'TextEdit', 'AYU_HOSP': 'TextEdit', 'UN_HOSP': 'TextEdit', 'HOM_HOSP': 'TextEdit', 'ALL_DISP': 'TextEdit', 'AYU_DISP': 'TextEdit', 'UN_DISP': 'TextEdit', 'HOM_DISP': 'TextEdit', 'MCW_CNTR': 'TextEdit', 'RANG_MCW': 'TextEdit', 'M_HOME': 'TextEdit', 'CWC': 'TextEdit', 'H_CNTR': 'TextEdit', 'PH_CNTR': 'TextEdit', 'RANG_PHC': 'TextEdit', 'PHS_CNT': 'TextEdit', 'FWC_CNTR': 'TextEdit', 'TB_CLN': 'TextEdit', 'N_HOME': 'TextEdit', 'RMP': 'TextEdit', 'SMP': 'TextEdit', 'CHW': 'TextEdit', 'OTH_CNTR': 'TextEdit', 'DRNK_WAT_F': 'TextEdit', 'RANG_WAT_F': 'TextEdit', 'TAP': 'TextEdit', 'WELL': 'TextEdit', 'TANK': 'TextEdit', 'TUBEWELL': 'TextEdit', 'HANDPUMP': 'TextEdit', 'RIVER': 'TextEdit', 'CANAL': 'TextEdit', 'LAKE': 'TextEdit', 'SPRING': 'TextEdit', 'OTHER': 'TextEdit', 'SOU_SUMM': 'TextEdit', 'RANG_SS': 'TextEdit', 'SS_CODE': 'TextEdit', 'P_T_FAC': 'TextEdit', 'POST_OFF': 'TextEdit', 'RANG_PO': 'TextEdit', 'TELE_OFF': 'TextEdit', 'POST_TELE': 'TextEdit', 'PHONE': 'TextEdit', 'RANG_PHONE': 'TextEdit', 'COMM_FAC': 'TextEdit', 'BS_FAC': 'TextEdit', 'RANG_BS': 'TextEdit', 'RS_FAC': 'TextEdit', 'RANG_RS': 'TextEdit', 'NW_FAC': 'TextEdit', 'RANG_NW': 'TextEdit', 'BANK_FAC': 'TextEdit', 'COMM_BANK': 'TextEdit', 'RANG_COMM': 'TextEdit', 'COOP_BANK': 'TextEdit', 'RANG_COOP': 'TextEdit', 'CRSOC_FAC': 'TextEdit', 'AC_SOC': 'TextEdit', 'RANG_ACS': 'TextEdit', 'NAC_SOC': 'TextEdit', 'RANG_NAC': 'TextEdit', 'OTHER_SOC': 'TextEdit', 'RANG_OTH': 'TextEdit', 'RC_FAC': 'TextEdit', 'C_V_HALL': 'TextEdit', 'RANG_CV': 'TextEdit', 'SP_CL_FAC': 'TextEdit', 'RANG_SPCL': 'TextEdit', 'ST_AU_FAC': 'TextEdit', 'RANG_STAU': 'TextEdit', 'APP_PR': 'TextEdit', 'APP_MR': 'TextEdit', 'APP_FP': 'TextEdit', 'APP_NAVRIV': 'TextEdit', 'APP_NAVCAN': 'TextEdit', 'APP_NW': 'TextEdit', 'NEAR_TOWN': 'TextEdit', 'DIST_TOWN': 'TextEdit', 'POWER_SUPL': 'TextEdit', 'POWER_DOM': 'TextEdit', 'POWER_AGR': 'TextEdit', 'POWER_OTH': 'TextEdit', 'POWER_ALL': 'TextEdit', 'PAP_MAG': 'TextEdit', 'NEWS_PAP': 'TextEdit', 'MAGAZINE': 'TextEdit', 'A_INCEXP': 'TextEdit', 'TOT_INC': 'TextEdit', 'TOT_EXP': 'TextEdit', 'MAN_COMM1': 'TextEdit', 'MAN_COMM2': 'TextEdit', 'MAN_COMM3': 'TextEdit', 'LAND_FORES': 'TextEdit', 'CANAL_GOVT': 'TextEdit', 'CANAL_PVT': 'TextEdit', 'WELL_WO_EL': 'TextEdit', 'WELL_W_EL': 'TextEdit', 'TW_WO_EL': 'TextEdit', 'TW_W_EL': 'TextEdit', 'TANK_IRR': 'TextEdit', 'RIVER_IRR': 'TextEdit', 'LAKE_IRR': 'TextEdit', 'W_FALL': 'TextEdit', 'OTH_IRR': 'TextEdit', 'TOT_IRR': 'TextEdit', 'UN_IRR': 'TextEdit', 'CULT_WASTE': 'TextEdit', 'AREA_NA_CU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EastSingbhumVillage_26.set('fieldLabels', {'OBJECTID': 'no label', 'SID': 'no label', 'DID': 'no label', 'TID': 'no label', 'VILL_CODE': 'no label', 'C_CODE01': 'no label', 'NAME': 'inline label - visible with data', 'UID': 'no label', 'CENSUS_COD': 'no label', 'STATE': 'no label', 'DISTRICT': 'inline label - visible with data', 'SUB_DIST': 'no label', 'TOWN_VILL': 'no label', 'WARD': 'no label', 'EB': 'no label', 'LEVEL': 'no label', 'NAME_1': 'no label', 'TRU': 'no label', 'No_HH': 'no label', 'TOT_P': 'no label', 'TOT_M': 'no label', 'TOT_F': 'no label', 'P_06': 'no label', 'M_06': 'no label', 'F_06': 'no label', 'P_SC': 'no label', 'M_SC': 'no label', 'F_SC': 'no label', 'P_ST': 'no label', 'M_ST': 'no label', 'F_ST': 'no label', 'P_LIT': 'no label', 'M_LIT': 'no label', 'F_LIT': 'no label', 'P_ILL': 'no label', 'M_ILL': 'no label', 'F_ILL': 'no label', 'TOT_WORK_P': 'no label', 'TOT_WORK_M': 'no label', 'TOT_WORK_F': 'no label', 'MAINWORK_P': 'no label', 'MAINWORK_M': 'no label', 'MAINWORK_F': 'no label', 'MAIN_CL_P': 'no label', 'MAIN_CL_M': 'no label', 'MAIN_CL_F': 'no label', 'MAIN_AL_P': 'no label', 'MAIN_AL_M': 'no label', 'MAIN_AL_F': 'no label', 'MAIN_HH_P': 'no label', 'MAIN_HH_M': 'no label', 'MAIN_HH_F': 'no label', 'MAIN_OT_P': 'no label', 'MAIN_OT_M': 'no label', 'MAIN_OT_F': 'no label', 'MARGWORK_P': 'no label', 'MARGWORK_M': 'no label', 'MARGWORK_F': 'no label', 'MARG_CL_P': 'no label', 'MARG_CL_M': 'no label', 'MARG_CL_F': 'no label', 'MARG_AL_P': 'no label', 'MARG_AL_M': 'no label', 'MARG_AL_F': 'no label', 'MARG_HH_P': 'no label', 'MARG_HH_M': 'no label', 'MARG_HH_F': 'no label', 'MARG_OT_P': 'no label', 'MARG_OT_M': 'no label', 'MARG_OT_F': 'no label', 'NON_WORK_P': 'no label', 'NON_WORK_M': 'no label', 'NON_WORK_F': 'no label', 'ST_CODE': 'no label', 'DIST_CODE': 'no label', 'THSIL_CODE': 'no label', 'BLOCK_CODE': 'no label', 'V_CT_CODE': 'no label', 'VILL_NAME': 'no label', 'AREA': 'no label', 'T_HH': 'no label', 'T_P': 'no label', 'T_M': 'no label', 'T_F': 'no label', 'SC_P': 'no label', 'SC_M': 'no label', 'SC_F': 'no label', 'ST_P': 'no label', 'ST_M': 'no label', 'ST_F': 'no label', 'EDU_FAC': 'no label', 'P_SCH': 'no label', 'RANG_P_SCH': 'no label', 'M_SCH': 'no label', 'RANG_M_SCH': 'no label', 'S_SCH': 'no label', 'S_S_SCH': 'no label', 'COLLEGE': 'no label', 'RANG_COLL': 'no label', 'IND_SCH': 'no label', 'TR_SCH': 'no label', 'ADLT_LT_CT': 'no label', 'OTH_SCH': 'no label', 'MEDI_FAC': 'no label', 'ALL_HOSP': 'no label', 'RANG_ALL': 'no label', 'AYU_HOSP': 'no label', 'UN_HOSP': 'no label', 'HOM_HOSP': 'no label', 'ALL_DISP': 'no label', 'AYU_DISP': 'no label', 'UN_DISP': 'no label', 'HOM_DISP': 'no label', 'MCW_CNTR': 'no label', 'RANG_MCW': 'no label', 'M_HOME': 'no label', 'CWC': 'no label', 'H_CNTR': 'no label', 'PH_CNTR': 'no label', 'RANG_PHC': 'no label', 'PHS_CNT': 'no label', 'FWC_CNTR': 'no label', 'TB_CLN': 'no label', 'N_HOME': 'no label', 'RMP': 'no label', 'SMP': 'no label', 'CHW': 'no label', 'OTH_CNTR': 'no label', 'DRNK_WAT_F': 'no label', 'RANG_WAT_F': 'no label', 'TAP': 'no label', 'WELL': 'no label', 'TANK': 'no label', 'TUBEWELL': 'no label', 'HANDPUMP': 'no label', 'RIVER': 'no label', 'CANAL': 'no label', 'LAKE': 'no label', 'SPRING': 'no label', 'OTHER': 'no label', 'SOU_SUMM': 'no label', 'RANG_SS': 'no label', 'SS_CODE': 'no label', 'P_T_FAC': 'no label', 'POST_OFF': 'no label', 'RANG_PO': 'no label', 'TELE_OFF': 'no label', 'POST_TELE': 'no label', 'PHONE': 'no label', 'RANG_PHONE': 'no label', 'COMM_FAC': 'no label', 'BS_FAC': 'no label', 'RANG_BS': 'no label', 'RS_FAC': 'no label', 'RANG_RS': 'no label', 'NW_FAC': 'no label', 'RANG_NW': 'no label', 'BANK_FAC': 'no label', 'COMM_BANK': 'no label', 'RANG_COMM': 'no label', 'COOP_BANK': 'no label', 'RANG_COOP': 'no label', 'CRSOC_FAC': 'no label', 'AC_SOC': 'no label', 'RANG_ACS': 'no label', 'NAC_SOC': 'no label', 'RANG_NAC': 'no label', 'OTHER_SOC': 'no label', 'RANG_OTH': 'no label', 'RC_FAC': 'no label', 'C_V_HALL': 'no label', 'RANG_CV': 'no label', 'SP_CL_FAC': 'no label', 'RANG_SPCL': 'no label', 'ST_AU_FAC': 'no label', 'RANG_STAU': 'no label', 'APP_PR': 'no label', 'APP_MR': 'no label', 'APP_FP': 'no label', 'APP_NAVRIV': 'no label', 'APP_NAVCAN': 'no label', 'APP_NW': 'no label', 'NEAR_TOWN': 'no label', 'DIST_TOWN': 'no label', 'POWER_SUPL': 'no label', 'POWER_DOM': 'no label', 'POWER_AGR': 'no label', 'POWER_OTH': 'no label', 'POWER_ALL': 'no label', 'PAP_MAG': 'no label', 'NEWS_PAP': 'no label', 'MAGAZINE': 'no label', 'A_INCEXP': 'no label', 'TOT_INC': 'no label', 'TOT_EXP': 'no label', 'MAN_COMM1': 'no label', 'MAN_COMM2': 'no label', 'MAN_COMM3': 'no label', 'LAND_FORES': 'no label', 'CANAL_GOVT': 'no label', 'CANAL_PVT': 'no label', 'WELL_WO_EL': 'no label', 'WELL_W_EL': 'no label', 'TW_WO_EL': 'no label', 'TW_W_EL': 'no label', 'TANK_IRR': 'no label', 'RIVER_IRR': 'no label', 'LAKE_IRR': 'no label', 'W_FALL': 'no label', 'OTH_IRR': 'no label', 'TOT_IRR': 'no label', 'UN_IRR': 'no label', 'CULT_WASTE': 'no label', 'AREA_NA_CU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_EastSingbhumVillage_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});