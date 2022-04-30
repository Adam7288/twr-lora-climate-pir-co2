function Decoder(bytes, port) {
  // Decode an uplink message from a buffer
  //const header = bytes[0];
  const voltage = bytes[1] / 10.0;
  const battery_pct = bytes[2];
  const temperature = ((bytes[3] << 8) | bytes[4]) / 10.0;
  //const humidity = bytes[5] / 2;
  //const illuminance = ((bytes[6] << 8) | bytes[7]);
  //const pressure = ((bytes[8] << 8) | bytes[9]) * 2.0;
  const snr = (bytes[5] << 8) | bytes[6];
  let rssi = (bytes[7] << 8) | bytes[8]
  if ((rssi & 0x8000) > 0) {
     rssi = rssi - 0x10000;
  }
  
  const co2 = (bytes[10] << 8) | bytes[11];
  const monotonicCounter = bytes[12];

  // (array) of bytes to an object of fields.
  return {
    //header,
    voltage,
    battery_pct,
    temperature,
    //humidity,
    //illuminance,
    //pressure,
    co2,
    rssi,
    snr,
    monotonicCounter
  };
}