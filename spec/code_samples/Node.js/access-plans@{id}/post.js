const llmsAPI = require( "llms-api-node" );
const llms = new llmsAPI( {
  "url": "https://example.tld",
  "consumerKey": "ck_XXXXXXXXXXXXXXXXXXXXXX",
  "consumerSecret": "cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
} );

const postData = {
  "price": 199.97,
  "sku": "LIFETIME-999-001",
  "frequency": 0,
  "length": 0,
  "period": "year",
  "enroll_text": "Buy Now",
  "sale_enabled": false,
  "sale_price": 99.97,
  "sale_date_start": "2019-01-23 00:00:00",
  "sale_date_end": "2019-03-23 23:59:59",
  "availability_restrictions": [
    123,
    456,
    789
  ],
  "access_expiration": "lifetime",
  "access_expires": "2019-03-23 23:59:59",
  "access_length": 1,
  "access_period": "year",
  "trial_enabled": false,
  "trial_length": 1,
  "trial_period": "week",
  "trial_price": 1.99,
  "post_id": 789,
  "redirect_type": "self",
  "redirect_page": 1,
  "redirect_url": "https://example.tld/my/redirect",
  "redirect_forced": false,
  "visibility": "visible",
  "date_created": "2019-05-20 17:22:05",
  "date_created_gmt": "2019-05-20 13:22:05",
  "menu_order": 0,
  "title": "Liftetime Access",
  "content": "\\n<ul><li>Expectoque quid ad id</li><li>quod quaerebam, respondeas</li></ul>\\n"
};

llms.post( '/access-plans/%7Bid%7D', postData, function( err, data, res ) {
  if ( err ) {
    throw new Error( 'Error!' );
  }
  console.log( data );
} );