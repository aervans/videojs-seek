Video.js Seek
=======================

A videojs plugin for seeking to a query string specified time.

Using the Plugin
----------------
The plugin automatically registers itself when you include videojs-seek.js in your page:

<script src='videojs-seek.min.js'></script>

By default the plugin will look for a query string parameter named 't'. The plugin expects the value of the query string parameter to be a value in seconds.
````
?t=60
````

Options
----------------

Custom query string parameter name (JS):
````
videojs('id', {}, function() {
  this.seek({ 'seek_param': 'time' })
});
````

Custom query string parameter name (HTML):
````
<video data-setup='{"seek_param": "time"}'>
````


## Release History
- 0.1.0: Initial release
