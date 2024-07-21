/* eslint-disable @typescript-eslint/ban-types */
import type { Schema, Attribute } from '@strapi/strapi'

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions'
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
    Attribute.Required &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>
    subject: Attribute.String &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    properties: Attribute.JSON & Attribute.DefaultTo<{}>
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'admin::permission',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'admin::permission',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users'
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    firstname: Attribute.String &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    lastname: Attribute.String &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    username: Attribute.String
    email: Attribute.Email &
    Attribute.Required &
    Attribute.Private &
    Attribute.Unique &
    Attribute.SetMinMaxLength<{
      minLength: 6
    }>
    password: Attribute.Password &
    Attribute.Private &
    Attribute.SetMinMaxLength<{
      minLength: 6
    }>
    resetPasswordToken: Attribute.String & Attribute.Private
    registrationToken: Attribute.String & Attribute.Private
    isActive: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
    Attribute.Private
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    preferedLanguage: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
    Attribute.Private
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
    Attribute.Private
  }
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles'
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
    Attribute.Required &
    Attribute.Unique &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    code: Attribute.String &
    Attribute.Required &
    Attribute.Unique &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    description: Attribute.String
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>
    permissions: Attribute.Relation<
    'admin::role',
    'oneToMany',
    'admin::permission'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
    Attribute.Private
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
    Attribute.Private
  }
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens'
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
    Attribute.Required &
    Attribute.Unique &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    description: Attribute.String &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }> &
    Attribute.DefaultTo<''>
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
    Attribute.Required &
    Attribute.DefaultTo<'read-only'>
    accessKey: Attribute.String &
    Attribute.Required &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<
    'admin::api-token',
    'oneToMany',
    'admin::api-token-permission'
    >
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'admin::api-token',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'admin::api-token',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions'
  info: {
    name: 'API Token Permission'
    description: ''
    singularName: 'api-token-permission'
    pluralName: 'api-token-permissions'
    displayName: 'API Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
    Attribute.Required &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    token: Attribute.Relation<
    'admin::api-token-permission',
    'manyToOne',
    'admin::api-token'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'admin::api-token-permission',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'admin::api-token-permission',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens'
  info: {
    name: 'Transfer Token'
    singularName: 'transfer-token'
    pluralName: 'transfer-tokens'
    displayName: 'Transfer Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
    Attribute.Required &
    Attribute.Unique &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    description: Attribute.String &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }> &
    Attribute.DefaultTo<''>
    accessKey: Attribute.String &
    Attribute.Required &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<
    'admin::transfer-token',
    'oneToMany',
    'admin::transfer-token-permission'
    >
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'admin::transfer-token',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'admin::transfer-token',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions'
  info: {
    name: 'Transfer Token Permission'
    description: ''
    singularName: 'transfer-token-permission'
    pluralName: 'transfer-token-permissions'
    displayName: 'Transfer Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
    Attribute.Required &
    Attribute.SetMinMaxLength<{
      minLength: 1
    }>
    token: Attribute.Relation<
    'admin::transfer-token-permission',
    'manyToOne',
    'admin::transfer-token'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'admin::transfer-token-permission',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'admin::transfer-token-permission',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files'
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    alternativeText: Attribute.String
    caption: Attribute.String
    width: Attribute.Integer
    height: Attribute.Integer
    formats: Attribute.JSON
    hash: Attribute.String & Attribute.Required
    ext: Attribute.String
    mime: Attribute.String & Attribute.Required
    size: Attribute.Decimal & Attribute.Required
    url: Attribute.String & Attribute.Required
    previewUrl: Attribute.String
    provider: Attribute.String & Attribute.Required
    provider_metadata: Attribute.JSON
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>
    folder: Attribute.Relation<
    'plugin::upload.file',
    'manyToOne',
    'plugin::upload.folder'
    > &
    Attribute.Private
    folderPath: Attribute.String &
    Attribute.Required &
    Attribute.Private &
    Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::upload.file',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::upload.file',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders'
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
    Attribute.Required &
    Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique
    parent: Attribute.Relation<
    'plugin::upload.folder',
    'manyToOne',
    'plugin::upload.folder'
    >
    children: Attribute.Relation<
    'plugin::upload.folder',
    'oneToMany',
    'plugin::upload.folder'
    >
    files: Attribute.Relation<
    'plugin::upload.folder',
    'oneToMany',
    'plugin::upload.file'
    >
    path: Attribute.String &
    Attribute.Required &
    Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::upload.folder',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::upload.folder',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases'
  info: {
    singularName: 'release'
    pluralName: 'releases'
    displayName: 'Release'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    releasedAt: Attribute.DateTime
    scheduledAt: Attribute.DateTime
    timezone: Attribute.String
    status: Attribute.Enumeration<
    ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
    Attribute.Required
    actions: Attribute.Relation<
    'plugin::content-releases.release',
    'oneToMany',
    'plugin::content-releases.release-action'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::content-releases.release',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::content-releases.release',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions'
  info: {
    singularName: 'release-action'
    pluralName: 'release-actions'
    displayName: 'Release Action'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required
    entry: Attribute.Relation<
    'plugin::content-releases.release-action',
    'morphToOne'
    >
    contentType: Attribute.String & Attribute.Required
    locale: Attribute.String
    release: Attribute.Relation<
    'plugin::content-releases.release-action',
    'manyToOne',
    'plugin::content-releases.release'
    >
    isEntryValid: Attribute.Boolean
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::content-releases.release-action',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::content-releases.release-action',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs'
  info: {
    singularName: 'slug'
    pluralName: 'slugs'
    displayName: 'slug'
  }
  options: {
    draftAndPublish: false
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    slug: Attribute.Text
    count: Attribute.Integer
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::slugify.slug',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::slugify.slug',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions'
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String & Attribute.Required
    role: Attribute.Relation<
    'plugin::users-permissions.permission',
    'manyToOne',
    'plugin::users-permissions.role'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::users-permissions.permission',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::users-permissions.permission',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles'
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
    Attribute.Required &
    Attribute.SetMinMaxLength<{
      minLength: 3
    }>
    description: Attribute.String
    type: Attribute.String & Attribute.Unique
    permissions: Attribute.Relation<
    'plugin::users-permissions.role',
    'oneToMany',
    'plugin::users-permissions.permission'
    >
    users: Attribute.Relation<
    'plugin::users-permissions.role',
    'oneToMany',
    'plugin::users-permissions.user'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::users-permissions.role',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::users-permissions.role',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users'
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: Attribute.String &
    Attribute.Required &
    Attribute.Unique &
    Attribute.SetMinMaxLength<{
      minLength: 3
    }>
    email: Attribute.Email &
    Attribute.Required &
    Attribute.SetMinMaxLength<{
      minLength: 6
    }>
    provider: Attribute.String
    password: Attribute.Password &
    Attribute.Private &
    Attribute.SetMinMaxLength<{
      minLength: 6
    }>
    resetPasswordToken: Attribute.String & Attribute.Private
    confirmationToken: Attribute.String & Attribute.Private
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>
    role: Attribute.Relation<
    'plugin::users-permissions.user',
    'manyToOne',
    'plugin::users-permissions.role'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::users-permissions.user',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::users-permissions.user',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginNavigationAudience extends Schema.CollectionType {
  collectionName: 'audience'
  info: {
    singularName: 'audience'
    pluralName: 'audiences'
    displayName: 'Audience'
    name: 'audience'
  }
  options: {
    increments: true
    comment: 'Audience'
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    key: Attribute.UID<'plugin::navigation.audience', 'name'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::navigation.audience',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::navigation.audience',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginNavigationNavigation extends Schema.CollectionType {
  collectionName: 'navigations'
  info: {
    singularName: 'navigation'
    pluralName: 'navigations'
    displayName: 'Navigation'
    name: 'navigation'
  }
  options: {
    increments: true
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.Text & Attribute.Required
    slug: Attribute.UID & Attribute.Required
    visible: Attribute.Boolean & Attribute.DefaultTo<false>
    items: Attribute.Relation<
    'plugin::navigation.navigation',
    'oneToMany',
    'plugin::navigation.navigation-item'
    >
    localizations: Attribute.Relation<
    'plugin::navigation.navigation',
    'oneToMany',
    'plugin::navigation.navigation'
    >
    localeCode: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::navigation.navigation',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::navigation.navigation',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginNavigationNavigationItem extends Schema.CollectionType {
  collectionName: 'navigations_items'
  info: {
    singularName: 'navigation-item'
    pluralName: 'navigation-items'
    displayName: 'Navigation Item'
    name: 'navigation-item'
  }
  options: {
    increments: true
    timestamps: true
    comment: 'Navigation Item'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
    i18n: {
      localized: false
    }
  }
  attributes: {
    title: Attribute.Text &
    Attribute.Required &
    Attribute.SetPluginOptions<{
      i18n: {
        localized: false
      }
    }>
    type: Attribute.Enumeration<['INTERNAL', 'EXTERNAL', 'WRAPPER']> &
    Attribute.DefaultTo<'INTERNAL'>
    path: Attribute.Text
    externalPath: Attribute.Text
    uiRouterKey: Attribute.String
    menuAttached: Attribute.Boolean & Attribute.DefaultTo<false>
    order: Attribute.Integer & Attribute.DefaultTo<0>
    collapsed: Attribute.Boolean & Attribute.DefaultTo<false>
    related: Attribute.Relation<
    'plugin::navigation.navigation-item',
    'oneToOne',
    'plugin::navigation.navigations-items-related'
    >
    parent: Attribute.Relation<
    'plugin::navigation.navigation-item',
    'oneToOne',
    'plugin::navigation.navigation-item'
    >
    master: Attribute.Relation<
    'plugin::navigation.navigation-item',
    'manyToOne',
    'plugin::navigation.navigation'
    >
    audience: Attribute.Relation<
    'plugin::navigation.navigation-item',
    'oneToMany',
    'plugin::navigation.audience'
    >
    additionalFields: Attribute.JSON & Attribute.DefaultTo<{}>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::navigation.navigation-item',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::navigation.navigation-item',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginNavigationNavigationsItemsRelated
  extends Schema.CollectionType {
  collectionName: 'navigations_items_related'
  info: {
    singularName: 'navigations-items-related'
    pluralName: 'navigations-items-relateds'
    displayName: 'Navigations Items Related'
    name: 'navigations_items_related'
  }
  options: {
    increments: true
    timestamps: false
    populateCreatorFields: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
    i18n: {
      localized: false
    }
  }
  attributes: {
    related_id: Attribute.String & Attribute.Required
    related_type: Attribute.String & Attribute.Required
    field: Attribute.String & Attribute.Required
    order: Attribute.Integer & Attribute.Required
    master: Attribute.String & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::navigation.navigations-items-related',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::navigation.navigations-items-related',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface PluginSitemapSitemap extends Schema.CollectionType {
  collectionName: 'sitemap'
  info: {
    singularName: 'sitemap'
    pluralName: 'sitemaps'
    displayName: 'sitemap'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    sitemap_string: Attribute.Text & Attribute.Required
    name: Attribute.String &
    Attribute.Required &
    Attribute.DefaultTo<'default'>
    type: Attribute.Enumeration<['default_hreflang', 'index']> &
    Attribute.DefaultTo<'default_hreflang'>
    delta: Attribute.Integer & Attribute.DefaultTo<1>
    link_count: Attribute.Integer
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::sitemap.sitemap',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::sitemap.sitemap',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface PluginSitemapSitemapCache extends Schema.CollectionType {
  collectionName: 'sitemap_cache'
  info: {
    singularName: 'sitemap-cache'
    pluralName: 'sitemap-caches'
    displayName: 'sitemap-cache'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    sitemap_json: Attribute.JSON & Attribute.Required
    name: Attribute.String &
    Attribute.Required &
    Attribute.DefaultTo<'default'>
    sitemap_id: Attribute.Integer & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'plugin::sitemap.sitemap-cache',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'plugin::sitemap.sitemap-cache',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
  }
}

export interface ApiAboutPageAboutPage extends Schema.SingleType {
  collectionName: 'about_pages'
  info: {
    singularName: 'about-page'
    pluralName: 'about-pages'
    displayName: 'About Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Meta: Attribute.Component<'meta.page-meta'> & Attribute.Required
    Body: Attribute.DynamicZone<
    [
      'blocks.text-block',
      'blocks.big-banner',
      'blocks.small-banners-list',
      'blocks.separator',
      'blocks.text-boxes-list',
      'blocks.highlightbox',
      'blocks.icons-list'
    ]
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'api::about-page.about-page',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'api::about-page.about-page',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events'
  info: {
    singularName: 'event'
    pluralName: 'events'
    displayName: 'Event'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Name: Attribute.String & Attribute.Required
    Series: Attribute.Relation<
    'api::event.event',
    'manyToOne',
    'api::serie.serie'
    >
    Image: Attribute.Media & Attribute.Required
    Date: Attribute.DateTime & Attribute.Required
    EndDate: Attribute.DateTime
    Place: Attribute.String & Attribute.Required
    Pin: Attribute.Enumeration<
    [
      'Instituto Superior T\u00E9cnico',
      'Discord',
      'Instagram',
      'Largo Lu\u00EDs de Cam\u00F5es',
      'Online'
    ]
    > &
    Attribute.Required &
    Attribute.DefaultTo<'Instituto Superior T\u00E9cnico'>
    Description: Attribute.Blocks
    Link: Attribute.String & Attribute.Required
    Slug: Attribute.UID<'api::event.event', 'Name'> & Attribute.Required
    Body: Attribute.DynamicZone<
    [
      'blocks.big-banner',
      'blocks.highlightbox',
      'blocks.icons-list',
      'blocks.separator',
      'blocks.small-banners-list',
      'blocks.text-block',
      'blocks.text-boxes-list'
    ]
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'api::event.event',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'api::event.event',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface ApiEventPageEventPage extends Schema.SingleType {
  collectionName: 'events_pages'
  info: {
    singularName: 'event-page'
    pluralName: 'events-pages'
    displayName: 'Events Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Meta: Attribute.Component<'meta.page-meta'> & Attribute.Required
    Series: Attribute.Relation<
    'api::event-page.event-page',
    'oneToMany',
    'api::serie.serie'
    >
    Body: Attribute.DynamicZone<
    [
      'blocks.big-banner',
      'blocks.highlightbox',
      'blocks.icons-list',
      'blocks.separator',
      'blocks.small-banners-list',
      'blocks.text-block',
      'blocks.text-boxes-list'
    ]
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'api::event-page.event-page',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'api::event-page.event-page',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface ApiHubHub extends Schema.CollectionType {
  collectionName: 'hubs'
  info: {
    singularName: 'hub'
    pluralName: 'hubs'
    displayName: 'Hub'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Name: Attribute.String & Attribute.Required
    Slug: Attribute.UID<'api::hub.hub', 'Name'> & Attribute.Required
    Description: Attribute.Text & Attribute.Required
    Image: Attribute.Media & Attribute.Required
    BackgroundColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    TextColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    Logo: Attribute.Media
    ImageBackgroundColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    Body: Attribute.DynamicZone<
    [
      'blocks.big-banner',
      'blocks.text-block',
      'blocks.highlightbox',
      'blocks.separator',
      'blocks.icons-list',
      'blocks.text-boxes-list',
      'blocks.small-banners-list'
    ]
    >
    Series: Attribute.Relation<'api::hub.hub', 'oneToMany', 'api::serie.serie'>
    SeeMoreText: Attribute.String & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::hub.hub', 'oneToOne', 'admin::user'> &
    Attribute.Private
    updatedBy: Attribute.Relation<'api::hub.hub', 'oneToOne', 'admin::user'> &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface ApiMainPageMainPage extends Schema.SingleType {
  collectionName: 'main_pages'
  info: {
    singularName: 'main-page'
    pluralName: 'main-pages'
    displayName: 'Main Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Meta: Attribute.Component<'meta.page-meta'> & Attribute.Required
    Body: Attribute.DynamicZone<
    [
      'blocks.big-banner',
      'blocks.small-banners-list',
      'blocks.text-block',
      'blocks.highlightbox',
      'blocks.icons-list',
      'blocks.separator',
      'blocks.text-boxes-list'
    ]
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'api::main-page.main-page',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'api::main-page.main-page',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface ApiProjectPageProjectPage extends Schema.SingleType {
  collectionName: 'projects_pages'
  info: {
    singularName: 'project-page'
    pluralName: 'projects-pages'
    displayName: 'Projects Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Meta: Attribute.Component<'meta.page-meta'> & Attribute.Required
    Hubs: Attribute.Relation<
    'api::project-page.project-page',
    'oneToMany',
    'api::hub.hub'
    >
    Body: Attribute.DynamicZone<
    [
      'blocks.big-banner',
      'blocks.highlightbox',
      'blocks.separator',
      'blocks.small-banners-list',
      'blocks.text-block',
      'blocks.text-boxes-list',
      'blocks.icons-list'
    ]
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'api::project-page.project-page',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'api::project-page.project-page',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

export interface ApiSerieSerie extends Schema.CollectionType {
  collectionName: 'series'
  info: {
    singularName: 'serie'
    pluralName: 'series'
    displayName: 'Series'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Name: Attribute.String & Attribute.Required
    Slug: Attribute.UID<'api::serie.serie', 'Name'> & Attribute.Required
    Image: Attribute.Media & Attribute.Required
    Logo: Attribute.Media
    BackgroundColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    TextColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    Description: Attribute.Text & Attribute.Required
    Events: Attribute.Relation<
    'api::serie.serie',
    'oneToMany',
    'api::event.event'
    >
    SeeMoreText: Attribute.String
    Hub: Attribute.Relation<'api::serie.serie', 'manyToOne', 'api::hub.hub'>
    Body: Attribute.DynamicZone<
    [
      'blocks.big-banner',
      'blocks.highlightbox',
      'blocks.icons-list',
      'blocks.separator',
      'blocks.small-banners-list',
      'blocks.text-block',
      'blocks.text-boxes-list'
    ]
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
    'api::serie.serie',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    updatedBy: Attribute.Relation<
    'api::serie.serie',
    'oneToOne',
    'admin::user'
    > &
    Attribute.Private
    sitemap_exclude: Attribute.Boolean &
    Attribute.Private &
    Attribute.DefaultTo<false>
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'admin::transfer-token': AdminTransferToken
      'admin::transfer-token-permission': AdminTransferTokenPermission
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::content-releases.release': PluginContentReleasesRelease
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction
      'plugin::slugify.slug': PluginSlugifySlug
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'plugin::navigation.audience': PluginNavigationAudience
      'plugin::navigation.navigation': PluginNavigationNavigation
      'plugin::navigation.navigation-item': PluginNavigationNavigationItem
      'plugin::navigation.navigations-items-related': PluginNavigationNavigationsItemsRelated
      'plugin::sitemap.sitemap': PluginSitemapSitemap
      'plugin::sitemap.sitemap-cache': PluginSitemapSitemapCache
      'api::about-page.about-page': ApiAboutPageAboutPage
      'api::event.event': ApiEventEvent
      'api::event-page.event-page': ApiEventPageEventPage
      'api::hub.hub': ApiHubHub
      'api::main-page.main-page': ApiMainPageMainPage
      'api::project-page.project-page': ApiProjectPageProjectPage
      'api::serie.serie': ApiSerieSerie
    }
  }
}
