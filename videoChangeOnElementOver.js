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

    //console.log(videoElement);

    $('body').on('mouseenter', 'div.video-change-action', function(event) {

        var element = $(this);
        var videoName = element.data('video-name');
        var videoPositions = element.data('video-position');

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

            videoElement[0].currentTime = videoPositions[0];

            //console.log(videoPositions);
            // console.log(videoName);
        }
    });
};

VideoChangeOnElementOver.prototype.findVideoSourceByVideoName = function(video_name) {
    return this.options.videoSources[video_name].videoSource;
};

VideoChangeOnElementOver.prototype.findVideoTypeByVideoName = function(video_name) {
    return this.options.videoSources[video_name].videoType;
};

VideoChangeOnElementOver.prototype.detectZone = function(x_mouse_position, y_mouse_position) {

    var width = $(document).width();
    var height = $(document).height();

    var single_block_width = $(document).width() / 3;
    var single_block_height = $(document).height() / 3;

    var first_row = (y_mouse_position >= 0) && (y_mouse_position <= (single_block_height * 1)) ? true : false;
    var second_row = (y_mouse_position >= (single_block_height * 1)) && (y_mouse_position <= (single_block_height * 2)) ? true : false;
    var third_row = (y_mouse_position >= (single_block_height * 2)) && (y_mouse_position <= (single_block_height * 3)) ? true : false;

    var first_col = (x_mouse_position >= 0) && (x_mouse_position <= (single_block_width * 1)) ? true : false;
    var second_col = (x_mouse_position >= (single_block_width * 1)) && (x_mouse_position <= (single_block_width * 2)) ? true : false;
    var third_col = (x_mouse_position >= (single_block_width * 2)) && (x_mouse_position <= (single_block_width * 3)) ? true : false;

    var conditions = [];
    //
    // conditions[1] = {row: first_row, col: first_col};
    // conditions[2] = {row: first_row, col: second_col};
    // conditions[3] = {row: first_row, col: third_col};
    // conditions[4] = {row: second_row, col: first_col};
    // conditions[5] = {row: second_row, col: second_col};
    // conditions[6] = {row: second_row, col: third_col};
    // conditions[7] = {row: third_row, col: first_col};
    // conditions[8] = {row: third_row, col: first_col};
    // conditions[9] = {row: third_row, col: third_col};
    //
    // for (var i = 0; i < conditions.length; i++) {
    //     //if (conditions[i].row && conditions[i].col)
    //         console.log(conditions[i]);
    // }

    var video_duration = $('video')[0].duration;

    // 1
    if (first_row && first_col) {
        console.log('1');
        $('video')[0].currentTime = video_duration / (10 - 1);
    }
    // 2
    if (first_row && second_col) {
        console.log('2');
        $('video')[0].currentTime = video_duration / (10 - 2);
    }
    // 3
    if (first_row && third_col) {
        console.log('3');
        $('video')[0].currentTime = video_duration / (10 - 3);
    }

    // 1
    if (second_row && first_col) {
        console.log('4');
        $('video')[0].currentTime = video_duration / (10 - 4);
    }
    // 2
    if (second_row && second_col) {
        console.log('5');
        $('video')[0].currentTime = video_duration / (10 - 5);
    }
    // 3
    if (second_row && third_col) {
        console.log('6');
        $('video')[0].currentTime = video_duration / (10 - 6);
    }

    // 1
    if (third_row && first_col) {
        console.log('7');
        $('video')[0].currentTime = video_duration / (10 - 7);
    }
    // 2
    if (third_row && second_col) {
        console.log('8');
        $('video')[0].currentTime = video_duration / (10 - 8);
    }
    // 3
    if (third_row && third_col) {
        console.log('9');
        $('video')[0].currentTime = video_duration / (10 - 9);
    }

};
