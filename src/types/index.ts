export interface Root {
    parameters: Parameters
    data: Daum[]
}

export interface Parameters {
    total_count: number
}

export interface Daum {
    npi: string
    first_name: string
    middle_name: any
    last_name: string
    age: number
    gender: string
    ratings_count: number
    ratings_avg: number
    degrees: string[]
    educations: Education[]
    is_pcp: boolean
    specialties: Specialty[]
    provider_types: string[]
    languages: string[]
    insurances: Insurance[]
    locations: Location[]
    online_profiles: OnlineProfile[]
    panel_demographics: PanelDemographics
    clinical_areas: ClinicalArea[]
    conditions: Condition2[]
    treatments: Treatment2[]
    procedures: Procedure[]
    performance: Performance
}

export interface Education {
    type: string
    education: Education2
}

export interface Education2 {
    name: string
    uuid: string
}

export interface Specialty {
    uuid: string
    taxonomy_code: string
    board_specialty: string
    board_sub_specialty: string
    non_md_specialty: any
    non_md_sub_specialty: any
    provider_name: string
    colloquial: string
    display: string
    taxonomy_1: string
    taxonomy_2: string
    taxonomy_3?: string
    provider_type: string
    is_primary: boolean
}

export interface Insurance {
    uuid: string
    carrier_association: string
    carrier_brand: string
    carrier_name: string
    state: any
    plan_name: string
    plan_type?: string
    metal_level: any
    display_name: string
    network: any
    confidence: number
    category: string
    codes: string[]
}

export interface Location {
    name?: string
    uuid: string
    faxes: Fax[]
    address: string
    latitude: number
    longitude: number
    confidence: number
    insurances: Insurance2[]
    phone_numbers: PhoneNumber[]
    location_types: string[]
    address_details: AddressDetails
    google_maps_link: string
    aha_id?: string
    version_id?: string
    parent_aha_id?: string
}

export interface Fax {
    fax: string
    details: string
}

export interface Insurance2 {
    uuid: string
    carrier_association: string
    carrier_brand: string
    carrier_name: string
    state: any
    plan_name: string
    plan_type?: string
    metal_level: any
    display_name: string
    network: any
    confidence: number
    category: string
    codes: string[]
}

export interface PhoneNumber {
    phone: string
    details: string
}

export interface AddressDetails {
    zip: string
    city: string
    state: string
    street?: string
    address_line_1?: string
    address_line_2?: string
}

export interface OnlineProfile {
    url: string
}

export interface PanelDemographics {
    ages: string[]
    sexes: string
}

export interface ClinicalArea {
    uuid: string
    display: string
    conditions: Condition[]
    treatments: Treatment[]
}

export interface Condition {
    uuid: string
    display: string
}

export interface Treatment {
    uuid: string
    display: string
}

export interface Condition2 {
    uuid: string
    display: string
}

export interface Treatment2 {
    uuid: string
    display: string
}

export interface Procedure {
    cost: Cost
    uuid: string
    display: string
    quality: Quality
}

export interface Cost {
    cost_index?: number
}

export interface Quality {
    experience_index: number
}

export interface Performance {}