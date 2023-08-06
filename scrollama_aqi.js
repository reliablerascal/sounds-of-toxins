//7/29/23 RR this is based on the original version from Youyou that created a visual grid from scrolling
//but is substantially modified from the original code
//see scrollama_aqi for the new version
// d3.csv("data/aqi-data-2023-07-24.csv", function(data) {
//   console.log(data);
// });

     
      d3.csv("data/aqi-minnetonka-2023-07-20.csv")
        .then(data => {

          // ======================================
          // === HERE starts the scrollama code ===
          // ======================================

          // using d3 for convenience
          const scrolly = d3.select("#scroll-content");
          const figure = scrolly.select("#my-svg-chart");
          const step = scrolly.selectAll(".step"); 
          // const step = scrolly.data(data);

          // initialize the scrollama
          const scroller = scrollama();

          // generic window resize listener event
          function handleResize() {
            
            // 1. update height of step elements
            var stepH = Math.floor(window.innerHeight * 0.75);
            step.style("height", stepH + "px");

            var figureHeight = Math.min(window.innerHeight*0.8,640);
            var figureMarginTop = (window.innerHeight - figureHeight) / 2;

            figure
              .style("height", figureHeight + "px")
              .style("top", figureMarginTop + "px");

            // 3. tell scrollama to update new element dimensions
            scroller.resize();
          }


          function handleStepEnter(response) {
          //cycle through dataset index until it matches the current step number
            step.each(function(d, i) {
              if(i == response.index) {
                console.log('playing day ' + i)
                playChordByAQI(d.aqi)
              }
            })
          }








          function init() {

            // 1. force a resize on load to ensure proper dimensions are sent to scrollama
            handleResize();

            // 2. setup the scroller passing options
            // 		this will also initialize trigger observations
            // 3. bind scrollama event handlers (this can be chained like below)
            scroller
              .setup({
                step: "#scroll-content .step",
                offset: 0.10,
                debug: false //set to true to create a visual line to show where event gets triggered
              })
              .onStepEnter(handleStepEnter);
          }


          // kick things off
          init();
      


    //end D3      
  })