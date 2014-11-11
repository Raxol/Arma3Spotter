/**
 * Created by dajo on 10.11.2014.
 */

(function() {
  "use strict";

  angular
    .module("arma3SpotterApp")
    .config(Config);


  Config.$inject = ["$translateProvider"];

  function Config($translateProvider) {
    $translateProvider
      .translations("en", {
      SETTINGS: "Settings",
      SETTINGS_MOD: "Mod",
      SETTING_WEAPON: "Weapon",
      SETTINGS_AMMO: "Ammo",
      SETTINGS_SAVE: "Save",
      SPOTTER: "Spotter",
      SPOTTER_DISTANCE: "Distance",
      SPOTTER_ANGLE: "Angle",
      SPOTTER_HEADWIND: "Headwind",
      SPOTTER_CROSSWIND: "Crosswind",
      SPOTTER_TEMPERATURE: "Temperature",
      SPOTTER_CALCULATE: "Calculate",
      SPOTTER_HORIZONTAL: "Horizontal",
      SPOTTER_VERTICAL: "Vertical"
    })
      .translations("de", {
      SETTINGS: "Einstellungen",
      SETTINGS_MOD: "Mod",
      SETTING_WEAPON: "Waffe",
      SETTINGS_AMMO: "Munition",
      SETTINGS_SAVE: "Speichern",
      SPOTTER: "Spotter",
      SPOTTER_DISTANCE: "Entfernung",
      SPOTTER_ANGLE: "Winkel",
      SPOTTER_HEADWIND: "Gegenwind",
      SPOTTER_CROSSWIND: "Seitenwind",
      SPOTTER_TEMPERATURE: "Temperatur",
      SPOTTER_CALCULATE: "Berechnen",
      SPOTTER_HORIZONTAL: "Horizontal",
      SPOTTER_VERTICAL: "Vertikal"
    })
      .registerAvailableLanguageKeys(['en', 'de'], {
        'en_US': 'en',
        'en_UK': 'en',
        'en_GB': 'en',
        'de_DE': 'de',
        'de_AT': 'de',
        'de_CH': 'de'
      })
      .determinePreferredLanguage()
      .fallbackLanguage('en');
  }

})();