export default interface IProject{
    title: string
    type: string
    status: string
    description: string
    profits: Array<string>
    techs: Array<string>
    year: number
    links: {
        "GitHub": string
        "Vercel": string
    }
}