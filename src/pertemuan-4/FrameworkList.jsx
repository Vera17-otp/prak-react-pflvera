import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8 max-w-2xl mx-auto bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 px-2">Popular Frameworks</h1>
            
            <div className="grid gap-6">
                {frameworkData.map((item) => (
                    <div 
                        key={item.id} 
                        className="group p-6 rounded-xl bg-white border border-gray-200 shadow-sm 
                                   /* EFEK GERAK DI SINI */
                                   transition-all duration-300 ease-in-out 
                                   hover:-translate-x-5 hover:shadow-xl hover:border-blue-200"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {item.name}
                            </h2>
                            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                {item.details.releaseYear}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Details Nested Access */}
                        <div className="flex flex-col gap-3">
                            <div className="text-xs text-gray-500">
                                <span className="uppercase tracking-wider font-semibold text-[10px]">Author:</span>
                                <span className="ml-2 text-gray-700">{item.details.developer}</span>
                            </div>

                            {/* Tags dengan efek skala saat hover */}
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-0.5 text-[10px] font-semibold rounded-md uppercase transition-transform hover:scale-110 cursor-default"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Link Website dengan animasi panah */}
                            <div className="mt-2 pt-4 border-t border-gray-50">
                                <a
                                    href={item.details.officialWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-blue-500 hover:text-blue-700 no-underline inline-flex items-center gap-1 group/link"
                                >
                                    Visit Website 
                                    <span className="transition-transform duration-300 group-hover/link:translate-x-2">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}