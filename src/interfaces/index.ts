export interface BackendOptions { }
export interface SpreeProduct { }
export interface Document {
  id: any
}
export interface JsonApiResponse {
  data: JsonApiDocument | JsonApiDocument[],
  included?: JsonApiDocument[]
}
export interface JsonApiListResponse extends JsonApiResponse {
  data: JsonApiDocument[],
  meta?: {
    total_pages: number
  }
}
export interface JsonApiSingleResponse extends JsonApiResponse {
  data: JsonApiDocument
}
export interface JsonApiDocument {
  id: string,
  type: string,
  attributes: any,
  relationships: any | null
}

export interface ImageStyle {
  url: string,
  width: string,
  height: string
}

export interface SpreeProductImage extends JsonApiDocument {
  attributes: {
    styles: ImageStyle[]
  }
}

export interface ESImage {
  image: string,
  lab: string | null,
  pos: number,
  typ: 'image'
}

export interface PositionedDocument extends JsonApiDocument {
  attributes: {
    position: number
  }
}

export interface OptionValueDocument extends PositionedDocument {
  attributes: {
    position: number,
    presentation: string
  }
}

export interface ElasticOperation {
  index?
}

export interface IndexOperation extends ElasticOperation {
  index: {
    _index: string,
    _type: string,
    _id: string,
    _body: any
  }
}

export enum ESProductType {
  Simple = 'simple',
  Configurable = 'configurable'
}

export interface ShippingMethodsDescription {
  orderToken: string,
  deferred: Promise<any>
}
