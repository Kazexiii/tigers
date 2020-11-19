(function(vegaEmbed) 
{
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "hconcat": [{"mark": "circle", "encoding": {"color": {"type": "nominal", "field": "Origin", "legend": null}, "size": {"type": "ordinal", "field": "Cylinders", "scale": {"range": [20, 100]}}, "tooltip": [{"type": "nominal", "field": "Name"}, {"type": "quantitative", "field": "Horsepower"}, {"type": "quantitative", "field": "Miles_per_Gallon"}, {"type": "ordinal", "field": "Cylinders"}, {"type": "nominal", "field": "Origin"}], "x": {"type": "quantitative", "field": "Horsepower"}, "y": {"type": "quantitative", "field": "Miles_per_Gallon"}}, "selection": {"selector004": {"type": "interval", "bind": "scales", "encodings": ["x", "y"]}}, "transform": [{"filter": {"selection": "selector003"}}]}, {"mark": "rect", "encoding": {"color": {"condition": {"type": "nominal", "field": "Origin", "legend": null, "selection": "selector003"}, "value": "lightgray"}, "size": {"value": 250}, "y": {"type": "nominal", "axis": {"title": "Select Origin"}, "field": "Origin"}}, "selection": {"selector003": {"type": "multi", "encodings": ["color"]}}}], "data": {"url": "https://vega.github.io/vega-datasets/data/cars.json"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json"};
  var embedOpt = {"mode": "vega-lite"};

  function showError(el, error){
      el.innerHTML = ('<div class="error" style="color:red;">'
                      + '<p>JavaScript Error: ' + error.message + '</p>'
                      + "<p>This usually means there's a typo in your chart specification. "
                      + "See the javascript console for the full traceback.</p>"
                      + '</div>');
      throw error;
  }
  const el = document.getElementById('vis1');
  vegaEmbed("#vis1", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed); 