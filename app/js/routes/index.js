export
default [{
    path: 'test',
    handler: function testRouteHandler(App) {
        App.set({
            hasCarousel: false,
            compName: 'formComp'
        })
    }
}, {
    path: 'test2',
    handler: function testRouteHandler(App) {
        App.set({
            hasCarousel: false,
            compName: 'blueimpGallery'
        })
    }
}, {
    path: 'test3',
    handler: function testRouteHandler(App) {
        App.set({
            hasCarousel: true,
            compName: 'carousel'
        })
    }
}]
