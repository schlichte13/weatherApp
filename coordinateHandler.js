var coordinateData;
var longitude;
var latitude;

//gets the raw json from a github page with state capital geolocation data
fetch('https://gist.githubusercontent.com/jpriebe/d62a45e29f24e843c974/raw/b1d3066d245e742018bce56e41788ac7afa60e29/us_state_capitals.json')
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    coordinateData = data;
    printData();
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

function printData(){
    setLongAndLat("NH");
    console.log("log: "+longitude+" | lat: "+latitude);
}

// takes a two letter state string, checks each state, and grabs the appropritate long and lat values from json data (coordinateData) then changes the golbal values.
function setLongAndLat(stateString){
    switch (stateString) {
        case "AL":
            longitude = coordinateData.AL.long;
            latitude = coordinateData.AL.lat;
        break;
        case "AK":
            longitude = coordinateData.AK.long;
            latitude = coordinateData.AK.lat;
        break;
        case "AZ":
            longitude = coordinateData.AZ.long;
            latitude = coordinateData.AZ.lat;
        break;
        case "AR":
            longitude = coordinateData.AR.long;
            latitude = coordinateData.AR.lat;
        break;
        case "CA":
            longitude = coordinateData.CA.long;
            latitude = coordinateData.CA.lat;
        break;
        case "CO":
            longitude = coordinateData.CO.long;
            latitude = coordinateData.CO.lat;
        break;
        case "CT":
            longitude = coordinateData.CT.long;
            latitude = coordinateData.CT.lat;
        break;
        case "DE":
            longitude = coordinateData.DE.long;
            latitude = coordinateData.DE.lat;
        break;
        case "FL":
            longitude = coordinateData.FL.long;
            latitude = coordinateData.FL.lat;
        break;
        case "GA":
            longitude = coordinateData.GA.long;
            latitude = coordinateData.GA.lat;
        break;
        case "HI":
            longitude = coordinateData.HI.long;
            latitude = coordinateData.HI.lat;
        break;
        case "ID":
            longitude = coordinateData.ID.long;
            latitude = coordinateData.ID.lat;
        break;
        case "IL":
            longitude = coordinateData.IL.long;
            latitude = coordinateData.IL.lat;
        break;
        case "IN":
            longitude = coordinateData.IN.long;
            latitude = coordinateData.IN.lat;
        break;
        case "IA":
            longitude = coordinateData.IA.long;
            latitude = coordinateData.IA.lat;
        break;
        case "KS":
            longitude = coordinateData.KS.long;
            latitude = coordinateData.KS.lat;
        break;
        case "KY":
            longitude = coordinateData.KY.long;
            latitude = coordinateData.KY.lat;
        break;
        case "LA":
            longitude = coordinateData.LA.long;
            latitude = coordinateData.LA.lat;
        break;
        case "ME":
            longitude = coordinateData.ME.long;
            latitude = coordinateData.ME.lat;
        break;
        case "MD":
            longitude = coordinateData.MD.long;
            latitude = coordinateData.MD.lat;
        break;
        case "MA":
            longitude = coordinateData.MA.long;
            latitude = coordinateData.MA.lat;
        break;
        case "MI":
            longitude = coordinateData.MI.long;
            latitude = coordinateData.MI.lat;
        break;
        case "MN":
            longitude = coordinateData.MN.long;
            latitude = coordinateData.MN.lat;
        break;
        case "MS":
            longitude = coordinateData.MS.long;
            latitude = coordinateData.MS.lat;
        break;
        case "MO":
            longitude = coordinateData.MO.long;
            latitude = coordinateData.MO.lat;
        break;
        case "MT":
            longitude = coordinateData.MT.long;
            latitude = coordinateData.MT.lat;
        break;
        case "NE":
            longitude = coordinateData.NE.long;
            latitude = coordinateData.NE.lat;
        break;
        case "NV":
            longitude = coordinateData.NV.long;
            latitude = coordinateData.NV.lat;
        break;
        case "NH":
            longitude = coordinateData.NH.long;
            latitude = coordinateData.NH.lat;
        break;
        case "NJ":
            longitude = coordinateData.NJ.long;
            latitude = coordinateData.NJ.lat;
        break;
        case "NM":
            longitude = coordinateData.NM.long;
            latitude = coordinateData.NM.lat;
        break;
        case "NY":
            longitude = coordinateData.NY.long;
            latitude = coordinateData.NY.lat;
        break;
        case "NC":
            longitude = coordinateData.NC.long;
            latitude = coordinateData.NC.lat;
        break;
        case "ND":
            longitude = coordinateData.ND.long;
            latitude = coordinateData.ND.lat;
        break;
        case "OH":
            longitude = coordinateData.OH.long;
            latitude = coordinateData.OH.lat;
        break;
        case "OK":
            longitude = coordinateData.OK.long;
            latitude = coordinateData.OK.lat;
        break;
        case "OR":
            longitude = coordinateData.OR.long;
            latitude = coordinateData.OR.lat;
        break;
        case "PA":
            longitude = coordinateData.PA.long;
            latitude = coordinateData.PA.lat;
        break;
        case "RI":
            longitude = coordinateData.RI.long;
            latitude = coordinateData.RI.lat;
        break;
        case "SC":
            longitude = coordinateData.SC.long;
            latitude = coordinateData.SC.lat;
        break;
        case "SD":
            longitude = coordinateData.SD.long;
            latitude = coordinateData.SD.lat;
        break;
        case "TN":
            longitude = coordinateData.TN.long;
            latitude = coordinateData.TN.lat;
        break;
        case "TX":
            longitude = coordinateData.TX.long;
            latitude = coordinateData.TX.lat;
        break;
        case "UT":
            longitude = coordinateData.UT.long;
            latitude = coordinateData.UT.lat;
        break;
        case "VT":
            longitude = coordinateData.VT.long;
            latitude = coordinateData.VT.lat;
        break;
        case "VA":
            longitude = coordinateData.VA.long;
            latitude = coordinateData.VA.lat;
        break;
        case "WA":
            longitude = coordinateData.WA.long;
            latitude = coordinateData.WA.lat;
        break;
        case "WV":
            longitude = coordinateData.WV.long;
            latitude = coordinateData.WV.lat;
        break;
        case "WI":
            longitude = coordinateData.WI.long;
            latitude = coordinateData.WI.lat;
        break;
        case "WY":
            longitude = coordinateData.WY.long;
            latitude = coordinateData.WY.lat;
        break;
        default:
            throw new Error("Please enter a valid Two letter state abriviation");
    }
}