module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            main:{
                src: ['TypeScript/main.ts'],
                des:'javascript/'
            }
        }
    });
    grunt.registerTask('default', ['ts']);
}