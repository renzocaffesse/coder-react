import { Link } from 'react-router-dom'

const Item = ({ id, image, brand, model, specs, price }) => {
    return (
        <Link to={`/product/${id}`} className="h-full lg:w-1/5 sm:w-1/2 p-8">
            <div className="h-full flex relative">
                <div className="px-4 py-10 relative w-full border-4 border-gray-200 bg-white opacity-70 hover:opacity-100 hover:cursor-pointer flex-col">
                    <span className={'flex justify-center'}>
                        <img src={image} alt={model} className={'w-36 justify-center'} />
                    </span>
                    <p className="text-3xl">{brand}</p>
                    <p className="text-xl">Model: {model}</p>
                    <p className="text-lg">Specs: {specs}</p>
                    <p className="text-lg">Price: {price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item
