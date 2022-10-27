import React, { useState } from 'react'
import { useFormik } from 'formik'
import CountryApi from '../api/CountryApi'

export default function FormikAddCountryApi(props) {
    const [previewImg,setPreviewImg] = useState()
    const [preViewFile,setPreviewFile] = useState()
    const [uploaded,setUploaded] = useState(false)
    const [uploadedFile,setUploadedFile] = useState(false)
    const formik = useFormik({
        initialValues:{
            countryName:undefined,
            file:undefined,
            foto:undefined
        },
        onSubmit:async(values)=>{
            let payload = new FormData();
            payload.append('countryName',values.countryName)
            payload.append('file',values.file)
            payload.append('foto',values.foto)

            await CountryApi.Create(payload)
            .then(()=>{
                props.closeAdd();
                window.alert('Data Successfully Insert')
                props.onRefresh();
            })
        }
    })
    const uploadOnChange = name => event => {
        let reader = new FileReader()
        const file = event.target.files[0]
        console.log(event.target.files);
        reader.onload = () => {
            formik.setFieldValue('foto',file)
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file)
        setUploaded(true)
    }
    const uploadFileOnChange = name => e => {
        let reader = new FileReader()
        const files = e.target.files[0]
        console.log(e.target.files);
        reader.onload = () => {
            formik.setFieldValue('file',files)
            setPreviewFile(reader.result)
        }
        reader.readAsDataURL(files)
        setUploadedFile(true)
    }
    const onClearImage = event => {
        event.preventDefault()
        setUploaded(false)
        setPreviewImg(null)
    }
    const onClearFile = e => {
        e.preventDefault()
        setUploadedFile(false)
        setPreviewFile(null)
    }
  return (
    <div>
        <div>
                <label>First Name : </label>
                <input
                    type="text"
                    name="countryName"
                    id="countryName"
                    value={formik.values.countryName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="countryName"
                />
            </div>
            <div>
            <label>File : </label>
                <div>
                    <div>
                        <div>
                            <div>
                                {
                                    uploadedFile === false ?
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        :
                                        <>
                                            <img src={preViewFile} alt='image' />
                                            <span onClick={onClearFile}>Remove</span>
                                        </>
                                }

                                <div>
                                    <label htmlFor="file">
                                        <span class="mx-auto h-12 w-12 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Upload a file</span>
                                        <input id="file" name="file" type="file" accept='image/*' onChange={uploadFileOnChange('files')} className="sr-only" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div>
                <label>Foto : </label>
                <div>
                    <div>
                        <div>
                            <div>
                                {
                                    uploaded === false ?
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        :
                                        <>
                                            <img src={previewImg} alt='image' />
                                            <span onClick={onClearImage}>Remove</span>
                                        </>
                                }

                                <div>
                                    <label htmlFor="foto">
                                        <span class="mx-auto h-12 w-12 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Upload a foto</span>
                                        <input id="foto" name="foto" type="file" accept='image/*' onChange={uploadOnChange('file')} className="sr-only" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div>
                <button class="mx-auto h-12 w-30 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                type='submit' onClick={formik.handleSubmit} > Save </button>  <button class="mx-auto h-12 w-30 items-center justify-center rounded-md border border-transparent bg-grey-900 px-4 py-2 text-base font-medium text-indigo shadow-sm hover:bg-indigo-700"
                onClick={() => props.setDisplay(false)}> Cancel </button>
            </div>
             <br/>
    </div>
  )
}
