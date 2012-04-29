(function($, undefined) {
    $.widget('view.viePersonage', {
       _create: function () {
            FaceClientAPI.init(this.options.FACE_API_KEY);
            return this;
       },
       
       _init: function () {
			if(!myVIE){
				var myVIE = window.myVIE = new VIE();
			}
			var self = this;
			var img_id = $(self.element).attr('id');
			this.tagFace(img_id,this.annotate_faces);
       },

       tagFace: function(img_id, callback) {
            FaceTagger.load('#' + img_id, {
                click_add_tag: false,
                resizable: true,
                facebook: true,
                fade: true,
                tags_list: true,
                add_tag_button: true,
                demo_mode: true,
				success: function(img, response){
					var tags = response? (response.photos? response.photos[0].tags: undefined): undefined;
					callback(tags);
				}
           });
        },
		
		annotate_faces: function(tags) {
			for(var t in tags){
				var tag = tags[t];
				var id = tag.tid;
				var type = '<http://schema.org/MediaObject>';
				//myVIE.Entity({'@type':type, '@subject': id}, undefined);	
			}
		},
        
        options: {
           FACE_API_KEY: undefined
        }

    });
})(jQuery);