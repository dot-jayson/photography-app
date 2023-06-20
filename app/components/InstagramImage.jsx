import { FaInstagram } from 'react-icons/fa'

const { default: Image } = require('next/image')

const InstagramImage = ({ socialImg }) => {
    return (
        <div className='relative'>
            <Image
                className='w-full h-full rounded-lg'
                src={socialImg}
                alt='/'
            />
            {/* Overlay */}
            <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 rounded-lg hover:bg-black/50 group'>
                <p className='text-gray-300 hidden group-hover:block'>
                    <FaInstagram size={30} />
                </p>
            </div>
        </div>

    )
}

export default InstagramImage