import React from 'react'
import './nft.css'
import NFT from '../../src/assets/nft3.png'
const Nftsection = () => {
    return (
        <>
            <div className="container">
                <section>
                    <div class=" hh content">
                        <h2>NFT'S</h2>
                        <h2>NFT'S</h2>
                    </div>
                </section>

                {/* <NFT /> */}
                <div className="bg">
                    <img src={NFT} alt="" className='img1' />

                </div>
                <button className="btnn">MINT NFT</button>
                <div className="extra">

                </div>
            </div>

        </>
    )
}

export default Nftsection