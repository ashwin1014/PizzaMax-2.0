// IIFE for progressive images
(function() {
    new Progressive({
        el: '#app',
        lazyClass: 'lazy',
        removePreview: true,
        scale: true
    }).fire();
})();