export interface ApiResponse {
  status: string
  result: {
    total_count: number
    data: [{}]
  //count_by_category: {}
}
}
export interface Daum {
//   id: string
//   name: string
//   title: string
//   isService: string
//   extras: string[]
//   addons: Addon[]
//   description: string
//   brand: string
//   status?: string
//   inventoryKey: string
//   metadata?: Metadata
//   attributes?: Attributes
//   properties?: Property[]
//   availability: Availability
//   pricing: Pricing
//   mediaCollection: MediaCollection[]
//   skuData?: SkuDaum[]
//   configuration: Configuration2
//   measures?: Measures2
//   translations?: any[]
}

export interface CountByCategory {
//   construction: Construction
//   prices: Prices
//   style: Style
//   rooms: Rooms
//   colors: Colors
//   category: Category
//   material: Material
//   sizes: Sizes
//   group: Group
}

// export type ApiResponse = {
//     ROOT: Root;
// }