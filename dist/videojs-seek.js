(function() {
  videojs.plugin('seek', function(options) {
    var getNamedParameterValue, seekParam, seekValue, _ref;
    if (options == null) {
      options = {};
    }
    getNamedParameterValue = function(name) {
      var match;
      match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    };
    seekParam = options['seek_param'] || JSON.parse((_ref = this.options()['data-setup']) != null ? _ref : '{}')['seek_param'] || 't';
    seekValue = parseInt(getNamedParameterValue(seekParam));
    if (seekValue) {
      return this.ready(function() {
        return this.one('playing', function() {
          return this.currentTime(seekValue);
        });
      });
    }
  });

}).call(this);
