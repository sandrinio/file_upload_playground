'use strict';

// Copyright (c) 2015, Fujana Solutions - Moritz Maleck. All rights reserved.
// For licensing, see LICENSE.md

CKEDITOR.plugins.add('imageuploader', {
    init: function init(editor) {
        editor.config.filebrowserBrowseUrl = '/admin/browse';
        editor.config.filebrowserUploadUrl = '/ck_upload';
    }
});
//# sourceMappingURL=plugin.js.map