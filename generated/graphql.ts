import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  GenericScalar: any;
  JSONString: any;
  Metadata: any;
  PositiveDecimal: any;
  UUID: any;
  Upload: any;
  WeightScalar: any;
  _Any: any;
};

export type AccountAddressCreate = {
  __typename?: 'AccountAddressCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountAddressDelete = {
  __typename?: 'AccountAddressDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountAddressUpdate = {
  __typename?: 'AccountAddressUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountDelete = {
  __typename?: 'AccountDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountError = {
  __typename?: 'AccountError';
  addressType?: Maybe<AddressTypeEnum>;
  code: AccountErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum AccountErrorCode {
  AccountNotConfirmed = 'ACCOUNT_NOT_CONFIRMED',
  ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
  ChannelInactive = 'CHANNEL_INACTIVE',
  DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
  DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
  DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidPassword = 'INVALID_PASSWORD',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  NotFound = 'NOT_FOUND',
  OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
  PasswordTooCommon = 'PASSWORD_TOO_COMMON',
  PasswordTooShort = 'PASSWORD_TOO_SHORT',
  PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AccountInput = {
  defaultBillingAddress?: InputMaybe<AddressInput>;
  defaultShippingAddress?: InputMaybe<AddressInput>;
  firstName?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type AccountRegister = {
  __typename?: 'AccountRegister';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  requiresConfirmation?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};

export type AccountRegisterInput = {
  channel?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  password: Scalars['String'];
  redirectUrl?: InputMaybe<Scalars['String']>;
};

export type AccountRequestDeletion = {
  __typename?: 'AccountRequestDeletion';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type AccountSetDefaultAddress = {
  __typename?: 'AccountSetDefaultAddress';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountUpdate = {
  __typename?: 'AccountUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type Address = Node & {
  __typename?: 'Address';
  city: Scalars['String'];
  cityArea: Scalars['String'];
  companyName: Scalars['String'];
  country: CountryDisplay;
  countryArea: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isDefaultBillingAddress?: Maybe<Scalars['Boolean']>;
  isDefaultShippingAddress?: Maybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
};

export type AddressCreate = {
  __typename?: 'AddressCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AddressCreated = Event & {
  __typename?: 'AddressCreated';
  address?: Maybe<Address>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AddressDelete = {
  __typename?: 'AddressDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AddressDeleted = Event & {
  __typename?: 'AddressDeleted';
  address?: Maybe<Address>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  cityArea?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<CountryCode>;
  countryArea?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  streetAddress1?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
};

export type AddressSetDefault = {
  __typename?: 'AddressSetDefault';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export enum AddressTypeEnum {
  Billing = 'BILLING',
  Shipping = 'SHIPPING'
}

export type AddressUpdate = {
  __typename?: 'AddressUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AddressUpdated = Event & {
  __typename?: 'AddressUpdated';
  address?: Maybe<Address>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AddressValidationData = {
  __typename?: 'AddressValidationData';
  addressFormat: Scalars['String'];
  addressLatinFormat: Scalars['String'];
  allowedFields: Array<Scalars['String']>;
  cityAreaChoices: Array<ChoiceValue>;
  cityAreaType: Scalars['String'];
  cityChoices: Array<ChoiceValue>;
  cityType: Scalars['String'];
  countryAreaChoices: Array<ChoiceValue>;
  countryAreaType: Scalars['String'];
  countryCode: Scalars['String'];
  countryName: Scalars['String'];
  postalCodeExamples: Array<Scalars['String']>;
  postalCodeMatchers: Array<Scalars['String']>;
  postalCodePrefix: Scalars['String'];
  postalCodeType: Scalars['String'];
  requiredFields: Array<Scalars['String']>;
  upperFields: Array<Scalars['String']>;
};

export type Allocation = Node & {
  __typename?: 'Allocation';
  id: Scalars['ID'];
  quantity: Scalars['Int'];
  warehouse: Warehouse;
};

export enum AllocationStrategyEnum {
  PrioritizeHighStock = 'PRIORITIZE_HIGH_STOCK',
  PrioritizeSortingOrder = 'PRIORITIZE_SORTING_ORDER'
}

export type App = Node & ObjectWithMetadata & {
  __typename?: 'App';
  aboutApp?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  appUrl?: Maybe<Scalars['String']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead. */
  configurationUrl?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead. */
  dataPrivacy?: Maybe<Scalars['String']>;
  dataPrivacyUrl?: Maybe<Scalars['String']>;
  extensions: Array<AppExtension>;
  homepageUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  manifestUrl?: Maybe<Scalars['String']>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permission>>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  supportUrl?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<AppToken>>;
  type?: Maybe<AppTypeEnum>;
  version?: Maybe<Scalars['String']>;
  webhooks?: Maybe<Array<Webhook>>;
};


export type AppMetafieldArgs = {
  key: Scalars['String'];
};


export type AppMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type AppPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type AppPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type AppActivate = {
  __typename?: 'AppActivate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

export type AppCountableConnection = {
  __typename?: 'AppCountableConnection';
  edges: Array<AppCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AppCountableEdge = {
  __typename?: 'AppCountableEdge';
  cursor: Scalars['String'];
  node: App;
};

export type AppCreate = {
  __typename?: 'AppCreate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  authToken?: Maybe<Scalars['String']>;
  errors: Array<AppError>;
};

export type AppDeactivate = {
  __typename?: 'AppDeactivate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

export type AppDelete = {
  __typename?: 'AppDelete';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

export type AppDeleteFailedInstallation = {
  __typename?: 'AppDeleteFailedInstallation';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppDeleted = Event & {
  __typename?: 'AppDeleted';
  app?: Maybe<App>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AppError = {
  __typename?: 'AppError';
  code: AppErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<PermissionEnum>>;
};

export enum AppErrorCode {
  Forbidden = 'FORBIDDEN',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
  InvalidPermission = 'INVALID_PERMISSION',
  InvalidStatus = 'INVALID_STATUS',
  InvalidUrlFormat = 'INVALID_URL_FORMAT',
  ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
  NotFound = 'NOT_FOUND',
  OutOfScopeApp = 'OUT_OF_SCOPE_APP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AppExtension = Node & {
  __typename?: 'AppExtension';
  accessToken?: Maybe<Scalars['String']>;
  app: App;
  id: Scalars['ID'];
  label: Scalars['String'];
  mount: AppExtensionMountEnum;
  permissions: Array<Permission>;
  target: AppExtensionTargetEnum;
  url: Scalars['String'];
};

export type AppExtensionCountableConnection = {
  __typename?: 'AppExtensionCountableConnection';
  edges: Array<AppExtensionCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AppExtensionCountableEdge = {
  __typename?: 'AppExtensionCountableEdge';
  cursor: Scalars['String'];
  node: AppExtension;
};

export type AppExtensionFilterInput = {
  mount?: InputMaybe<Array<AppExtensionMountEnum>>;
  target?: InputMaybe<AppExtensionTargetEnum>;
};

export enum AppExtensionMountEnum {
  CustomerDetailsMoreActions = 'CUSTOMER_DETAILS_MORE_ACTIONS',
  CustomerOverviewCreate = 'CUSTOMER_OVERVIEW_CREATE',
  CustomerOverviewMoreActions = 'CUSTOMER_OVERVIEW_MORE_ACTIONS',
  NavigationCatalog = 'NAVIGATION_CATALOG',
  NavigationCustomers = 'NAVIGATION_CUSTOMERS',
  NavigationDiscounts = 'NAVIGATION_DISCOUNTS',
  NavigationOrders = 'NAVIGATION_ORDERS',
  NavigationPages = 'NAVIGATION_PAGES',
  NavigationTranslations = 'NAVIGATION_TRANSLATIONS',
  OrderDetailsMoreActions = 'ORDER_DETAILS_MORE_ACTIONS',
  OrderOverviewCreate = 'ORDER_OVERVIEW_CREATE',
  OrderOverviewMoreActions = 'ORDER_OVERVIEW_MORE_ACTIONS',
  ProductDetailsMoreActions = 'PRODUCT_DETAILS_MORE_ACTIONS',
  ProductOverviewCreate = 'PRODUCT_OVERVIEW_CREATE',
  ProductOverviewMoreActions = 'PRODUCT_OVERVIEW_MORE_ACTIONS'
}

export enum AppExtensionTargetEnum {
  AppPage = 'APP_PAGE',
  Popup = 'POPUP'
}

export type AppFetchManifest = {
  __typename?: 'AppFetchManifest';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  manifest?: Maybe<Manifest>;
};

export type AppFilterInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AppTypeEnum>;
};

export type AppInput = {
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<PermissionEnum>>;
};

export type AppInstall = {
  __typename?: 'AppInstall';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppInstallInput = {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']>;
  appName?: InputMaybe<Scalars['String']>;
  manifestUrl?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<PermissionEnum>>;
};

export type AppInstallation = Job & Node & {
  __typename?: 'AppInstallation';
  appName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  manifestUrl: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime'];
};

export type AppInstalled = Event & {
  __typename?: 'AppInstalled';
  app?: Maybe<App>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AppManifestExtension = {
  __typename?: 'AppManifestExtension';
  label: Scalars['String'];
  mount: AppExtensionMountEnum;
  permissions: Array<Permission>;
  target: AppExtensionTargetEnum;
  url: Scalars['String'];
};

export type AppManifestWebhook = {
  __typename?: 'AppManifestWebhook';
  asyncEvents?: Maybe<Array<WebhookEventTypeAsyncEnum>>;
  name: Scalars['String'];
  query: Scalars['String'];
  syncEvents?: Maybe<Array<WebhookEventTypeSyncEnum>>;
  targetUrl: Scalars['String'];
};

export type AppRetryInstall = {
  __typename?: 'AppRetryInstall';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export enum AppSortField {
  CreationDate = 'CREATION_DATE',
  Name = 'NAME'
}

export type AppSortingInput = {
  direction: OrderDirection;
  field: AppSortField;
};

export type AppStatusChanged = Event & {
  __typename?: 'AppStatusChanged';
  app?: Maybe<App>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AppToken = Node & {
  __typename?: 'AppToken';
  authToken?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type AppTokenCreate = {
  __typename?: 'AppTokenCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  authToken?: Maybe<Scalars['String']>;
  errors: Array<AppError>;
};

export type AppTokenDelete = {
  __typename?: 'AppTokenDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  errors: Array<AppError>;
};

export type AppTokenInput = {
  app: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type AppTokenVerify = {
  __typename?: 'AppTokenVerify';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  valid: Scalars['Boolean'];
};

export enum AppTypeEnum {
  Local = 'LOCAL',
  Thirdparty = 'THIRDPARTY'
}

export type AppUpdate = {
  __typename?: 'AppUpdate';
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

export type AppUpdated = Event & {
  __typename?: 'AppUpdated';
  app?: Maybe<App>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export enum AreaUnitsEnum {
  SqCm = 'SQ_CM',
  SqFt = 'SQ_FT',
  SqInch = 'SQ_INCH',
  SqKm = 'SQ_KM',
  SqM = 'SQ_M',
  SqYd = 'SQ_YD'
}

export type AssignNavigation = {
  __typename?: 'AssignNavigation';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type AssignedVariantAttribute = {
  __typename?: 'AssignedVariantAttribute';
  attribute: Attribute;
  variantSelection: Scalars['Boolean'];
};

export type Attribute = Node & ObjectWithMetadata & {
  __typename?: 'Attribute';
  availableInGrid: Scalars['Boolean'];
  choices?: Maybe<AttributeValueCountableConnection>;
  entityType?: Maybe<AttributeEntityTypeEnum>;
  filterableInDashboard: Scalars['Boolean'];
  filterableInStorefront: Scalars['Boolean'];
  id: Scalars['ID'];
  inputType?: Maybe<AttributeInputTypeEnum>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name?: Maybe<Scalars['String']>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  productTypes: ProductTypeCountableConnection;
  productVariantTypes: ProductTypeCountableConnection;
  slug?: Maybe<Scalars['String']>;
  storefrontSearchPosition: Scalars['Int'];
  translation?: Maybe<AttributeTranslation>;
  type?: Maybe<AttributeTypeEnum>;
  unit?: Maybe<MeasurementUnitsEnum>;
  valueRequired: Scalars['Boolean'];
  visibleInStorefront: Scalars['Boolean'];
  withChoices: Scalars['Boolean'];
};


export type AttributeChoicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttributeValueFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<AttributeChoicesSortingInput>;
};


export type AttributeMetafieldArgs = {
  key: Scalars['String'];
};


export type AttributeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type AttributePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type AttributePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type AttributeProductTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AttributeProductVariantTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeBulkDelete = {
  __typename?: 'AttributeBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  count: Scalars['Int'];
  errors: Array<AttributeError>;
};

export enum AttributeChoicesSortField {
  Name = 'NAME',
  Slug = 'SLUG'
}

export type AttributeChoicesSortingInput = {
  direction: OrderDirection;
  field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
  __typename?: 'AttributeCountableConnection';
  edges: Array<AttributeCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeCountableEdge = {
  __typename?: 'AttributeCountableEdge';
  cursor: Scalars['String'];
  node: Attribute;
};

export type AttributeCreate = {
  __typename?: 'AttributeCreate';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeCreateInput = {
  availableInGrid?: InputMaybe<Scalars['Boolean']>;
  entityType?: InputMaybe<AttributeEntityTypeEnum>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
  inputType?: InputMaybe<AttributeInputTypeEnum>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
  storefrontSearchPosition?: InputMaybe<Scalars['Int']>;
  type: AttributeTypeEnum;
  unit?: InputMaybe<MeasurementUnitsEnum>;
  valueRequired?: InputMaybe<Scalars['Boolean']>;
  values?: InputMaybe<Array<AttributeValueCreateInput>>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeCreated = Event & {
  __typename?: 'AttributeCreated';
  attribute?: Maybe<Attribute>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AttributeDelete = {
  __typename?: 'AttributeDelete';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeDeleted = Event & {
  __typename?: 'AttributeDeleted';
  attribute?: Maybe<Attribute>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export enum AttributeEntityTypeEnum {
  Page = 'PAGE',
  Product = 'PRODUCT'
}

export type AttributeError = {
  __typename?: 'AttributeError';
  code: AttributeErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum AttributeErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AttributeFilterInput = {
  availableInGrid?: InputMaybe<Scalars['Boolean']>;
  channel?: InputMaybe<Scalars['String']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  inCategory?: InputMaybe<Scalars['ID']>;
  inCollection?: InputMaybe<Scalars['ID']>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AttributeTypeEnum>;
  valueRequired?: InputMaybe<Scalars['Boolean']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeInput = {
  boolean?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<DateRangeInput>;
  dateTime?: InputMaybe<DateTimeRangeInput>;
  slug: Scalars['String'];
  values?: InputMaybe<Array<Scalars['String']>>;
  valuesRange?: InputMaybe<IntRangeInput>;
};

export enum AttributeInputTypeEnum {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Dropdown = 'DROPDOWN',
  File = 'FILE',
  Multiselect = 'MULTISELECT',
  Numeric = 'NUMERIC',
  PlainText = 'PLAIN_TEXT',
  Reference = 'REFERENCE',
  RichText = 'RICH_TEXT',
  Swatch = 'SWATCH'
}

export type AttributeReorderValues = {
  __typename?: 'AttributeReorderValues';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export enum AttributeSortField {
  AvailableInGrid = 'AVAILABLE_IN_GRID',
  FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
  FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
  IsVariantOnly = 'IS_VARIANT_ONLY',
  Name = 'NAME',
  Slug = 'SLUG',
  StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
  ValueRequired = 'VALUE_REQUIRED',
  VisibleInStorefront = 'VISIBLE_IN_STOREFRONT'
}

export type AttributeSortingInput = {
  direction: OrderDirection;
  field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
  __typename?: 'AttributeTranslatableContent';
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  attribute?: Maybe<Attribute>;
  id: Scalars['ID'];
  name: Scalars['String'];
  translation?: Maybe<AttributeTranslation>;
};


export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeTranslate = {
  __typename?: 'AttributeTranslate';
  attribute?: Maybe<Attribute>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type AttributeTranslation = Node & {
  __typename?: 'AttributeTranslation';
  id: Scalars['ID'];
  language: LanguageDisplay;
  name: Scalars['String'];
};

export enum AttributeTypeEnum {
  PageType = 'PAGE_TYPE',
  ProductType = 'PRODUCT_TYPE'
}

export type AttributeUpdate = {
  __typename?: 'AttributeUpdate';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeUpdateInput = {
  addValues?: InputMaybe<Array<AttributeValueUpdateInput>>;
  availableInGrid?: InputMaybe<Scalars['Boolean']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  removeValues?: InputMaybe<Array<Scalars['ID']>>;
  slug?: InputMaybe<Scalars['String']>;
  storefrontSearchPosition?: InputMaybe<Scalars['Int']>;
  unit?: InputMaybe<MeasurementUnitsEnum>;
  valueRequired?: InputMaybe<Scalars['Boolean']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeUpdated = Event & {
  __typename?: 'AttributeUpdated';
  attribute?: Maybe<Attribute>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AttributeValue = Node & {
  __typename?: 'AttributeValue';
  boolean?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  file?: Maybe<File>;
  id: Scalars['ID'];
  inputType?: Maybe<AttributeInputTypeEnum>;
  name?: Maybe<Scalars['String']>;
  plainText?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['ID']>;
  richText?: Maybe<Scalars['JSONString']>;
  slug?: Maybe<Scalars['String']>;
  translation?: Maybe<AttributeValueTranslation>;
  value?: Maybe<Scalars['String']>;
};


export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeValueBulkDelete = {
  __typename?: 'AttributeValueBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  count: Scalars['Int'];
  errors: Array<AttributeError>;
};

export type AttributeValueCountableConnection = {
  __typename?: 'AttributeValueCountableConnection';
  edges: Array<AttributeValueCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeValueCountableEdge = {
  __typename?: 'AttributeValueCountableEdge';
  cursor: Scalars['String'];
  node: AttributeValue;
};

export type AttributeValueCreate = {
  __typename?: 'AttributeValueCreate';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueCreateInput = {
  contentType?: InputMaybe<Scalars['String']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  plainText?: InputMaybe<Scalars['String']>;
  richText?: InputMaybe<Scalars['JSONString']>;
  value?: InputMaybe<Scalars['String']>;
};

export type AttributeValueCreated = Event & {
  __typename?: 'AttributeValueCreated';
  attributeValue?: Maybe<AttributeValue>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AttributeValueDelete = {
  __typename?: 'AttributeValueDelete';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueDeleted = Event & {
  __typename?: 'AttributeValueDeleted';
  attributeValue?: Maybe<AttributeValue>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type AttributeValueFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type AttributeValueInput = {
  boolean?: InputMaybe<Scalars['Boolean']>;
  contentType?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  file?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  plainText?: InputMaybe<Scalars['String']>;
  references?: InputMaybe<Array<Scalars['ID']>>;
  richText?: InputMaybe<Scalars['JSONString']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type AttributeValueTranslatableContent = Node & {
  __typename?: 'AttributeValueTranslatableContent';
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  attributeValue?: Maybe<AttributeValue>;
  id: Scalars['ID'];
  name: Scalars['String'];
  plainText?: Maybe<Scalars['String']>;
  richText?: Maybe<Scalars['JSONString']>;
  translation?: Maybe<AttributeValueTranslation>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeValueTranslate = {
  __typename?: 'AttributeValueTranslate';
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type AttributeValueTranslation = Node & {
  __typename?: 'AttributeValueTranslation';
  id: Scalars['ID'];
  language: LanguageDisplay;
  name: Scalars['String'];
  plainText?: Maybe<Scalars['String']>;
  richText?: Maybe<Scalars['JSONString']>;
};

export type AttributeValueTranslationInput = {
  name?: InputMaybe<Scalars['String']>;
  plainText?: InputMaybe<Scalars['String']>;
  richText?: InputMaybe<Scalars['JSONString']>;
};

export type AttributeValueUpdate = {
  __typename?: 'AttributeValueUpdate';
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueUpdateInput = {
  contentType?: InputMaybe<Scalars['String']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plainText?: InputMaybe<Scalars['String']>;
  richText?: InputMaybe<Scalars['JSONString']>;
  value?: InputMaybe<Scalars['String']>;
};

export type AttributeValueUpdated = Event & {
  __typename?: 'AttributeValueUpdated';
  attributeValue?: Maybe<AttributeValue>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type BulkAttributeValueInput = {
  boolean?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type BulkProductError = {
  __typename?: 'BulkProductError';
  attributes?: Maybe<Array<Scalars['ID']>>;
  channels?: Maybe<Array<Scalars['ID']>>;
  code: ProductErrorCode;
  field?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['ID']>>;
  warehouses?: Maybe<Array<Scalars['ID']>>;
};

export type BulkStockError = {
  __typename?: 'BulkStockError';
  attributes?: Maybe<Array<Scalars['ID']>>;
  code: ProductErrorCode;
  field?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['ID']>>;
};

export type CardInput = {
  code: Scalars['String'];
  cvc?: InputMaybe<Scalars['String']>;
  money: MoneyInput;
};

export type CatalogueInput = {
  categories?: InputMaybe<Array<Scalars['ID']>>;
  collections?: InputMaybe<Array<Scalars['ID']>>;
  products?: InputMaybe<Array<Scalars['ID']>>;
  variants?: InputMaybe<Array<Scalars['ID']>>;
};

export type Category = Node & ObjectWithMetadata & {
  __typename?: 'Category';
  ancestors?: Maybe<CategoryCountableConnection>;
  backgroundImage?: Maybe<Image>;
  children?: Maybe<CategoryCountableConnection>;
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  level: Scalars['Int'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  parent?: Maybe<Category>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  products?: Maybe<ProductCountableConnection>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  translation?: Maybe<CategoryTranslation>;
};


export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CategoryBackgroundImageArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']>;
};


export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CategoryMetafieldArgs = {
  key: Scalars['String'];
};


export type CategoryMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type CategoryPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type CategoryPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CategoryBulkDelete = {
  __typename?: 'CategoryBulkDelete';
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryCountableConnection = {
  __typename?: 'CategoryCountableConnection';
  edges: Array<CategoryCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryCountableEdge = {
  __typename?: 'CategoryCountableEdge';
  cursor: Scalars['String'];
  node: Category;
};

export type CategoryCreate = {
  __typename?: 'CategoryCreate';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryCreated = Event & {
  __typename?: 'CategoryCreated';
  category?: Maybe<Category>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type CategoryDelete = {
  __typename?: 'CategoryDelete';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryDeleted = Event & {
  __typename?: 'CategoryDeleted';
  category?: Maybe<Category>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type CategoryFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
};

export type CategoryInput = {
  backgroundImage?: InputMaybe<Scalars['Upload']>;
  backgroundImageAlt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSONString']>;
  name?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum CategorySortField {
  Name = 'NAME',
  ProductCount = 'PRODUCT_COUNT',
  SubcategoryCount = 'SUBCATEGORY_COUNT'
}

export type CategorySortingInput = {
  channel?: InputMaybe<Scalars['String']>;
  direction: OrderDirection;
  field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
  __typename?: 'CategoryTranslatableContent';
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  category?: Maybe<Category>;
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  translation?: Maybe<CategoryTranslation>;
};


export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CategoryTranslate = {
  __typename?: 'CategoryTranslate';
  category?: Maybe<Category>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type CategoryTranslation = Node & {
  __typename?: 'CategoryTranslation';
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

export type CategoryUpdate = {
  __typename?: 'CategoryUpdate';
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryUpdated = Event & {
  __typename?: 'CategoryUpdated';
  category?: Maybe<Category>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  availableShippingMethodsPerCountry?: Maybe<Array<ShippingMethodsPerCountry>>;
  countries?: Maybe<Array<CountryDisplay>>;
  currencyCode: Scalars['String'];
  defaultCountry: CountryDisplay;
  hasOrders: Scalars['Boolean'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  slug: Scalars['String'];
  stockSettings: StockSettings;
  warehouses: Array<Warehouse>;
};


export type ChannelAvailableShippingMethodsPerCountryArgs = {
  countries?: InputMaybe<Array<CountryCode>>;
};

export type ChannelActivate = {
  __typename?: 'ChannelActivate';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelCreate = {
  __typename?: 'ChannelCreate';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelCreateInput = {
  addShippingZones?: InputMaybe<Array<Scalars['ID']>>;
  addWarehouses?: InputMaybe<Array<Scalars['ID']>>;
  currencyCode: Scalars['String'];
  defaultCountry: CountryCode;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  stockSettings?: InputMaybe<StockSettingsInput>;
};

export type ChannelCreated = Event & {
  __typename?: 'ChannelCreated';
  channel?: Maybe<Channel>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type ChannelDeactivate = {
  __typename?: 'ChannelDeactivate';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelDelete = {
  __typename?: 'ChannelDelete';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelDeleteInput = {
  channelId: Scalars['ID'];
};

export type ChannelDeleted = Event & {
  __typename?: 'ChannelDeleted';
  channel?: Maybe<Channel>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type ChannelError = {
  __typename?: 'ChannelError';
  code: ChannelErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  shippingZones?: Maybe<Array<Scalars['ID']>>;
  warehouses?: Maybe<Array<Scalars['ID']>>;
};

export enum ChannelErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  ChannelsCurrencyMustBeTheSame = 'CHANNELS_CURRENCY_MUST_BE_THE_SAME',
  ChannelWithOrders = 'CHANNEL_WITH_ORDERS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ChannelReorderWarehouses = {
  __typename?: 'ChannelReorderWarehouses';
  channel?: Maybe<Channel>;
  errors: Array<ChannelError>;
};

export type ChannelStatusChanged = Event & {
  __typename?: 'ChannelStatusChanged';
  channel?: Maybe<Channel>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type ChannelUpdate = {
  __typename?: 'ChannelUpdate';
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelUpdateInput = {
  addShippingZones?: InputMaybe<Array<Scalars['ID']>>;
  addWarehouses?: InputMaybe<Array<Scalars['ID']>>;
  defaultCountry?: InputMaybe<CountryCode>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  removeShippingZones?: InputMaybe<Array<Scalars['ID']>>;
  removeWarehouses?: InputMaybe<Array<Scalars['ID']>>;
  slug?: InputMaybe<Scalars['String']>;
  stockSettings?: InputMaybe<StockSettingsInput>;
};

export type ChannelUpdated = Event & {
  __typename?: 'ChannelUpdated';
  channel?: Maybe<Channel>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type Checkout = Node & ObjectWithMetadata & {
  __typename?: 'Checkout';
  availableCollectionPoints: Array<Warehouse>;
  availablePaymentGateways: Array<PaymentGateway>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead. */
  availableShippingMethods: Array<ShippingMethod>;
  billingAddress?: Maybe<Address>;
  channel: Channel;
  created: Scalars['DateTime'];
  deliveryMethod?: Maybe<DeliveryMethod>;
  discount?: Maybe<Money>;
  discountName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  giftCards: Array<GiftCard>;
  id: Scalars['ID'];
  isShippingRequired: Scalars['Boolean'];
  languageCode: LanguageCodeEnum;
  lastChange: Scalars['DateTime'];
  lines: Array<CheckoutLine>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  note: Scalars['String'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  quantity: Scalars['Int'];
  shippingAddress?: Maybe<Address>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead. */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods: Array<ShippingMethod>;
  shippingPrice: TaxedMoney;
  stockReservationExpires?: Maybe<Scalars['DateTime']>;
  subtotalPrice: TaxedMoney;
  token: Scalars['UUID'];
  totalPrice: TaxedMoney;
  transactions?: Maybe<Array<TransactionItem>>;
  translatedDiscountName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  voucherCode?: Maybe<Scalars['String']>;
};


export type CheckoutMetafieldArgs = {
  key: Scalars['String'];
};


export type CheckoutMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type CheckoutPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type CheckoutPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type CheckoutAddPromoCode = {
  __typename?: 'CheckoutAddPromoCode';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutAddressValidationRules = {
  checkFieldsFormat?: InputMaybe<Scalars['Boolean']>;
  checkRequiredFields?: InputMaybe<Scalars['Boolean']>;
  enableFieldsNormalization?: InputMaybe<Scalars['Boolean']>;
};

export type CheckoutBillingAddressUpdate = {
  __typename?: 'CheckoutBillingAddressUpdate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutComplete = {
  __typename?: 'CheckoutComplete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  confirmationData?: Maybe<Scalars['JSONString']>;
  confirmationNeeded: Scalars['Boolean'];
  errors: Array<CheckoutError>;
  order?: Maybe<Order>;
};

export type CheckoutCountableConnection = {
  __typename?: 'CheckoutCountableConnection';
  edges: Array<CheckoutCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutCountableEdge = {
  __typename?: 'CheckoutCountableEdge';
  cursor: Scalars['String'];
  node: Checkout;
};

export type CheckoutCreate = {
  __typename?: 'CheckoutCreate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated This field will be removed in Saleor 4.0. Always returns `true`. */
  created?: Maybe<Scalars['Boolean']>;
  errors: Array<CheckoutError>;
};

export type CheckoutCreateInput = {
  billingAddress?: InputMaybe<AddressInput>;
  channel?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
  lines: Array<CheckoutLineInput>;
  shippingAddress?: InputMaybe<AddressInput>;
  validationRules?: InputMaybe<CheckoutValidationRules>;
};

export type CheckoutCreated = Event & {
  __typename?: 'CheckoutCreated';
  checkout?: Maybe<Checkout>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type CheckoutCustomerAttach = {
  __typename?: 'CheckoutCustomerAttach';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutCustomerDetach = {
  __typename?: 'CheckoutCustomerDetach';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutDeliveryMethodUpdate = {
  __typename?: 'CheckoutDeliveryMethodUpdate';
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

export type CheckoutEmailUpdate = {
  __typename?: 'CheckoutEmailUpdate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutError = {
  __typename?: 'CheckoutError';
  addressType?: Maybe<AddressTypeEnum>;
  code: CheckoutErrorCode;
  field?: Maybe<Scalars['String']>;
  lines?: Maybe<Array<Scalars['ID']>>;
  message?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Scalars['ID']>>;
};

export enum CheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
  DeliveryMethodNotApplicable = 'DELIVERY_METHOD_NOT_APPLICABLE',
  EmailNotSet = 'EMAIL_NOT_SET',
  GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  NotFound = 'NOT_FOUND',
  NoLines = 'NO_LINES',
  PaymentError = 'PAYMENT_ERROR',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
  TaxError = 'TAX_ERROR',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  Unique = 'UNIQUE',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY'
}

export type CheckoutFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
};

export type CheckoutFilterShippingMethods = Event & {
  __typename?: 'CheckoutFilterShippingMethods';
  checkout?: Maybe<Checkout>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  shippingMethods?: Maybe<Array<ShippingMethod>>;
  version?: Maybe<Scalars['String']>;
};

export type CheckoutLanguageCodeUpdate = {
  __typename?: 'CheckoutLanguageCodeUpdate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutLine = Node & ObjectWithMetadata & {
  __typename?: 'CheckoutLine';
  id: Scalars['ID'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  quantity: Scalars['Int'];
  requiresShipping: Scalars['Boolean'];
  totalPrice: TaxedMoney;
  undiscountedTotalPrice: Money;
  undiscountedUnitPrice: Money;
  unitPrice: TaxedMoney;
  variant: ProductVariant;
};


export type CheckoutLineMetafieldArgs = {
  key: Scalars['String'];
};


export type CheckoutLineMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type CheckoutLinePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type CheckoutLinePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type CheckoutLineCountableConnection = {
  __typename?: 'CheckoutLineCountableConnection';
  edges: Array<CheckoutLineCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutLineCountableEdge = {
  __typename?: 'CheckoutLineCountableEdge';
  cursor: Scalars['String'];
  node: CheckoutLine;
};

export type CheckoutLineDelete = {
  __typename?: 'CheckoutLineDelete';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutLineInput = {
  forceNewLine?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['PositiveDecimal']>;
  quantity: Scalars['Int'];
  variantId: Scalars['ID'];
};

export type CheckoutLineUpdateInput = {
  lineId?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['PositiveDecimal']>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type CheckoutLinesAdd = {
  __typename?: 'CheckoutLinesAdd';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutLinesDelete = {
  __typename?: 'CheckoutLinesDelete';
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

export type CheckoutLinesUpdate = {
  __typename?: 'CheckoutLinesUpdate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutPaymentCreate = {
  __typename?: 'CheckoutPaymentCreate';
  checkout?: Maybe<Checkout>;
  errors: Array<PaymentError>;
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type CheckoutRemovePromoCode = {
  __typename?: 'CheckoutRemovePromoCode';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutShippingAddressUpdate = {
  __typename?: 'CheckoutShippingAddressUpdate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutShippingMethodUpdate = {
  __typename?: 'CheckoutShippingMethodUpdate';
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export enum CheckoutSortField {
  CreationDate = 'CREATION_DATE',
  Customer = 'CUSTOMER',
  Payment = 'PAYMENT'
}

export type CheckoutSortingInput = {
  direction: OrderDirection;
  field: CheckoutSortField;
};

export type CheckoutUpdated = Event & {
  __typename?: 'CheckoutUpdated';
  checkout?: Maybe<Checkout>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type CheckoutValidationRules = {
  billingAddress?: InputMaybe<CheckoutAddressValidationRules>;
  shippingAddress?: InputMaybe<CheckoutAddressValidationRules>;
};

export type ChoiceValue = {
  __typename?: 'ChoiceValue';
  raw?: Maybe<Scalars['String']>;
  verbose?: Maybe<Scalars['String']>;
};

export type Collection = Node & ObjectWithMetadata & {
  __typename?: 'Collection';
  backgroundImage?: Maybe<Image>;
  channel?: Maybe<Scalars['String']>;
  channelListings?: Maybe<Array<CollectionChannelListing>>;
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  products?: Maybe<ProductCountableConnection>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  translation?: Maybe<CollectionTranslation>;
};


export type CollectionBackgroundImageArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']>;
};


export type CollectionMetafieldArgs = {
  key: Scalars['String'];
};


export type CollectionMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type CollectionPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type CollectionPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductOrder>;
};


export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CollectionAddProducts = {
  __typename?: 'CollectionAddProducts';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionBulkDelete = {
  __typename?: 'CollectionBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  count: Scalars['Int'];
  errors: Array<CollectionError>;
};

export type CollectionChannelListing = Node & {
  __typename?: 'CollectionChannelListing';
  channel: Channel;
  id: Scalars['ID'];
  isPublished: Scalars['Boolean'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionChannelListingError = {
  __typename?: 'CollectionChannelListingError';
  attributes?: Maybe<Array<Scalars['ID']>>;
  channels?: Maybe<Array<Scalars['ID']>>;
  code: ProductErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['ID']>>;
};

export type CollectionChannelListingUpdate = {
  __typename?: 'CollectionChannelListingUpdate';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionChannelListingErrors: Array<CollectionChannelListingError>;
  errors: Array<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
  addChannels?: InputMaybe<Array<PublishableChannelListingInput>>;
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type CollectionCountableConnection = {
  __typename?: 'CollectionCountableConnection';
  edges: Array<CollectionCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionCountableEdge = {
  __typename?: 'CollectionCountableEdge';
  cursor: Scalars['String'];
  node: Collection;
};

export type CollectionCreate = {
  __typename?: 'CollectionCreate';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionCreateInput = {
  backgroundImage?: InputMaybe<Scalars['Upload']>;
  backgroundImageAlt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSONString']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<Scalars['ID']>>;
  publicationDate?: InputMaybe<Scalars['Date']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CollectionCreated = Event & {
  __typename?: 'CollectionCreated';
  collection?: Maybe<Collection>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type CollectionCreatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type CollectionDelete = {
  __typename?: 'CollectionDelete';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionDeleted = Event & {
  __typename?: 'CollectionDeleted';
  collection?: Maybe<Collection>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type CollectionDeletedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type CollectionError = {
  __typename?: 'CollectionError';
  code: CollectionErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Scalars['ID']>>;
};

export enum CollectionErrorCode {
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type CollectionFilterInput = {
  channel?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  published?: InputMaybe<CollectionPublished>;
  search?: InputMaybe<Scalars['String']>;
};

export type CollectionInput = {
  backgroundImage?: InputMaybe<Scalars['Upload']>;
  backgroundImageAlt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSONString']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  publicationDate?: InputMaybe<Scalars['Date']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum CollectionPublished {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

export type CollectionRemoveProducts = {
  __typename?: 'CollectionRemoveProducts';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionReorderProducts = {
  __typename?: 'CollectionReorderProducts';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export enum CollectionSortField {
  Availability = 'AVAILABILITY',
  Name = 'NAME',
  ProductCount = 'PRODUCT_COUNT',
  PublicationDate = 'PUBLICATION_DATE',
  PublishedAt = 'PUBLISHED_AT'
}

export type CollectionSortingInput = {
  channel?: InputMaybe<Scalars['String']>;
  direction: OrderDirection;
  field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
  __typename?: 'CollectionTranslatableContent';
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  collection?: Maybe<Collection>;
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  translation?: Maybe<CollectionTranslation>;
};


export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CollectionTranslate = {
  __typename?: 'CollectionTranslate';
  collection?: Maybe<Collection>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type CollectionTranslation = Node & {
  __typename?: 'CollectionTranslation';
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

export type CollectionUpdate = {
  __typename?: 'CollectionUpdate';
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionUpdated = Event & {
  __typename?: 'CollectionUpdated';
  collection?: Maybe<Collection>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type CollectionUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ConfigurationItem = {
  __typename?: 'ConfigurationItem';
  helpText?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type?: Maybe<ConfigurationTypeFieldEnum>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigurationItemInput = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export enum ConfigurationTypeFieldEnum {
  Boolean = 'BOOLEAN',
  Multiline = 'MULTILINE',
  Output = 'OUTPUT',
  Password = 'PASSWORD',
  Secret = 'SECRET',
  Secretmultiline = 'SECRETMULTILINE',
  String = 'STRING'
}

export type ConfirmAccount = {
  __typename?: 'ConfirmAccount';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type ConfirmEmailChange = {
  __typename?: 'ConfirmEmailChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Eu = 'EU',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type CountryDisplay = {
  __typename?: 'CountryDisplay';
  code: Scalars['String'];
  country: Scalars['String'];
  vat?: Maybe<Vat>;
};

export type CountryFilterInput = {
  attachedToShippingZones?: InputMaybe<Scalars['Boolean']>;
};

export type CreateToken = {
  __typename?: 'CreateToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  csrfToken?: Maybe<Scalars['String']>;
  errors: Array<AccountError>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CreditCard = {
  __typename?: 'CreditCard';
  brand: Scalars['String'];
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  firstDigits?: Maybe<Scalars['String']>;
  lastDigits: Scalars['String'];
};

export type CustomerBulkDelete = {
  __typename?: 'CustomerBulkDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  count: Scalars['Int'];
  errors: Array<AccountError>;
};

export type CustomerCreate = {
  __typename?: 'CustomerCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type CustomerCreated = Event & {
  __typename?: 'CustomerCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type CustomerDelete = {
  __typename?: 'CustomerDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type CustomerEvent = Node & {
  __typename?: 'CustomerEvent';
  app?: Maybe<App>;
  count?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  orderLine?: Maybe<OrderLine>;
  type?: Maybe<CustomerEventsEnum>;
  user?: Maybe<User>;
};

export enum CustomerEventsEnum {
  AccountActivated = 'ACCOUNT_ACTIVATED',
  AccountCreated = 'ACCOUNT_CREATED',
  AccountDeactivated = 'ACCOUNT_DEACTIVATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
  EmailAssigned = 'EMAIL_ASSIGNED',
  EmailChanged = 'EMAIL_CHANGED',
  EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
  NameAssigned = 'NAME_ASSIGNED',
  NoteAdded = 'NOTE_ADDED',
  NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
  PasswordChanged = 'PASSWORD_CHANGED',
  PasswordReset = 'PASSWORD_RESET',
  PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
  PlacedOrder = 'PLACED_ORDER'
}

export type CustomerFilterInput = {
  dateJoined?: InputMaybe<DateRangeInput>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  numberOfOrders?: InputMaybe<IntRangeInput>;
  placedOrders?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type CustomerInput = {
  defaultBillingAddress?: InputMaybe<AddressInput>;
  defaultShippingAddress?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
  lastName?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
};

export type CustomerUpdate = {
  __typename?: 'CustomerUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type CustomerUpdated = Event & {
  __typename?: 'CustomerUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type DateRangeInput = {
  gte?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
};

export type DateTimeRangeInput = {
  gte?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
};

export type DeactivateAllUserTokens = {
  __typename?: 'DeactivateAllUserTokens';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type DeleteMetadata = {
  __typename?: 'DeleteMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

export type DeletePrivateMetadata = {
  __typename?: 'DeletePrivateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

export type DeliveryMethod = ShippingMethod | Warehouse;

export type DigitalContent = Node & ObjectWithMetadata & {
  __typename?: 'DigitalContent';
  automaticFulfillment: Scalars['Boolean'];
  contentFile: Scalars['String'];
  id: Scalars['ID'];
  maxDownloads?: Maybe<Scalars['Int']>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  productVariant: ProductVariant;
  urlValidDays?: Maybe<Scalars['Int']>;
  urls?: Maybe<Array<DigitalContentUrl>>;
  useDefaultSettings: Scalars['Boolean'];
};


export type DigitalContentMetafieldArgs = {
  key: Scalars['String'];
};


export type DigitalContentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type DigitalContentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type DigitalContentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type DigitalContentCountableConnection = {
  __typename?: 'DigitalContentCountableConnection';
  edges: Array<DigitalContentCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DigitalContentCountableEdge = {
  __typename?: 'DigitalContentCountableEdge';
  cursor: Scalars['String'];
  node: DigitalContent;
};

export type DigitalContentCreate = {
  __typename?: 'DigitalContentCreate';
  content?: Maybe<DigitalContent>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentDelete = {
  __typename?: 'DigitalContentDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentInput = {
  automaticFulfillment?: InputMaybe<Scalars['Boolean']>;
  maxDownloads?: InputMaybe<Scalars['Int']>;
  urlValidDays?: InputMaybe<Scalars['Int']>;
  useDefaultSettings: Scalars['Boolean'];
};

export type DigitalContentUpdate = {
  __typename?: 'DigitalContentUpdate';
  content?: Maybe<DigitalContent>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentUploadInput = {
  automaticFulfillment?: InputMaybe<Scalars['Boolean']>;
  contentFile: Scalars['Upload'];
  maxDownloads?: InputMaybe<Scalars['Int']>;
  urlValidDays?: InputMaybe<Scalars['Int']>;
  useDefaultSettings: Scalars['Boolean'];
};

export type DigitalContentUrl = Node & {
  __typename?: 'DigitalContentUrl';
  content: DigitalContent;
  created: Scalars['DateTime'];
  downloadNum: Scalars['Int'];
  id: Scalars['ID'];
  token: Scalars['UUID'];
  url?: Maybe<Scalars['String']>;
};

export type DigitalContentUrlCreate = {
  __typename?: 'DigitalContentUrlCreate';
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type DigitalContentUrlCreateInput = {
  content: Scalars['ID'];
};

export type DiscountError = {
  __typename?: 'DiscountError';
  channels?: Maybe<Array<Scalars['ID']>>;
  code: DiscountErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Scalars['ID']>>;
};

export enum DiscountErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export enum DiscountStatusEnum {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED'
}

export enum DiscountValueTypeEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export enum DistanceUnitsEnum {
  Cm = 'CM',
  Ft = 'FT',
  Inch = 'INCH',
  Km = 'KM',
  M = 'M',
  Yd = 'YD'
}

export type Domain = {
  __typename?: 'Domain';
  host: Scalars['String'];
  sslEnabled: Scalars['Boolean'];
  url: Scalars['String'];
};

export type DraftOrderBulkDelete = {
  __typename?: 'DraftOrderBulkDelete';
  count: Scalars['Int'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderComplete = {
  __typename?: 'DraftOrderComplete';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderCreate = {
  __typename?: 'DraftOrderCreate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderCreateInput = {
  billingAddress?: InputMaybe<AddressInput>;
  channelId?: InputMaybe<Scalars['ID']>;
  customerNote?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['PositiveDecimal']>;
  lines?: InputMaybe<Array<OrderLineCreateInput>>;
  redirectUrl?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  userEmail?: InputMaybe<Scalars['String']>;
  voucher?: InputMaybe<Scalars['ID']>;
};

export type DraftOrderCreated = Event & {
  __typename?: 'DraftOrderCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type DraftOrderDelete = {
  __typename?: 'DraftOrderDelete';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderDeleted = Event & {
  __typename?: 'DraftOrderDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type DraftOrderInput = {
  billingAddress?: InputMaybe<AddressInput>;
  channelId?: InputMaybe<Scalars['ID']>;
  customerNote?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['PositiveDecimal']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  userEmail?: InputMaybe<Scalars['String']>;
  voucher?: InputMaybe<Scalars['ID']>;
};

export type DraftOrderLinesBulkDelete = {
  __typename?: 'DraftOrderLinesBulkDelete';
  count: Scalars['Int'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderUpdate = {
  __typename?: 'DraftOrderUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderUpdated = Event & {
  __typename?: 'DraftOrderUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type Event = {
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type EventDelivery = Node & {
  __typename?: 'EventDelivery';
  attempts?: Maybe<EventDeliveryAttemptCountableConnection>;
  createdAt: Scalars['DateTime'];
  eventType: WebhookEventTypeEnum;
  id: Scalars['ID'];
  payload?: Maybe<Scalars['String']>;
  status: EventDeliveryStatusEnum;
};


export type EventDeliveryAttemptsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<EventDeliveryAttemptSortingInput>;
};

export type EventDeliveryAttempt = Node & {
  __typename?: 'EventDeliveryAttempt';
  createdAt: Scalars['DateTime'];
  duration?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  requestHeaders?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['String']>;
  responseHeaders?: Maybe<Scalars['String']>;
  responseStatusCode?: Maybe<Scalars['Int']>;
  status: EventDeliveryStatusEnum;
  taskId?: Maybe<Scalars['String']>;
};

export type EventDeliveryAttemptCountableConnection = {
  __typename?: 'EventDeliveryAttemptCountableConnection';
  edges: Array<EventDeliveryAttemptCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EventDeliveryAttemptCountableEdge = {
  __typename?: 'EventDeliveryAttemptCountableEdge';
  cursor: Scalars['String'];
  node: EventDeliveryAttempt;
};

export enum EventDeliveryAttemptSortField {
  CreatedAt = 'CREATED_AT'
}

export type EventDeliveryAttemptSortingInput = {
  direction: OrderDirection;
  field: EventDeliveryAttemptSortField;
};

export type EventDeliveryCountableConnection = {
  __typename?: 'EventDeliveryCountableConnection';
  edges: Array<EventDeliveryCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EventDeliveryCountableEdge = {
  __typename?: 'EventDeliveryCountableEdge';
  cursor: Scalars['String'];
  node: EventDelivery;
};

export type EventDeliveryFilterInput = {
  eventType?: InputMaybe<WebhookEventTypeEnum>;
  status?: InputMaybe<EventDeliveryStatusEnum>;
};

export type EventDeliveryRetry = {
  __typename?: 'EventDeliveryRetry';
  delivery?: Maybe<EventDelivery>;
  errors: Array<WebhookError>;
};

export enum EventDeliverySortField {
  CreatedAt = 'CREATED_AT'
}

export type EventDeliverySortingInput = {
  direction: OrderDirection;
  field: EventDeliverySortField;
};

export enum EventDeliveryStatusEnum {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type ExportError = {
  __typename?: 'ExportError';
  code: ExportErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum ExportErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type ExportEvent = Node & {
  __typename?: 'ExportEvent';
  app?: Maybe<App>;
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  message: Scalars['String'];
  type: ExportEventsEnum;
  user?: Maybe<User>;
};

export enum ExportEventsEnum {
  ExportedFileSent = 'EXPORTED_FILE_SENT',
  ExportDeleted = 'EXPORT_DELETED',
  ExportFailed = 'EXPORT_FAILED',
  ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT',
  ExportPending = 'EXPORT_PENDING',
  ExportSuccess = 'EXPORT_SUCCESS'
}

export type ExportFile = Job & Node & {
  __typename?: 'ExportFile';
  app?: Maybe<App>;
  createdAt: Scalars['DateTime'];
  events?: Maybe<Array<ExportEvent>>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type ExportFileCountableConnection = {
  __typename?: 'ExportFileCountableConnection';
  edges: Array<ExportFileCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ExportFileCountableEdge = {
  __typename?: 'ExportFileCountableEdge';
  cursor: Scalars['String'];
  node: ExportFile;
};

export type ExportFileFilterInput = {
  app?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<JobStatusEnum>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
  user?: InputMaybe<Scalars['String']>;
};

export enum ExportFileSortField {
  CreatedAt = 'CREATED_AT',
  LastModifiedAt = 'LAST_MODIFIED_AT',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

export type ExportFileSortingInput = {
  direction: OrderDirection;
  field: ExportFileSortField;
};

export type ExportGiftCards = {
  __typename?: 'ExportGiftCards';
  errors: Array<ExportError>;
  exportFile?: Maybe<ExportFile>;
};

export type ExportGiftCardsInput = {
  fileType: FileTypesEnum;
  filter?: InputMaybe<GiftCardFilterInput>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  scope: ExportScope;
};

export type ExportInfoInput = {
  attributes?: InputMaybe<Array<Scalars['ID']>>;
  channels?: InputMaybe<Array<Scalars['ID']>>;
  fields?: InputMaybe<Array<ProductFieldEnum>>;
  warehouses?: InputMaybe<Array<Scalars['ID']>>;
};

export type ExportProducts = {
  __typename?: 'ExportProducts';
  errors: Array<ExportError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  exportErrors: Array<ExportError>;
  exportFile?: Maybe<ExportFile>;
};

export type ExportProductsInput = {
  exportInfo?: InputMaybe<ExportInfoInput>;
  fileType: FileTypesEnum;
  filter?: InputMaybe<ProductFilterInput>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  scope: ExportScope;
};

export enum ExportScope {
  All = 'ALL',
  Filter = 'FILTER',
  Ids = 'IDS'
}

export type ExternalAuthentication = {
  __typename?: 'ExternalAuthentication';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type ExternalAuthenticationUrl = {
  __typename?: 'ExternalAuthenticationUrl';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  authenticationData?: Maybe<Scalars['JSONString']>;
  errors: Array<AccountError>;
};

export type ExternalLogout = {
  __typename?: 'ExternalLogout';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  logoutData?: Maybe<Scalars['JSONString']>;
};

export type ExternalNotificationError = {
  __typename?: 'ExternalNotificationError';
  code: ExternalNotificationErrorCodes;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum ExternalNotificationErrorCodes {
  ChannelInactive = 'CHANNEL_INACTIVE',
  InvalidModelType = 'INVALID_MODEL_TYPE',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type ExternalNotificationTrigger = {
  __typename?: 'ExternalNotificationTrigger';
  errors: Array<ExternalNotificationError>;
};

export type ExternalNotificationTriggerInput = {
  externalEventType: Scalars['String'];
  extraPayload?: InputMaybe<Scalars['JSONString']>;
  ids: Array<Scalars['ID']>;
};

export type ExternalObtainAccessTokens = {
  __typename?: 'ExternalObtainAccessTokens';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  csrfToken?: Maybe<Scalars['String']>;
  errors: Array<AccountError>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type ExternalRefresh = {
  __typename?: 'ExternalRefresh';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  csrfToken?: Maybe<Scalars['String']>;
  errors: Array<AccountError>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type ExternalVerify = {
  __typename?: 'ExternalVerify';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  isValid: Scalars['Boolean'];
  user?: Maybe<User>;
  verifyData?: Maybe<Scalars['JSONString']>;
};

export type File = {
  __typename?: 'File';
  contentType?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export enum FileTypesEnum {
  Csv = 'CSV',
  Xlsx = 'XLSX'
}

export type FileUpload = {
  __typename?: 'FileUpload';
  errors: Array<UploadError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  uploadErrors: Array<UploadError>;
  uploadedFile?: Maybe<File>;
};

export type Fulfillment = Node & ObjectWithMetadata & {
  __typename?: 'Fulfillment';
  created: Scalars['DateTime'];
  fulfillmentOrder: Scalars['Int'];
  id: Scalars['ID'];
  lines?: Maybe<Array<FulfillmentLine>>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  status: FulfillmentStatus;
  statusDisplay?: Maybe<Scalars['String']>;
  trackingNumber: Scalars['String'];
  warehouse?: Maybe<Warehouse>;
};


export type FulfillmentMetafieldArgs = {
  key: Scalars['String'];
};


export type FulfillmentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type FulfillmentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type FulfillmentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type FulfillmentApprove = {
  __typename?: 'FulfillmentApprove';
  errors: Array<OrderError>;
  fulfillment?: Maybe<Fulfillment>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentApproved = Event & {
  __typename?: 'FulfillmentApproved';
  fulfillment?: Maybe<Fulfillment>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type FulfillmentCancel = {
  __typename?: 'FulfillmentCancel';
  errors: Array<OrderError>;
  fulfillment?: Maybe<Fulfillment>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
  warehouseId?: InputMaybe<Scalars['ID']>;
};

export type FulfillmentCanceled = Event & {
  __typename?: 'FulfillmentCanceled';
  fulfillment?: Maybe<Fulfillment>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type FulfillmentCreated = Event & {
  __typename?: 'FulfillmentCreated';
  fulfillment?: Maybe<Fulfillment>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type FulfillmentLine = Node & {
  __typename?: 'FulfillmentLine';
  id: Scalars['ID'];
  orderLine?: Maybe<OrderLine>;
  quantity: Scalars['Int'];
};

export type FulfillmentRefundProducts = {
  __typename?: 'FulfillmentRefundProducts';
  errors: Array<OrderError>;
  fulfillment?: Maybe<Fulfillment>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentReturnProducts = {
  __typename?: 'FulfillmentReturnProducts';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  replaceFulfillment?: Maybe<Fulfillment>;
  replaceOrder?: Maybe<Order>;
  returnFulfillment?: Maybe<Fulfillment>;
};

export enum FulfillmentStatus {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  Refunded = 'REFUNDED',
  RefundedAndReturned = 'REFUNDED_AND_RETURNED',
  Replaced = 'REPLACED',
  Returned = 'RETURNED',
  WaitingForApproval = 'WAITING_FOR_APPROVAL'
}

export type FulfillmentUpdateTracking = {
  __typename?: 'FulfillmentUpdateTracking';
  errors: Array<OrderError>;
  fulfillment?: Maybe<Fulfillment>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  notifyCustomer?: InputMaybe<Scalars['Boolean']>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type GatewayConfigLine = {
  __typename?: 'GatewayConfigLine';
  field: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type GiftCard = Node & ObjectWithMetadata & {
  __typename?: 'GiftCard';
  app?: Maybe<App>;
  boughtInChannel?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  created: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdByEmail?: Maybe<Scalars['String']>;
  currentBalance: Money;
  displayCode: Scalars['String'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead. */
  endDate?: Maybe<Scalars['DateTime']>;
  events: Array<GiftCardEvent>;
  expiryDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  initialBalance: Money;
  isActive: Scalars['Boolean'];
  last4CodeChars: Scalars['String'];
  lastUsedOn?: Maybe<Scalars['DateTime']>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. */
  startDate?: Maybe<Scalars['DateTime']>;
  tags: Array<GiftCardTag>;
  usedBy?: Maybe<User>;
  usedByEmail?: Maybe<Scalars['String']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead. */
  user?: Maybe<User>;
};


export type GiftCardEventsArgs = {
  filter?: InputMaybe<GiftCardEventFilterInput>;
};


export type GiftCardMetafieldArgs = {
  key: Scalars['String'];
};


export type GiftCardMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type GiftCardPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type GiftCardPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type GiftCardActivate = {
  __typename?: 'GiftCardActivate';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardAddNote = {
  __typename?: 'GiftCardAddNote';
  errors: Array<GiftCardError>;
  event?: Maybe<GiftCardEvent>;
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardAddNoteInput = {
  message: Scalars['String'];
};

export type GiftCardBulkActivate = {
  __typename?: 'GiftCardBulkActivate';
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

export type GiftCardBulkCreate = {
  __typename?: 'GiftCardBulkCreate';
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
  giftCards: Array<GiftCard>;
};

export type GiftCardBulkCreateInput = {
  balance: PriceInput;
  count: Scalars['Int'];
  expiryDate?: InputMaybe<Scalars['Date']>;
  isActive: Scalars['Boolean'];
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type GiftCardBulkDeactivate = {
  __typename?: 'GiftCardBulkDeactivate';
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

export type GiftCardBulkDelete = {
  __typename?: 'GiftCardBulkDelete';
  count: Scalars['Int'];
  errors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
  __typename?: 'GiftCardCountableConnection';
  edges: Array<GiftCardCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardCountableEdge = {
  __typename?: 'GiftCardCountableEdge';
  cursor: Scalars['String'];
  node: GiftCard;
};

export type GiftCardCreate = {
  __typename?: 'GiftCardCreate';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardCreateInput = {
  addTags?: InputMaybe<Array<Scalars['String']>>;
  balance: PriceInput;
  channel?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  expiryDate?: InputMaybe<Scalars['Date']>;
  isActive: Scalars['Boolean'];
  note?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

export type GiftCardCreated = Event & {
  __typename?: 'GiftCardCreated';
  giftCard?: Maybe<GiftCard>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type GiftCardDeactivate = {
  __typename?: 'GiftCardDeactivate';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardDelete = {
  __typename?: 'GiftCardDelete';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardDeleted = Event & {
  __typename?: 'GiftCardDeleted';
  giftCard?: Maybe<GiftCard>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type GiftCardError = {
  __typename?: 'GiftCardError';
  code: GiftCardErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export enum GiftCardErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  ExpiredGiftCard = 'EXPIRED_GIFT_CARD',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type GiftCardEvent = Node & {
  __typename?: 'GiftCardEvent';
  app?: Maybe<App>;
  balance?: Maybe<GiftCardEventBalance>;
  date?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  oldExpiryDate?: Maybe<Scalars['Date']>;
  oldTags?: Maybe<Array<Scalars['String']>>;
  orderId?: Maybe<Scalars['ID']>;
  orderNumber?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<GiftCardEventsEnum>;
  user?: Maybe<User>;
};

export type GiftCardEventBalance = {
  __typename?: 'GiftCardEventBalance';
  currentBalance: Money;
  initialBalance?: Maybe<Money>;
  oldCurrentBalance?: Maybe<Money>;
  oldInitialBalance?: Maybe<Money>;
};

export type GiftCardEventFilterInput = {
  orders?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<GiftCardEventsEnum>;
};

export enum GiftCardEventsEnum {
  Activated = 'ACTIVATED',
  BalanceReset = 'BALANCE_RESET',
  Bought = 'BOUGHT',
  Deactivated = 'DEACTIVATED',
  ExpiryDateUpdated = 'EXPIRY_DATE_UPDATED',
  Issued = 'ISSUED',
  NoteAdded = 'NOTE_ADDED',
  Resent = 'RESENT',
  SentToCustomer = 'SENT_TO_CUSTOMER',
  TagsUpdated = 'TAGS_UPDATED',
  Updated = 'UPDATED',
  UsedInOrder = 'USED_IN_ORDER'
}

export type GiftCardFilterInput = {
  code?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  currentBalance?: InputMaybe<PriceRangeInput>;
  initialBalance?: InputMaybe<PriceRangeInput>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  products?: InputMaybe<Array<Scalars['ID']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  used?: InputMaybe<Scalars['Boolean']>;
  usedBy?: InputMaybe<Array<Scalars['ID']>>;
};

export type GiftCardResend = {
  __typename?: 'GiftCardResend';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardResendInput = {
  channel: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type GiftCardSettings = {
  __typename?: 'GiftCardSettings';
  expiryPeriod?: Maybe<TimePeriod>;
  expiryType: GiftCardSettingsExpiryTypeEnum;
};

export type GiftCardSettingsError = {
  __typename?: 'GiftCardSettingsError';
  code: GiftCardSettingsErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum GiftCardSettingsErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  Required = 'REQUIRED'
}

export enum GiftCardSettingsExpiryTypeEnum {
  ExpiryPeriod = 'EXPIRY_PERIOD',
  NeverExpire = 'NEVER_EXPIRE'
}

export type GiftCardSettingsUpdate = {
  __typename?: 'GiftCardSettingsUpdate';
  errors: Array<GiftCardSettingsError>;
  giftCardSettings?: Maybe<GiftCardSettings>;
};

export type GiftCardSettingsUpdateInput = {
  expiryPeriod?: InputMaybe<TimePeriodInputType>;
  expiryType?: InputMaybe<GiftCardSettingsExpiryTypeEnum>;
};

export enum GiftCardSortField {
  CurrentBalance = 'CURRENT_BALANCE',
  Product = 'PRODUCT',
  UsedBy = 'USED_BY'
}

export type GiftCardSortingInput = {
  direction: OrderDirection;
  field: GiftCardSortField;
};

export type GiftCardStatusChanged = Event & {
  __typename?: 'GiftCardStatusChanged';
  giftCard?: Maybe<GiftCard>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type GiftCardTag = Node & {
  __typename?: 'GiftCardTag';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GiftCardTagCountableConnection = {
  __typename?: 'GiftCardTagCountableConnection';
  edges: Array<GiftCardTagCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardTagCountableEdge = {
  __typename?: 'GiftCardTagCountableEdge';
  cursor: Scalars['String'];
  node: GiftCardTag;
};

export type GiftCardTagFilterInput = {
  search?: InputMaybe<Scalars['String']>;
};

export type GiftCardUpdate = {
  __typename?: 'GiftCardUpdate';
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardUpdateInput = {
  addTags?: InputMaybe<Array<Scalars['String']>>;
  balanceAmount?: InputMaybe<Scalars['PositiveDecimal']>;
  endDate?: InputMaybe<Scalars['Date']>;
  expiryDate?: InputMaybe<Scalars['Date']>;
  removeTags?: InputMaybe<Array<Scalars['String']>>;
  startDate?: InputMaybe<Scalars['Date']>;
};

export type GiftCardUpdated = Event & {
  __typename?: 'GiftCardUpdated';
  giftCard?: Maybe<GiftCard>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type Group = Node & {
  __typename?: 'Group';
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Permission>>;
  userCanManage: Scalars['Boolean'];
  users?: Maybe<Array<User>>;
};

export type GroupCountableConnection = {
  __typename?: 'GroupCountableConnection';
  edges: Array<GroupCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GroupCountableEdge = {
  __typename?: 'GroupCountableEdge';
  cursor: Scalars['String'];
  node: Group;
};

export type Image = {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type IntRangeInput = {
  gte?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
};

export type Invoice = Job & Node & ObjectWithMetadata & {
  __typename?: 'Invoice';
  createdAt: Scalars['DateTime'];
  externalUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  number?: Maybe<Scalars['String']>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


export type InvoiceMetafieldArgs = {
  key: Scalars['String'];
};


export type InvoiceMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type InvoicePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type InvoicePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type InvoiceCreate = {
  __typename?: 'InvoiceCreate';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceCreateInput = {
  number: Scalars['String'];
  url: Scalars['String'];
};

export type InvoiceDelete = {
  __typename?: 'InvoiceDelete';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceDeleted = Event & {
  __typename?: 'InvoiceDeleted';
  invoice?: Maybe<Invoice>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type InvoiceError = {
  __typename?: 'InvoiceError';
  code: InvoiceErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum InvoiceErrorCode {
  EmailNotSet = 'EMAIL_NOT_SET',
  InvalidStatus = 'INVALID_STATUS',
  NotFound = 'NOT_FOUND',
  NotReady = 'NOT_READY',
  NoInvoicePlugin = 'NO_INVOICE_PLUGIN',
  NumberNotSet = 'NUMBER_NOT_SET',
  Required = 'REQUIRED',
  UrlNotSet = 'URL_NOT_SET'
}

export type InvoiceRequest = {
  __typename?: 'InvoiceRequest';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  order?: Maybe<Order>;
};

export type InvoiceRequestDelete = {
  __typename?: 'InvoiceRequestDelete';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceRequested = Event & {
  __typename?: 'InvoiceRequested';
  invoice?: Maybe<Invoice>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type InvoiceSendNotification = {
  __typename?: 'InvoiceSendNotification';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceSent = Event & {
  __typename?: 'InvoiceSent';
  invoice?: Maybe<Invoice>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type InvoiceUpdate = {
  __typename?: 'InvoiceUpdate';
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type IssuingPrincipal = App | User;

export type Job = {
  createdAt: Scalars['DateTime'];
  message?: Maybe<Scalars['String']>;
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime'];
};

export enum JobStatusEnum {
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum LanguageCodeEnum {
  Af = 'AF',
  AfNa = 'AF_NA',
  AfZa = 'AF_ZA',
  Agq = 'AGQ',
  AgqCm = 'AGQ_CM',
  Ak = 'AK',
  AkGh = 'AK_GH',
  Am = 'AM',
  AmEt = 'AM_ET',
  Ar = 'AR',
  ArAe = 'AR_AE',
  ArBh = 'AR_BH',
  ArDj = 'AR_DJ',
  ArDz = 'AR_DZ',
  ArEg = 'AR_EG',
  ArEh = 'AR_EH',
  ArEr = 'AR_ER',
  ArIl = 'AR_IL',
  ArIq = 'AR_IQ',
  ArJo = 'AR_JO',
  ArKm = 'AR_KM',
  ArKw = 'AR_KW',
  ArLb = 'AR_LB',
  ArLy = 'AR_LY',
  ArMa = 'AR_MA',
  ArMr = 'AR_MR',
  ArOm = 'AR_OM',
  ArPs = 'AR_PS',
  ArQa = 'AR_QA',
  ArSa = 'AR_SA',
  ArSd = 'AR_SD',
  ArSo = 'AR_SO',
  ArSs = 'AR_SS',
  ArSy = 'AR_SY',
  ArTd = 'AR_TD',
  ArTn = 'AR_TN',
  ArYe = 'AR_YE',
  As = 'AS',
  Asa = 'ASA',
  AsaTz = 'ASA_TZ',
  Ast = 'AST',
  AstEs = 'AST_ES',
  AsIn = 'AS_IN',
  Az = 'AZ',
  AzCyrl = 'AZ_CYRL',
  AzCyrlAz = 'AZ_CYRL_AZ',
  AzLatn = 'AZ_LATN',
  AzLatnAz = 'AZ_LATN_AZ',
  Bas = 'BAS',
  BasCm = 'BAS_CM',
  Be = 'BE',
  Bem = 'BEM',
  BemZm = 'BEM_ZM',
  Bez = 'BEZ',
  BezTz = 'BEZ_TZ',
  BeBy = 'BE_BY',
  Bg = 'BG',
  BgBg = 'BG_BG',
  Bm = 'BM',
  BmMl = 'BM_ML',
  Bn = 'BN',
  BnBd = 'BN_BD',
  BnIn = 'BN_IN',
  Bo = 'BO',
  BoCn = 'BO_CN',
  BoIn = 'BO_IN',
  Br = 'BR',
  Brx = 'BRX',
  BrxIn = 'BRX_IN',
  BrFr = 'BR_FR',
  Bs = 'BS',
  BsCyrl = 'BS_CYRL',
  BsCyrlBa = 'BS_CYRL_BA',
  BsLatn = 'BS_LATN',
  BsLatnBa = 'BS_LATN_BA',
  Ca = 'CA',
  CaAd = 'CA_AD',
  CaEs = 'CA_ES',
  CaEsValencia = 'CA_ES_VALENCIA',
  CaFr = 'CA_FR',
  CaIt = 'CA_IT',
  Ccp = 'CCP',
  CcpBd = 'CCP_BD',
  CcpIn = 'CCP_IN',
  Ce = 'CE',
  Ceb = 'CEB',
  CebPh = 'CEB_PH',
  CeRu = 'CE_RU',
  Cgg = 'CGG',
  CggUg = 'CGG_UG',
  Chr = 'CHR',
  ChrUs = 'CHR_US',
  Ckb = 'CKB',
  CkbIq = 'CKB_IQ',
  CkbIr = 'CKB_IR',
  Cs = 'CS',
  CsCz = 'CS_CZ',
  Cu = 'CU',
  CuRu = 'CU_RU',
  Cy = 'CY',
  CyGb = 'CY_GB',
  Da = 'DA',
  Dav = 'DAV',
  DavKe = 'DAV_KE',
  DaDk = 'DA_DK',
  DaGl = 'DA_GL',
  De = 'DE',
  DeAt = 'DE_AT',
  DeBe = 'DE_BE',
  DeCh = 'DE_CH',
  DeDe = 'DE_DE',
  DeIt = 'DE_IT',
  DeLi = 'DE_LI',
  DeLu = 'DE_LU',
  Dje = 'DJE',
  DjeNe = 'DJE_NE',
  Dsb = 'DSB',
  DsbDe = 'DSB_DE',
  Dua = 'DUA',
  DuaCm = 'DUA_CM',
  Dyo = 'DYO',
  DyoSn = 'DYO_SN',
  Dz = 'DZ',
  DzBt = 'DZ_BT',
  Ebu = 'EBU',
  EbuKe = 'EBU_KE',
  Ee = 'EE',
  EeGh = 'EE_GH',
  EeTg = 'EE_TG',
  El = 'EL',
  ElCy = 'EL_CY',
  ElGr = 'EL_GR',
  En = 'EN',
  EnAe = 'EN_AE',
  EnAg = 'EN_AG',
  EnAi = 'EN_AI',
  EnAs = 'EN_AS',
  EnAt = 'EN_AT',
  EnAu = 'EN_AU',
  EnBb = 'EN_BB',
  EnBe = 'EN_BE',
  EnBi = 'EN_BI',
  EnBm = 'EN_BM',
  EnBs = 'EN_BS',
  EnBw = 'EN_BW',
  EnBz = 'EN_BZ',
  EnCa = 'EN_CA',
  EnCc = 'EN_CC',
  EnCh = 'EN_CH',
  EnCk = 'EN_CK',
  EnCm = 'EN_CM',
  EnCx = 'EN_CX',
  EnCy = 'EN_CY',
  EnDe = 'EN_DE',
  EnDg = 'EN_DG',
  EnDk = 'EN_DK',
  EnDm = 'EN_DM',
  EnEr = 'EN_ER',
  EnFi = 'EN_FI',
  EnFj = 'EN_FJ',
  EnFk = 'EN_FK',
  EnFm = 'EN_FM',
  EnGb = 'EN_GB',
  EnGd = 'EN_GD',
  EnGg = 'EN_GG',
  EnGh = 'EN_GH',
  EnGi = 'EN_GI',
  EnGm = 'EN_GM',
  EnGu = 'EN_GU',
  EnGy = 'EN_GY',
  EnHk = 'EN_HK',
  EnIe = 'EN_IE',
  EnIl = 'EN_IL',
  EnIm = 'EN_IM',
  EnIn = 'EN_IN',
  EnIo = 'EN_IO',
  EnJe = 'EN_JE',
  EnJm = 'EN_JM',
  EnKe = 'EN_KE',
  EnKi = 'EN_KI',
  EnKn = 'EN_KN',
  EnKy = 'EN_KY',
  EnLc = 'EN_LC',
  EnLr = 'EN_LR',
  EnLs = 'EN_LS',
  EnMg = 'EN_MG',
  EnMh = 'EN_MH',
  EnMo = 'EN_MO',
  EnMp = 'EN_MP',
  EnMs = 'EN_MS',
  EnMt = 'EN_MT',
  EnMu = 'EN_MU',
  EnMw = 'EN_MW',
  EnMy = 'EN_MY',
  EnNa = 'EN_NA',
  EnNf = 'EN_NF',
  EnNg = 'EN_NG',
  EnNl = 'EN_NL',
  EnNr = 'EN_NR',
  EnNu = 'EN_NU',
  EnNz = 'EN_NZ',
  EnPg = 'EN_PG',
  EnPh = 'EN_PH',
  EnPk = 'EN_PK',
  EnPn = 'EN_PN',
  EnPr = 'EN_PR',
  EnPw = 'EN_PW',
  EnRw = 'EN_RW',
  EnSb = 'EN_SB',
  EnSc = 'EN_SC',
  EnSd = 'EN_SD',
  EnSe = 'EN_SE',
  EnSg = 'EN_SG',
  EnSh = 'EN_SH',
  EnSi = 'EN_SI',
  EnSl = 'EN_SL',
  EnSs = 'EN_SS',
  EnSx = 'EN_SX',
  EnSz = 'EN_SZ',
  EnTc = 'EN_TC',
  EnTk = 'EN_TK',
  EnTo = 'EN_TO',
  EnTt = 'EN_TT',
  EnTv = 'EN_TV',
  EnTz = 'EN_TZ',
  EnUg = 'EN_UG',
  EnUm = 'EN_UM',
  EnUs = 'EN_US',
  EnVc = 'EN_VC',
  EnVg = 'EN_VG',
  EnVi = 'EN_VI',
  EnVu = 'EN_VU',
  EnWs = 'EN_WS',
  EnZa = 'EN_ZA',
  EnZm = 'EN_ZM',
  EnZw = 'EN_ZW',
  Eo = 'EO',
  Es = 'ES',
  EsAr = 'ES_AR',
  EsBo = 'ES_BO',
  EsBr = 'ES_BR',
  EsBz = 'ES_BZ',
  EsCl = 'ES_CL',
  EsCo = 'ES_CO',
  EsCr = 'ES_CR',
  EsCu = 'ES_CU',
  EsDo = 'ES_DO',
  EsEa = 'ES_EA',
  EsEc = 'ES_EC',
  EsEs = 'ES_ES',
  EsGq = 'ES_GQ',
  EsGt = 'ES_GT',
  EsHn = 'ES_HN',
  EsIc = 'ES_IC',
  EsMx = 'ES_MX',
  EsNi = 'ES_NI',
  EsPa = 'ES_PA',
  EsPe = 'ES_PE',
  EsPh = 'ES_PH',
  EsPr = 'ES_PR',
  EsPy = 'ES_PY',
  EsSv = 'ES_SV',
  EsUs = 'ES_US',
  EsUy = 'ES_UY',
  EsVe = 'ES_VE',
  Et = 'ET',
  EtEe = 'ET_EE',
  Eu = 'EU',
  EuEs = 'EU_ES',
  Ewo = 'EWO',
  EwoCm = 'EWO_CM',
  Fa = 'FA',
  FaAf = 'FA_AF',
  FaIr = 'FA_IR',
  Ff = 'FF',
  FfAdlm = 'FF_ADLM',
  FfAdlmBf = 'FF_ADLM_BF',
  FfAdlmCm = 'FF_ADLM_CM',
  FfAdlmGh = 'FF_ADLM_GH',
  FfAdlmGm = 'FF_ADLM_GM',
  FfAdlmGn = 'FF_ADLM_GN',
  FfAdlmGw = 'FF_ADLM_GW',
  FfAdlmLr = 'FF_ADLM_LR',
  FfAdlmMr = 'FF_ADLM_MR',
  FfAdlmNe = 'FF_ADLM_NE',
  FfAdlmNg = 'FF_ADLM_NG',
  FfAdlmSl = 'FF_ADLM_SL',
  FfAdlmSn = 'FF_ADLM_SN',
  FfLatn = 'FF_LATN',
  FfLatnBf = 'FF_LATN_BF',
  FfLatnCm = 'FF_LATN_CM',
  FfLatnGh = 'FF_LATN_GH',
  FfLatnGm = 'FF_LATN_GM',
  FfLatnGn = 'FF_LATN_GN',
  FfLatnGw = 'FF_LATN_GW',
  FfLatnLr = 'FF_LATN_LR',
  FfLatnMr = 'FF_LATN_MR',
  FfLatnNe = 'FF_LATN_NE',
  FfLatnNg = 'FF_LATN_NG',
  FfLatnSl = 'FF_LATN_SL',
  FfLatnSn = 'FF_LATN_SN',
  Fi = 'FI',
  Fil = 'FIL',
  FilPh = 'FIL_PH',
  FiFi = 'FI_FI',
  Fo = 'FO',
  FoDk = 'FO_DK',
  FoFo = 'FO_FO',
  Fr = 'FR',
  FrBe = 'FR_BE',
  FrBf = 'FR_BF',
  FrBi = 'FR_BI',
  FrBj = 'FR_BJ',
  FrBl = 'FR_BL',
  FrCa = 'FR_CA',
  FrCd = 'FR_CD',
  FrCf = 'FR_CF',
  FrCg = 'FR_CG',
  FrCh = 'FR_CH',
  FrCi = 'FR_CI',
  FrCm = 'FR_CM',
  FrDj = 'FR_DJ',
  FrDz = 'FR_DZ',
  FrFr = 'FR_FR',
  FrGa = 'FR_GA',
  FrGf = 'FR_GF',
  FrGn = 'FR_GN',
  FrGp = 'FR_GP',
  FrGq = 'FR_GQ',
  FrHt = 'FR_HT',
  FrKm = 'FR_KM',
  FrLu = 'FR_LU',
  FrMa = 'FR_MA',
  FrMc = 'FR_MC',
  FrMf = 'FR_MF',
  FrMg = 'FR_MG',
  FrMl = 'FR_ML',
  FrMq = 'FR_MQ',
  FrMr = 'FR_MR',
  FrMu = 'FR_MU',
  FrNc = 'FR_NC',
  FrNe = 'FR_NE',
  FrPf = 'FR_PF',
  FrPm = 'FR_PM',
  FrRe = 'FR_RE',
  FrRw = 'FR_RW',
  FrSc = 'FR_SC',
  FrSn = 'FR_SN',
  FrSy = 'FR_SY',
  FrTd = 'FR_TD',
  FrTg = 'FR_TG',
  FrTn = 'FR_TN',
  FrVu = 'FR_VU',
  FrWf = 'FR_WF',
  FrYt = 'FR_YT',
  Fur = 'FUR',
  FurIt = 'FUR_IT',
  Fy = 'FY',
  FyNl = 'FY_NL',
  Ga = 'GA',
  GaGb = 'GA_GB',
  GaIe = 'GA_IE',
  Gd = 'GD',
  GdGb = 'GD_GB',
  Gl = 'GL',
  GlEs = 'GL_ES',
  Gsw = 'GSW',
  GswCh = 'GSW_CH',
  GswFr = 'GSW_FR',
  GswLi = 'GSW_LI',
  Gu = 'GU',
  Guz = 'GUZ',
  GuzKe = 'GUZ_KE',
  GuIn = 'GU_IN',
  Gv = 'GV',
  GvIm = 'GV_IM',
  Ha = 'HA',
  Haw = 'HAW',
  HawUs = 'HAW_US',
  HaGh = 'HA_GH',
  HaNe = 'HA_NE',
  HaNg = 'HA_NG',
  He = 'HE',
  HeIl = 'HE_IL',
  Hi = 'HI',
  HiIn = 'HI_IN',
  Hr = 'HR',
  HrBa = 'HR_BA',
  HrHr = 'HR_HR',
  Hsb = 'HSB',
  HsbDe = 'HSB_DE',
  Hu = 'HU',
  HuHu = 'HU_HU',
  Hy = 'HY',
  HyAm = 'HY_AM',
  Ia = 'IA',
  Id = 'ID',
  IdId = 'ID_ID',
  Ig = 'IG',
  IgNg = 'IG_NG',
  Ii = 'II',
  IiCn = 'II_CN',
  Is = 'IS',
  IsIs = 'IS_IS',
  It = 'IT',
  ItCh = 'IT_CH',
  ItIt = 'IT_IT',
  ItSm = 'IT_SM',
  ItVa = 'IT_VA',
  Ja = 'JA',
  JaJp = 'JA_JP',
  Jgo = 'JGO',
  JgoCm = 'JGO_CM',
  Jmc = 'JMC',
  JmcTz = 'JMC_TZ',
  Jv = 'JV',
  JvId = 'JV_ID',
  Ka = 'KA',
  Kab = 'KAB',
  KabDz = 'KAB_DZ',
  Kam = 'KAM',
  KamKe = 'KAM_KE',
  KaGe = 'KA_GE',
  Kde = 'KDE',
  KdeTz = 'KDE_TZ',
  Kea = 'KEA',
  KeaCv = 'KEA_CV',
  Khq = 'KHQ',
  KhqMl = 'KHQ_ML',
  Ki = 'KI',
  KiKe = 'KI_KE',
  Kk = 'KK',
  Kkj = 'KKJ',
  KkjCm = 'KKJ_CM',
  KkKz = 'KK_KZ',
  Kl = 'KL',
  Kln = 'KLN',
  KlnKe = 'KLN_KE',
  KlGl = 'KL_GL',
  Km = 'KM',
  KmKh = 'KM_KH',
  Kn = 'KN',
  KnIn = 'KN_IN',
  Ko = 'KO',
  Kok = 'KOK',
  KokIn = 'KOK_IN',
  KoKp = 'KO_KP',
  KoKr = 'KO_KR',
  Ks = 'KS',
  Ksb = 'KSB',
  KsbTz = 'KSB_TZ',
  Ksf = 'KSF',
  KsfCm = 'KSF_CM',
  Ksh = 'KSH',
  KshDe = 'KSH_DE',
  KsArab = 'KS_ARAB',
  KsArabIn = 'KS_ARAB_IN',
  Ku = 'KU',
  KuTr = 'KU_TR',
  Kw = 'KW',
  KwGb = 'KW_GB',
  Ky = 'KY',
  KyKg = 'KY_KG',
  Lag = 'LAG',
  LagTz = 'LAG_TZ',
  Lb = 'LB',
  LbLu = 'LB_LU',
  Lg = 'LG',
  LgUg = 'LG_UG',
  Lkt = 'LKT',
  LktUs = 'LKT_US',
  Ln = 'LN',
  LnAo = 'LN_AO',
  LnCd = 'LN_CD',
  LnCf = 'LN_CF',
  LnCg = 'LN_CG',
  Lo = 'LO',
  LoLa = 'LO_LA',
  Lrc = 'LRC',
  LrcIq = 'LRC_IQ',
  LrcIr = 'LRC_IR',
  Lt = 'LT',
  LtLt = 'LT_LT',
  Lu = 'LU',
  Luo = 'LUO',
  LuoKe = 'LUO_KE',
  Luy = 'LUY',
  LuyKe = 'LUY_KE',
  LuCd = 'LU_CD',
  Lv = 'LV',
  LvLv = 'LV_LV',
  Mai = 'MAI',
  MaiIn = 'MAI_IN',
  Mas = 'MAS',
  MasKe = 'MAS_KE',
  MasTz = 'MAS_TZ',
  Mer = 'MER',
  MerKe = 'MER_KE',
  Mfe = 'MFE',
  MfeMu = 'MFE_MU',
  Mg = 'MG',
  Mgh = 'MGH',
  MghMz = 'MGH_MZ',
  Mgo = 'MGO',
  MgoCm = 'MGO_CM',
  MgMg = 'MG_MG',
  Mi = 'MI',
  MiNz = 'MI_NZ',
  Mk = 'MK',
  MkMk = 'MK_MK',
  Ml = 'ML',
  MlIn = 'ML_IN',
  Mn = 'MN',
  Mni = 'MNI',
  MniBeng = 'MNI_BENG',
  MniBengIn = 'MNI_BENG_IN',
  MnMn = 'MN_MN',
  Mr = 'MR',
  MrIn = 'MR_IN',
  Ms = 'MS',
  MsBn = 'MS_BN',
  MsId = 'MS_ID',
  MsMy = 'MS_MY',
  MsSg = 'MS_SG',
  Mt = 'MT',
  MtMt = 'MT_MT',
  Mua = 'MUA',
  MuaCm = 'MUA_CM',
  My = 'MY',
  MyMm = 'MY_MM',
  Mzn = 'MZN',
  MznIr = 'MZN_IR',
  Naq = 'NAQ',
  NaqNa = 'NAQ_NA',
  Nb = 'NB',
  NbNo = 'NB_NO',
  NbSj = 'NB_SJ',
  Nd = 'ND',
  Nds = 'NDS',
  NdsDe = 'NDS_DE',
  NdsNl = 'NDS_NL',
  NdZw = 'ND_ZW',
  Ne = 'NE',
  NeIn = 'NE_IN',
  NeNp = 'NE_NP',
  Nl = 'NL',
  NlAw = 'NL_AW',
  NlBe = 'NL_BE',
  NlBq = 'NL_BQ',
  NlCw = 'NL_CW',
  NlNl = 'NL_NL',
  NlSr = 'NL_SR',
  NlSx = 'NL_SX',
  Nmg = 'NMG',
  NmgCm = 'NMG_CM',
  Nn = 'NN',
  Nnh = 'NNH',
  NnhCm = 'NNH_CM',
  NnNo = 'NN_NO',
  Nus = 'NUS',
  NusSs = 'NUS_SS',
  Nyn = 'NYN',
  NynUg = 'NYN_UG',
  Om = 'OM',
  OmEt = 'OM_ET',
  OmKe = 'OM_KE',
  Or = 'OR',
  OrIn = 'OR_IN',
  Os = 'OS',
  OsGe = 'OS_GE',
  OsRu = 'OS_RU',
  Pa = 'PA',
  PaArab = 'PA_ARAB',
  PaArabPk = 'PA_ARAB_PK',
  PaGuru = 'PA_GURU',
  PaGuruIn = 'PA_GURU_IN',
  Pcm = 'PCM',
  PcmNg = 'PCM_NG',
  Pl = 'PL',
  PlPl = 'PL_PL',
  Prg = 'PRG',
  Ps = 'PS',
  PsAf = 'PS_AF',
  PsPk = 'PS_PK',
  Pt = 'PT',
  PtAo = 'PT_AO',
  PtBr = 'PT_BR',
  PtCh = 'PT_CH',
  PtCv = 'PT_CV',
  PtGq = 'PT_GQ',
  PtGw = 'PT_GW',
  PtLu = 'PT_LU',
  PtMo = 'PT_MO',
  PtMz = 'PT_MZ',
  PtPt = 'PT_PT',
  PtSt = 'PT_ST',
  PtTl = 'PT_TL',
  Qu = 'QU',
  QuBo = 'QU_BO',
  QuEc = 'QU_EC',
  QuPe = 'QU_PE',
  Rm = 'RM',
  RmCh = 'RM_CH',
  Rn = 'RN',
  RnBi = 'RN_BI',
  Ro = 'RO',
  Rof = 'ROF',
  RofTz = 'ROF_TZ',
  RoMd = 'RO_MD',
  RoRo = 'RO_RO',
  Ru = 'RU',
  RuBy = 'RU_BY',
  RuKg = 'RU_KG',
  RuKz = 'RU_KZ',
  RuMd = 'RU_MD',
  RuRu = 'RU_RU',
  RuUa = 'RU_UA',
  Rw = 'RW',
  Rwk = 'RWK',
  RwkTz = 'RWK_TZ',
  RwRw = 'RW_RW',
  Sah = 'SAH',
  SahRu = 'SAH_RU',
  Saq = 'SAQ',
  SaqKe = 'SAQ_KE',
  Sat = 'SAT',
  SatOlck = 'SAT_OLCK',
  SatOlckIn = 'SAT_OLCK_IN',
  Sbp = 'SBP',
  SbpTz = 'SBP_TZ',
  Sd = 'SD',
  SdArab = 'SD_ARAB',
  SdArabPk = 'SD_ARAB_PK',
  SdDeva = 'SD_DEVA',
  SdDevaIn = 'SD_DEVA_IN',
  Se = 'SE',
  Seh = 'SEH',
  SehMz = 'SEH_MZ',
  Ses = 'SES',
  SesMl = 'SES_ML',
  SeFi = 'SE_FI',
  SeNo = 'SE_NO',
  SeSe = 'SE_SE',
  Sg = 'SG',
  SgCf = 'SG_CF',
  Shi = 'SHI',
  ShiLatn = 'SHI_LATN',
  ShiLatnMa = 'SHI_LATN_MA',
  ShiTfng = 'SHI_TFNG',
  ShiTfngMa = 'SHI_TFNG_MA',
  Si = 'SI',
  SiLk = 'SI_LK',
  Sk = 'SK',
  SkSk = 'SK_SK',
  Sl = 'SL',
  SlSi = 'SL_SI',
  Smn = 'SMN',
  SmnFi = 'SMN_FI',
  Sn = 'SN',
  SnZw = 'SN_ZW',
  So = 'SO',
  SoDj = 'SO_DJ',
  SoEt = 'SO_ET',
  SoKe = 'SO_KE',
  SoSo = 'SO_SO',
  Sq = 'SQ',
  SqAl = 'SQ_AL',
  SqMk = 'SQ_MK',
  SqXk = 'SQ_XK',
  Sr = 'SR',
  SrCyrl = 'SR_CYRL',
  SrCyrlBa = 'SR_CYRL_BA',
  SrCyrlMe = 'SR_CYRL_ME',
  SrCyrlRs = 'SR_CYRL_RS',
  SrCyrlXk = 'SR_CYRL_XK',
  SrLatn = 'SR_LATN',
  SrLatnBa = 'SR_LATN_BA',
  SrLatnMe = 'SR_LATN_ME',
  SrLatnRs = 'SR_LATN_RS',
  SrLatnXk = 'SR_LATN_XK',
  Su = 'SU',
  SuLatn = 'SU_LATN',
  SuLatnId = 'SU_LATN_ID',
  Sv = 'SV',
  SvAx = 'SV_AX',
  SvFi = 'SV_FI',
  SvSe = 'SV_SE',
  Sw = 'SW',
  SwCd = 'SW_CD',
  SwKe = 'SW_KE',
  SwTz = 'SW_TZ',
  SwUg = 'SW_UG',
  Ta = 'TA',
  TaIn = 'TA_IN',
  TaLk = 'TA_LK',
  TaMy = 'TA_MY',
  TaSg = 'TA_SG',
  Te = 'TE',
  Teo = 'TEO',
  TeoKe = 'TEO_KE',
  TeoUg = 'TEO_UG',
  TeIn = 'TE_IN',
  Tg = 'TG',
  TgTj = 'TG_TJ',
  Th = 'TH',
  ThTh = 'TH_TH',
  Ti = 'TI',
  TiEr = 'TI_ER',
  TiEt = 'TI_ET',
  Tk = 'TK',
  TkTm = 'TK_TM',
  To = 'TO',
  ToTo = 'TO_TO',
  Tr = 'TR',
  TrCy = 'TR_CY',
  TrTr = 'TR_TR',
  Tt = 'TT',
  TtRu = 'TT_RU',
  Twq = 'TWQ',
  TwqNe = 'TWQ_NE',
  Tzm = 'TZM',
  TzmMa = 'TZM_MA',
  Ug = 'UG',
  UgCn = 'UG_CN',
  Uk = 'UK',
  UkUa = 'UK_UA',
  Ur = 'UR',
  UrIn = 'UR_IN',
  UrPk = 'UR_PK',
  Uz = 'UZ',
  UzArab = 'UZ_ARAB',
  UzArabAf = 'UZ_ARAB_AF',
  UzCyrl = 'UZ_CYRL',
  UzCyrlUz = 'UZ_CYRL_UZ',
  UzLatn = 'UZ_LATN',
  UzLatnUz = 'UZ_LATN_UZ',
  Vai = 'VAI',
  VaiLatn = 'VAI_LATN',
  VaiLatnLr = 'VAI_LATN_LR',
  VaiVaii = 'VAI_VAII',
  VaiVaiiLr = 'VAI_VAII_LR',
  Vi = 'VI',
  ViVn = 'VI_VN',
  Vo = 'VO',
  Vun = 'VUN',
  VunTz = 'VUN_TZ',
  Wae = 'WAE',
  WaeCh = 'WAE_CH',
  Wo = 'WO',
  WoSn = 'WO_SN',
  Xh = 'XH',
  XhZa = 'XH_ZA',
  Xog = 'XOG',
  XogUg = 'XOG_UG',
  Yav = 'YAV',
  YavCm = 'YAV_CM',
  Yi = 'YI',
  Yo = 'YO',
  YoBj = 'YO_BJ',
  YoNg = 'YO_NG',
  Yue = 'YUE',
  YueHans = 'YUE_HANS',
  YueHansCn = 'YUE_HANS_CN',
  YueHant = 'YUE_HANT',
  YueHantHk = 'YUE_HANT_HK',
  Zgh = 'ZGH',
  ZghMa = 'ZGH_MA',
  Zh = 'ZH',
  ZhHans = 'ZH_HANS',
  ZhHansCn = 'ZH_HANS_CN',
  ZhHansHk = 'ZH_HANS_HK',
  ZhHansMo = 'ZH_HANS_MO',
  ZhHansSg = 'ZH_HANS_SG',
  ZhHant = 'ZH_HANT',
  ZhHantHk = 'ZH_HANT_HK',
  ZhHantMo = 'ZH_HANT_MO',
  ZhHantTw = 'ZH_HANT_TW',
  Zu = 'ZU',
  ZuZa = 'ZU_ZA'
}

export type LanguageDisplay = {
  __typename?: 'LanguageDisplay';
  code: LanguageCodeEnum;
  language: Scalars['String'];
};

export type LimitInfo = {
  __typename?: 'LimitInfo';
  allowedUsage: Limits;
  currentUsage: Limits;
};

export type Limits = {
  __typename?: 'Limits';
  channels?: Maybe<Scalars['Int']>;
  orders?: Maybe<Scalars['Int']>;
  productVariants?: Maybe<Scalars['Int']>;
  staffUsers?: Maybe<Scalars['Int']>;
  warehouses?: Maybe<Scalars['Int']>;
};

export type Manifest = {
  __typename?: 'Manifest';
  about?: Maybe<Scalars['String']>;
  appUrl?: Maybe<Scalars['String']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead. */
  configurationUrl?: Maybe<Scalars['String']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead. */
  dataPrivacy?: Maybe<Scalars['String']>;
  dataPrivacyUrl?: Maybe<Scalars['String']>;
  extensions: Array<AppManifestExtension>;
  homepageUrl?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Permission>>;
  supportUrl?: Maybe<Scalars['String']>;
  tokenTargetUrl?: Maybe<Scalars['String']>;
  version: Scalars['String'];
  webhooks: Array<AppManifestWebhook>;
};

export type Margin = {
  __typename?: 'Margin';
  start?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['Int']>;
};

export enum MeasurementUnitsEnum {
  AcreFt = 'ACRE_FT',
  AcreIn = 'ACRE_IN',
  Cm = 'CM',
  CubicCentimeter = 'CUBIC_CENTIMETER',
  CubicDecimeter = 'CUBIC_DECIMETER',
  CubicFoot = 'CUBIC_FOOT',
  CubicInch = 'CUBIC_INCH',
  CubicMeter = 'CUBIC_METER',
  CubicMillimeter = 'CUBIC_MILLIMETER',
  CubicYard = 'CUBIC_YARD',
  FlOz = 'FL_OZ',
  Ft = 'FT',
  G = 'G',
  Inch = 'INCH',
  Kg = 'KG',
  Km = 'KM',
  Lb = 'LB',
  Liter = 'LITER',
  M = 'M',
  Oz = 'OZ',
  Pint = 'PINT',
  Qt = 'QT',
  SqCm = 'SQ_CM',
  SqFt = 'SQ_FT',
  SqInch = 'SQ_INCH',
  SqKm = 'SQ_KM',
  SqM = 'SQ_M',
  SqYd = 'SQ_YD',
  Tonne = 'TONNE',
  Yd = 'YD'
}

export type Menu = Node & ObjectWithMetadata & {
  __typename?: 'Menu';
  id: Scalars['ID'];
  items?: Maybe<Array<MenuItem>>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  slug: Scalars['String'];
};


export type MenuMetafieldArgs = {
  key: Scalars['String'];
};


export type MenuMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type MenuPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type MenuPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type MenuBulkDelete = {
  __typename?: 'MenuBulkDelete';
  count: Scalars['Int'];
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuCountableConnection = {
  __typename?: 'MenuCountableConnection';
  edges: Array<MenuCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuCountableEdge = {
  __typename?: 'MenuCountableEdge';
  cursor: Scalars['String'];
  node: Menu;
};

export type MenuCreate = {
  __typename?: 'MenuCreate';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuCreateInput = {
  items?: InputMaybe<Array<MenuItemInput>>;
  name: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
};

export type MenuCreated = Event & {
  __typename?: 'MenuCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  menu?: Maybe<Menu>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type MenuCreatedMenuArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type MenuDelete = {
  __typename?: 'MenuDelete';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuDeleted = Event & {
  __typename?: 'MenuDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  menu?: Maybe<Menu>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type MenuDeletedMenuArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type MenuError = {
  __typename?: 'MenuError';
  code: MenuErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum MenuErrorCode {
  CannotAssignNode = 'CANNOT_ASSIGN_NODE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidMenuItem = 'INVALID_MENU_ITEM',
  NotFound = 'NOT_FOUND',
  NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
  Required = 'REQUIRED',
  TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
  Unique = 'UNIQUE'
}

export type MenuFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Array<Scalars['String']>>;
};

export type MenuInput = {
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type MenuItem = Node & ObjectWithMetadata & {
  __typename?: 'MenuItem';
  category?: Maybe<Category>;
  children?: Maybe<Array<MenuItem>>;
  collection?: Maybe<Collection>;
  id: Scalars['ID'];
  level: Scalars['Int'];
  menu: Menu;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  page?: Maybe<Page>;
  parent?: Maybe<MenuItem>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  translation?: Maybe<MenuItemTranslation>;
  url?: Maybe<Scalars['String']>;
};


export type MenuItemMetafieldArgs = {
  key: Scalars['String'];
};


export type MenuItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type MenuItemPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type MenuItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type MenuItemBulkDelete = {
  __typename?: 'MenuItemBulkDelete';
  count: Scalars['Int'];
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
  __typename?: 'MenuItemCountableConnection';
  edges: Array<MenuItemCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuItemCountableEdge = {
  __typename?: 'MenuItemCountableEdge';
  cursor: Scalars['String'];
  node: MenuItem;
};

export type MenuItemCreate = {
  __typename?: 'MenuItemCreate';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  category?: InputMaybe<Scalars['ID']>;
  collection?: InputMaybe<Scalars['ID']>;
  menu: Scalars['ID'];
  name: Scalars['String'];
  page?: InputMaybe<Scalars['ID']>;
  parent?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MenuItemCreated = Event & {
  __typename?: 'MenuItemCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  menuItem?: Maybe<MenuItem>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type MenuItemCreatedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type MenuItemDelete = {
  __typename?: 'MenuItemDelete';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemDeleted = Event & {
  __typename?: 'MenuItemDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  menuItem?: Maybe<MenuItem>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type MenuItemDeletedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type MenuItemFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
};

export type MenuItemInput = {
  category?: InputMaybe<Scalars['ID']>;
  collection?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MenuItemMove = {
  __typename?: 'MenuItemMove';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuItemMoveInput = {
  itemId: Scalars['ID'];
  parentId?: InputMaybe<Scalars['ID']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type MenuItemSortingInput = {
  direction: OrderDirection;
  field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
  __typename?: 'MenuItemTranslatableContent';
  id: Scalars['ID'];
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  menuItem?: Maybe<MenuItem>;
  name: Scalars['String'];
  translation?: Maybe<MenuItemTranslation>;
};


export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type MenuItemTranslate = {
  __typename?: 'MenuItemTranslate';
  errors: Array<TranslationError>;
  menuItem?: Maybe<MenuItem>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type MenuItemTranslation = Node & {
  __typename?: 'MenuItemTranslation';
  id: Scalars['ID'];
  language: LanguageDisplay;
  name: Scalars['String'];
};

export type MenuItemUpdate = {
  __typename?: 'MenuItemUpdate';
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemUpdated = Event & {
  __typename?: 'MenuItemUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  menuItem?: Maybe<MenuItem>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type MenuItemUpdatedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export enum MenuItemsSortField {
  Name = 'NAME'
}

export enum MenuSortField {
  ItemsCount = 'ITEMS_COUNT',
  Name = 'NAME'
}

export type MenuSortingInput = {
  direction: OrderDirection;
  field: MenuSortField;
};

export type MenuUpdate = {
  __typename?: 'MenuUpdate';
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuUpdated = Event & {
  __typename?: 'MenuUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  menu?: Maybe<Menu>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type MenuUpdatedMenuArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type MetadataError = {
  __typename?: 'MetadataError';
  code: MetadataErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum MetadataErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  NotUpdated = 'NOT_UPDATED',
  Required = 'REQUIRED'
}

export type MetadataFilter = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type MetadataInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type MetadataItem = {
  __typename?: 'MetadataItem';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float'];
  currency: Scalars['String'];
};

export type MoneyInput = {
  amount: Scalars['PositiveDecimal'];
  currency: Scalars['String'];
};

export type MoneyRange = {
  __typename?: 'MoneyRange';
  start?: Maybe<Money>;
  stop?: Maybe<Money>;
};

export type MoveProductInput = {
  productId: Scalars['ID'];
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  accountAddressCreate?: Maybe<AccountAddressCreate>;
  accountAddressDelete?: Maybe<AccountAddressDelete>;
  accountAddressUpdate?: Maybe<AccountAddressUpdate>;
  accountDelete?: Maybe<AccountDelete>;
  accountRegister?: Maybe<AccountRegister>;
  accountRequestDeletion?: Maybe<AccountRequestDeletion>;
  accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
  accountUpdate?: Maybe<AccountUpdate>;
  addressCreate?: Maybe<AddressCreate>;
  addressDelete?: Maybe<AddressDelete>;
  addressSetDefault?: Maybe<AddressSetDefault>;
  addressUpdate?: Maybe<AddressUpdate>;
  appActivate?: Maybe<AppActivate>;
  appCreate?: Maybe<AppCreate>;
  appDeactivate?: Maybe<AppDeactivate>;
  appDelete?: Maybe<AppDelete>;
  appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
  appFetchManifest?: Maybe<AppFetchManifest>;
  appInstall?: Maybe<AppInstall>;
  appRetryInstall?: Maybe<AppRetryInstall>;
  appTokenCreate?: Maybe<AppTokenCreate>;
  appTokenDelete?: Maybe<AppTokenDelete>;
  appTokenVerify?: Maybe<AppTokenVerify>;
  appUpdate?: Maybe<AppUpdate>;
  assignNavigation?: Maybe<AssignNavigation>;
  assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
  attributeBulkDelete?: Maybe<AttributeBulkDelete>;
  attributeCreate?: Maybe<AttributeCreate>;
  attributeDelete?: Maybe<AttributeDelete>;
  attributeReorderValues?: Maybe<AttributeReorderValues>;
  attributeTranslate?: Maybe<AttributeTranslate>;
  attributeUpdate?: Maybe<AttributeUpdate>;
  attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
  attributeValueCreate?: Maybe<AttributeValueCreate>;
  attributeValueDelete?: Maybe<AttributeValueDelete>;
  attributeValueTranslate?: Maybe<AttributeValueTranslate>;
  attributeValueUpdate?: Maybe<AttributeValueUpdate>;
  categoryBulkDelete?: Maybe<CategoryBulkDelete>;
  categoryCreate?: Maybe<CategoryCreate>;
  categoryDelete?: Maybe<CategoryDelete>;
  categoryTranslate?: Maybe<CategoryTranslate>;
  categoryUpdate?: Maybe<CategoryUpdate>;
  channelActivate?: Maybe<ChannelActivate>;
  channelCreate?: Maybe<ChannelCreate>;
  channelDeactivate?: Maybe<ChannelDeactivate>;
  channelDelete?: Maybe<ChannelDelete>;
  channelReorderWarehouses?: Maybe<ChannelReorderWarehouses>;
  channelUpdate?: Maybe<ChannelUpdate>;
  checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
  checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
  checkoutComplete?: Maybe<CheckoutComplete>;
  checkoutCreate?: Maybe<CheckoutCreate>;
  checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
  checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
  checkoutDeliveryMethodUpdate?: Maybe<CheckoutDeliveryMethodUpdate>;
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
  checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead. */
  checkoutLineDelete?: Maybe<CheckoutLineDelete>;
  checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
  checkoutLinesDelete?: Maybe<CheckoutLinesDelete>;
  checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
  checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
  checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead. */
  checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
  collectionAddProducts?: Maybe<CollectionAddProducts>;
  collectionBulkDelete?: Maybe<CollectionBulkDelete>;
  collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
  collectionCreate?: Maybe<CollectionCreate>;
  collectionDelete?: Maybe<CollectionDelete>;
  collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
  collectionReorderProducts?: Maybe<CollectionReorderProducts>;
  collectionTranslate?: Maybe<CollectionTranslate>;
  collectionUpdate?: Maybe<CollectionUpdate>;
  confirmAccount?: Maybe<ConfirmAccount>;
  confirmEmailChange?: Maybe<ConfirmEmailChange>;
  createWarehouse?: Maybe<WarehouseCreate>;
  customerBulkDelete?: Maybe<CustomerBulkDelete>;
  customerCreate?: Maybe<CustomerCreate>;
  customerDelete?: Maybe<CustomerDelete>;
  customerUpdate?: Maybe<CustomerUpdate>;
  deleteMetadata?: Maybe<DeleteMetadata>;
  deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
  deleteWarehouse?: Maybe<WarehouseDelete>;
  digitalContentCreate?: Maybe<DigitalContentCreate>;
  digitalContentDelete?: Maybe<DigitalContentDelete>;
  digitalContentUpdate?: Maybe<DigitalContentUpdate>;
  digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
  draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
  draftOrderComplete?: Maybe<DraftOrderComplete>;
  draftOrderCreate?: Maybe<DraftOrderCreate>;
  draftOrderDelete?: Maybe<DraftOrderDelete>;
  /** @deprecated This field will be removed in Saleor 4.0. */
  draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
  draftOrderUpdate?: Maybe<DraftOrderUpdate>;
  eventDeliveryRetry?: Maybe<EventDeliveryRetry>;
  exportGiftCards?: Maybe<ExportGiftCards>;
  exportProducts?: Maybe<ExportProducts>;
  externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>;
  externalLogout?: Maybe<ExternalLogout>;
  externalNotificationTrigger?: Maybe<ExternalNotificationTrigger>;
  externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>;
  externalRefresh?: Maybe<ExternalRefresh>;
  externalVerify?: Maybe<ExternalVerify>;
  fileUpload?: Maybe<FileUpload>;
  giftCardActivate?: Maybe<GiftCardActivate>;
  giftCardAddNote?: Maybe<GiftCardAddNote>;
  giftCardBulkActivate?: Maybe<GiftCardBulkActivate>;
  giftCardBulkCreate?: Maybe<GiftCardBulkCreate>;
  giftCardBulkDeactivate?: Maybe<GiftCardBulkDeactivate>;
  giftCardBulkDelete?: Maybe<GiftCardBulkDelete>;
  giftCardCreate?: Maybe<GiftCardCreate>;
  giftCardDeactivate?: Maybe<GiftCardDeactivate>;
  giftCardDelete?: Maybe<GiftCardDelete>;
  giftCardResend?: Maybe<GiftCardResend>;
  giftCardSettingsUpdate?: Maybe<GiftCardSettingsUpdate>;
  giftCardUpdate?: Maybe<GiftCardUpdate>;
  invoiceCreate?: Maybe<InvoiceCreate>;
  invoiceDelete?: Maybe<InvoiceDelete>;
  invoiceRequest?: Maybe<InvoiceRequest>;
  invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
  invoiceSendNotification?: Maybe<InvoiceSendNotification>;
  invoiceUpdate?: Maybe<InvoiceUpdate>;
  menuBulkDelete?: Maybe<MenuBulkDelete>;
  menuCreate?: Maybe<MenuCreate>;
  menuDelete?: Maybe<MenuDelete>;
  menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
  menuItemCreate?: Maybe<MenuItemCreate>;
  menuItemDelete?: Maybe<MenuItemDelete>;
  menuItemMove?: Maybe<MenuItemMove>;
  menuItemTranslate?: Maybe<MenuItemTranslate>;
  menuItemUpdate?: Maybe<MenuItemUpdate>;
  menuUpdate?: Maybe<MenuUpdate>;
  orderAddNote?: Maybe<OrderAddNote>;
  orderBulkCancel?: Maybe<OrderBulkCancel>;
  orderCancel?: Maybe<OrderCancel>;
  orderCapture?: Maybe<OrderCapture>;
  orderConfirm?: Maybe<OrderConfirm>;
  orderCreateFromCheckout?: Maybe<OrderCreateFromCheckout>;
  orderDiscountAdd?: Maybe<OrderDiscountAdd>;
  orderDiscountDelete?: Maybe<OrderDiscountDelete>;
  orderDiscountUpdate?: Maybe<OrderDiscountUpdate>;
  orderFulfill?: Maybe<OrderFulfill>;
  orderFulfillmentApprove?: Maybe<FulfillmentApprove>;
  orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
  orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
  orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
  orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
  orderLineDelete?: Maybe<OrderLineDelete>;
  orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>;
  orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>;
  orderLineUpdate?: Maybe<OrderLineUpdate>;
  orderLinesCreate?: Maybe<OrderLinesCreate>;
  orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
  orderRefund?: Maybe<OrderRefund>;
  orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
  orderUpdate?: Maybe<OrderUpdate>;
  orderUpdateShipping?: Maybe<OrderUpdateShipping>;
  orderVoid?: Maybe<OrderVoid>;
  pageAttributeAssign?: Maybe<PageAttributeAssign>;
  pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
  pageBulkDelete?: Maybe<PageBulkDelete>;
  pageBulkPublish?: Maybe<PageBulkPublish>;
  pageCreate?: Maybe<PageCreate>;
  pageDelete?: Maybe<PageDelete>;
  pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
  pageTranslate?: Maybe<PageTranslate>;
  pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
  pageTypeCreate?: Maybe<PageTypeCreate>;
  pageTypeDelete?: Maybe<PageTypeDelete>;
  pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
  pageTypeUpdate?: Maybe<PageTypeUpdate>;
  pageUpdate?: Maybe<PageUpdate>;
  passwordChange?: Maybe<PasswordChange>;
  paymentCapture?: Maybe<PaymentCapture>;
  paymentCheckBalance?: Maybe<PaymentCheckBalance>;
  paymentInitialize?: Maybe<PaymentInitialize>;
  paymentRefund?: Maybe<PaymentRefund>;
  paymentVoid?: Maybe<PaymentVoid>;
  permissionGroupCreate?: Maybe<PermissionGroupCreate>;
  permissionGroupDelete?: Maybe<PermissionGroupDelete>;
  permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
  pluginUpdate?: Maybe<PluginUpdate>;
  productAttributeAssign?: Maybe<ProductAttributeAssign>;
  productAttributeAssignmentUpdate?: Maybe<ProductAttributeAssignmentUpdate>;
  productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
  productBulkDelete?: Maybe<ProductBulkDelete>;
  productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
  productCreate?: Maybe<ProductCreate>;
  productDelete?: Maybe<ProductDelete>;
  productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>;
  productMediaCreate?: Maybe<ProductMediaCreate>;
  productMediaDelete?: Maybe<ProductMediaDelete>;
  productMediaReorder?: Maybe<ProductMediaReorder>;
  productMediaUpdate?: Maybe<ProductMediaUpdate>;
  productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
  productTranslate?: Maybe<ProductTranslate>;
  productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
  productTypeCreate?: Maybe<ProductTypeCreate>;
  productTypeDelete?: Maybe<ProductTypeDelete>;
  productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
  productTypeUpdate?: Maybe<ProductTypeUpdate>;
  productUpdate?: Maybe<ProductUpdate>;
  productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
  productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
  productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
  productVariantCreate?: Maybe<ProductVariantCreate>;
  productVariantDelete?: Maybe<ProductVariantDelete>;
  productVariantPreorderDeactivate?: Maybe<ProductVariantPreorderDeactivate>;
  productVariantReorder?: Maybe<ProductVariantReorder>;
  productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
  productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
  productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
  productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
  productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
  productVariantTranslate?: Maybe<ProductVariantTranslate>;
  productVariantUpdate?: Maybe<ProductVariantUpdate>;
  requestEmailChange?: Maybe<RequestEmailChange>;
  requestPasswordReset?: Maybe<RequestPasswordReset>;
  saleBulkDelete?: Maybe<SaleBulkDelete>;
  saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
  saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
  saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
  saleCreate?: Maybe<SaleCreate>;
  saleDelete?: Maybe<SaleDelete>;
  saleTranslate?: Maybe<SaleTranslate>;
  saleUpdate?: Maybe<SaleUpdate>;
  setPassword?: Maybe<SetPassword>;
  shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
  shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
  shippingPriceCreate?: Maybe<ShippingPriceCreate>;
  shippingPriceDelete?: Maybe<ShippingPriceDelete>;
  shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
  shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
  shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
  shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
  shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
  shippingZoneCreate?: Maybe<ShippingZoneCreate>;
  shippingZoneDelete?: Maybe<ShippingZoneDelete>;
  shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
  shopAddressUpdate?: Maybe<ShopAddressUpdate>;
  shopDomainUpdate?: Maybe<ShopDomainUpdate>;
  shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
  shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
  shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
  staffBulkDelete?: Maybe<StaffBulkDelete>;
  staffCreate?: Maybe<StaffCreate>;
  staffDelete?: Maybe<StaffDelete>;
  staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
  staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
  staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
  staffUpdate?: Maybe<StaffUpdate>;
  tokenCreate?: Maybe<CreateToken>;
  tokenRefresh?: Maybe<RefreshToken>;
  tokenVerify?: Maybe<VerifyToken>;
  tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
  transactionCreate?: Maybe<TransactionCreate>;
  transactionRequestAction?: Maybe<TransactionRequestAction>;
  transactionUpdate?: Maybe<TransactionUpdate>;
  unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
  updateMetadata?: Maybe<UpdateMetadata>;
  updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
  updateWarehouse?: Maybe<WarehouseUpdate>;
  userAvatarDelete?: Maybe<UserAvatarDelete>;
  userAvatarUpdate?: Maybe<UserAvatarUpdate>;
  userBulkSetActive?: Maybe<UserBulkSetActive>;
  variantMediaAssign?: Maybe<VariantMediaAssign>;
  variantMediaUnassign?: Maybe<VariantMediaUnassign>;
  voucherBulkDelete?: Maybe<VoucherBulkDelete>;
  voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
  voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
  voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
  voucherCreate?: Maybe<VoucherCreate>;
  voucherDelete?: Maybe<VoucherDelete>;
  voucherTranslate?: Maybe<VoucherTranslate>;
  voucherUpdate?: Maybe<VoucherUpdate>;
  webhookCreate?: Maybe<WebhookCreate>;
  webhookDelete?: Maybe<WebhookDelete>;
  webhookUpdate?: Maybe<WebhookUpdate>;
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  type?: InputMaybe<AddressTypeEnum>;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String'];
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountRequestDeletionArgs = {
  channel?: InputMaybe<Scalars['String']>;
  redirectUrl: Scalars['String'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID'];
  type: AddressTypeEnum;
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID'];
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID'];
  type: AddressTypeEnum;
  userId: Scalars['ID'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAppActivateArgs = {
  id: Scalars['ID'];
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID'];
  input: AppInput;
};


export type MutationAssignNavigationArgs = {
  menu?: InputMaybe<Scalars['ID']>;
  navigationType: NavigationType;
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationAttributeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeUpdateArgs = {
  id: Scalars['ID'];
  input: AttributeUpdateInput;
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID'];
  input: AttributeValueTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeValueUpdateArgs = {
  id: Scalars['ID'];
  input: AttributeValueUpdateInput;
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: InputMaybe<Scalars['ID']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID'];
  input: CategoryInput;
};


export type MutationChannelActivateArgs = {
  id: Scalars['ID'];
};


export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


export type MutationChannelDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ChannelDeleteInput>;
};


export type MutationChannelReorderWarehousesArgs = {
  channelId: Scalars['ID'];
  moves: Array<ReorderInput>;
};


export type MutationChannelUpdateArgs = {
  id: Scalars['ID'];
  input: ChannelUpdateInput;
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  promoCode: Scalars['String'];
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
  validationRules?: InputMaybe<CheckoutAddressValidationRules>;
};


export type MutationCheckoutCompleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  paymentData?: InputMaybe<Scalars['JSONString']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
  storeSource?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  customerId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutDeliveryMethodUpdateArgs = {
  deliveryMethodId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLanguageCodeUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCodeEnum;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  lineId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  lines: Array<CheckoutLineInput>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesDeleteArgs = {
  id?: InputMaybe<Scalars['ID']>;
  linesIds: Array<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  lines: Array<CheckoutLineUpdateInput>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  input: PaymentInput;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  promoCode?: InputMaybe<Scalars['String']>;
  promoCodeId?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  shippingAddress: AddressInput;
  token?: InputMaybe<Scalars['UUID']>;
  validationRules?: InputMaybe<CheckoutAddressValidationRules>;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  shippingMethodId: Scalars['ID'];
  token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCollectionChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionChannelListingUpdateInput;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID'];
  moves: Array<MoveProductInput>;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionInput;
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationConfirmEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationCustomerBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCustomerUpdateArgs = {
  id: Scalars['ID'];
  input: CustomerInput;
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID'];
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDraftOrderUpdateArgs = {
  id: Scalars['ID'];
  input: DraftOrderInput;
};


export type MutationEventDeliveryRetryArgs = {
  id: Scalars['ID'];
};


export type MutationExportGiftCardsArgs = {
  input: ExportGiftCardsInput;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationExternalAuthenticationUrlArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalLogoutArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalNotificationTriggerArgs = {
  channel: Scalars['String'];
  input: ExternalNotificationTriggerInput;
  pluginId?: InputMaybe<Scalars['String']>;
};


export type MutationExternalObtainAccessTokensArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalRefreshArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationExternalVerifyArgs = {
  input: Scalars['JSONString'];
  pluginId: Scalars['String'];
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardAddNoteArgs = {
  id: Scalars['ID'];
  input: GiftCardAddNoteInput;
};


export type MutationGiftCardBulkActivateArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationGiftCardBulkCreateArgs = {
  input: GiftCardBulkCreateInput;
};


export type MutationGiftCardBulkDeactivateArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationGiftCardBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardResendArgs = {
  input: GiftCardResendInput;
};


export type MutationGiftCardSettingsUpdateArgs = {
  input: GiftCardSettingsUpdateInput;
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID'];
  input: GiftCardUpdateInput;
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceRequestArgs = {
  number?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceSendNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateInvoiceInput;
};


export type MutationMenuBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID'];
  moves: Array<MenuItemMoveInput>;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID'];
  input: MenuItemInput;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID'];
  input: MenuInput;
};


export type MutationOrderAddNoteArgs = {
  input: OrderAddNoteInput;
  order: Scalars['ID'];
};


export type MutationOrderBulkCancelArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationOrderCancelArgs = {
  id: Scalars['ID'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderConfirmArgs = {
  id: Scalars['ID'];
};


export type MutationOrderCreateFromCheckoutArgs = {
  id: Scalars['ID'];
  removeCheckout?: InputMaybe<Scalars['Boolean']>;
};


export type MutationOrderDiscountAddArgs = {
  input: OrderDiscountCommonInput;
  orderId: Scalars['ID'];
};


export type MutationOrderDiscountDeleteArgs = {
  discountId: Scalars['ID'];
};


export type MutationOrderDiscountUpdateArgs = {
  discountId: Scalars['ID'];
  input: OrderDiscountCommonInput;
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: InputMaybe<Scalars['ID']>;
};


export type MutationOrderFulfillmentApproveArgs = {
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  notifyCustomer: Scalars['Boolean'];
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<FulfillmentCancelInput>;
};


export type MutationOrderFulfillmentRefundProductsArgs = {
  input: OrderRefundProductsInput;
  order: Scalars['ID'];
};


export type MutationOrderFulfillmentReturnProductsArgs = {
  input: OrderReturnProductsInput;
  order: Scalars['ID'];
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderLineDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationOrderLineDiscountRemoveArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationOrderLineDiscountUpdateArgs = {
  input: OrderDiscountCommonInput;
  orderLineId: Scalars['ID'];
};


export type MutationOrderLineUpdateArgs = {
  id: Scalars['ID'];
  input: OrderLineInput;
};


export type MutationOrderLinesCreateArgs = {
  id: Scalars['ID'];
  input: Array<OrderLineCreateInput>;
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID'];
  transactionReference?: InputMaybe<Scalars['String']>;
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderSettingsUpdateArgs = {
  input: OrderSettingsUpdateInput;
};


export type MutationOrderUpdateArgs = {
  id: Scalars['ID'];
  input: OrderUpdateInput;
};


export type MutationOrderUpdateShippingArgs = {
  input: OrderUpdateShippingInput;
  order: Scalars['ID'];
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID'];
};


export type MutationPageAttributeAssignArgs = {
  attributeIds: Array<Scalars['ID']>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPageBulkPublishArgs = {
  ids: Array<Scalars['ID']>;
  isPublished: Scalars['Boolean'];
};


export type MutationPageCreateArgs = {
  input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  pageId: Scalars['ID'];
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPageTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPageTypeCreateArgs = {
  input: PageTypeCreateInput;
};


export type MutationPageTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageTypeUpdateArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: PageTypeUpdateInput;
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID'];
  input: PageInput;
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPaymentCaptureArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentCheckBalanceArgs = {
  input: PaymentCheckBalanceInput;
};


export type MutationPaymentInitializeArgs = {
  channel?: InputMaybe<Scalars['String']>;
  gateway: Scalars['String'];
  paymentData?: InputMaybe<Scalars['JSONString']>;
};


export type MutationPaymentRefundArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID'];
  input: PermissionGroupUpdateInput;
};


export type MutationPluginUpdateArgs = {
  channelId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  input: PluginUpdateInput;
};


export type MutationProductAttributeAssignArgs = {
  operations: Array<ProductAttributeAssignInput>;
  productTypeId: Scalars['ID'];
};


export type MutationProductAttributeAssignmentUpdateArgs = {
  operations: Array<ProductAttributeAssignmentUpdateInput>;
  productTypeId: Scalars['ID'];
};


export type MutationProductAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']>;
  productTypeId: Scalars['ID'];
};


export type MutationProductBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: ProductChannelListingUpdateInput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductMediaBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductMediaCreateArgs = {
  input: ProductMediaCreateInput;
};


export type MutationProductMediaDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductMediaReorderArgs = {
  mediaIds: Array<Scalars['ID']>;
  productId: Scalars['ID'];
};


export type MutationProductMediaUpdateArgs = {
  id: Scalars['ID'];
  input: ProductMediaUpdateInput;
};


export type MutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  productId: Scalars['ID'];
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  productTypeId: Scalars['ID'];
  type: ProductAttributeType;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID'];
  input: ProductTypeInput;
};


export type MutationProductUpdateArgs = {
  id: Scalars['ID'];
  input: ProductInput;
};


export type MutationProductVariantBulkCreateArgs = {
  product: Scalars['ID'];
  variants: Array<ProductVariantBulkCreateInput>;
};


export type MutationProductVariantBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationProductVariantChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: Array<ProductVariantChannelListingAddInput>;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductVariantPreorderDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationProductVariantReorderArgs = {
  moves: Array<ReorderInput>;
  productId: Scalars['ID'];
};


export type MutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<ReorderInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantStocksDeleteArgs = {
  variantId: Scalars['ID'];
  warehouseIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantUpdateArgs = {
  id: Scalars['ID'];
  input: ProductVariantInput;
};


export type MutationRequestEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']>;
  newEmail: Scalars['String'];
  password: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  channel?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationSaleBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: SaleChannelListingInput;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID'];
  input: SaleInput;
};


export type MutationSetPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingMethodChannelListingInput;
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingPriceExcludeProductsArgs = {
  id: Scalars['ID'];
  input: ShippingPriceExcludeProductsInput;
};


export type MutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars['ID'];
  products: Array<Scalars['ID']>;
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID'];
  input: ShippingPriceTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingPriceInput;
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingZoneUpdateInput;
};


export type MutationShopAddressUpdateArgs = {
  input?: InputMaybe<AddressInput>;
};


export type MutationShopDomainUpdateArgs = {
  input?: InputMaybe<SiteDomainInput>;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationStaffBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID'];
  input: StaffUpdateInput;
};


export type MutationTokenCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationTransactionCreateArgs = {
  id: Scalars['ID'];
  transaction: TransactionCreateInput;
  transactionEvent?: InputMaybe<TransactionEventInput>;
};


export type MutationTransactionRequestActionArgs = {
  actionType: TransactionActionEnum;
  amount?: InputMaybe<Scalars['PositiveDecimal']>;
  id: Scalars['ID'];
};


export type MutationTransactionUpdateArgs = {
  id: Scalars['ID'];
  transaction?: InputMaybe<TransactionUpdateInput>;
  transactionEvent?: InputMaybe<TransactionEventInput>;
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID'];
  input: WarehouseUpdateInput;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload'];
};


export type MutationUserBulkSetActiveArgs = {
  ids: Array<Scalars['ID']>;
  isActive: Scalars['Boolean'];
};


export type MutationVariantMediaAssignArgs = {
  mediaId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationVariantMediaUnassignArgs = {
  mediaId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationVoucherBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherChannelListingInput;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID'];
  input: WebhookUpdateInput;
};

export type NameTranslationInput = {
  name?: InputMaybe<Scalars['String']>;
};

export enum NavigationType {
  Main = 'MAIN',
  Secondary = 'SECONDARY'
}

export type Node = {
  id: Scalars['ID'];
};

export type ObjectWithMetadata = {
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
};


export type ObjectWithMetadataMetafieldArgs = {
  key: Scalars['String'];
};


export type ObjectWithMetadataMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ObjectWithMetadataPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ObjectWithMetadataPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type Order = Node & ObjectWithMetadata & {
  __typename?: 'Order';
  actions: Array<OrderAction>;
  authorizeStatus: OrderAuthorizeStatusEnum;
  availableCollectionPoints: Array<Warehouse>;
  /** @deprecated Use `shippingMethods`, this field will be removed in 4.0 */
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  billingAddress?: Maybe<Address>;
  canFinalize: Scalars['Boolean'];
  channel: Channel;
  chargeStatus: OrderChargeStatusEnum;
  collectionPointName?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  customerNote: Scalars['String'];
  deliveryMethod?: Maybe<DeliveryMethod>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead. */
  discount?: Maybe<Money>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead. */
  discountName?: Maybe<Scalars['String']>;
  discounts: Array<OrderDiscount>;
  displayGrossPrices: Scalars['Boolean'];
  errors: Array<OrderError>;
  events: Array<OrderEvent>;
  fulfillments: Array<Fulfillment>;
  giftCards: Array<GiftCard>;
  id: Scalars['ID'];
  invoices: Array<Invoice>;
  isPaid: Scalars['Boolean'];
  isShippingRequired: Scalars['Boolean'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
  languageCode: Scalars['String'];
  languageCodeEnum: LanguageCodeEnum;
  lines: Array<OrderLine>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  number: Scalars['String'];
  origin: OrderOriginEnum;
  original?: Maybe<Scalars['ID']>;
  paymentStatus: PaymentChargeStatusEnum;
  paymentStatusDisplay: Scalars['String'];
  payments: Array<Payment>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  redirectUrl?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<Address>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead. */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodName?: Maybe<Scalars['String']>;
  shippingMethods: Array<ShippingMethod>;
  shippingPrice: TaxedMoney;
  shippingTaxRate: Scalars['Float'];
  status: OrderStatus;
  statusDisplay: Scalars['String'];
  subtotal: TaxedMoney;
  /** @deprecated This field will be removed in Saleor 4.0. Use `id` instead. */
  token: Scalars['String'];
  total: TaxedMoney;
  totalAuthorized: Money;
  totalBalance: Money;
  totalCaptured: Money;
  trackingClientId: Scalars['String'];
  transactions: Array<TransactionItem>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.  */
  translatedDiscountName?: Maybe<Scalars['String']>;
  undiscountedTotal: TaxedMoney;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userEmail?: Maybe<Scalars['String']>;
  voucher?: Maybe<Voucher>;
  weight: Weight;
};


export type OrderMetafieldArgs = {
  key: Scalars['String'];
};


export type OrderMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type OrderPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type OrderPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export enum OrderAction {
  Capture = 'CAPTURE',
  MarkAsPaid = 'MARK_AS_PAID',
  Refund = 'REFUND',
  Void = 'VOID'
}

export type OrderAddNote = {
  __typename?: 'OrderAddNote';
  errors: Array<OrderError>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderAddNoteInput = {
  message: Scalars['String'];
};

export enum OrderAuthorizeStatusEnum {
  Full = 'FULL',
  None = 'NONE',
  Partial = 'PARTIAL'
}

export type OrderBulkCancel = {
  __typename?: 'OrderBulkCancel';
  count: Scalars['Int'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderCancel = {
  __typename?: 'OrderCancel';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderCancelled = Event & {
  __typename?: 'OrderCancelled';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type OrderCapture = {
  __typename?: 'OrderCapture';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export enum OrderChargeStatusEnum {
  Full = 'FULL',
  None = 'NONE',
  Overcharged = 'OVERCHARGED',
  Partial = 'PARTIAL'
}

export type OrderConfirm = {
  __typename?: 'OrderConfirm';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderConfirmed = Event & {
  __typename?: 'OrderConfirmed';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type OrderCountableConnection = {
  __typename?: 'OrderCountableConnection';
  edges: Array<OrderCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderCountableEdge = {
  __typename?: 'OrderCountableEdge';
  cursor: Scalars['String'];
  node: Order;
};

export type OrderCreateFromCheckout = {
  __typename?: 'OrderCreateFromCheckout';
  errors: Array<OrderCreateFromCheckoutError>;
  order?: Maybe<Order>;
};

export type OrderCreateFromCheckoutError = {
  __typename?: 'OrderCreateFromCheckoutError';
  code: OrderCreateFromCheckoutErrorCode;
  field?: Maybe<Scalars['String']>;
  lines?: Maybe<Array<Scalars['ID']>>;
  message?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Scalars['ID']>>;
};

export enum OrderCreateFromCheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutNotFound = 'CHECKOUT_NOT_FOUND',
  EmailNotSet = 'EMAIL_NOT_SET',
  GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NoLines = 'NO_LINES',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  TaxError = 'TAX_ERROR',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE'
}

export type OrderCreated = Event & {
  __typename?: 'OrderCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderDiscount = Node & {
  __typename?: 'OrderDiscount';
  amount: Money;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  translatedName?: Maybe<Scalars['String']>;
  type: OrderDiscountType;
  value: Scalars['PositiveDecimal'];
  valueType: DiscountValueTypeEnum;
};

export type OrderDiscountAdd = {
  __typename?: 'OrderDiscountAdd';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderDiscountCommonInput = {
  reason?: InputMaybe<Scalars['String']>;
  value: Scalars['PositiveDecimal'];
  valueType: DiscountValueTypeEnum;
};

export type OrderDiscountDelete = {
  __typename?: 'OrderDiscountDelete';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export enum OrderDiscountType {
  Manual = 'MANUAL',
  Voucher = 'VOUCHER'
}

export type OrderDiscountUpdate = {
  __typename?: 'OrderDiscountUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderDraftFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
};

export type OrderError = {
  __typename?: 'OrderError';
  addressType?: Maybe<AddressTypeEnum>;
  code: OrderErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  orderLines?: Maybe<Array<Scalars['ID']>>;
  variants?: Maybe<Array<Scalars['ID']>>;
  warehouse?: Maybe<Scalars['ID']>;
};

export enum OrderErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
  CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
  CannotDelete = 'CANNOT_DELETE',
  CannotDiscount = 'CANNOT_DISCOUNT',
  CannotFulfillUnpaidOrder = 'CANNOT_FULFILL_UNPAID_ORDER',
  CannotRefund = 'CANNOT_REFUND',
  CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
  ChannelInactive = 'CHANNEL_INACTIVE',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  FulfillOrderLine = 'FULFILL_ORDER_LINE',
  GiftCardLine = 'GIFT_CARD_LINE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidQuantity = 'INVALID_QUANTITY',
  MissingTransactionActionRequestWebhook = 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK',
  NotAvailableInChannel = 'NOT_AVAILABLE_IN_CHANNEL',
  NotEditable = 'NOT_EDITABLE',
  NotFound = 'NOT_FOUND',
  OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
  PaymentError = 'PAYMENT_ERROR',
  PaymentMissing = 'PAYMENT_MISSING',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  Required = 'REQUIRED',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
  ZeroQuantity = 'ZERO_QUANTITY'
}

export type OrderEvent = Node & {
  __typename?: 'OrderEvent';
  amount?: Maybe<Scalars['Float']>;
  app?: Maybe<App>;
  composedId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<OrderEventDiscountObject>;
  email?: Maybe<Scalars['String']>;
  emailType?: Maybe<OrderEventsEmailsEnum>;
  fulfilledItems?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID'];
  invoiceNumber?: Maybe<Scalars['String']>;
  lines?: Maybe<Array<OrderEventOrderLineObject>>;
  message?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  oversoldItems?: Maybe<Array<Scalars['String']>>;
  paymentGateway?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  reference?: Maybe<Scalars['String']>;
  relatedOrder?: Maybe<Order>;
  shippingCostsIncluded?: Maybe<Scalars['Boolean']>;
  status?: Maybe<TransactionStatus>;
  transactionReference?: Maybe<Scalars['String']>;
  type?: Maybe<OrderEventsEnum>;
  user?: Maybe<User>;
  warehouse?: Maybe<Warehouse>;
};

export type OrderEventCountableConnection = {
  __typename?: 'OrderEventCountableConnection';
  edges: Array<OrderEventCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderEventCountableEdge = {
  __typename?: 'OrderEventCountableEdge';
  cursor: Scalars['String'];
  node: OrderEvent;
};

export type OrderEventDiscountObject = {
  __typename?: 'OrderEventDiscountObject';
  amount?: Maybe<Money>;
  oldAmount?: Maybe<Money>;
  oldValue?: Maybe<Scalars['PositiveDecimal']>;
  oldValueType?: Maybe<DiscountValueTypeEnum>;
  reason?: Maybe<Scalars['String']>;
  value: Scalars['PositiveDecimal'];
  valueType: DiscountValueTypeEnum;
};

export type OrderEventOrderLineObject = {
  __typename?: 'OrderEventOrderLineObject';
  discount?: Maybe<OrderEventDiscountObject>;
  itemName?: Maybe<Scalars['String']>;
  orderLine?: Maybe<OrderLine>;
  quantity?: Maybe<Scalars['Int']>;
};

export enum OrderEventsEmailsEnum {
  Confirmed = 'CONFIRMED',
  DigitalLinks = 'DIGITAL_LINKS',
  FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
  OrderCancel = 'ORDER_CANCEL',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderRefund = 'ORDER_REFUND',
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  ShippingConfirmation = 'SHIPPING_CONFIRMATION',
  TrackingUpdated = 'TRACKING_UPDATED'
}

export enum OrderEventsEnum {
  AddedProducts = 'ADDED_PRODUCTS',
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  DraftCreated = 'DRAFT_CREATED',
  DraftCreatedFromReplace = 'DRAFT_CREATED_FROM_REPLACE',
  EmailSent = 'EMAIL_SENT',
  ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
  FulfillmentAwaitsApproval = 'FULFILLMENT_AWAITS_APPROVAL',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
  FulfillmentRefunded = 'FULFILLMENT_REFUNDED',
  FulfillmentReplaced = 'FULFILLMENT_REPLACED',
  FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
  FulfillmentReturned = 'FULFILLMENT_RETURNED',
  InvoiceGenerated = 'INVOICE_GENERATED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  InvoiceUpdated = 'INVOICE_UPDATED',
  NoteAdded = 'NOTE_ADDED',
  OrderDiscountAdded = 'ORDER_DISCOUNT_ADDED',
  OrderDiscountAutomaticallyUpdated = 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED',
  OrderDiscountDeleted = 'ORDER_DISCOUNT_DELETED',
  OrderDiscountUpdated = 'ORDER_DISCOUNT_UPDATED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderLineDiscountRemoved = 'ORDER_LINE_DISCOUNT_REMOVED',
  OrderLineDiscountUpdated = 'ORDER_LINE_DISCOUNT_UPDATED',
  OrderLineProductDeleted = 'ORDER_LINE_PRODUCT_DELETED',
  OrderLineVariantDeleted = 'ORDER_LINE_VARIANT_DELETED',
  OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
  OrderReplacementCreated = 'ORDER_REPLACEMENT_CREATED',
  Other = 'OTHER',
  OversoldItems = 'OVERSOLD_ITEMS',
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  PaymentCaptured = 'PAYMENT_CAPTURED',
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentRefunded = 'PAYMENT_REFUNDED',
  PaymentVoided = 'PAYMENT_VOIDED',
  Placed = 'PLACED',
  PlacedFromDraft = 'PLACED_FROM_DRAFT',
  RemovedProducts = 'REMOVED_PRODUCTS',
  TrackingUpdated = 'TRACKING_UPDATED',
  TransactionCaptureRequested = 'TRANSACTION_CAPTURE_REQUESTED',
  TransactionEvent = 'TRANSACTION_EVENT',
  TransactionRefundRequested = 'TRANSACTION_REFUND_REQUESTED',
  TransactionVoidRequested = 'TRANSACTION_VOID_REQUESTED',
  UpdatedAddress = 'UPDATED_ADDRESS'
}

export type OrderFilterInput = {
  authorizeStatus?: InputMaybe<Array<OrderAuthorizeStatusEnum>>;
  channels?: InputMaybe<Array<Scalars['ID']>>;
  chargeStatus?: InputMaybe<Array<OrderChargeStatusEnum>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']>;
  giftCardBought?: InputMaybe<Scalars['Boolean']>;
  giftCardUsed?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  isClickAndCollect?: InputMaybe<Scalars['Boolean']>;
  isPreorder?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  numbers?: InputMaybe<Array<Scalars['String']>>;
  paymentStatus?: InputMaybe<Array<PaymentChargeStatusEnum>>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Array<OrderStatusFilter>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type OrderFilterShippingMethods = Event & {
  __typename?: 'OrderFilterShippingMethods';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  shippingMethods?: Maybe<Array<ShippingMethod>>;
  version?: Maybe<Scalars['String']>;
};

export type OrderFulfill = {
  __typename?: 'OrderFulfill';
  errors: Array<OrderError>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderFulfillInput = {
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']>;
  lines: Array<OrderFulfillLineInput>;
  notifyCustomer?: InputMaybe<Scalars['Boolean']>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type OrderFulfillLineInput = {
  orderLineId?: InputMaybe<Scalars['ID']>;
  stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  quantity: Scalars['Int'];
  warehouse: Scalars['ID'];
};

export type OrderFulfilled = Event & {
  __typename?: 'OrderFulfilled';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type OrderFullyPaid = Event & {
  __typename?: 'OrderFullyPaid';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type OrderLine = Node & ObjectWithMetadata & {
  __typename?: 'OrderLine';
  allocations?: Maybe<Array<Allocation>>;
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  id: Scalars['ID'];
  isShippingRequired: Scalars['Boolean'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  productName: Scalars['String'];
  productSku?: Maybe<Scalars['String']>;
  productVariantId?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  quantityFulfilled: Scalars['Int'];
  quantityToFulfill: Scalars['Int'];
  taxRate: Scalars['Float'];
  thumbnail?: Maybe<Image>;
  totalPrice: TaxedMoney;
  translatedProductName: Scalars['String'];
  translatedVariantName: Scalars['String'];
  undiscountedUnitPrice: TaxedMoney;
  unitDiscount: Money;
  unitDiscountReason?: Maybe<Scalars['String']>;
  unitDiscountType?: Maybe<DiscountValueTypeEnum>;
  unitDiscountValue: Scalars['PositiveDecimal'];
  unitPrice: TaxedMoney;
  variant?: Maybe<ProductVariant>;
  variantName: Scalars['String'];
};


export type OrderLineMetafieldArgs = {
  key: Scalars['String'];
};


export type OrderLineMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type OrderLinePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type OrderLinePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type OrderLineThumbnailArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

export type OrderLineCreateInput = {
  forceNewLine?: InputMaybe<Scalars['Boolean']>;
  quantity: Scalars['Int'];
  variantId: Scalars['ID'];
};

export type OrderLineDelete = {
  __typename?: 'OrderLineDelete';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

export type OrderLineDiscountRemove = {
  __typename?: 'OrderLineDiscountRemove';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

export type OrderLineDiscountUpdate = {
  __typename?: 'OrderLineDiscountUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

export type OrderLineInput = {
  quantity: Scalars['Int'];
};

export type OrderLineUpdate = {
  __typename?: 'OrderLineUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

export type OrderLinesCreate = {
  __typename?: 'OrderLinesCreate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  orderLines?: Maybe<Array<OrderLine>>;
};

export type OrderMarkAsPaid = {
  __typename?: 'OrderMarkAsPaid';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export enum OrderOriginEnum {
  Checkout = 'CHECKOUT',
  Draft = 'DRAFT',
  Reissue = 'REISSUE'
}

export type OrderRefund = {
  __typename?: 'OrderRefund';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
  fulfillmentLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type OrderRefundLineInput = {
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type OrderRefundProductsInput = {
  amountToRefund?: InputMaybe<Scalars['PositiveDecimal']>;
  fulfillmentLines?: InputMaybe<Array<OrderRefundFulfillmentLineInput>>;
  includeShippingCosts?: InputMaybe<Scalars['Boolean']>;
  orderLines?: InputMaybe<Array<OrderRefundLineInput>>;
};

export type OrderReturnFulfillmentLineInput = {
  fulfillmentLineId: Scalars['ID'];
  quantity: Scalars['Int'];
  replace?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnLineInput = {
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
  replace?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnProductsInput = {
  amountToRefund?: InputMaybe<Scalars['PositiveDecimal']>;
  fulfillmentLines?: InputMaybe<Array<OrderReturnFulfillmentLineInput>>;
  includeShippingCosts?: InputMaybe<Scalars['Boolean']>;
  orderLines?: InputMaybe<Array<OrderReturnLineInput>>;
  refund?: InputMaybe<Scalars['Boolean']>;
};

export type OrderSettings = {
  __typename?: 'OrderSettings';
  automaticallyConfirmAllNewOrders: Scalars['Boolean'];
  automaticallyFulfillNonShippableGiftCard: Scalars['Boolean'];
};

export type OrderSettingsError = {
  __typename?: 'OrderSettingsError';
  code: OrderSettingsErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum OrderSettingsErrorCode {
  Invalid = 'INVALID'
}

export type OrderSettingsUpdate = {
  __typename?: 'OrderSettingsUpdate';
  errors: Array<OrderSettingsError>;
  orderSettings?: Maybe<OrderSettings>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderSettingsErrors: Array<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
  automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']>;
  automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars['Boolean']>;
};

export enum OrderSortField {
  CreatedAt = 'CREATED_AT',
  CreationDate = 'CREATION_DATE',
  Customer = 'CUSTOMER',
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  LastModifiedAt = 'LAST_MODIFIED_AT',
  Number = 'NUMBER',
  Payment = 'PAYMENT',
  Rank = 'RANK'
}

export type OrderSortingInput = {
  direction: OrderDirection;
  field: OrderSortField;
};

export enum OrderStatus {
  Canceled = 'CANCELED',
  Draft = 'DRAFT',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  PartiallyReturned = 'PARTIALLY_RETURNED',
  Returned = 'RETURNED',
  Unconfirmed = 'UNCONFIRMED',
  Unfulfilled = 'UNFULFILLED'
}

export enum OrderStatusFilter {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  ReadyToCapture = 'READY_TO_CAPTURE',
  ReadyToFulfill = 'READY_TO_FULFILL',
  Unconfirmed = 'UNCONFIRMED',
  Unfulfilled = 'UNFULFILLED'
}

export type OrderUpdate = {
  __typename?: 'OrderUpdate';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderUpdateInput = {
  billingAddress?: InputMaybe<AddressInput>;
  shippingAddress?: InputMaybe<AddressInput>;
  userEmail?: InputMaybe<Scalars['String']>;
};

export type OrderUpdateShipping = {
  __typename?: 'OrderUpdateShipping';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
  shippingMethod?: InputMaybe<Scalars['ID']>;
};

export type OrderUpdated = Event & {
  __typename?: 'OrderUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  order?: Maybe<Order>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type OrderVoid = {
  __typename?: 'OrderVoid';
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type Page = Node & ObjectWithMetadata & {
  __typename?: 'Page';
  attributes: Array<SelectedAttribute>;
  content?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead. */
  contentJson: Scalars['JSONString'];
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  isPublished: Scalars['Boolean'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  pageType: PageType;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  translation?: Maybe<PageTranslation>;
};


export type PageMetafieldArgs = {
  key: Scalars['String'];
};


export type PageMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type PagePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type PagePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type PageAttributeAssign = {
  __typename?: 'PageAttributeAssign';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageAttributeUnassign = {
  __typename?: 'PageAttributeUnassign';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageBulkDelete = {
  __typename?: 'PageBulkDelete';
  count: Scalars['Int'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageBulkPublish = {
  __typename?: 'PageBulkPublish';
  count: Scalars['Int'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageCountableConnection = {
  __typename?: 'PageCountableConnection';
  edges: Array<PageCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageCountableEdge = {
  __typename?: 'PageCountableEdge';
  cursor: Scalars['String'];
  node: Page;
};

export type PageCreate = {
  __typename?: 'PageCreate';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageCreateInput = {
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  content?: InputMaybe<Scalars['JSONString']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  pageType: Scalars['ID'];
  publicationDate?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageCreated = Event & {
  __typename?: 'PageCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  page?: Maybe<Page>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PageDelete = {
  __typename?: 'PageDelete';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageDeleted = Event & {
  __typename?: 'PageDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  page?: Maybe<Page>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PageError = {
  __typename?: 'PageError';
  attributes?: Maybe<Array<Scalars['ID']>>;
  code: PageErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['ID']>>;
};

export enum PageErrorCode {
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PageFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  pageTypes?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PageInput = {
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  content?: InputMaybe<Scalars['JSONString']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  publicationDate?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageReorderAttributeValues = {
  __typename?: 'PageReorderAttributeValues';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export enum PageSortField {
  CreationDate = 'CREATION_DATE',
  PublicationDate = 'PUBLICATION_DATE',
  PublishedAt = 'PUBLISHED_AT',
  Slug = 'SLUG',
  Title = 'TITLE',
  Visibility = 'VISIBILITY'
}

export type PageSortingInput = {
  direction: OrderDirection;
  field: PageSortField;
};

export type PageTranslatableContent = Node & {
  __typename?: 'PageTranslatableContent';
  attributeValues: Array<AttributeValueTranslatableContent>;
  content?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead. */
  contentJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  page?: Maybe<Page>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  translation?: Maybe<PageTranslation>;
};


export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type PageTranslate = {
  __typename?: 'PageTranslate';
  errors: Array<TranslationError>;
  page?: Maybe<PageTranslatableContent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type PageTranslation = Node & {
  __typename?: 'PageTranslation';
  content?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead. */
  contentJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  language: LanguageDisplay;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageTranslationInput = {
  content?: InputMaybe<Scalars['JSONString']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageType = Node & ObjectWithMetadata & {
  __typename?: 'PageType';
  attributes?: Maybe<Array<Attribute>>;
  availableAttributes?: Maybe<AttributeCountableConnection>;
  hasPages?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  slug: Scalars['String'];
};


export type PageTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PageTypeMetafieldArgs = {
  key: Scalars['String'];
};


export type PageTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type PageTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type PageTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type PageTypeBulkDelete = {
  __typename?: 'PageTypeBulkDelete';
  count: Scalars['Int'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageTypeCountableConnection = {
  __typename?: 'PageTypeCountableConnection';
  edges: Array<PageTypeCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageTypeCountableEdge = {
  __typename?: 'PageTypeCountableEdge';
  cursor: Scalars['String'];
  node: PageType;
};

export type PageTypeCreate = {
  __typename?: 'PageTypeCreate';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
  addAttributes?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PageTypeCreated = Event & {
  __typename?: 'PageTypeCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  pageType?: Maybe<PageType>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PageTypeDelete = {
  __typename?: 'PageTypeDelete';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeDeleted = Event & {
  __typename?: 'PageTypeDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  pageType?: Maybe<PageType>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PageTypeFilterInput = {
  search?: InputMaybe<Scalars['String']>;
};

export type PageTypeReorderAttributes = {
  __typename?: 'PageTypeReorderAttributes';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export enum PageTypeSortField {
  Name = 'NAME',
  Slug = 'SLUG'
}

export type PageTypeSortingInput = {
  direction: OrderDirection;
  field: PageTypeSortField;
};

export type PageTypeUpdate = {
  __typename?: 'PageTypeUpdate';
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
  addAttributes?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  removeAttributes?: InputMaybe<Array<Scalars['ID']>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PageTypeUpdated = Event & {
  __typename?: 'PageTypeUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  pageType?: Maybe<PageType>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PageUpdate = {
  __typename?: 'PageUpdate';
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageUpdated = Event & {
  __typename?: 'PageUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  page?: Maybe<Page>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PasswordChange = {
  __typename?: 'PasswordChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type Payment = Node & ObjectWithMetadata & {
  __typename?: 'Payment';
  actions: Array<OrderAction>;
  availableCaptureAmount?: Maybe<Money>;
  availableRefundAmount?: Maybe<Money>;
  capturedAmount?: Maybe<Money>;
  chargeStatus: PaymentChargeStatusEnum;
  checkout?: Maybe<Checkout>;
  created: Scalars['DateTime'];
  creditCard?: Maybe<CreditCard>;
  customerIpAddress?: Maybe<Scalars['String']>;
  gateway: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  modified: Scalars['DateTime'];
  order?: Maybe<Order>;
  paymentMethodType: Scalars['String'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  token: Scalars['String'];
  total?: Maybe<Money>;
  transactions?: Maybe<Array<Transaction>>;
};


export type PaymentMetafieldArgs = {
  key: Scalars['String'];
};


export type PaymentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type PaymentPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type PaymentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type PaymentAuthorize = Event & {
  __typename?: 'PaymentAuthorize';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  payment?: Maybe<Payment>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PaymentCapture = {
  __typename?: 'PaymentCapture';
  errors: Array<PaymentError>;
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type PaymentCaptureEvent = Event & {
  __typename?: 'PaymentCaptureEvent';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  payment?: Maybe<Payment>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export enum PaymentChargeStatusEnum {
  Cancelled = 'CANCELLED',
  FullyCharged = 'FULLY_CHARGED',
  FullyRefunded = 'FULLY_REFUNDED',
  NotCharged = 'NOT_CHARGED',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  Refused = 'REFUSED'
}

export type PaymentCheckBalance = {
  __typename?: 'PaymentCheckBalance';
  data?: Maybe<Scalars['JSONString']>;
  errors: Array<PaymentError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type PaymentCheckBalanceInput = {
  card: CardInput;
  channel: Scalars['String'];
  gatewayId: Scalars['String'];
  method: Scalars['String'];
};

export type PaymentConfirmEvent = Event & {
  __typename?: 'PaymentConfirmEvent';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  payment?: Maybe<Payment>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PaymentCountableConnection = {
  __typename?: 'PaymentCountableConnection';
  edges: Array<PaymentCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PaymentCountableEdge = {
  __typename?: 'PaymentCountableEdge';
  cursor: Scalars['String'];
  node: Payment;
};

export type PaymentError = {
  __typename?: 'PaymentError';
  code: PaymentErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Scalars['ID']>>;
};

export enum PaymentErrorCode {
  BalanceCheckError = 'BALANCE_CHECK_ERROR',
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelInactive = 'CHANNEL_INACTIVE',
  CheckoutEmailNotSet = 'CHECKOUT_EMAIL_NOT_SET',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NotFound = 'NOT_FOUND',
  NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY',
  NoCheckoutLines = 'NO_CHECKOUT_LINES',
  PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
  PaymentError = 'PAYMENT_ERROR',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
  Unique = 'UNIQUE'
}

export type PaymentFilterInput = {
  checkouts?: InputMaybe<Array<Scalars['ID']>>;
};

export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  config: Array<GatewayConfigLine>;
  currencies: Array<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PaymentInitialize = {
  __typename?: 'PaymentInitialize';
  errors: Array<PaymentError>;
  initializedPayment?: Maybe<PaymentInitialized>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type PaymentInitialized = {
  __typename?: 'PaymentInitialized';
  data?: Maybe<Scalars['JSONString']>;
  gateway: Scalars['String'];
  name: Scalars['String'];
};

export type PaymentInput = {
  amount?: InputMaybe<Scalars['PositiveDecimal']>;
  gateway: Scalars['String'];
  metadata?: InputMaybe<Array<MetadataInput>>;
  returnUrl?: InputMaybe<Scalars['String']>;
  storePaymentMethod?: InputMaybe<StorePaymentMethodEnum>;
  token?: InputMaybe<Scalars['String']>;
};

export type PaymentListGateways = Event & {
  __typename?: 'PaymentListGateways';
  checkout?: Maybe<Checkout>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PaymentProcessEvent = Event & {
  __typename?: 'PaymentProcessEvent';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  payment?: Maybe<Payment>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  errors: Array<PaymentError>;
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type PaymentRefundEvent = Event & {
  __typename?: 'PaymentRefundEvent';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  payment?: Maybe<Payment>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PaymentSource = {
  __typename?: 'PaymentSource';
  creditCardInfo?: Maybe<CreditCard>;
  gateway: Scalars['String'];
  metadata: Array<MetadataItem>;
  paymentMethodId?: Maybe<Scalars['String']>;
};

export type PaymentVoid = {
  __typename?: 'PaymentVoid';
  errors: Array<PaymentError>;
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type PaymentVoidEvent = Event & {
  __typename?: 'PaymentVoidEvent';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  payment?: Maybe<Payment>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  code: PermissionEnum;
  name: Scalars['String'];
};

export enum PermissionEnum {
  HandleCheckouts = 'HANDLE_CHECKOUTS',
  HandlePayments = 'HANDLE_PAYMENTS',
  HandleTaxes = 'HANDLE_TAXES',
  ImpersonateUser = 'IMPERSONATE_USER',
  ManageApps = 'MANAGE_APPS',
  ManageChannels = 'MANAGE_CHANNELS',
  ManageCheckouts = 'MANAGE_CHECKOUTS',
  ManageDiscounts = 'MANAGE_DISCOUNTS',
  ManageGiftCard = 'MANAGE_GIFT_CARD',
  ManageMenus = 'MANAGE_MENUS',
  ManageObservability = 'MANAGE_OBSERVABILITY',
  ManageOrders = 'MANAGE_ORDERS',
  ManagePages = 'MANAGE_PAGES',
  ManagePageTypesAndAttributes = 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES',
  ManagePlugins = 'MANAGE_PLUGINS',
  ManageProducts = 'MANAGE_PRODUCTS',
  ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageShipping = 'MANAGE_SHIPPING',
  ManageStaff = 'MANAGE_STAFF',
  ManageTranslations = 'MANAGE_TRANSLATIONS',
  ManageUsers = 'MANAGE_USERS'
}

export type PermissionGroupCreate = {
  __typename?: 'PermissionGroupCreate';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupCreateInput = {
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  addUsers?: InputMaybe<Array<Scalars['ID']>>;
  name: Scalars['String'];
};

export type PermissionGroupCreated = Event & {
  __typename?: 'PermissionGroupCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  permissionGroup?: Maybe<Group>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PermissionGroupDelete = {
  __typename?: 'PermissionGroupDelete';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupDeleted = Event & {
  __typename?: 'PermissionGroupDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  permissionGroup?: Maybe<Group>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type PermissionGroupError = {
  __typename?: 'PermissionGroupError';
  code: PermissionGroupErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<PermissionEnum>>;
  users?: Maybe<Array<Scalars['ID']>>;
};

export enum PermissionGroupErrorCode {
  AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
  CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PermissionGroupFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

export enum PermissionGroupSortField {
  Name = 'NAME'
}

export type PermissionGroupSortingInput = {
  direction: OrderDirection;
  field: PermissionGroupSortField;
};

export type PermissionGroupUpdate = {
  __typename?: 'PermissionGroupUpdate';
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupUpdateInput = {
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  addUsers?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  removePermissions?: InputMaybe<Array<PermissionEnum>>;
  removeUsers?: InputMaybe<Array<Scalars['ID']>>;
};

export type PermissionGroupUpdated = Event & {
  __typename?: 'PermissionGroupUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  permissionGroup?: Maybe<Group>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};

export type Plugin = {
  __typename?: 'Plugin';
  channelConfigurations: Array<PluginConfiguration>;
  description: Scalars['String'];
  globalConfiguration?: Maybe<PluginConfiguration>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PluginConfiguration = {
  __typename?: 'PluginConfiguration';
  active: Scalars['Boolean'];
  channel?: Maybe<Channel>;
  configuration?: Maybe<Array<ConfigurationItem>>;
};

export enum PluginConfigurationType {
  Global = 'GLOBAL',
  PerChannel = 'PER_CHANNEL'
}

export type PluginCountableConnection = {
  __typename?: 'PluginCountableConnection';
  edges: Array<PluginCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PluginCountableEdge = {
  __typename?: 'PluginCountableEdge';
  cursor: Scalars['String'];
  node: Plugin;
};

export type PluginError = {
  __typename?: 'PluginError';
  code: PluginErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum PluginErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PluginFilterInput = {
  search?: InputMaybe<Scalars['String']>;
  statusInChannels?: InputMaybe<PluginStatusInChannelsInput>;
  type?: InputMaybe<PluginConfigurationType>;
};

export enum PluginSortField {
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type PluginSortingInput = {
  direction: OrderDirection;
  field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
  active: Scalars['Boolean'];
  channels: Array<Scalars['ID']>;
};

export type PluginUpdate = {
  __typename?: 'PluginUpdate';
  errors: Array<PluginError>;
  plugin?: Maybe<Plugin>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pluginsErrors: Array<PluginError>;
};

export type PluginUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  configuration?: InputMaybe<Array<ConfigurationItemInput>>;
};

export enum PostalCodeRuleInclusionTypeEnum {
  Exclude = 'EXCLUDE',
  Include = 'INCLUDE'
}

export type PreorderData = {
  __typename?: 'PreorderData';
  endDate?: Maybe<Scalars['DateTime']>;
  globalSoldUnits: Scalars['Int'];
  globalThreshold?: Maybe<Scalars['Int']>;
};

export type PreorderSettingsInput = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  globalThreshold?: InputMaybe<Scalars['Int']>;
};

export type PreorderThreshold = {
  __typename?: 'PreorderThreshold';
  quantity?: Maybe<Scalars['Int']>;
  soldUnits: Scalars['Int'];
};

export type PriceInput = {
  amount: Scalars['PositiveDecimal'];
  currency: Scalars['String'];
};

export type PriceRangeInput = {
  gte?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
};

export type Product = Node & ObjectWithMetadata & {
  __typename?: 'Product';
  attributes: Array<SelectedAttribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
  availableForPurchase?: Maybe<Scalars['Date']>;
  availableForPurchaseAt?: Maybe<Scalars['DateTime']>;
  category?: Maybe<Category>;
  channel?: Maybe<Scalars['String']>;
  channelListings?: Maybe<Array<ProductChannelListing>>;
  chargeTaxes: Scalars['Boolean'];
  collections?: Maybe<Array<Collection>>;
  created: Scalars['DateTime'];
  defaultVariant?: Maybe<ProductVariant>;
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead. */
  imageById?: Maybe<ProductImage>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead. */
  images?: Maybe<Array<ProductImage>>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Array<ProductMedia>>;
  mediaById?: Maybe<ProductMedia>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  pricing?: Maybe<ProductPricingInfo>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  productType: ProductType;
  rating?: Maybe<Scalars['Float']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  taxType?: Maybe<TaxType>;
  thumbnail?: Maybe<Image>;
  translation?: Maybe<ProductTranslation>;
  updatedAt: Scalars['DateTime'];
  variants?: Maybe<Array<ProductVariant>>;
  weight?: Maybe<Weight>;
};


export type ProductImageByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type ProductIsAvailableArgs = {
  address?: InputMaybe<AddressInput>;
};


export type ProductMediaByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type ProductMetafieldArgs = {
  key: Scalars['String'];
};


export type ProductMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


export type ProductPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ProductPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductThumbnailArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductAttributeAssign = {
  __typename?: 'ProductAttributeAssign';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignInput = {
  id: Scalars['ID'];
  type: ProductAttributeType;
  variantSelection?: InputMaybe<Scalars['Boolean']>;
};

export type ProductAttributeAssignmentUpdate = {
  __typename?: 'ProductAttributeAssignmentUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignmentUpdateInput = {
  id: Scalars['ID'];
  variantSelection: Scalars['Boolean'];
};

export enum ProductAttributeType {
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

export type ProductAttributeUnassign = {
  __typename?: 'ProductAttributeUnassign';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductBulkDelete = {
  __typename?: 'ProductBulkDelete';
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductChannelListing = Node & {
  __typename?: 'ProductChannelListing';
  /** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
  availableForPurchase?: Maybe<Scalars['Date']>;
  availableForPurchaseAt?: Maybe<Scalars['DateTime']>;
  channel: Channel;
  discountedPrice?: Maybe<Money>;
  id: Scalars['ID'];
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  isPublished: Scalars['Boolean'];
  margin?: Maybe<Margin>;
  pricing?: Maybe<ProductPricingInfo>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  purchaseCost?: Maybe<MoneyRange>;
  visibleInListings: Scalars['Boolean'];
};


export type ProductChannelListingPricingArgs = {
  address?: InputMaybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
  addVariants?: InputMaybe<Array<Scalars['ID']>>;
  availableForPurchaseAt?: InputMaybe<Scalars['DateTime']>;
  availableForPurchaseDate?: InputMaybe<Scalars['Date']>;
  channelId: Scalars['ID'];
  isAvailableForPurchase?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  publicationDate?: InputMaybe<Scalars['Date']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  removeVariants?: InputMaybe<Array<Scalars['ID']>>;
  visibleInListings?: InputMaybe<Scalars['Boolean']>;
};

export type ProductChannelListingError = {
  __typename?: 'ProductChannelListingError';
  attributes?: Maybe<Array<Scalars['ID']>>;
  channels?: Maybe<Array<Scalars['ID']>>;
  code: ProductErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['ID']>>;
  variants?: Maybe<Array<Scalars['ID']>>;
};

export type ProductChannelListingUpdate = {
  __typename?: 'ProductChannelListingUpdate';
  errors: Array<ProductChannelListingError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
  updateChannels?: InputMaybe<Array<ProductChannelListingAddInput>>;
};

export type ProductCountableConnection = {
  __typename?: 'ProductCountableConnection';
  edges: Array<ProductCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductCountableEdge = {
  __typename?: 'ProductCountableEdge';
  cursor: Scalars['String'];
  node: Product;
};

export type ProductCreate = {
  __typename?: 'ProductCreate';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductCreateInput = {
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  category?: InputMaybe<Scalars['ID']>;
  chargeTaxes?: InputMaybe<Scalars['Boolean']>;
  collections?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['JSONString']>;
  name?: InputMaybe<Scalars['String']>;
  productType: Scalars['ID'];
  rating?: InputMaybe<Scalars['Float']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  taxCode?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductCreated = Event & {
  __typename?: 'ProductCreated';
  category?: Maybe<Category>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  product?: Maybe<Product>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type ProductCreatedProductArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductDelete = {
  __typename?: 'ProductDelete';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductDeleted = Event & {
  __typename?: 'ProductDeleted';
  category?: Maybe<Category>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  product?: Maybe<Product>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type ProductDeletedProductArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductError = {
  __typename?: 'ProductError';
  attributes?: Maybe<Array<Scalars['ID']>>;
  code: ProductErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['ID']>>;
};

export enum ProductErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MediaAlreadyAssigned = 'MEDIA_ALREADY_ASSIGNED',
  NotFound = 'NOT_FOUND',
  NotProductsImage = 'NOT_PRODUCTS_IMAGE',
  NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
  PreorderVariantCannotBeDeactivated = 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED',
  ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL',
  ProductWithoutCategory = 'PRODUCT_WITHOUT_CATEGORY',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  UnsupportedMediaProvider = 'UNSUPPORTED_MEDIA_PROVIDER',
  VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT'
}

export enum ProductFieldEnum {
  Category = 'CATEGORY',
  ChargeTaxes = 'CHARGE_TAXES',
  Collections = 'COLLECTIONS',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  ProductMedia = 'PRODUCT_MEDIA',
  ProductType = 'PRODUCT_TYPE',
  ProductWeight = 'PRODUCT_WEIGHT',
  VariantId = 'VARIANT_ID',
  VariantMedia = 'VARIANT_MEDIA',
  VariantSku = 'VARIANT_SKU',
  VariantWeight = 'VARIANT_WEIGHT'
}

export type ProductFilterInput = {
  attributes?: InputMaybe<Array<AttributeInput>>;
  categories?: InputMaybe<Array<Scalars['ID']>>;
  channel?: InputMaybe<Scalars['String']>;
  collections?: InputMaybe<Array<Scalars['ID']>>;
  giftCard?: InputMaybe<Scalars['Boolean']>;
  hasCategory?: InputMaybe<Scalars['Boolean']>;
  hasPreorderedVariants?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  minimalPrice?: InputMaybe<PriceRangeInput>;
  price?: InputMaybe<PriceRangeInput>;
  productTypes?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
  stockAvailability?: InputMaybe<StockAvailability>;
  stocks?: InputMaybe<ProductStockFilterInput>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  alt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  sortOrder?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};


export type ProductImageUrlArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

export type ProductInput = {
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  category?: InputMaybe<Scalars['ID']>;
  chargeTaxes?: InputMaybe<Scalars['Boolean']>;
  collections?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['JSONString']>;
  name?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  taxCode?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductMedia = Node & {
  __typename?: 'ProductMedia';
  alt: Scalars['String'];
  id: Scalars['ID'];
  oembedData: Scalars['JSONString'];
  sortOrder?: Maybe<Scalars['Int']>;
  type: ProductMediaType;
  url: Scalars['String'];
};


export type ProductMediaUrlArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

export type ProductMediaBulkDelete = {
  __typename?: 'ProductMediaBulkDelete';
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaCreate = {
  __typename?: 'ProductMediaCreate';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaCreateInput = {
  alt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  product: Scalars['ID'];
};

export type ProductMediaDelete = {
  __typename?: 'ProductMediaDelete';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaReorder = {
  __typename?: 'ProductMediaReorder';
  errors: Array<ProductError>;
  media?: Maybe<Array<ProductMedia>>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export enum ProductMediaType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type ProductMediaUpdate = {
  __typename?: 'ProductMediaUpdate';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
};

export type ProductOrder = {
  attributeId?: InputMaybe<Scalars['ID']>;
  channel?: InputMaybe<Scalars['String']>;
  direction: OrderDirection;
  field?: InputMaybe<ProductOrderField>;
};

export enum ProductOrderField {
  Collection = 'COLLECTION',
  Date = 'DATE',
  LastModified = 'LAST_MODIFIED',
  LastModifiedAt = 'LAST_MODIFIED_AT',
  MinimalPrice = 'MINIMAL_PRICE',
  Name = 'NAME',
  Price = 'PRICE',
  PublicationDate = 'PUBLICATION_DATE',
  Published = 'PUBLISHED',
  PublishedAt = 'PUBLISHED_AT',
  Rank = 'RANK',
  Rating = 'RATING',
  Type = 'TYPE'
}

export type ProductPricingInfo = {
  __typename?: 'ProductPricingInfo';
  discount?: Maybe<TaxedMoney>;
  discountLocalCurrency?: Maybe<TaxedMoney>;
  onSale?: Maybe<Scalars['Boolean']>;
  priceRange?: Maybe<TaxedMoneyRange>;
  priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
  priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
};

export type ProductReorderAttributeValues = {
  __typename?: 'ProductReorderAttributeValues';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductStockFilterInput = {
  quantity?: InputMaybe<IntRangeInput>;
  warehouseIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type ProductTranslatableContent = Node & {
  __typename?: 'ProductTranslatableContent';
  attributeValues: Array<AttributeValueTranslatableContent>;
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  product?: Maybe<Product>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  translation?: Maybe<ProductTranslation>;
};


export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductTranslate = {
  __typename?: 'ProductTranslate';
  errors: Array<TranslationError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ProductTranslation = Node & {
  __typename?: 'ProductTranslation';
  description?: Maybe<Scalars['JSONString']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

export type ProductType = Node & ObjectWithMetadata & {
  __typename?: 'ProductType';
  assignedVariantAttributes?: Maybe<Array<AssignedVariantAttribute>>;
  availableAttributes?: Maybe<AttributeCountableConnection>;
  hasVariants: Scalars['Boolean'];
  id: Scalars['ID'];
  isDigital: Scalars['Boolean'];
  isShippingRequired: Scalars['Boolean'];
  kind: ProductTypeKindEnum;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  productAttributes?: Maybe<Array<Attribute>>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter. */
  products?: Maybe<ProductCountableConnection>;
  slug: Scalars['String'];
  taxType?: Maybe<TaxType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead. */
  variantAttributes?: Maybe<Array<Attribute>>;
  weight?: Maybe<Weight>;
};


export type ProductTypeAssignedVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


export type ProductTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProductTypeMetafieldArgs = {
  key: Scalars['String'];
};


export type ProductTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ProductTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductTypeProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProductTypeVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};

export type ProductTypeBulkDelete = {
  __typename?: 'ProductTypeBulkDelete';
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export enum ProductTypeConfigurable {
  Configurable = 'CONFIGURABLE',
  Simple = 'SIMPLE'
}

export type ProductTypeCountableConnection = {
  __typename?: 'ProductTypeCountableConnection';
  edges: Array<ProductTypeCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductTypeCountableEdge = {
  __typename?: 'ProductTypeCountableEdge';
  cursor: Scalars['String'];
  node: ProductType;
};

export type ProductTypeCreate = {
  __typename?: 'ProductTypeCreate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductTypeDelete = {
  __typename?: 'ProductTypeDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export enum ProductTypeEnum {
  Digital = 'DIGITAL',
  Shippable = 'SHIPPABLE'
}

export type ProductTypeFilterInput = {
  configurable?: InputMaybe<ProductTypeConfigurable>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  kind?: InputMaybe<ProductTypeKindEnum>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  productType?: InputMaybe<ProductTypeEnum>;
  search?: InputMaybe<Scalars['String']>;
};

export type ProductTypeInput = {
  hasVariants?: InputMaybe<Scalars['Boolean']>;
  isDigital?: InputMaybe<Scalars['Boolean']>;
  isShippingRequired?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<ProductTypeKindEnum>;
  name?: InputMaybe<Scalars['String']>;
  productAttributes?: InputMaybe<Array<Scalars['ID']>>;
  slug?: InputMaybe<Scalars['String']>;
  taxCode?: InputMaybe<Scalars['String']>;
  variantAttributes?: InputMaybe<Array<Scalars['ID']>>;
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export enum ProductTypeKindEnum {
  GiftCard = 'GIFT_CARD',
  Normal = 'NORMAL'
}

export type ProductTypeReorderAttributes = {
  __typename?: 'ProductTypeReorderAttributes';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export enum ProductTypeSortField {
  Digital = 'DIGITAL',
  Name = 'NAME',
  ShippingRequired = 'SHIPPING_REQUIRED'
}

export type ProductTypeSortingInput = {
  direction: OrderDirection;
  field: ProductTypeSortField;
};

export type ProductTypeUpdate = {
  __typename?: 'ProductTypeUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductUpdate = {
  __typename?: 'ProductUpdate';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductUpdated = Event & {
  __typename?: 'ProductUpdated';
  category?: Maybe<Category>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  product?: Maybe<Product>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type ProductUpdatedProductArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductVariant = Node & ObjectWithMetadata & {
  __typename?: 'ProductVariant';
  attributes: Array<SelectedAttribute>;
  channel?: Maybe<Scalars['String']>;
  channelListings?: Maybe<Array<ProductVariantChannelListing>>;
  created: Scalars['DateTime'];
  digitalContent?: Maybe<DigitalContent>;
  id: Scalars['ID'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead. */
  images?: Maybe<Array<ProductImage>>;
  margin?: Maybe<Scalars['Int']>;
  media?: Maybe<Array<ProductMedia>>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  preorder?: Maybe<PreorderData>;
  pricing?: Maybe<VariantPricingInfo>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  product: Product;
  quantityAvailable?: Maybe<Scalars['Int']>;
  quantityLimitPerCustomer?: Maybe<Scalars['Int']>;
  quantityOrdered?: Maybe<Scalars['Int']>;
  revenue?: Maybe<TaxedMoney>;
  sku?: Maybe<Scalars['String']>;
  stocks?: Maybe<Array<Stock>>;
  trackInventory: Scalars['Boolean'];
  translation?: Maybe<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Weight>;
};


export type ProductVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


export type ProductVariantMetafieldArgs = {
  key: Scalars['String'];
};


export type ProductVariantMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductVariantPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


export type ProductVariantPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ProductVariantPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductVariantQuantityAvailableArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


export type ProductVariantRevenueArgs = {
  period?: InputMaybe<ReportingPeriod>;
};


export type ProductVariantStocksArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductVariantBackInStock = Event & {
  __typename?: 'ProductVariantBackInStock';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  productVariant?: Maybe<ProductVariant>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
};


export type ProductVariantBackInStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductVariantBulkCreate = {
  __typename?: 'ProductVariantBulkCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkProductErrors: Array<BulkProductError>;
  count: Scalars['Int'];
  errors: Array<BulkProductError>;
  productVariants: Array<ProductVariant>;
};

export type ProductVariantBulkCreateInput = {
  attributes: Array<BulkAttributeValueInput>;
  channelListings?: InputMaybe<Array<ProductVariantChannelListingAddInput>>;
  name?: InputMaybe<Scalars['String']>;
  preorder?: InputMaybe<PreorderSettingsInput>;
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  stocks?: InputMaybe<Array<StockInput>>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductVariantBulkDelete = {
  __typename?: 'ProductVariantBulkDelete';
  count: Scalars['Int'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductVariantChannelListing = Node & {
  __typename?: 'ProductVariantChannelListing';
  channel: Channel;
  costPrice?: Maybe<Money>;
  id: Scalars['ID'];
  margin?: Maybe<Scalars['Int']>;
  preorderThreshold?: Maybe<PreorderThreshold>;
  price?: Maybe<Money>;
};

export type ProductVariantChannelListingAddInput = {
  channelId: Scalars['ID'];
  costPrice?: InputMaybe<Scalars['PositiveDecimal']>;
  preorderThreshold?: InputMaybe<Scalars['Int']>;
  price: Scalars['PositiveDecimal'];
};

export type ProductVariantChannelListingUpdate = {
  __typename?: 'ProductVariantChannelListingUpdate';
  errors: Array<ProductChannelListingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
  variant?: Maybe<ProductVariant>;
};

export type ProductVariantCountableConnection = {
  __typename?: 'ProductVariantCountableConnection';
  edges: Array<ProductVariantCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductVariantCountableEdge = {
  __typename?: 'ProductVariantCountableEdge';
  cursor: Scalars['String'];
  node: ProductVariant;
};

export type ProductVariantCreate = {
  __typename?: 'ProductVariantCreate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  attributes: Array<AttributeValueInput>;
  name?: InputMaybe<Scalars['String']>;
  preorder?: InputMaybe<PreorderSettingsInput>;
  product: Scalars['ID'];
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  stocks?: InputMaybe<Array<StockInput>>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductVariantCreated = Event & {
  __typename?: 'ProductVariantCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  productVariant?: Maybe<ProductVariant>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type ProductVariantCreatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductVariantDelete = {
  __typename?: 'ProductVariantDelete';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantDeleted = Event & {
  __typename?: 'ProductVariantDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  productVariant?: Maybe<ProductVariant>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type ProductVariantDeletedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductVariantFilterInput = {
  isPreorder?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type ProductVariantInput = {
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  name?: InputMaybe<Scalars['String']>;
  preorder?: InputMaybe<PreorderSettingsInput>;
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductVariantOutOfStock = Event & {
  __typename?: 'ProductVariantOutOfStock';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  productVariant?: Maybe<ProductVariant>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
};


export type ProductVariantOutOfStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ProductVariantPreorderDeactivate = {
  __typename?: 'ProductVariantPreorderDeactivate';
  errors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantReorder = {
  __typename?: 'ProductVariantReorder';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductVariantReorderAttributeValues = {
  __typename?: 'ProductVariantReorderAttributeValues';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantSetDefault = {
  __typename?: 'ProductVariantSetDefault';
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export enum ProductVariantSortField {
  LastModifiedAt = 'LAST_MODIFIED_AT'
}

export type ProductVariantSortingInput = {
  direction: OrderDirection;
  field: ProductVariantSortField;
};

export type ProductVariantStocksCreate = {
  __typename?: 'ProductVariantStocksCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantStocksDelete = {
  __typename?: 'ProductVariantStocksDelete';
  errors: Array<StockError>;
  productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  stockErrors: Array<StockError>;
};

export type ProductVariantStocksUpdate = {
  __typename?: 'ProductVariantStocksUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantTranslatableContent = Node & {
  __typename?: 'ProductVariantTranslatableContent';
  attributeValues: Array<AttributeValueTranslatableContent>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  productVariant?: Maybe<ProductVariant>;
  translation?: Maybe<ProductVariantTranslation>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductVariantTranslate = {
  __typename?: 'ProductVariantTranslate';
  errors: Array<TranslationError>;
  productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ProductVariantTranslation = Node & {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID'];
  language: LanguageDisplay;
  name: Scalars['String'];
};

export type ProductVariantUpdate = {
  __typename?: 'ProductVariantUpdate';
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantUpdated = Event & {
  __typename?: 'ProductVariantUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  productVariant?: Maybe<ProductVariant>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
};


export type ProductVariantUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type PublishableChannelListingInput = {
  channelId: Scalars['ID'];
  isPublished?: InputMaybe<Scalars['Boolean']>;
  publicationDate?: InputMaybe<Scalars['Date']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  _entities?: Maybe<Array<Maybe<_Entity>>>;
  _service?: Maybe<_Service>;
  address?: Maybe<Address>;
  addressValidationRules?: Maybe<AddressValidationData>;
  app?: Maybe<App>;
  appExtension?: Maybe<AppExtension>;
  appExtensions?: Maybe<AppExtensionCountableConnection>;
  apps?: Maybe<AppCountableConnection>;
  appsInstallations: Array<AppInstallation>;
  attribute?: Maybe<Attribute>;
  attributes?: Maybe<AttributeCountableConnection>;
  categories?: Maybe<CategoryCountableConnection>;
  category?: Maybe<Category>;
  channel?: Maybe<Channel>;
  channels?: Maybe<Array<Channel>>;
  checkout?: Maybe<Checkout>;
  checkoutLines?: Maybe<CheckoutLineCountableConnection>;
  checkouts?: Maybe<CheckoutCountableConnection>;
  collection?: Maybe<Collection>;
  collections?: Maybe<CollectionCountableConnection>;
  customers?: Maybe<UserCountableConnection>;
  digitalContent?: Maybe<DigitalContent>;
  digitalContents?: Maybe<DigitalContentCountableConnection>;
  draftOrders?: Maybe<OrderCountableConnection>;
  exportFile?: Maybe<ExportFile>;
  exportFiles?: Maybe<ExportFileCountableConnection>;
  giftCard?: Maybe<GiftCard>;
  giftCardCurrencies: Array<Scalars['String']>;
  giftCardSettings: GiftCardSettings;
  giftCardTags?: Maybe<GiftCardTagCountableConnection>;
  giftCards?: Maybe<GiftCardCountableConnection>;
  homepageEvents?: Maybe<OrderEventCountableConnection>;
  me?: Maybe<User>;
  menu?: Maybe<Menu>;
  menuItem?: Maybe<MenuItem>;
  menuItems?: Maybe<MenuItemCountableConnection>;
  menus?: Maybe<MenuCountableConnection>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. */
  orderByToken?: Maybe<Order>;
  orderSettings?: Maybe<OrderSettings>;
  orders?: Maybe<OrderCountableConnection>;
  ordersTotal?: Maybe<TaxedMoney>;
  page?: Maybe<Page>;
  pageType?: Maybe<PageType>;
  pageTypes?: Maybe<PageTypeCountableConnection>;
  pages?: Maybe<PageCountableConnection>;
  payment?: Maybe<Payment>;
  payments?: Maybe<PaymentCountableConnection>;
  permissionGroup?: Maybe<Group>;
  permissionGroups?: Maybe<GroupCountableConnection>;
  plugin?: Maybe<Plugin>;
  plugins?: Maybe<PluginCountableConnection>;
  product?: Maybe<Product>;
  productType?: Maybe<ProductType>;
  productTypes?: Maybe<ProductTypeCountableConnection>;
  productVariant?: Maybe<ProductVariant>;
  productVariants?: Maybe<ProductVariantCountableConnection>;
  products?: Maybe<ProductCountableConnection>;
  reportProductSales?: Maybe<ProductVariantCountableConnection>;
  sale?: Maybe<Sale>;
  sales?: Maybe<SaleCountableConnection>;
  shippingZone?: Maybe<ShippingZone>;
  shippingZones?: Maybe<ShippingZoneCountableConnection>;
  shop: Shop;
  staffUsers?: Maybe<UserCountableConnection>;
  stock?: Maybe<Stock>;
  stocks?: Maybe<StockCountableConnection>;
  taxTypes?: Maybe<Array<TaxType>>;
  transaction?: Maybe<TransactionItem>;
  translation?: Maybe<TranslatableItem>;
  translations?: Maybe<TranslatableItemConnection>;
  user?: Maybe<User>;
  voucher?: Maybe<Voucher>;
  vouchers?: Maybe<VoucherCountableConnection>;
  warehouse?: Maybe<Warehouse>;
  warehouses?: Maybe<WarehouseCountableConnection>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types. */
  webhookEvents?: Maybe<Array<WebhookEvent>>;
  webhookSamplePayload?: Maybe<Scalars['JSONString']>;
};


export type Query_EntitiesArgs = {
  representations?: InputMaybe<Array<InputMaybe<Scalars['_Any']>>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAddressValidationRulesArgs = {
  city?: InputMaybe<Scalars['String']>;
  cityArea?: InputMaybe<Scalars['String']>;
  countryArea?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
};


export type QueryAppArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAppExtensionArgs = {
  id: Scalars['ID'];
};


export type QueryAppExtensionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AppExtensionFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AppFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<AppSortingInput>;
};


export type QueryAttributeArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<AttributeSortingInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CategorySortingInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCheckoutArgs = {
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['UUID']>;
};


export type QueryCheckoutLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCheckoutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CheckoutFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CheckoutSortingInput>;
};


export type QueryCollectionArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CollectionSortingInput>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CustomerFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID'];
};


export type QueryDigitalContentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryDraftOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<OrderDraftFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID'];
};


export type QueryExportFilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ExportFileFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ExportFileSortingInput>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID'];
};


export type QueryGiftCardTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<GiftCardTagFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<GiftCardFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<GiftCardSortingInput>;
};


export type QueryHomepageEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryMenuArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MenuItemFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<MenuItemSortingInput>;
};


export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MenuFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<MenuSortingInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<OrderFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryOrdersTotalArgs = {
  channel?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<ReportingPeriod>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPageTypeArgs = {
  id: Scalars['ID'];
};


export type QueryPageTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PageTypeSortingInput>;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PageSortingInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PaymentFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PermissionGroupFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PermissionGroupSortingInput>;
};


export type QueryPluginArgs = {
  id: Scalars['ID'];
};


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PluginFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PluginSortingInput>;
};


export type QueryProductArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID'];
};


export type QueryProductTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductTypeSortingInput>;
};


export type QueryProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  sku?: InputMaybe<Scalars['String']>;
};


export type QueryProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductVariantFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductVariantSortingInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductOrder>;
};


export type QueryReportProductSalesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  period: ReportingPeriod;
};


export type QuerySaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QuerySalesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SaleFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SaleSortingInput>;
};


export type QueryShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QueryShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ShippingZoneFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryStaffUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<StaffUserInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryStockArgs = {
  id: Scalars['ID'];
};


export type QueryStocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<StockFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
};


export type QueryTranslationArgs = {
  id: Scalars['ID'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  kind: TranslatableKinds;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVoucherArgs = {
  channel?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QueryVouchersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID'];
};


export type QueryWarehousesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WarehouseFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<WarehouseSortingInput>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};

export type ReducedRate = {
  __typename?: 'ReducedRate';
  rate: Scalars['Float'];
  rateType: Scalars['String'];
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type ReorderInput = {
  id: Scalars['ID'];
  sortOrder?: InputMaybe<Scalars['Int']>;
};

export enum ReportingPeriod {
  ThisMonth = 'THIS_MONTH',
  Today = 'TODAY'
}

export type RequestEmailChange = {
  __typename?: 'RequestEmailChange';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type RequestPasswordReset = {
  __typename?: 'RequestPasswordReset';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

export type Sale = Node & ObjectWithMetadata & {
  __typename?: 'Sale';
  categories?: Maybe<CategoryCountableConnection>;
  channelListings?: Maybe<Array<SaleChannelListing>>;
  collections?: Maybe<CollectionCountableConnection>;
  created: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  discountValue?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  products?: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime'];
  translation?: Maybe<SaleTranslation>;
  type: SaleType;
  updatedAt: Scalars['DateTime'];
  variants?: Maybe<ProductVariantCountableConnection>;
};


export type SaleCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type SaleCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type SaleMetafieldArgs = {
  key: Scalars['String'];
};


export type SaleMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type SalePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type SalePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type SaleProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


export type SaleVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type SaleAddCatalogues = {
  __typename?: 'SaleAddCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleBulkDelete = {
  __typename?: 'SaleBulkDelete';
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

export type SaleChannelListing = Node & {
  __typename?: 'SaleChannelListing';
  channel: Channel;
  currency: Scalars['String'];
  discountValue: Scalars['Float'];
  id: Scalars['ID'];
};

export type SaleChannelListingAddInput = {
  channelId: Scalars['ID'];
  discountValue: Scalars['PositiveDecimal'];
};

export type SaleChannelListingInput = {
  addChannels?: InputMaybe<Array<SaleChannelListingAddInput>>;
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type SaleChannelListingUpdate = {
  __typename?: 'SaleChannelListingUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleCountableConnection = {
  __typename?: 'SaleCountableConnection';
  edges: Array<SaleCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaleCountableEdge = {
  __typename?: 'SaleCountableEdge';
  cursor: Scalars['String'];
  node: Sale;
};

export type SaleCreate = {
  __typename?: 'SaleCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleCreated = Event & {
  __typename?: 'SaleCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  sale?: Maybe<Sale>;
  version?: Maybe<Scalars['String']>;
};


export type SaleCreatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type SaleDelete = {
  __typename?: 'SaleDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleDeleted = Event & {
  __typename?: 'SaleDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  sale?: Maybe<Sale>;
  version?: Maybe<Scalars['String']>;
};


export type SaleDeletedSaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type SaleFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  saleType?: InputMaybe<DiscountValueTypeEnum>;
  search?: InputMaybe<Scalars['String']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type SaleInput = {
  categories?: InputMaybe<Array<Scalars['ID']>>;
  collections?: InputMaybe<Array<Scalars['ID']>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<Scalars['ID']>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<DiscountValueTypeEnum>;
  value?: InputMaybe<Scalars['PositiveDecimal']>;
  variants?: InputMaybe<Array<Scalars['ID']>>;
};

export type SaleRemoveCatalogues = {
  __typename?: 'SaleRemoveCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export enum SaleSortField {
  CreatedAt = 'CREATED_AT',
  EndDate = 'END_DATE',
  LastModifiedAt = 'LAST_MODIFIED_AT',
  Name = 'NAME',
  StartDate = 'START_DATE',
  Type = 'TYPE',
  Value = 'VALUE'
}

export type SaleSortingInput = {
  channel?: InputMaybe<Scalars['String']>;
  direction: OrderDirection;
  field: SaleSortField;
};

export type SaleToggle = Event & {
  __typename?: 'SaleToggle';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  sale?: Maybe<Sale>;
  version?: Maybe<Scalars['String']>;
};


export type SaleToggleSaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type SaleTranslatableContent = Node & {
  __typename?: 'SaleTranslatableContent';
  id: Scalars['ID'];
  name: Scalars['String'];
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  sale?: Maybe<Sale>;
  translation?: Maybe<SaleTranslation>;
};


export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type SaleTranslate = {
  __typename?: 'SaleTranslate';
  errors: Array<TranslationError>;
  sale?: Maybe<Sale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type SaleTranslation = Node & {
  __typename?: 'SaleTranslation';
  id: Scalars['ID'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
};

export enum SaleType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export type SaleUpdate = {
  __typename?: 'SaleUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type SaleUpdated = Event & {
  __typename?: 'SaleUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  sale?: Maybe<Sale>;
  version?: Maybe<Scalars['String']>;
};


export type SaleUpdatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type SelectedAttribute = {
  __typename?: 'SelectedAttribute';
  attribute: Attribute;
  values: Array<AttributeValue>;
};

export type SeoInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SetPassword = {
  __typename?: 'SetPassword';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  csrfToken?: Maybe<Scalars['String']>;
  errors: Array<AccountError>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type ShippingError = {
  __typename?: 'ShippingError';
  channels?: Maybe<Array<Scalars['ID']>>;
  code: ShippingErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  warehouses?: Maybe<Array<Scalars['ID']>>;
};

export enum ShippingErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLessThanMin = 'MAX_LESS_THAN_MIN',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ShippingListMethodsForCheckout = Event & {
  __typename?: 'ShippingListMethodsForCheckout';
  checkout?: Maybe<Checkout>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  shippingMethods?: Maybe<Array<ShippingMethod>>;
  version?: Maybe<Scalars['String']>;
};

export type ShippingMethod = Node & ObjectWithMetadata & {
  __typename?: 'ShippingMethod';
  active: Scalars['Boolean'];
  description?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  maximumDeliveryDays?: Maybe<Scalars['Int']>;
  maximumOrderPrice?: Maybe<Money>;
  /** @deprecated This field will be removed in Saleor 4.0. */
  maximumOrderWeight?: Maybe<Weight>;
  message?: Maybe<Scalars['String']>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  minimumDeliveryDays?: Maybe<Scalars['Int']>;
  minimumOrderPrice?: Maybe<Money>;
  /** @deprecated This field will be removed in Saleor 4.0. */
  minimumOrderWeight?: Maybe<Weight>;
  name: Scalars['String'];
  price: Money;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  translation?: Maybe<ShippingMethodTranslation>;
  /** @deprecated This field will be removed in Saleor 4.0. */
  type?: Maybe<ShippingMethodTypeEnum>;
};


export type ShippingMethodMetafieldArgs = {
  key: Scalars['String'];
};


export type ShippingMethodMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ShippingMethodPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ShippingMethodPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodChannelListing = Node & {
  __typename?: 'ShippingMethodChannelListing';
  channel: Channel;
  id: Scalars['ID'];
  maximumOrderPrice?: Maybe<Money>;
  minimumOrderPrice?: Maybe<Money>;
  price?: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
  channelId: Scalars['ID'];
  maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']>;
  minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']>;
  price?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type ShippingMethodChannelListingInput = {
  addChannels?: InputMaybe<Array<ShippingMethodChannelListingAddInput>>;
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type ShippingMethodChannelListingUpdate = {
  __typename?: 'ShippingMethodChannelListingUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingMethodPostalCodeRule = Node & {
  __typename?: 'ShippingMethodPostalCodeRule';
  end?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
  start?: Maybe<Scalars['String']>;
};

export type ShippingMethodTranslatableContent = Node & {
  __typename?: 'ShippingMethodTranslatableContent';
  description?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  shippingMethod?: Maybe<ShippingMethodType>;
  translation?: Maybe<ShippingMethodTranslation>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
  __typename?: 'ShippingMethodTranslation';
  description?: Maybe<Scalars['JSONString']>;
  id: Scalars['ID'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
};

export type ShippingMethodType = Node & ObjectWithMetadata & {
  __typename?: 'ShippingMethodType';
  channelListings?: Maybe<Array<ShippingMethodChannelListing>>;
  description?: Maybe<Scalars['JSONString']>;
  excludedProducts?: Maybe<ProductCountableConnection>;
  id: Scalars['ID'];
  maximumDeliveryDays?: Maybe<Scalars['Int']>;
  maximumOrderPrice?: Maybe<Money>;
  maximumOrderWeight?: Maybe<Weight>;
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  minimumDeliveryDays?: Maybe<Scalars['Int']>;
  minimumOrderPrice?: Maybe<Money>;
  minimumOrderWeight?: Maybe<Weight>;
  name: Scalars['String'];
  postalCodeRules?: Maybe<Array<ShippingMethodPostalCodeRule>>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  translation?: Maybe<ShippingMethodTranslation>;
  type?: Maybe<ShippingMethodTypeEnum>;
};


export type ShippingMethodTypeExcludedProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ShippingMethodTypeMetafieldArgs = {
  key: Scalars['String'];
};


export type ShippingMethodTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ShippingMethodTypePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ShippingMethodTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ShippingMethodTypeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export enum ShippingMethodTypeEnum {
  Price = 'PRICE',
  Weight = 'WEIGHT'
}

export type ShippingMethodsPerCountry = {
  __typename?: 'ShippingMethodsPerCountry';
  countryCode: CountryCode;
  shippingMethods?: Maybe<Array<ShippingMethod>>;
};

export type ShippingPostalCodeRulesCreateInputRange = {
  end?: InputMaybe<Scalars['String']>;
  start: Scalars['String'];
};

export type ShippingPriceBulkDelete = {
  __typename?: 'ShippingPriceBulkDelete';
  count: Scalars['Int'];
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
};

export type ShippingPriceCreate = {
  __typename?: 'ShippingPriceCreate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceCreated = Event & {
  __typename?: 'ShippingPriceCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZone?: Maybe<ShippingZone>;
  version?: Maybe<Scalars['String']>;
};


export type ShippingPriceCreatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


export type ShippingPriceCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ShippingPriceDelete = {
  __typename?: 'ShippingPriceDelete';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceDeleted = Event & {
  __typename?: 'ShippingPriceDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZone?: Maybe<ShippingZone>;
  version?: Maybe<Scalars['String']>;
};


export type ShippingPriceDeletedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


export type ShippingPriceDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ShippingPriceExcludeProducts = {
  __typename?: 'ShippingPriceExcludeProducts';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingPriceExcludeProductsInput = {
  products: Array<Scalars['ID']>;
};

export type ShippingPriceInput = {
  addPostalCodeRules?: InputMaybe<Array<ShippingPostalCodeRulesCreateInputRange>>;
  deletePostalCodeRules?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['JSONString']>;
  inclusionType?: InputMaybe<PostalCodeRuleInclusionTypeEnum>;
  maximumDeliveryDays?: InputMaybe<Scalars['Int']>;
  maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']>;
  minimumDeliveryDays?: InputMaybe<Scalars['Int']>;
  minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']>;
  name?: InputMaybe<Scalars['String']>;
  shippingZone?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<ShippingMethodTypeEnum>;
};

export type ShippingPriceRemoveProductFromExclude = {
  __typename?: 'ShippingPriceRemoveProductFromExclude';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingPriceTranslate = {
  __typename?: 'ShippingPriceTranslate';
  errors: Array<TranslationError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ShippingPriceTranslationInput = {
  description?: InputMaybe<Scalars['JSONString']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ShippingPriceUpdate = {
  __typename?: 'ShippingPriceUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceUpdated = Event & {
  __typename?: 'ShippingPriceUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZone?: Maybe<ShippingZone>;
  version?: Maybe<Scalars['String']>;
};


export type ShippingPriceUpdatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


export type ShippingPriceUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ShippingZone = Node & ObjectWithMetadata & {
  __typename?: 'ShippingZone';
  channels: Array<Channel>;
  countries: Array<CountryDisplay>;
  default: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  priceRange?: Maybe<MoneyRange>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  shippingMethods?: Maybe<Array<ShippingMethodType>>;
  warehouses: Array<Warehouse>;
};


export type ShippingZoneMetafieldArgs = {
  key: Scalars['String'];
};


export type ShippingZoneMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type ShippingZonePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type ShippingZonePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type ShippingZoneBulkDelete = {
  __typename?: 'ShippingZoneBulkDelete';
  count: Scalars['Int'];
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
  __typename?: 'ShippingZoneCountableConnection';
  edges: Array<ShippingZoneCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ShippingZoneCountableEdge = {
  __typename?: 'ShippingZoneCountableEdge';
  cursor: Scalars['String'];
  node: ShippingZone;
};

export type ShippingZoneCreate = {
  __typename?: 'ShippingZoneCreate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  addChannels?: InputMaybe<Array<Scalars['ID']>>;
  addWarehouses?: InputMaybe<Array<Scalars['ID']>>;
  countries?: InputMaybe<Array<Scalars['String']>>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneCreated = Event & {
  __typename?: 'ShippingZoneCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  shippingZone?: Maybe<ShippingZone>;
  version?: Maybe<Scalars['String']>;
};


export type ShippingZoneCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneDelete = {
  __typename?: 'ShippingZoneDelete';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneDeleted = Event & {
  __typename?: 'ShippingZoneDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  shippingZone?: Maybe<ShippingZone>;
  version?: Maybe<Scalars['String']>;
};


export type ShippingZoneDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneUpdate = {
  __typename?: 'ShippingZoneUpdate';
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  addChannels?: InputMaybe<Array<Scalars['ID']>>;
  addWarehouses?: InputMaybe<Array<Scalars['ID']>>;
  countries?: InputMaybe<Array<Scalars['String']>>;
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
  removeWarehouses?: InputMaybe<Array<Scalars['ID']>>;
};

export type ShippingZoneUpdated = Event & {
  __typename?: 'ShippingZoneUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  shippingZone?: Maybe<ShippingZone>;
  version?: Maybe<Scalars['String']>;
};


export type ShippingZoneUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type Shop = {
  __typename?: 'Shop';
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>;
  availableExternalAuthentications: Array<ExternalAuthentication>;
  availablePaymentGateways: Array<PaymentGateway>;
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  channelCurrencies: Array<Scalars['String']>;
  chargeTaxesOnShipping: Scalars['Boolean'];
  companyAddress?: Maybe<Address>;
  countries: Array<CountryDisplay>;
  customerSetPasswordUrl?: Maybe<Scalars['String']>;
  defaultCountry?: Maybe<CountryDisplay>;
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>;
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>;
  defaultMailSenderAddress?: Maybe<Scalars['String']>;
  defaultMailSenderName?: Maybe<Scalars['String']>;
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  description?: Maybe<Scalars['String']>;
  displayGrossPrices: Scalars['Boolean'];
  domain: Domain;
  fulfillmentAllowUnpaid: Scalars['Boolean'];
  fulfillmentAutoApprove: Scalars['Boolean'];
  headerText?: Maybe<Scalars['String']>;
  includeTaxesInPrices: Scalars['Boolean'];
  languages: Array<LanguageDisplay>;
  limitQuantityPerCheckout?: Maybe<Scalars['Int']>;
  limits: LimitInfo;
  name: Scalars['String'];
  permissions: Array<Permission>;
  phonePrefixes: Array<Scalars['String']>;
  reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']>;
  reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']>;
  staffNotificationRecipients?: Maybe<Array<StaffNotificationRecipient>>;
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>;
  translation?: Maybe<ShopTranslation>;
  version: Scalars['String'];
};


export type ShopAvailablePaymentGatewaysArgs = {
  channel?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
};


export type ShopAvailableShippingMethodsArgs = {
  address?: InputMaybe<AddressInput>;
  channel: Scalars['String'];
};


export type ShopCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
};


export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShopAddressUpdate = {
  __typename?: 'ShopAddressUpdate';
  errors: Array<ShopError>;
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopDomainUpdate = {
  __typename?: 'ShopDomainUpdate';
  errors: Array<ShopError>;
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopError = {
  __typename?: 'ShopError';
  code: ShopErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum ShopErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ShopFetchTaxRates = {
  __typename?: 'ShopFetchTaxRates';
  errors: Array<ShopError>;
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopSettingsInput = {
  automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']>;
  chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']>;
  customerSetPasswordUrl?: InputMaybe<Scalars['String']>;
  defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']>;
  defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']>;
  defaultMailSenderAddress?: InputMaybe<Scalars['String']>;
  defaultMailSenderName?: InputMaybe<Scalars['String']>;
  defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
  description?: InputMaybe<Scalars['String']>;
  displayGrossPrices?: InputMaybe<Scalars['Boolean']>;
  fulfillmentAllowUnpaid?: InputMaybe<Scalars['Boolean']>;
  fulfillmentAutoApprove?: InputMaybe<Scalars['Boolean']>;
  headerText?: InputMaybe<Scalars['String']>;
  includeTaxesInPrices?: InputMaybe<Scalars['Boolean']>;
  limitQuantityPerCheckout?: InputMaybe<Scalars['Int']>;
  reserveStockDurationAnonymousUser?: InputMaybe<Scalars['Int']>;
  reserveStockDurationAuthenticatedUser?: InputMaybe<Scalars['Int']>;
  trackInventoryByDefault?: InputMaybe<Scalars['Boolean']>;
};

export type ShopSettingsTranslate = {
  __typename?: 'ShopSettingsTranslate';
  errors: Array<TranslationError>;
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
  description?: InputMaybe<Scalars['String']>;
  headerText?: InputMaybe<Scalars['String']>;
};

export type ShopSettingsUpdate = {
  __typename?: 'ShopSettingsUpdate';
  errors: Array<ShopError>;
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopTranslation = Node & {
  __typename?: 'ShopTranslation';
  description: Scalars['String'];
  headerText: Scalars['String'];
  id: Scalars['ID'];
  language: LanguageDisplay;
};

export type SiteDomainInput = {
  domain?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type StaffBulkDelete = {
  __typename?: 'StaffBulkDelete';
  count: Scalars['Int'];
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
};

export type StaffCreate = {
  __typename?: 'StaffCreate';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffCreateInput = {
  addGroups?: InputMaybe<Array<Scalars['ID']>>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
};

export type StaffCreated = Event & {
  __typename?: 'StaffCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type StaffDelete = {
  __typename?: 'StaffDelete';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffDeleted = Event & {
  __typename?: 'StaffDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type StaffError = {
  __typename?: 'StaffError';
  addressType?: Maybe<AddressTypeEnum>;
  code: AccountErrorCode;
  field?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Scalars['ID']>>;
  message?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<PermissionEnum>>;
  users?: Maybe<Array<Scalars['ID']>>;
};

export enum StaffMemberStatus {
  Active = 'ACTIVE',
  Deactivated = 'DEACTIVATED'
}

export type StaffNotificationRecipient = Node & {
  __typename?: 'StaffNotificationRecipient';
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  user?: Maybe<User>;
};

export type StaffNotificationRecipientCreate = {
  __typename?: 'StaffNotificationRecipientCreate';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientDelete = {
  __typename?: 'StaffNotificationRecipientDelete';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type StaffNotificationRecipientUpdate = {
  __typename?: 'StaffNotificationRecipientUpdate';
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffUpdate = {
  __typename?: 'StaffUpdate';
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffUpdateInput = {
  addGroups?: InputMaybe<Array<Scalars['ID']>>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  removeGroups?: InputMaybe<Array<Scalars['ID']>>;
};

export type StaffUpdated = Event & {
  __typename?: 'StaffUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type StaffUserInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StaffMemberStatus>;
};

export type Stock = Node & {
  __typename?: 'Stock';
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  quantityAllocated: Scalars['Int'];
  quantityReserved: Scalars['Int'];
  warehouse: Warehouse;
};

export enum StockAvailability {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export type StockCountableConnection = {
  __typename?: 'StockCountableConnection';
  edges: Array<StockCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StockCountableEdge = {
  __typename?: 'StockCountableEdge';
  cursor: Scalars['String'];
  node: Stock;
};

export type StockError = {
  __typename?: 'StockError';
  code: StockErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum StockErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type StockFilterInput = {
  quantity?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
};

export type StockInput = {
  quantity: Scalars['Int'];
  warehouse: Scalars['ID'];
};

export type StockSettings = {
  __typename?: 'StockSettings';
  allocationStrategy: AllocationStrategyEnum;
};

export type StockSettingsInput = {
  allocationStrategy: AllocationStrategyEnum;
};

export enum StorePaymentMethodEnum {
  None = 'NONE',
  OffSession = 'OFF_SESSION',
  OnSession = 'ON_SESSION'
}

export type Subscription = {
  __typename?: 'Subscription';
  event?: Maybe<Event>;
};

export type TaxType = {
  __typename?: 'TaxType';
  description?: Maybe<Scalars['String']>;
  taxCode?: Maybe<Scalars['String']>;
};

export type TaxedMoney = {
  __typename?: 'TaxedMoney';
  currency: Scalars['String'];
  gross: Money;
  net: Money;
  tax: Money;
};

export type TaxedMoneyRange = {
  __typename?: 'TaxedMoneyRange';
  start?: Maybe<TaxedMoney>;
  stop?: Maybe<TaxedMoney>;
};

export enum ThumbnailFormatEnum {
  Webp = 'WEBP'
}

export type TimePeriod = {
  __typename?: 'TimePeriod';
  amount: Scalars['Int'];
  type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
  amount: Scalars['Int'];
  type: TimePeriodTypeEnum;
};

export enum TimePeriodTypeEnum {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type Transaction = Node & {
  __typename?: 'Transaction';
  amount?: Maybe<Money>;
  created: Scalars['DateTime'];
  error?: Maybe<Scalars['String']>;
  gatewayResponse: Scalars['JSONString'];
  id: Scalars['ID'];
  isSuccess: Scalars['Boolean'];
  kind: TransactionKind;
  payment: Payment;
  token: Scalars['String'];
};

export type TransactionAction = {
  __typename?: 'TransactionAction';
  actionType: TransactionActionEnum;
  amount?: Maybe<Scalars['PositiveDecimal']>;
};

export enum TransactionActionEnum {
  Charge = 'CHARGE',
  Refund = 'REFUND',
  Void = 'VOID'
}

export type TransactionActionRequest = Event & {
  __typename?: 'TransactionActionRequest';
  action: TransactionAction;
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  transaction?: Maybe<TransactionItem>;
  version?: Maybe<Scalars['String']>;
};

export type TransactionCreate = {
  __typename?: 'TransactionCreate';
  errors: Array<TransactionCreateError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionCreateError = {
  __typename?: 'TransactionCreateError';
  code: TransactionCreateErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum TransactionCreateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  IncorrectCurrency = 'INCORRECT_CURRENCY',
  Invalid = 'INVALID',
  MetadataKeyRequired = 'METADATA_KEY_REQUIRED',
  NotFound = 'NOT_FOUND'
}

export type TransactionCreateInput = {
  amountAuthorized?: InputMaybe<MoneyInput>;
  amountCharged?: InputMaybe<MoneyInput>;
  amountRefunded?: InputMaybe<MoneyInput>;
  amountVoided?: InputMaybe<MoneyInput>;
  availableActions?: InputMaybe<Array<TransactionActionEnum>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  reference?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  type: Scalars['String'];
};

export type TransactionEvent = Node & {
  __typename?: 'TransactionEvent';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  reference: Scalars['String'];
  status: TransactionStatus;
};

export type TransactionEventInput = {
  name?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  status: TransactionStatus;
};

export type TransactionItem = Node & ObjectWithMetadata & {
  __typename?: 'TransactionItem';
  actions: Array<TransactionActionEnum>;
  authorizedAmount: Money;
  chargedAmount: Money;
  createdAt: Scalars['DateTime'];
  events: Array<TransactionEvent>;
  id: Scalars['ID'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  modifiedAt: Scalars['DateTime'];
  order?: Maybe<Order>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  reference: Scalars['String'];
  refundedAmount: Money;
  status: Scalars['String'];
  type: Scalars['String'];
  voidedAmount: Money;
};


export type TransactionItemMetafieldArgs = {
  key: Scalars['String'];
};


export type TransactionItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type TransactionItemPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type TransactionItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export enum TransactionKind {
  ActionToConfirm = 'ACTION_TO_CONFIRM',
  Auth = 'AUTH',
  Cancel = 'CANCEL',
  Capture = 'CAPTURE',
  Confirm = 'CONFIRM',
  External = 'EXTERNAL',
  Pending = 'PENDING',
  Refund = 'REFUND',
  RefundOngoing = 'REFUND_ONGOING',
  Void = 'VOID'
}

export type TransactionRequestAction = {
  __typename?: 'TransactionRequestAction';
  errors: Array<TransactionRequestActionError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionRequestActionError = {
  __typename?: 'TransactionRequestActionError';
  code: TransactionRequestActionErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum TransactionRequestActionErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MissingTransactionActionRequestWebhook = 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK',
  NotFound = 'NOT_FOUND'
}

export enum TransactionStatus {
  Failure = 'FAILURE',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type TransactionUpdate = {
  __typename?: 'TransactionUpdate';
  errors: Array<TransactionUpdateError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionUpdateError = {
  __typename?: 'TransactionUpdateError';
  code: TransactionUpdateErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum TransactionUpdateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  IncorrectCurrency = 'INCORRECT_CURRENCY',
  Invalid = 'INVALID',
  MetadataKeyRequired = 'METADATA_KEY_REQUIRED',
  NotFound = 'NOT_FOUND'
}

export type TransactionUpdateInput = {
  amountAuthorized?: InputMaybe<MoneyInput>;
  amountCharged?: InputMaybe<MoneyInput>;
  amountRefunded?: InputMaybe<MoneyInput>;
  amountVoided?: InputMaybe<MoneyInput>;
  availableActions?: InputMaybe<Array<TransactionActionEnum>>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  reference?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type TranslatableItem = AttributeTranslatableContent | AttributeValueTranslatableContent | CategoryTranslatableContent | CollectionTranslatableContent | MenuItemTranslatableContent | PageTranslatableContent | ProductTranslatableContent | ProductVariantTranslatableContent | SaleTranslatableContent | ShippingMethodTranslatableContent | VoucherTranslatableContent;

export type TranslatableItemConnection = {
  __typename?: 'TranslatableItemConnection';
  edges: Array<TranslatableItemEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TranslatableItemEdge = {
  __typename?: 'TranslatableItemEdge';
  cursor: Scalars['String'];
  node: TranslatableItem;
};

export enum TranslatableKinds {
  Attribute = 'ATTRIBUTE',
  AttributeValue = 'ATTRIBUTE_VALUE',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  MenuItem = 'MENU_ITEM',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Sale = 'SALE',
  ShippingMethod = 'SHIPPING_METHOD',
  Variant = 'VARIANT',
  Voucher = 'VOUCHER'
}

export type TranslationCreated = Event & {
  __typename?: 'TranslationCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  translation?: Maybe<TranslationTypes>;
  version?: Maybe<Scalars['String']>;
};

export type TranslationError = {
  __typename?: 'TranslationError';
  code: TranslationErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum TranslationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type TranslationInput = {
  description?: InputMaybe<Scalars['JSONString']>;
  name?: InputMaybe<Scalars['String']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
};

export type TranslationTypes = AttributeTranslation | AttributeValueTranslation | CategoryTranslation | CollectionTranslation | MenuItemTranslation | PageTranslation | ProductTranslation | ProductVariantTranslation | SaleTranslation | ShippingMethodTranslation | VoucherTranslation;

export type TranslationUpdated = Event & {
  __typename?: 'TranslationUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  translation?: Maybe<TranslationTypes>;
  version?: Maybe<Scalars['String']>;
};

export type UpdateInvoiceInput = {
  number?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateMetadata = {
  __typename?: 'UpdateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

export type UpdatePrivateMetadata = {
  __typename?: 'UpdatePrivateMetadata';
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

export type UploadError = {
  __typename?: 'UploadError';
  code: UploadErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum UploadErrorCode {
  GraphqlError = 'GRAPHQL_ERROR'
}

export type User = Node & ObjectWithMetadata & {
  __typename?: 'User';
  addresses: Array<Address>;
  avatar?: Maybe<Image>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts. */
  checkout?: Maybe<Checkout>;
  checkoutIds?: Maybe<Array<Scalars['ID']>>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `checkoutIds` instead. */
  checkoutTokens?: Maybe<Array<Scalars['UUID']>>;
  dateJoined: Scalars['DateTime'];
  defaultBillingAddress?: Maybe<Address>;
  defaultShippingAddress?: Maybe<Address>;
  editableGroups?: Maybe<Array<Group>>;
  email: Scalars['String'];
  events?: Maybe<Array<CustomerEvent>>;
  firstName: Scalars['String'];
  giftCards?: Maybe<GiftCardCountableConnection>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  languageCode: LanguageCodeEnum;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  note?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderCountableConnection>;
  permissionGroups?: Maybe<Array<Group>>;
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  storedPaymentSources?: Maybe<Array<PaymentSource>>;
  updatedAt: Scalars['DateTime'];
  userPermissions?: Maybe<Array<UserPermission>>;
};


export type UserAvatarArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']>;
};


export type UserCheckoutIdsArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


export type UserCheckoutTokensArgs = {
  channel?: InputMaybe<Scalars['String']>;
};


export type UserGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserMetafieldArgs = {
  key: Scalars['String'];
};


export type UserMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type UserPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type UserStoredPaymentSourcesArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type UserAvatarDelete = {
  __typename?: 'UserAvatarDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type UserAvatarUpdate = {
  __typename?: 'UserAvatarUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

export type UserBulkSetActive = {
  __typename?: 'UserBulkSetActive';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  count: Scalars['Int'];
  errors: Array<AccountError>;
};

export type UserCountableConnection = {
  __typename?: 'UserCountableConnection';
  edges: Array<UserCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UserCountableEdge = {
  __typename?: 'UserCountableEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserCreateInput = {
  channel?: InputMaybe<Scalars['String']>;
  defaultBillingAddress?: InputMaybe<AddressInput>;
  defaultShippingAddress?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
  lastName?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  redirectUrl?: InputMaybe<Scalars['String']>;
};

export type UserPermission = {
  __typename?: 'UserPermission';
  code: PermissionEnum;
  name: Scalars['String'];
  sourcePermissionGroups?: Maybe<Array<Group>>;
};


export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID'];
};

export enum UserSortField {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastModifiedAt = 'LAST_MODIFIED_AT',
  LastName = 'LAST_NAME',
  OrderCount = 'ORDER_COUNT'
}

export type UserSortingInput = {
  direction: OrderDirection;
  field: UserSortField;
};

export type Vat = {
  __typename?: 'VAT';
  countryCode: Scalars['String'];
  reducedRates: Array<ReducedRate>;
  standardRate?: Maybe<Scalars['Float']>;
};

export enum VariantAttributeScope {
  All = 'ALL',
  NotVariantSelection = 'NOT_VARIANT_SELECTION',
  VariantSelection = 'VARIANT_SELECTION'
}

export type VariantMediaAssign = {
  __typename?: 'VariantMediaAssign';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type VariantMediaUnassign = {
  __typename?: 'VariantMediaUnassign';
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type VariantPricingInfo = {
  __typename?: 'VariantPricingInfo';
  discount?: Maybe<TaxedMoney>;
  discountLocalCurrency?: Maybe<TaxedMoney>;
  onSale?: Maybe<Scalars['Boolean']>;
  price?: Maybe<TaxedMoney>;
  priceLocalCurrency?: Maybe<TaxedMoney>;
  priceUndiscounted?: Maybe<TaxedMoney>;
};

export type VerifyToken = {
  __typename?: 'VerifyToken';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  isValid: Scalars['Boolean'];
  payload?: Maybe<Scalars['GenericScalar']>;
  user?: Maybe<User>;
};

export enum VolumeUnitsEnum {
  AcreFt = 'ACRE_FT',
  AcreIn = 'ACRE_IN',
  CubicCentimeter = 'CUBIC_CENTIMETER',
  CubicDecimeter = 'CUBIC_DECIMETER',
  CubicFoot = 'CUBIC_FOOT',
  CubicInch = 'CUBIC_INCH',
  CubicMeter = 'CUBIC_METER',
  CubicMillimeter = 'CUBIC_MILLIMETER',
  CubicYard = 'CUBIC_YARD',
  FlOz = 'FL_OZ',
  Liter = 'LITER',
  Pint = 'PINT',
  Qt = 'QT'
}

export type Voucher = Node & ObjectWithMetadata & {
  __typename?: 'Voucher';
  applyOncePerCustomer: Scalars['Boolean'];
  applyOncePerOrder: Scalars['Boolean'];
  categories?: Maybe<CategoryCountableConnection>;
  channelListings?: Maybe<Array<VoucherChannelListing>>;
  code: Scalars['String'];
  collections?: Maybe<CollectionCountableConnection>;
  countries?: Maybe<Array<CountryDisplay>>;
  currency?: Maybe<Scalars['String']>;
  discountValue?: Maybe<Scalars['Float']>;
  discountValueType: DiscountValueTypeEnum;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>;
  minSpent?: Maybe<Money>;
  name?: Maybe<Scalars['String']>;
  onlyForStaff: Scalars['Boolean'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  products?: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime'];
  translation?: Maybe<VoucherTranslation>;
  type: VoucherTypeEnum;
  usageLimit?: Maybe<Scalars['Int']>;
  used: Scalars['Int'];
  variants?: Maybe<ProductVariantCountableConnection>;
};


export type VoucherCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type VoucherCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type VoucherMetafieldArgs = {
  key: Scalars['String'];
};


export type VoucherMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type VoucherPrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type VoucherPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type VoucherProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


export type VoucherVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type VoucherAddCatalogues = {
  __typename?: 'VoucherAddCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherBulkDelete = {
  __typename?: 'VoucherBulkDelete';
  count: Scalars['Int'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

export type VoucherChannelListing = Node & {
  __typename?: 'VoucherChannelListing';
  channel: Channel;
  currency: Scalars['String'];
  discountValue: Scalars['Float'];
  id: Scalars['ID'];
  minSpent?: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
  channelId: Scalars['ID'];
  discountValue?: InputMaybe<Scalars['PositiveDecimal']>;
  minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type VoucherChannelListingInput = {
  addChannels?: InputMaybe<Array<VoucherChannelListingAddInput>>;
  removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type VoucherChannelListingUpdate = {
  __typename?: 'VoucherChannelListingUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherCountableConnection = {
  __typename?: 'VoucherCountableConnection';
  edges: Array<VoucherCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VoucherCountableEdge = {
  __typename?: 'VoucherCountableEdge';
  cursor: Scalars['String'];
  node: Voucher;
};

export type VoucherCreate = {
  __typename?: 'VoucherCreate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherCreated = Event & {
  __typename?: 'VoucherCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
  voucher?: Maybe<Voucher>;
};


export type VoucherCreatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type VoucherDelete = {
  __typename?: 'VoucherDelete';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherDeleted = Event & {
  __typename?: 'VoucherDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
  voucher?: Maybe<Voucher>;
};


export type VoucherDeletedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export enum VoucherDiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  Shipping = 'SHIPPING'
}

export type VoucherFilterInput = {
  discountType?: InputMaybe<Array<VoucherDiscountType>>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  timesUsed?: InputMaybe<IntRangeInput>;
};

export type VoucherInput = {
  applyOncePerCustomer?: InputMaybe<Scalars['Boolean']>;
  applyOncePerOrder?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<Array<Scalars['ID']>>;
  code?: InputMaybe<Scalars['String']>;
  collections?: InputMaybe<Array<Scalars['ID']>>;
  countries?: InputMaybe<Array<Scalars['String']>>;
  discountValueType?: InputMaybe<DiscountValueTypeEnum>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  onlyForStaff?: InputMaybe<Scalars['Boolean']>;
  products?: InputMaybe<Array<Scalars['ID']>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<VoucherTypeEnum>;
  usageLimit?: InputMaybe<Scalars['Int']>;
  variants?: InputMaybe<Array<Scalars['ID']>>;
};

export type VoucherRemoveCatalogues = {
  __typename?: 'VoucherRemoveCatalogues';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export enum VoucherSortField {
  Code = 'CODE',
  EndDate = 'END_DATE',
  MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT',
  StartDate = 'START_DATE',
  Type = 'TYPE',
  UsageLimit = 'USAGE_LIMIT',
  Value = 'VALUE'
}

export type VoucherSortingInput = {
  channel?: InputMaybe<Scalars['String']>;
  direction: OrderDirection;
  field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
  __typename?: 'VoucherTranslatableContent';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  translation?: Maybe<VoucherTranslation>;
  /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
  voucher?: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type VoucherTranslate = {
  __typename?: 'VoucherTranslate';
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
  __typename?: 'VoucherTranslation';
  id: Scalars['ID'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
};

export enum VoucherTypeEnum {
  EntireOrder = 'ENTIRE_ORDER',
  Shipping = 'SHIPPING',
  SpecificProduct = 'SPECIFIC_PRODUCT'
}

export type VoucherUpdate = {
  __typename?: 'VoucherUpdate';
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherUpdated = Event & {
  __typename?: 'VoucherUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
  voucher?: Maybe<Voucher>;
};


export type VoucherUpdatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']>;
};

export type Warehouse = Node & ObjectWithMetadata & {
  __typename?: 'Warehouse';
  address: Address;
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
  /** @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead. */
  companyName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  metadata: Array<MetadataItem>;
  metafield?: Maybe<Scalars['String']>;
  metafields?: Maybe<Scalars['Metadata']>;
  name: Scalars['String'];
  privateMetadata: Array<MetadataItem>;
  privateMetafield?: Maybe<Scalars['String']>;
  privateMetafields?: Maybe<Scalars['Metadata']>;
  shippingZones: ShippingZoneCountableConnection;
  slug: Scalars['String'];
};


export type WarehouseMetafieldArgs = {
  key: Scalars['String'];
};


export type WarehouseMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type WarehousePrivateMetafieldArgs = {
  key: Scalars['String'];
};


export type WarehousePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};


export type WarehouseShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export enum WarehouseClickAndCollectOptionEnum {
  All = 'ALL',
  Disabled = 'DISABLED',
  Local = 'LOCAL'
}

export type WarehouseCountableConnection = {
  __typename?: 'WarehouseCountableConnection';
  edges: Array<WarehouseCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WarehouseCountableEdge = {
  __typename?: 'WarehouseCountableEdge';
  cursor: Scalars['String'];
  node: Warehouse;
};

export type WarehouseCreate = {
  __typename?: 'WarehouseCreate';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseCreateInput = {
  address: AddressInput;
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shippingZones?: InputMaybe<Array<Scalars['ID']>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type WarehouseCreated = Event & {
  __typename?: 'WarehouseCreated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
};

export type WarehouseDelete = {
  __typename?: 'WarehouseDelete';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseDeleted = Event & {
  __typename?: 'WarehouseDeleted';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
};

export type WarehouseError = {
  __typename?: 'WarehouseError';
  code: WarehouseErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  shippingZones?: Maybe<Array<Scalars['ID']>>;
};

export enum WarehouseErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WarehouseFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']>>;
  clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
};

export type WarehouseShippingZoneAssign = {
  __typename?: 'WarehouseShippingZoneAssign';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseShippingZoneUnassign = {
  __typename?: 'WarehouseShippingZoneUnassign';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export enum WarehouseSortField {
  Name = 'NAME'
}

export type WarehouseSortingInput = {
  direction: OrderDirection;
  field: WarehouseSortField;
};

export type WarehouseUpdate = {
  __typename?: 'WarehouseUpdate';
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseUpdateInput = {
  address?: InputMaybe<AddressInput>;
  clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  email?: InputMaybe<Scalars['String']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type WarehouseUpdated = Event & {
  __typename?: 'WarehouseUpdated';
  issuedAt?: Maybe<Scalars['DateTime']>;
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  recipient?: Maybe<App>;
  version?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
};

export type Webhook = Node & {
  __typename?: 'Webhook';
  app: App;
  asyncEvents: Array<WebhookEventAsync>;
  eventDeliveries?: Maybe<EventDeliveryCountableConnection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead. */
  events: Array<WebhookEvent>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  /** @deprecated This field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS. */
  secretKey?: Maybe<Scalars['String']>;
  subscriptionQuery?: Maybe<Scalars['String']>;
  syncEvents: Array<WebhookEventSync>;
  targetUrl: Scalars['String'];
};


export type WebhookEventDeliveriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<EventDeliveryFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<EventDeliverySortingInput>;
};

export type WebhookCreate = {
  __typename?: 'WebhookCreate';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookCreateInput = {
  app?: InputMaybe<Scalars['ID']>;
  asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
  targetUrl?: InputMaybe<Scalars['String']>;
};

export type WebhookDelete = {
  __typename?: 'WebhookDelete';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookError = {
  __typename?: 'WebhookError';
  code: WebhookErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum WebhookErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  eventType: WebhookEventTypeEnum;
  name: Scalars['String'];
};

export type WebhookEventAsync = {
  __typename?: 'WebhookEventAsync';
  eventType: WebhookEventTypeAsyncEnum;
  name: Scalars['String'];
};

export type WebhookEventSync = {
  __typename?: 'WebhookEventSync';
  eventType: WebhookEventTypeSyncEnum;
  name: Scalars['String'];
};

export enum WebhookEventTypeAsyncEnum {
  AddressCreated = 'ADDRESS_CREATED',
  AddressDeleted = 'ADDRESS_DELETED',
  AddressUpdated = 'ADDRESS_UPDATED',
  AnyEvents = 'ANY_EVENTS',
  AppDeleted = 'APP_DELETED',
  AppInstalled = 'APP_INSTALLED',
  AppStatusChanged = 'APP_STATUS_CHANGED',
  AppUpdated = 'APP_UPDATED',
  AttributeCreated = 'ATTRIBUTE_CREATED',
  AttributeDeleted = 'ATTRIBUTE_DELETED',
  AttributeUpdated = 'ATTRIBUTE_UPDATED',
  AttributeValueCreated = 'ATTRIBUTE_VALUE_CREATED',
  AttributeValueDeleted = 'ATTRIBUTE_VALUE_DELETED',
  AttributeValueUpdated = 'ATTRIBUTE_VALUE_UPDATED',
  CategoryCreated = 'CATEGORY_CREATED',
  CategoryDeleted = 'CATEGORY_DELETED',
  CategoryUpdated = 'CATEGORY_UPDATED',
  ChannelCreated = 'CHANNEL_CREATED',
  ChannelDeleted = 'CHANNEL_DELETED',
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  ChannelUpdated = 'CHANNEL_UPDATED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CollectionCreated = 'COLLECTION_CREATED',
  CollectionDeleted = 'COLLECTION_DELETED',
  CollectionUpdated = 'COLLECTION_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  FulfillmentApproved = 'FULFILLMENT_APPROVED',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  GiftCardCreated = 'GIFT_CARD_CREATED',
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  MenuCreated = 'MENU_CREATED',
  MenuDeleted = 'MENU_DELETED',
  MenuItemCreated = 'MENU_ITEM_CREATED',
  MenuItemDeleted = 'MENU_ITEM_DELETED',
  MenuItemUpdated = 'MENU_ITEM_UPDATED',
  MenuUpdated = 'MENU_UPDATED',
  NotifyUser = 'NOTIFY_USER',
  Observability = 'OBSERVABILITY',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderConfirmed = 'ORDER_CONFIRMED',
  OrderCreated = 'ORDER_CREATED',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  PageCreated = 'PAGE_CREATED',
  PageDeleted = 'PAGE_DELETED',
  PageTypeCreated = 'PAGE_TYPE_CREATED',
  PageTypeDeleted = 'PAGE_TYPE_DELETED',
  PageTypeUpdated = 'PAGE_TYPE_UPDATED',
  PageUpdated = 'PAGE_UPDATED',
  PermissionGroupCreated = 'PERMISSION_GROUP_CREATED',
  PermissionGroupDeleted = 'PERMISSION_GROUP_DELETED',
  PermissionGroupUpdated = 'PERMISSION_GROUP_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  SaleCreated = 'SALE_CREATED',
  SaleDeleted = 'SALE_DELETED',
  SaleToggle = 'SALE_TOGGLE',
  SaleUpdated = 'SALE_UPDATED',
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  StaffCreated = 'STAFF_CREATED',
  StaffDeleted = 'STAFF_DELETED',
  StaffUpdated = 'STAFF_UPDATED',
  TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED',
  VoucherCreated = 'VOUCHER_CREATED',
  VoucherDeleted = 'VOUCHER_DELETED',
  VoucherUpdated = 'VOUCHER_UPDATED',
  WarehouseCreated = 'WAREHOUSE_CREATED',
  WarehouseDeleted = 'WAREHOUSE_DELETED',
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

export enum WebhookEventTypeEnum {
  AddressCreated = 'ADDRESS_CREATED',
  AddressDeleted = 'ADDRESS_DELETED',
  AddressUpdated = 'ADDRESS_UPDATED',
  AnyEvents = 'ANY_EVENTS',
  AppDeleted = 'APP_DELETED',
  AppInstalled = 'APP_INSTALLED',
  AppStatusChanged = 'APP_STATUS_CHANGED',
  AppUpdated = 'APP_UPDATED',
  AttributeCreated = 'ATTRIBUTE_CREATED',
  AttributeDeleted = 'ATTRIBUTE_DELETED',
  AttributeUpdated = 'ATTRIBUTE_UPDATED',
  AttributeValueCreated = 'ATTRIBUTE_VALUE_CREATED',
  AttributeValueDeleted = 'ATTRIBUTE_VALUE_DELETED',
  AttributeValueUpdated = 'ATTRIBUTE_VALUE_UPDATED',
  CategoryCreated = 'CATEGORY_CREATED',
  CategoryDeleted = 'CATEGORY_DELETED',
  CategoryUpdated = 'CATEGORY_UPDATED',
  ChannelCreated = 'CHANNEL_CREATED',
  ChannelDeleted = 'CHANNEL_DELETED',
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  ChannelUpdated = 'CHANNEL_UPDATED',
  CheckoutCalculateTaxes = 'CHECKOUT_CALCULATE_TAXES',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CollectionCreated = 'COLLECTION_CREATED',
  CollectionDeleted = 'COLLECTION_DELETED',
  CollectionUpdated = 'COLLECTION_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  FulfillmentApproved = 'FULFILLMENT_APPROVED',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  GiftCardCreated = 'GIFT_CARD_CREATED',
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  MenuCreated = 'MENU_CREATED',
  MenuDeleted = 'MENU_DELETED',
  MenuItemCreated = 'MENU_ITEM_CREATED',
  MenuItemDeleted = 'MENU_ITEM_DELETED',
  MenuItemUpdated = 'MENU_ITEM_UPDATED',
  MenuUpdated = 'MENU_UPDATED',
  NotifyUser = 'NOTIFY_USER',
  Observability = 'OBSERVABILITY',
  OrderCalculateTaxes = 'ORDER_CALCULATE_TAXES',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderConfirmed = 'ORDER_CONFIRMED',
  OrderCreated = 'ORDER_CREATED',
  OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  PageCreated = 'PAGE_CREATED',
  PageDeleted = 'PAGE_DELETED',
  PageTypeCreated = 'PAGE_TYPE_CREATED',
  PageTypeDeleted = 'PAGE_TYPE_DELETED',
  PageTypeUpdated = 'PAGE_TYPE_UPDATED',
  PageUpdated = 'PAGE_UPDATED',
  PaymentAuthorize = 'PAYMENT_AUTHORIZE',
  PaymentCapture = 'PAYMENT_CAPTURE',
  PaymentConfirm = 'PAYMENT_CONFIRM',
  PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
  PaymentProcess = 'PAYMENT_PROCESS',
  PaymentRefund = 'PAYMENT_REFUND',
  PaymentVoid = 'PAYMENT_VOID',
  PermissionGroupCreated = 'PERMISSION_GROUP_CREATED',
  PermissionGroupDeleted = 'PERMISSION_GROUP_DELETED',
  PermissionGroupUpdated = 'PERMISSION_GROUP_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  SaleCreated = 'SALE_CREATED',
  SaleDeleted = 'SALE_DELETED',
  SaleToggle = 'SALE_TOGGLE',
  SaleUpdated = 'SALE_UPDATED',
  ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  StaffCreated = 'STAFF_CREATED',
  StaffDeleted = 'STAFF_DELETED',
  StaffUpdated = 'STAFF_UPDATED',
  TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED',
  VoucherCreated = 'VOUCHER_CREATED',
  VoucherDeleted = 'VOUCHER_DELETED',
  VoucherUpdated = 'VOUCHER_UPDATED',
  WarehouseCreated = 'WAREHOUSE_CREATED',
  WarehouseDeleted = 'WAREHOUSE_DELETED',
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

export enum WebhookEventTypeSyncEnum {
  CheckoutCalculateTaxes = 'CHECKOUT_CALCULATE_TAXES',
  CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS',
  OrderCalculateTaxes = 'ORDER_CALCULATE_TAXES',
  OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
  PaymentAuthorize = 'PAYMENT_AUTHORIZE',
  PaymentCapture = 'PAYMENT_CAPTURE',
  PaymentConfirm = 'PAYMENT_CONFIRM',
  PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
  PaymentProcess = 'PAYMENT_PROCESS',
  PaymentRefund = 'PAYMENT_REFUND',
  PaymentVoid = 'PAYMENT_VOID',
  ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT'
}

export enum WebhookSampleEventTypeEnum {
  AddressCreated = 'ADDRESS_CREATED',
  AddressDeleted = 'ADDRESS_DELETED',
  AddressUpdated = 'ADDRESS_UPDATED',
  AppDeleted = 'APP_DELETED',
  AppInstalled = 'APP_INSTALLED',
  AppStatusChanged = 'APP_STATUS_CHANGED',
  AppUpdated = 'APP_UPDATED',
  AttributeCreated = 'ATTRIBUTE_CREATED',
  AttributeDeleted = 'ATTRIBUTE_DELETED',
  AttributeUpdated = 'ATTRIBUTE_UPDATED',
  AttributeValueCreated = 'ATTRIBUTE_VALUE_CREATED',
  AttributeValueDeleted = 'ATTRIBUTE_VALUE_DELETED',
  AttributeValueUpdated = 'ATTRIBUTE_VALUE_UPDATED',
  CategoryCreated = 'CATEGORY_CREATED',
  CategoryDeleted = 'CATEGORY_DELETED',
  CategoryUpdated = 'CATEGORY_UPDATED',
  ChannelCreated = 'CHANNEL_CREATED',
  ChannelDeleted = 'CHANNEL_DELETED',
  ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
  ChannelUpdated = 'CHANNEL_UPDATED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CollectionCreated = 'COLLECTION_CREATED',
  CollectionDeleted = 'COLLECTION_DELETED',
  CollectionUpdated = 'COLLECTION_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  FulfillmentApproved = 'FULFILLMENT_APPROVED',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  GiftCardCreated = 'GIFT_CARD_CREATED',
  GiftCardDeleted = 'GIFT_CARD_DELETED',
  GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
  GiftCardUpdated = 'GIFT_CARD_UPDATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  MenuCreated = 'MENU_CREATED',
  MenuDeleted = 'MENU_DELETED',
  MenuItemCreated = 'MENU_ITEM_CREATED',
  MenuItemDeleted = 'MENU_ITEM_DELETED',
  MenuItemUpdated = 'MENU_ITEM_UPDATED',
  MenuUpdated = 'MENU_UPDATED',
  NotifyUser = 'NOTIFY_USER',
  Observability = 'OBSERVABILITY',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderConfirmed = 'ORDER_CONFIRMED',
  OrderCreated = 'ORDER_CREATED',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  PageCreated = 'PAGE_CREATED',
  PageDeleted = 'PAGE_DELETED',
  PageTypeCreated = 'PAGE_TYPE_CREATED',
  PageTypeDeleted = 'PAGE_TYPE_DELETED',
  PageTypeUpdated = 'PAGE_TYPE_UPDATED',
  PageUpdated = 'PAGE_UPDATED',
  PermissionGroupCreated = 'PERMISSION_GROUP_CREATED',
  PermissionGroupDeleted = 'PERMISSION_GROUP_DELETED',
  PermissionGroupUpdated = 'PERMISSION_GROUP_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  SaleCreated = 'SALE_CREATED',
  SaleDeleted = 'SALE_DELETED',
  SaleToggle = 'SALE_TOGGLE',
  SaleUpdated = 'SALE_UPDATED',
  ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
  ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
  ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
  ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
  ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
  ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
  StaffCreated = 'STAFF_CREATED',
  StaffDeleted = 'STAFF_DELETED',
  StaffUpdated = 'STAFF_UPDATED',
  TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED',
  VoucherCreated = 'VOUCHER_CREATED',
  VoucherDeleted = 'VOUCHER_DELETED',
  VoucherUpdated = 'VOUCHER_UPDATED',
  WarehouseCreated = 'WAREHOUSE_CREATED',
  WarehouseDeleted = 'WAREHOUSE_DELETED',
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

export type WebhookUpdate = {
  __typename?: 'WebhookUpdate';
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookUpdateInput = {
  app?: InputMaybe<Scalars['ID']>;
  asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
  targetUrl?: InputMaybe<Scalars['String']>;
};

export type Weight = {
  __typename?: 'Weight';
  unit: WeightUnitsEnum;
  value: Scalars['Float'];
};

export enum WeightUnitsEnum {
  G = 'G',
  Kg = 'KG',
  Lb = 'LB',
  Oz = 'OZ',
  Tonne = 'TONNE'
}

export type _Entity = Address | App | Category | Collection | Group | PageType | Product | ProductMedia | ProductType | ProductVariant | User;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type WebhookCreateMutationVariables = Exact<{
  input: WebhookCreateInput;
}>;


export type WebhookCreateMutation = { __typename?: 'Mutation', webhookCreate?: { __typename?: 'WebhookCreate', errors: Array<{ __typename?: 'WebhookError', field?: string | null, message?: string | null }> } | null };

export type WebhookDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebhookDeleteMutation = { __typename?: 'Mutation', webhookDelete?: { __typename?: 'WebhookDelete', errors: Array<{ __typename?: 'WebhookError', field?: string | null, message?: string | null }> } | null };

export type FetchAppDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAppDetailsQuery = { __typename?: 'Query', app?: { __typename?: 'App', id: string, privateMetadata: Array<{ __typename?: 'MetadataItem', key: string, value: string }> } | null };

export type FetchWebhookDataQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchWebhookDataQuery = { __typename?: 'Query', app?: { __typename?: 'App', id: string, manifestUrl?: string | null, name?: string | null, webhooks?: Array<{ __typename?: 'Webhook', id: string, name: string, isActive: boolean, targetUrl: string, subscriptionQuery?: string | null, asyncEvents: Array<{ __typename?: 'WebhookEventAsync', name: string, eventType: WebhookEventTypeAsyncEnum }>, eventDeliveries?: { __typename?: 'EventDeliveryCountableConnection', edges: Array<{ __typename?: 'EventDeliveryCountableEdge', node: { __typename?: 'EventDelivery', createdAt: any, status: EventDeliveryStatusEnum, eventType: WebhookEventTypeEnum, attempts?: { __typename?: 'EventDeliveryAttemptCountableConnection', edges: Array<{ __typename?: 'EventDeliveryAttemptCountableEdge', node: { __typename?: 'EventDeliveryAttempt', createdAt: any, response?: string | null, responseStatusCode?: number | null, status: EventDeliveryStatusEnum } }> } | null } }> } | null }> | null } | null };


export const WebhookCreateDocument = gql`
    mutation WebhookCreate($input: WebhookCreateInput!) {
  webhookCreate(input: $input) {
    errors {
      field
      message
    }
  }
}
    `;
export const WebhookDeleteDocument = gql`
    mutation WebhookDelete($id: ID!) {
  webhookDelete(id: $id) {
    errors {
      field
      message
    }
  }
}
    `;
export const FetchAppDetailsDocument = gql`
    query FetchAppDetails {
  app {
    id
    privateMetadata {
      key
      value
    }
  }
}
    `;
export const FetchWebhookDataDocument = gql`
    query FetchWebhookData {
  app {
    id
    manifestUrl
    name
    webhooks {
      id
      name
      isActive
      asyncEvents {
        name
        eventType
      }
      targetUrl
      subscriptionQuery
      eventDeliveries(first: 10) {
        edges {
          node {
            createdAt
            status
            eventType
            attempts(first: 1) {
              edges {
                node {
                  createdAt
                  response
                  responseStatusCode
                  status
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    WebhookCreate(variables: WebhookCreateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WebhookCreateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<WebhookCreateMutation>(WebhookCreateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WebhookCreate', 'mutation');
    },
    WebhookDelete(variables: WebhookDeleteMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WebhookDeleteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<WebhookDeleteMutation>(WebhookDeleteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WebhookDelete', 'mutation');
    },
    FetchAppDetails(variables?: FetchAppDetailsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchAppDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchAppDetailsQuery>(FetchAppDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchAppDetails', 'query');
    },
    FetchWebhookData(variables?: FetchWebhookDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FetchWebhookDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchWebhookDataQuery>(FetchWebhookDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'FetchWebhookData', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;