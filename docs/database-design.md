# Database Design

### Logbook

- name: string, limited to ~15-20 characters. for users sorting.
- callsign: string, limited to (max callsign length). not related to owner's callsign.
- gridSquare: string, limited to 6 characters. validated against maidenhead grid square format.
- station: related to [station](#station)

### Station

- callsign: string, limited to (max callsign length)
- dxcc: related to dxcc entities, callsign validated?
- gridSquare
- notes
- radioModel
- antenna: how to handle multiple antennas?


### Log Entries

- logbook: related to [logbook](#logbook)
- contest: related to [contest]?
- myCallsign: logbook callsign
- myGrid: logbook/station grid
- theirCall
- rstSent: should usually be an integer, max 599
- rstRcvd: see above
- startTime: in web editor, add this on log start
- endTime: log on enter button/log it button
- notes: "unlimited" length string
- theirName: auto poll from QRZ?
- theirQTH
- theirState
- theirCounty
- theirGrid
- frequency: in kHZ, validate by band?
- band
- power: in watts
- mode: related to [modes]?

#### Contesting

- myExch: auto default to latest serial in some tests
- theirExch
- operator
- isMultiplier: was this a mult when first worked
- wasRunning


#### Satellites

- satellite: related to [satellite]?

#### QSLing

- qslSentLotw
- qslRcvdLotw
- qslSentQRZ
- qslRcvdQRZ
- qslSentPhysical
- qslRcvdPhysical

- add eqsl? inter-user confirmations?
- scanned qsl card images if physical?