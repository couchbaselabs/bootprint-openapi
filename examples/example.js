// Load bootprint
require('bootprint')
  // Load bootprint-swagger
  .load(require('../'))
  // Customize configuration, override any options
  .merge({ /* Any other configuration */})
  // Specify build source and target
  .build('./../../public.yaml', './../../../site/gen-preview/develop/references/sync-gateway/rest-api')
  // Generate swagger-documentation into "target" directory
  .generate()
  .done(console.log)
