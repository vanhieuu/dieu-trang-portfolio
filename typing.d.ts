export interface SanityBody {
    _createdAt:string,
    _id:string,
    _rev:string,
    _updatedAt:string
}


interface Image {
    _type:'image',
    asset:{
        _ref:string;
        _type:'reference',
    }
}


export interface PageInfo extends SanityBody{
    _type:"pageInfo",
    address:string,
    backgroundInformation:string,
    email:string,
    role:string,
    heroImage:Image,
    name:string,
    phoneNumber:string,
    profilePic:Image
}

export interface Skills extends SanityBody{
    _type:"skills",
    title:string,
    image:Image
}

export interface Socials extends SanityBody {
    _type:'social',
    title:string,
    url:string
}
export interface Projects extends SanityBody {
    _type:'projects',
    homeImage:Image,
    type:string,
    summary:string,
    technologies:Technologies[],
    image:Image,
    useTech:boolean,
    title:string
}

export interface Technologies {
    _ref:string,
    _type:'reference',
    _key:string
}
export interface Experience extends SanityBody {
    jobTitle:string,
    companyImage:Image,
    _type:'experience',
    summary:string,
    company:string,
    dateEnded:string
    dateStarted:string
}