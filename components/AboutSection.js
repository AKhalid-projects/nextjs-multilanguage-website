import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const AboutSection = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}
            className="bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {blok.title}
                        </h3>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:row-start-1 lg:col-start-2">
                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <img
                                        className="rounded-lg shadow-lg object-cover object-center"
                                        src={blok.image}
                                        width={1920}
                                        height={1080}
                                    />
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                            <p className="text-lg text-gray-500">
                                {blok.intro}
                            </p>
                        </div>
                        
                        <div className="pt-8 text-base max-w-prose mx-auto lg:max-w-none">
                            <p className="text-lg text-gray-500">
                                {render(blok.long_text)}
                            </p>
                        </div>
                    
                    </div>
                   
                </div>
            </div>
        </div>
    )
};

export default AboutSection;