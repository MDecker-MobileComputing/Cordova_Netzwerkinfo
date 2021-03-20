/*jshint esversion: 6 */

/* This file is licensed under the terms of the BSD 3-Clause License. */


/*
 * Event-Handler für Button zum Abfragen von Netzwerk-Status.
 */
function netzwerkStatusAbfragen() {
    
    if (navigator.connection === undefined) {
        $("#ergebnis").text("FEHLER: Connection-Objekt nicht vorhanden.");
        return;
    }
    
    const verbindungsTyp = navigator.connection.type;
    $("#ergebnis").text(`Verbindungs-Status: ${verbindungsTyp}`);
}


/* 
 * Event-Handler-Funktion für Cordova-spezifisches Event
 * "deviceready".
 */
function onDeviceReadyHandler() {

    console.log("Cordova ist jetzt bereit.");

    $("#buttonNetzwerkStatus").click( netzwerkStatusAbfragen );
}


// Event-Handler-Funktion für "deviceready" registrieren
$(document).on("deviceready", onDeviceReadyHandler);

