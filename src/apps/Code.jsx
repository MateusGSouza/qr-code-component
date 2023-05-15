import qrCode from '../assets/image-qr-code.png'

export default function Code() {
    return (
        <div className="w-[320px] bg-white rounded-xl pt-4 pr-4 pb-10 pl-4 shadow-lg">
            <span>
                <img src={qrCode} className='rounded-xl w-full h-auto' />
            </span>
            <div className='text-center'>
                <h1 className='pt-5 pb-4 font-bold text-[21px] w-full text-[hsl(218,44%,22%)]'>Improve your front-end skills by building projects</h1>
                <p className='text-[hsl(220,15%,55%)] text-[15px]'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level!</p>
            </div>
        </div>
    )
}