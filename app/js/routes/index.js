export default [{
    path: '',
    handler: function homeRouteHandler(App) {
        App.set({
            hasCarousel: true,
            compName: 'carousel'
        })
    }
}, {
    path: 'gallery',
    handler: function galleryRouteHandler(App, truc) {
        App.set({
            hasCarousel: false,
            compName: 'gallery'
        });
    }
}, {
    path: 'FAQ',
    handler: function FAQRouteHandler(App) {
        App.set({
            hasCarousel: false,
            compName: 'formComp'
        })
    }
}]
