(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  videojs.plugin('seek', function(options) {
    var getNamedParameterValue, seekParam, seekValue, tech, _ref, _ref1;
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
    tech = options.tech || ['Html5', 'Flash'];
    if (seekValue && (_ref1 = this.Ca, __indexOf.call(tech, _ref1) >= 0)) {
      return this.ready(function() {
        return this.one('playing', function() {
          return this.currentTime(seekValue);
        });
      });
    }
  });

}).call(this);
