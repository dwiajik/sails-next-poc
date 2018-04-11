/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  // connection: 'localDiskDb',

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
  // migrate: 'alter'

  migrate: 'safe',

  // These settings make the .update(), .create() and .createEach()
  // work like they did in 0.12, by returning records in the callback.
  // This is pretty ineffecient, so if you don't _always_ need this feature, you
  // should turn these off and instead chain `.meta({fetch: true})` onto the
  // individual calls where you _do_ need records returned.
  fetchRecordsOnUpdate: true,
  fetchRecordsOnCreate: true,
  fetchRecordsOnCreateEach: true,

  // Fetching records on destroy was experimental, but if you were using it,
  // uncomment the next line.
  // fetchRecordsOnDestroy: true,

  // The former `connection` model setting is now `datastore`.  This sets the datastore
  // that models will use, unless overridden directly in the model file in `api/models`.
  // It defaults to a datastore called `default`, which (unless otherwise configured in
  // the `config/datastores.js` file) uses the built-in `sails-disk` adapter.
  datastore: 'default',

  // These attributes will be added to all of your models.  When you create a new Sails 1.0
  // app with "sails new", a similar configuration will be generated for you.
  attributes: {
    // In Sails 1.0, the `autoCreatedAt` and `autoUpdatedAt` model settings
    // have been removed.  Instead, you choose which attributes (if any) to use as
    // timestamps.  By default, "sails new" will generate these two attributes as numbers,
    // giving you the most flexibility.  But for compatibility with your existing project,
    // we'll define them as strings.
    createdAt: { type: 'string', autoCreatedAt: true, },
    updatedAt: { type: 'string', autoUpdatedAt: true, },
    // In Sails 1.0, the primary key field is no longer created for you, and `autoPK` is
    // not a valid model option.  Instead, you define it yourself and tell Sails which
    // attribute to use as the primary key by setting the `primaryKey` setting on the model.
    // That setting defaults to `id`.
    id: { type: 'number', autoIncrement: true, }
  }

  /******************************************************************************
  *                                                                             *
  * The set of DEKs (data encryption keys) for at-rest encryption.              *
  * i.e. when encrypting/decrypting data for attributes with `encrypt: true`.   *
  *                                                                             *
  * > The `default` DEK is used for all new encryptions, but multiple DEKs      *
  * > can be configured to allow for key rotation.  In production, be sure to   *
  * > manage these keys like you would any other sensitive credential.          *
  *                                                                             *
  * > For more info, see:                                                       *
  * > https://sailsjs.com/docs/concepts/orm/model-settings#?dataEncryptionKeys  *
  *                                                                             *
  ******************************************************************************/
  // dataEncryptionKeys: {
  //   default: 'NWXuZMxLg6LzOOllvZEuwbBL+wfacWnF93bmP5u5RTU='
  // },

};
