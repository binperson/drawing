(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.THREE = {})));
}(this, (function (exports) {

})));

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.THREE = {})));
}(global, factory))

global = this

factory = function (exports) {

    function WebGLRenderTargetCube( width, height, options ) {

        WebGLRenderTarget.call( this, width, height, options );

        this.activeCubeFace = 0; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
        this.activeMipMapLevel = 0;

    }

    WebGLRenderTargetCube.prototype = Object.create( WebGLRenderTarget.prototype );
    WebGLRenderTargetCube.prototype.constructor = WebGLRenderTargetCube;

    WebGLRenderTargetCube.prototype.isWebGLRenderTargetCube = true;


    exports.WebGLRenderTargetCube = WebGLRenderTargetCube;
    //...
    exports.CanvasRenderer = CanvasRenderer;

    Object.defineProperty(exports, '__esModule', { value: true });
}

a = typeof exports === 'object' && typeof module !== 'undefined'
b = factory(exports)
c = typeof define === 'function' && define.amd
e = define(['exports'], factory)
f = (factory((global.THREE = {})))

a ? b : c ? e : f

(function (global, factory) {
    a ? b : c ? e : f
}(global, factory))
