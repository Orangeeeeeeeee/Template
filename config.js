var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        tmp:'tmp'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html',
        js: 'src/js/app.js',
        style: 'src/styles/**/*.{sass,scss}',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        svg: 'src/img/icons-svg/*.svg',
        png: 'src/img/icons-png/*.png'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/styles/**/*.sass',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    server: {
        server: {
            baseDir: "./build"
        },
        tunnel: true,
        host: 'localhost',
        port: 9000,
        logPrefix: "Frontend_Devil"
    },
    ignor:{
        svg: '!src/img/icons-svg/sprite.svg',
        png: '!src/img/icons-png/sprite.png'
    },
    libs: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/slick-carousel/slick/slick.min.js']
};

module.exports = path;

