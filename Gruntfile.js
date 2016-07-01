
module.exports = function(grunt) {

  var date = new Date();
  var minute = date.getMinutes();
  var hour = date.getHours();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  var date = day + "-" + month + "-" + year + " " + hour + "-" + minute;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      O2: {
        src: 'o2-sdk/exported/*.svg',
        dest: 'o2-sdk/generated/' + date,
        options: {
          codepointsFile: 'o2-sdk/fontMapping.json',
          types: 'eot,woff2,woff,ttf,svg',
          fontFilename: 'zomatoO2',
          startCodepoint: 33,
	        font: 'zomatoO2',
          autoHint: false          
        }
      },
      zapps: {
        src: 'z-apps/exported/*.svg',
        dest: 'z-apps/generated/' + date,
        options: {
          codepointsFile: 'z-apps/fontMapping.json',
          types: 'eot,woff2,woff,ttf,svg',
          fontFilename: 'zombatswapRegular',
          startCodepoint: 33,
	        font: 'zombatswapRegular',
          autoHint: false          
        }
      },
       zdroid: {
        src: 'zdroid/exported/*.svg',
        dest: 'zdroid/generated/' + date,
        options: {
          codepointsFile: 'zdroid/fontMapping.json',
          types: 'eot,woff2,woff,ttf,svg',
          fontFilename: 'zombatswapRegular',
          startCodepoint: 33,
          autoHint: false          
        }
      },
      zmerchant: {
        src: 'z-merchant/exported/*.svg',
        dest: 'z-merchant/generated/' + date,
        options: {
          codepointsFile: 'z-merchant/fontMapping.json',
          types: 'eot,woff2,woff,ttf,svg',
          fontFilename: 'font',
          startCodepoint: 33,
          autoHint: false          
        }
      },
      zweb: {
        src: 'z-web/exported/*.svg',
        dest: 'z-web/generated/' + date,
        options: {
          codepointsFile: 'z-web/fontMapping.json',
          types: 'eot,woff2,woff,ttf,svg',
          fontFilename: 'font',
          startCodepoint: 33,
          autoHint: false,
          font: 'zombatsregular',
          fontFilename: 'zombatsregular-webfont-web',
          styles: 'font',
          order: 'eot,woff2,woff,ttf,svg',
          engine: 'node'
        }
      }
    }   
  });
  
  grunt.loadNpmTasks('grunt-webfont');

};
