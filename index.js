function Scaler(options) {

    if (!(this instanceof Scaler)) return new Scaler(options);

    options = options || {};

    this.width;
    this.unit;

    this.setWidth(options.width).applyScale();

    if (options.watch) this.listen(true);
}

Scaler.prototype.setWidth = function(width) {
    var match = /([\d\.]+)(\w+)?/.exec(width) || [];

    this.width = match[1];
    this.unit = match[2] || 'px';

    if (isNaN(this.width) || !isFinite(this.width)) {
        throw new Error('invalid design width');
    }

    return this;
};


Scaler.prototype.applyScale =  function() {

   if (typeof this.width === 'undefined') {
       throw new Error('please set design width before apply scale');
   }

   var
       windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
       ratio = windowWidth / this.width;

   document.body.style.transform = 'scale(' + ratio + ')';
   document.body.style.webkitTransform = 'scale(' + ratio + ')';
   document.body.style.transformOrigin = 'left top';
   document.body.style.webkitTransformOrigin = 'left top';
   document.body.style.width = this.width + this.unit;

   return this;
};

Scaler.prototype.listen = function(isListen) {
    isListen ?
        window.addEventListener('resize', this.applyScale.bind(this), false) :
        window.removeEventListener('resize', this.applyScale.bind(this));

    return this;
};

if (typeof module !== 'undefined') {
    module.exports = Scaler;
}
