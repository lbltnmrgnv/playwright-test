export type Pet = {
    id: number,
    category: {
        id: number,
        name: string
    },
    name: string,
    prhotoUrls: [string],
    tags: [{
        id: number,
        name: string
    }],
    status: string
}

export type User = {
    email: string,
    password: string,
    confirmPassword?: string
}