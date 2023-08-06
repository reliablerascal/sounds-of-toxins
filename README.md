# The Sounds of Toxins
_A sonifiction of Minnetonka, Minnesota's 10-day Air Quality Index (AQI) Forecast?_

This project is an experiment in rendering data through data sonification- specifically, rendering AQI concern levels as musical chords.

My approach is based on the following presumptions:
<ol>
<li>The relative lack of published data sonification, compared to data visualization, shouldn't necessarily suggest that it's an inherently limited form. Astronomer Matt Russo posits that its limited use is based in part on the present <a href="https://open.spotify.com/episode/6FgEpVFqtecHZS9Z0Sj8r0?si=6ReoipyKSDW0RpwXMFDpkw
" target="_blank">lack of formal instruction on how to interpret sonifications</a>.
<li>Sonification has some <a href="https://open.spotify.com/episode/6FgEpVFqtecHZS9Z0Sj8r0?si=6ReoipyKSDW0RpwXMFDpkw
" target="_blank">proven analytical use cases</a> and <a href="https://www.loudnumbers.net/" target="_blank">artistic uses</a> but might most effectively be tailored to convey emotional response to data
<li>While relying on rhythm, tempo, and pitch of individual tones could convey data, this approach requires a fixed, rigid timeframe and could provoke passivity on the part of the listener. A single chord, which conveys all of its information in one instant, could be a more effective means of conveying specific data points interactively.
<li>Emotional response to music can be affected by the relation between multiple notes played at the same time within a chord. Because different chords convey different levels of tension or stability, they can be roughly ranked as ordinal categories.
</ol> 

Here's my story, [The Sounds of Toxins](https://reliablerascal.github.io/sounds-of-toxins/), as published on GitHub.

## Key Findings and Data Sources
This project focused on data expression, rather than data analysis. I simply acquired a ten day AQI forecast for Minnetonka, MN from aqiair.com. I chose this city because it ranked in the worst ten U.S. cities for air quality on July 24, 2023.
<!---<ul>
<li>
</ul>--->

<!---## Data sources
|Data Source|Description|
|---|---|
|[AllTrails](https://alltrails.com)|This free app allows you to create path maps or record them live based on live walking, and then export these maps as GPX files. Because I have no reliable means of controlling my walking pace, I chose to focus on created path maps rather than live walk maps. I excluded walk time as a variable.|
|[Google Earth](https://earth.google.com)|Regardless of whether I walked or recorded my map, AllTrails (and Strava) introduced errors in measuring the altitude of Riverside at sites of bridges over Trinity Cemetery(155th street) and Riverside Viaduct (136th to 129th Street). Google Earth allows lookup of actual height based on pointing and clicking on satellite images.|
--->

## Overview of Data Interpretation Process<!---Data Analysis Process--->
My data interpretation process involved the following general steps:
* Created a function to play chords using the tone.js Javascript library, based on a list of five notes per chord
* Created a series of six ranked chords to align with the six color-coded <a href="https://www.airnow.gov/aqi/aqi-basics/" target="_blank">Air Quality Index categories</a> defined by the U.S. Environmental Protection Agency
* Reviewed these chords with classmates and teaching assistants to try to assert an objectivity ordinality of the chords.

## Data Quirks and Other E-Varmints Standing in My Righteous Path
My attempt to establish an agreed-upon ordinality of chord moods seemed mostly successful, but the exception to the rule needs further exploration. One listener, a formally trained musician who likes "shoegaze emo" music, rated a diminished chord to be more agreeable than chords with less tension.

## What I Learned
This project is a very basic prototype for a concept I may like to explore further. Technically, I learned the following:
<ul>
<li>Developed a basic overview of the field of data sonification
<li>Learned about the tone.js library, which can play multiple notes simultaneously based on user-events
<li>Practice with D3 for non-visualization uses- namely, updating font size & style, text fields, <div> colors, and sound events based on data read from a .csv file
<ul>

## What I'd Like to Learn Next to Advance this Project
Key to building off this project is soliciting and incorporating more user feedback. To help encourage this, I could do the following:
<ul>
<li>add different types of instrumentation to make this more fun/interesting
<li>add a user selector to switch city selection
<li>retrieve current data via API or web scraping to make this a "living" web page
<li>research more comprehensively about any existing chord-based data sonification projects
</ul>

## Guide to the Repository
Following is an overview of files in this repository:
<!---* [source_data](source/data/)- includes only my own manually-entered lookup table for CTA stations--->
<!---* [Jupyter Notebooks](notebooks)- six notebooks following through the data analysis steps from path development to calculating effort--->
* [data](data/)- this contains only a simple 10-day forecast acquired from [IQ Air](https://iqair.com)
* [scrollama_aqi.js](scrollama_aqi.js)- JavaScript code for responding to scrolling events, originally derived from https://github.com/zhoyoyo/lede23-animation. 
* [weather_chords.js](weather_chords.js)- JavaScript code for translating AQI readings to musical chords. 

<!---* [results](results/)- results of data analysis--->
<!---* [images](images/)- pictures and graphs supporting this story--->

