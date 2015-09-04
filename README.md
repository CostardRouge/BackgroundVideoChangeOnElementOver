# VideoChangeOnElementOver
> Manipulate video by hovering specific elements.

## Demo

[Click here](//costardrouge.eu)

## Documentation

### How to use it
#### 1. Includes

> jQuery is required, _any version..._

```html
<body>
...
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src=".../dist/videoChangeOnElementOver.min.js"></script>
    <script type="text/javascript">
        // Go further for a correct initialization example
        var videoChangeOnElementOver = new VideoChangeOnElementOver(...);
        videoChangeOnElementOver.init();
	</script>
</body>
```

#### 2. Prepare the markup

> Example
```html
<div
    class="video-change-action"
    data-video-name="noise_video_test_mp4"
    data-video-position="0,5">
</div>
```

Element options list
* data-video-name : video source name (declared in the init part)
* data-video-position : video positions in seconds ("3, 8")
* data-video-audio-volume : audio volume (from 0 to 100)
* data-video-audio-volume : audio volume (from 0 to 100)

#### 3. Init the lib

```javascript
    var options = {
        // Define the targeted elements
        elementsSelector: "div.video-change-action",

        // Define the video tag selector
        videoTagSelector: "video[id='example']",
        videoSourceTagSelector: "video[id='example'] source",

        // List of video sources (at least one source is required)
        videoSources: {
            // first source (mp4)
            "noise_video_test_mp4" : {
                videoSource: "http://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_2mb.mp4",
                videoType: "video/mp4"
            },
            // first source (ogg)
            "noise_video_test_ogg" : {
                videoSource: "http://www.w3schools.com/html/mov_bbb.ogg",
                videoType: "video/ogg"
            }
        },

        //  Default video if no elements are `hovered`
        noElementHoveredVideo: {
            videoSource: "http://www.w3schools.com/html/mov_bbb.ogg",
            videoType: "video/ogg"
        }
    };

    var videoChangeOnElementOver = new VideoChangeOnElementOver(options);

    videoChangeOnElementOver.init(function() {
        // You can place your init callback action here
    });
```

## Compatibility and troubleshoots

> More benchmarks and feedbacks are needed for that...

## Releases history

> Still in alpha...

## TODO:

 * Handle Youtube and Vimeo video url source
 * Multiple default video source (mp4/ogg)
 * Handle touch screen devices
 * Preload videos in cache
 * Handle audio volume options
 * Handle loop options

## About the lazy author
> Steeve Pommier

* [Tumblr](//costardrouge.eu)
* [Twitter](//twitter.com/BlousonRouge)
