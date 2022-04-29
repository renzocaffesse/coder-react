const Item = ({laptopData}) => {
    return (
        <div className="h-full lg:w-1/5 sm:w-1/2 p-8">
            <div className="h-full flex relative">
                <div className="px-4 py-10 relative w-full border-4 border-gray-200 bg-white opacity-50 hover:opacity-100 hover:cursor-pointer">
                    <strong className="text-3xl">{laptopData.brand}</strong>
                    <p className="text-xl">Model: {laptopData.model}</p>
                    <p className="text-lg">Specs: {laptopData.specs}</p>
                </div>
            </div>
        </div>
    )
}

export default Item
