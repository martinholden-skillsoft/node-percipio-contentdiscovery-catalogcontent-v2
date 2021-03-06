const moment = require('moment');
const defer = require('config/defer').deferConfig;

const config = {};

config.customer = 'default';
config.startTimestamp = moment().utc().format('YYYYMMDD_HHmmss');

// DEBUG Options
config.debug = {};
// One of the supported default logging levels for winston - see https://github.com/winstonjs/winston#logging-levels
config.debug.loggingLevel = 'info';
config.debug.path = 'results/output';
config.debug.filename = defer((cfg) => {
  return `${cfg.startTimestamp}_results.log`;
});

// Default for for saving the output
config.output = {};
config.output.path = 'results/output';
config.output.filename = defer((cfg) => {
  return `${cfg.startTimestamp}_results.json`;
});

// Request
config.request = {};
// Timeout
config.request.timeout = 20000;

// Bearer Token
config.request.bearer = null;
// Base URI to Percipio API
config.request.baseURL = null;
// Request Path Parameters
config.request.path = {};
/**
 * Name: orgId
 * Description : Organization UUID
 * Required: true
 * Type: string
 * Format: uuid
 */
config.request.path.orgId = null;

// Request Query string Parameters
config.request.query = {};
/**
 * Name: transformName
 * Description : Value to identify a transform that will map Percipio data into a client
 * specific format
 * Type: string
 */
config.request.query.transformName = null;
/**
 * Name: updatedSince
 * Description : Filter criteria that returns catalog content changes since the date
 * specified in GMT with an ISO format.  Items will be included in the response if the
 * content metadata has changed since the date specified but may also be included if there
 * have been configuration changes that have increased or decreased the number of content
 * items that the organization has access to.
 * Type: string
 * Format: date-time
 */
config.request.query.updatedSince = null;
/**
 * Name: offset
 * Description : Used in conjunction with 'max' to specify which set of 'max' content items
 * should be returned. The default is 0 which returns 1 through max content items. If offset
 * is sent as 1, then content items 2 through max+1 are returned.
 * Type: integer
 */
config.request.query.offset = null;
/**
 * Name: max
 * Description : The maximum number of content items to return in a response. The default is
 * 1000. Valid values are between 1 and 1000.
 * Type: integer
 * Minimum: 1
 * Maximum: 1000
 * Default: 1000
 */
config.request.query.max = 1000;
/**
 * Name: pagingRequestId
 * Description : Used to access the unique dataset to be split among pages of results
 * Type: string
 * Format: uuid
 */
config.request.query.pagingRequestId = null;

// Request Body
config.request.body = null;

// Method
config.request.method = 'get';
// The Service Path
config.request.uritemplate = `/content-discovery/v2/organizations/{orgId}/catalog-content`;

// Global Web Retry Options for promise retry
// see https://github.com/IndigoUnited/node-promise-retry#readme
config.retry_options = {};
config.retry_options.retries = 3;
config.retry_options.minTimeout = 1000;
config.retry_options.maxTimeout = 2000;

module.exports = config;
