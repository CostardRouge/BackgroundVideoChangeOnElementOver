function VideoChangeOnElementOver(options) {
    this.options = options;
}
VideoChangeOnElementOver.prototype.init = function(callback) {
    var self = this;

    // Events registering
    this.bindEvents();

    // Run callback function if defined (== 'function')
    if (callback !== undefined)
        callback();
};

VideoChangeOnElementOver.prototype.bindEvents = function() {
    var self = this;
    var videoElement = $(this.options.videoTagSelector);
    var videoSourceElement = $(this.options.videoSourceTagSelector);

    $('body').on('mouseenter', this.options.elementsSelector, function(event) {

        $('#lib-info').hide();

        var element = $(this);
        var videoName = element.data('video-name');
        var videoPositions = element.data('video-position');

        $(self.options.elementsSelector).not(this).removeClass('active');

        if (videoName != undefined && videoPositions != undefined) {
            var videoPositions = videoPositions.split(',');

            var elementVideoSource = self.findVideoSourceByVideoName(videoName);
            var elementVideoType = self.findVideoTypeByVideoName(videoName);

            var currentVideoSource = videoSourceElement.attr('src');
            var currentVideoType = videoSourceElement.attr('type');

            if ((currentVideoSource != elementVideoSource) || (currentVideoType != elementVideoType)) {
                videoSourceElement.attr('src', elementVideoSource);
                videoSourceElement.attr('type', elementVideoType);
                videoElement.load();
            }

            // Check if current element video ain't already playing
            if (!element.hasClass('active'))
                videoElement[0].currentTime = videoPositions[0];

            element.addClass('active');
        }
    });

    $('body').on('mouseleave', this.options.elementsSelector, function(event) {
        var element = $(this);

        //  check if default video looping strategy is defined
        if (self.options.defaultVideo) {
            element.removeClass('active');
            $('#lib-info').show();

            // launch default video
        }
    });

    videoElement.on('timeupdate', function(event) {
        var currentElement = $(self.options.elementsSelector+'.active');
        var currentElementVideoPositions = currentElement.data('video-position');

        if (currentElementVideoPositions != undefined) {
            var currentElementVideoPositions = currentElementVideoPositions.split(',');

            var videoCurrentTime = this.currentTime;
            if (videoCurrentTime > currentElementVideoPositions[1]) {
                videoElement[0].currentTime = currentElementVideoPositions[0];
                this.currentTime = currentElementVideoPositions[0];
            }
        }
    });
};

VideoChangeOnElementOver.prototype.findVideoSourceByVideoName = function(video_name) {
    return this.options.videoSources[video_name].videoSource;
};

VideoChangeOnElementOver.prototype.findVideoTypeByVideoName = function(video_name) {
    return this.options.videoSources[video_name].videoType;
};
