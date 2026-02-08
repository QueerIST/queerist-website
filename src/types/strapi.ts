/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Schema, Utils, UID } from '@strapi/types'

export type ID = `${number}` | number
export type BooleanValue =
  | boolean
  | 'true'
  | 'false'
  | 't'
  | 'f'
  | '1'
  | '0'
  | 1
  | 0
export type NumberValue = string | number
export type DateValue = Schema.Attribute.DateValue | number
export type TimeValue = Schema.Attribute.TimeValue | number
export type DateTimeValue = Schema.Attribute.DateTimeValue | number
export type TimeStampValue = Schema.Attribute.TimestampValue

type OriginalGetValue<
  TAttribute extends Schema.Attribute.Attribute,
  TGuard = unknown,
> = Utils.Guard.Never<
| Schema.Attribute.GetBigIntegerValue<TAttribute>
| Schema.Attribute.GetBooleanValue<TAttribute>
| Schema.Attribute.GetBlocksValue<TAttribute>
// | Schema.Attribute.GetComponentValue<TAttribute>  // Excluded - handled by custom GetValue
| Schema.Attribute.GetDecimalValue<TAttribute>
// | Schema.Attribute.GetDynamicZoneValue<TAttribute>  // Excluded - handled by custom GetValue
| Schema.Attribute.GetEnumerationValue<TAttribute>
| Schema.Attribute.GetEmailValue<TAttribute>
| Schema.Attribute.GetFloatValue<TAttribute>
| Schema.Attribute.GetIntegerValue<TAttribute>
| Schema.Attribute.GetJsonValue<TAttribute>
// | Schema.Attribute.GetMediaValue<TAttribute>  // Excluded - handled by custom GetValue
| Schema.Attribute.GetPasswordValue<TAttribute>
// | Schema.Attribute.GetRelationValue<TAttribute>  // Excluded - handled by custom GetValue
| Schema.Attribute.GetRichTextValue<TAttribute>
| Schema.Attribute.GetStringValue<TAttribute>
| Schema.Attribute.GetTextValue<TAttribute>
| Schema.Attribute.GetUIDValue<TAttribute>
| Schema.Attribute.GetDateValue<TAttribute>
| Schema.Attribute.GetDateTimeValue<TAttribute>
| Schema.Attribute.GetTimeValue<TAttribute>
| Schema.Attribute.GetTimestampValue<TAttribute>,
TGuard
>

type OriginalGetAll<TSchemaUID extends UID.Schema> = Utils.Get<
Schema.Schemas[TSchemaUID],
'attributes'
>
type OriginalGet<
  TSchemaUID extends UID.Schema,
  TKey extends OriginalGetKeys<TSchemaUID>,
> = Utils.Get<OriginalGetAll<TSchemaUID>, TKey>

type OriginalGetRequiredKeys<TSchemaUID extends UID.Schema> =
  Utils.Object.KeysBy<
  OriginalGetAll<TSchemaUID>,
  Schema.Attribute.Required,
  string
  >
type OriginalGetOptionalKeys<TSchemaUID extends UID.Schema> =
  Utils.Object.KeysExcept<
  OriginalGetAll<TSchemaUID>,
  Schema.Attribute.Required,
  string
  >

type OriginalGetKeys<TSchemaUID extends UID.Schema> =
  keyof OriginalGetAll<TSchemaUID> & string

export type GetValues<TSchemaUID extends UID.Schema> = {
  [TKey in OriginalGetOptionalKeys<TSchemaUID>]?: GetValue<
  OriginalGet<TSchemaUID, TKey>
  >;
} & {
  [TKey in OriginalGetRequiredKeys<TSchemaUID>]: GetValue<
  OriginalGet<TSchemaUID, TKey>
  >;
}

/**
 * Attribute.GetValue override with extended values
 *
 * Fallback to unknown if never is found
 */

// Mapped type for relation values - prevents distribution over intersections
interface RelationValueMap<TTarget extends UID.ContentType> {
  oneToOne: GetValues<TTarget>
  oneToMany: Array<GetValues<TTarget>>
  manyToOne: GetValues<TTarget>
  manyToMany: Array<GetValues<TTarget>>
  oneWay: GetValues<TTarget>
  manyWay: Array<GetValues<TTarget>>
  morphOne: GetValues<TTarget>
  morphMany: Array<GetValues<TTarget>>
}

export type GetValue<TAttribute> = TAttribute extends Schema.Attribute.Attribute
  ? TAttribute extends { relation: string, target: string }
    ? TAttribute extends { relation: infer TRelationKind, target: infer TTarget }
      ? TTarget extends UID.ContentType
        ? TRelationKind extends keyof RelationValueMap<TTarget>
          ? RelationValueMap<TTarget>[TRelationKind]
          : never
        : never
      : never
    : TAttribute extends Schema.Attribute.DynamicZone<infer TComponentsUIDs>
      ? Array<
      Utils.Array.Values<TComponentsUIDs> extends infer TComponentUID
        ? TComponentUID extends UID.Component
          ? GetValues<TComponentUID> & {
            __component: TComponentUID
          }
          : never
        : never
      >
      : TAttribute extends Schema.Attribute.Component<infer TComponentUID, infer TRepeatable>
        ? TComponentUID extends UID.Component
          ? GetValues<TComponentUID> extends infer TValues
            ? TRepeatable extends true
              ? TValues[]
              : TValues
            : never
          : never
        : TAttribute extends Schema.Attribute.Media<infer _TKind, infer _TMultiple>
          ? TAttribute extends Schema.Attribute.Media<infer _TKind, infer TMultiple>
            ? TMultiple extends true
              ? Array<GetValues<'plugin::upload.file'>>
              : GetValues<'plugin::upload.file'>
            : never
          : OriginalGetValue<TAttribute, never>
  : never

export interface CollectionTypeResponse<
  TContentTypeUID extends UID.ContentType,
> {
  data: Array<GetValues<TContentTypeUID>>
  meta: any
}

export interface SingleTypeResponse<
  TContentTypeUID extends UID.ContentType,
> {
  data: GetValues<TContentTypeUID>
  meta: any
}
