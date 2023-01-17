AFRAME.registerPrimitive('a-foo', {
    defaultComponents: {
        foo: {}
    },
    mappings: {
        src: 'foo.src'
    }
});


AFRAME.registerComponent('foo', {
    schema: {
        src: { type: 'string' }
    },

    init: () => {
        // console.log(this.src);
        this.val = document.createElement('a-sky');
        this.el.appendChild(this.val);
        this.loadSceneId(start.getAttribute('id'));
        console.log(val);
    },

    loadSceneId: function (id) {
        this.loadImage(this.el.querySelector('img#' + id));
        this.setHotspots(id);
    },

    loadImage: function (image) {
        var sky = this.sky;
        sky.setAttribute('src', image.getAttribute('src'));
        var camera = this.el.sceneEl.camera.el;
        camera.setAttribute('rotation', image.getAttribute('rotation'));
    },

    setHotspots: function (id) {
        var hotspots = Array.prototype.slice.call(this.el.querySelectorAll('a-foo'));
        hotspots.forEach(function (spot) {
            var visible = spot.getAttribute('srcl') == id ? true : false;
            spot.setAttribute('visible', visible);
        })
    }
})