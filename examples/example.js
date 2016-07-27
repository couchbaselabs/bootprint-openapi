// Load bootprint
require('bootprint')
// Load bootprint-swagger
  .load(require('../'))
  // Customize configuration, override any options
  .merge({/* Any other configuration */})
  // Specify build source and target
  .build('./../../tmp/admin.json', './../../../site/gen-hippo/develop/references/sync-gateway/admin-rest-api')
  // Generate swagger-documentation into "target" directory
  .generate()
  .done(console.log);


// Load bootprint
require('bootprint')
// Load bootprint-swagger
  .load(require('../'))
  // Customize configuration, override any options
  .merge({/* Any other configuration */})
  // Specify build source and target
  .build('./../../tmp/public.json', './../../../site/gen-hippo/develop/references/sync-gateway/rest-api')
  // Generate swagger-documentation into "target" directory
  .generate()
  .done(console.log);

// Load bootprint
require('bootprint')
// Load bootprint-swagger
  .load(require('../'))
  // Customize configuration, override any options
  .merge({/* Any other configuration */})
  // Specify build source and target
  .build('./../../tmp/lite.json', './../../../site/gen-hippo/develop/references/couchbase-lite/rest-api')
  // Generate swagger-documentation into "target" directory
  .generate()
  .done(console.log);
