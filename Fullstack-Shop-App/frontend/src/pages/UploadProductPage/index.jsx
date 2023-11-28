import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../../components/FileUpload';
const continents = [
  { key: 1, value: 'Africa' },
  { key: 2, value: 'Europe' },
  { key: 3, value: 'Asia' },
  { key: 4, value: 'North America' },
  { key: 5, value: 'South America' },
  { key: 6, value: 'Australia' },
  { key: 7, value: 'Antarctica' },
]


const UploadProductPage = () => {

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    continents: 1,
    images: []
  })

  const userData = useSelector(state => state.user?.userData);
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }


  const handleImages = (newImages) => {
    setProduct((prevState) => ({
      ...prevState,
      images: newImages
    }))
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      writer: userData.id,
      ...product
    }

    try {
      await axiosInstance.post('/products', body);
      navigate('/');
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <section>
      <div className='text-center m-7'>
        <h1>예상 상품 업로드</h1>
      </div>

      <form className='mt-6' onSubmit={handleSubmit}>

        <FileUpload images={product.images} onImageChange={handleImages} />

        <div className='mt-4'>
          <label htmlFor='title'>이름</label>
          <input
            className='w-full px-4 py-2 bg-white border rounded-md'
            name="title" id="title" onChange={handleChange} value={product.title}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor='description'>설명</label>
          <input
            className='w-full px-4 py-2 bg-white border rounded-md'
            name="description" id="description" onChange={handleChange} value={product.description}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor='price'>가격</label>
          <input
            className='w-full px-4 py-2 bg-white border rounded-md'
            type="number" name="price" id="price" onChange={handleChange} value={product.price}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor='continents'>지역</label>
          <select
            className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
            name='continents' id='continents' onChange={handleChange} value={product.continents}
          >
            {continents.map(item => (
              <option key={item.key} value={item.key}>{item.value}</option>
            ))}
          </select>
        </div>

        <div className='mt-4'>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700'>
            생성하기
          </button>
        </div>

      </form>
    </section>
  )
}

export default UploadProductPage