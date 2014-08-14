videojs.plugin 'seek', (options = {}) ->
  # returns the value for the given query string parameter
  getNamedParameterValue = (name) ->
    match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
    match && decodeURIComponent match[1].replace /\+/g, ' '

  seekParam = options['seek_param'] or JSON.parse(@options()['data-setup'] ? '{}')['seek_param'] or 't'
  seekValue = parseInt getNamedParameterValue(seekParam)

  if seekValue
    @ready ->
      @one 'playing', -> @currentTime seekValue
