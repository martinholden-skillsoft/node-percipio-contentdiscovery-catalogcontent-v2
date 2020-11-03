# node-percipio-contentdiscovery-catalogcontent-v2
Call Percipio Content Discovery Service API using Axios.

Function: /v2/organizations/{orgId}/catalog-content

This function returns paged data, and so all available pages of data will be retrieved.

## Requirements
1. A Skillsoft [Percipio](https://www.skillsoft.com/platform-solution/percipio/) Site
1. A [Percipio Service Account](https://documentation.skillsoft.com/en_us/pes/3_services/service_accounts/pes_service_accounts.htm) with permission for accessing the API.

## Environment Configuration
Once you have copied this repository set the following NODE ENV variables, or config the [.env](.env) file

| ENV | Required | Description |
| --- | --- | --- |
| ORGID | Required | This is the Percipio Organiation UUID for your Percipio Site. |
| BEARER | Required | This is the Percipio Bearer token for the Service Account. |
| BASEURL | Required | This is set to the base URL for the Percipio data center. For US hosted use: https://api.percipio.com For EU hosted use: https://dew1-api.percipio.com |

## Configuring the API call
Make the config changes in [config/default.js](config/default.js) file, to specify the request criteria for the API.

## Returned data
The returned data will be stored in file name configured in the [config/default.js](config/default.js), the default file uses:

```
results/YYYYMMDD_hhmmss_results.json
```

The timestamp component is based on UTC time when the script runs:

| DATEPART | COMMENTS                            |
| -------- | ----------------------------------- |
| YYYY     | Year (i.e. 1970 1971 ... 2029 2030) |
| MM       | Month Number (i.e. 01 02 ... 11 12) |
| DD       | Day (i.e. 01 02 ... 30 31)          |
| HH       | Hour (i.e. 00 01 ... 22 23)         |
| mm       | Minutes (i.e. 00 01 ... 58 59)      |
| ss       | Seconds (i.e. 00 01 ... 58 59)      |

### Available Request Path Parameters

```javascript
/**
 * Name: orgId
 * Description : Organization UUID
 * Required: true
 * Type: string
 * Format: uuid
 */
config.request.path.orgId = null;

```

### Available Query string Parameters
```javascript
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

```

### Available Payload Parameters
```javascript
config.request.body = null;

```

## Run theapp

```bash
npm start
```

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## License
MIT © [martinholden-skillsoft](12408585+martinholden-skillsoft@users.noreply.github.com)