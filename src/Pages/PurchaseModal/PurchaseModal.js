import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import Reactpdf from '../ReactPdf/ReactPdf';





const PurchaseModal = ({ selectCategory }) => {
    const { name, img, title, price, details } = selectCategory



    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={img} alt='img' />
                    <div className=' text-center'>
                        <h3 className="text-lg font-bold">{title}</h3>

                        <PDFDownloadLink
                            className='text-decoration-none text-white'
                            document={<Reactpdf details={selectCategory} />}
                            filename="FORM"
                        >
                            {({ loading }) =>
                                loading ? (
                                    <button >Loading Document...</button>
                                ) : (
                                    <div className='text-center p-3'>Download pdf </div>
                                )
                            }
                        </PDFDownloadLink>

                        {/* <button className='badge badge-primary badge-outline'>DownLoad pdf</button> */}
                    </div>
                    <div className='text-start'>
                        <h3 className='font-bold'>Course: {name} </h3>
                        <p className='font-bold'>Price: {price}</p>
                        <p>{details}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PurchaseModal;