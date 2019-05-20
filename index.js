mapboxgl.accessToken =
  "pk.eyJ1Ijoib25vdW1lbm9uIiwiYSI6ImNqdncwZWczdTA1Mjg0M3Bpbnh6NDVnb3EifQ.e_DLk400pe9sto1esaZsSg";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/onoumenon/cjvvw3in81gux1co2xq3jlxm7"
});

map.on("load", function() {
  const layers = [
    "0-10",
    "10-20",
    "20-50",
    "50-100",
    "100-200",
    "200-500",
    "500-1000",
    "1000+"
  ];
  const colors = [
    "#FFEDA0",
    "#FED976",
    "#FEB24C",
    "#FD8D3C",
    "#FC4E2A",
    "#E31A1C",
    "#BD0026",
    "#800026"
  ];
  for (i = 0; i < layers.length; i++) {
    let layer = layers[i];
    let color = colors[i];
    let item = document.createElement("div");
    let key = document.createElement("span");
    key.className = "legend-key";
    key.style.backgroundColor = color;

    let value = document.createElement("span");
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }
});

map.on("mousemove", function(e) {
  var states = map.queryRenderedFeatures(e.point, {
    layers: ["statedata"]
  });

  if (states.length > 0) {
    document.getElementById("pd").innerHTML =
      "<h3><strong>" +
      states[0].properties.name +
      "</strong></h3><p><strong><em>" +
      states[0].properties.density +
      "</strong> people per square mile</em></p>";
  } else {
    document.getElementById("pd").innerHTML = "<p>Hover over a state!</p>";
  }
});

map.getCanvas().style.cursor = "default";

map.fitBounds([[-133.2421875, 16.972741], [-47.63671875, 52.696361]]);
