interface SlugAIOptions {
    model?: string;
    apikey?: string;
    baseurl?: string;
}

declare function slugai(text: string, options?: SlugAIOptions): Promise<string>;

export default slugai;
