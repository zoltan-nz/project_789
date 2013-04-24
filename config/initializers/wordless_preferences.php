<?php

/*
 * Configure Wordless preferences here.
 */

Wordless::set_preference("assets.preprocessors", array("SprocketsPreprocessor", "CompassPreprocessor"));
// Wordless::set_preference("assets.cache_enabled", true);
// Wordless::set_preference("assets.version", get_theme_version());

Wordless::set_preference("css.compass_path",     "/usr/local/rvm/gems/ruby-2.0.0-p0/bin/compass");
// Wordless::set_preference("css.output_style",     "compressed");
// Wordless::set_preference("css.require_libs",     array());

// Wordless::set_preference("css.lessc_path",       "/usr/bin/lessc");
// Wordless::set_preference("css.compress",         false);

Wordless::set_preference("js.ruby_path",         "ruby");
// Wordless::set_preference("js.yui_compress",      false);
// Wordless::set_preference("js.yui_munge",         false);
