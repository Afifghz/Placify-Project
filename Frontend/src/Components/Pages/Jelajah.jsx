import React, { useState, useEffect } from 'react';
import Navbar from '../Elements/NavbarLog'
import Card from '../Fragments/CardProduct'
import Footer from '../Elements/Footer';
import axios from 'axios'

const Jelajah = () => {
  const [minPriceSelected, setMinPriceSelected] = useState(false);
  const [maxPriceSelected, setMaxPriceSelected] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const handleMinPriceChange = () => {
    if (!minPriceSelected) {
      setMinPriceSelected(true);
      setMaxPriceSelected(false);
    }
  };

  const handleMaxPriceChange = () => {
    if (!maxPriceSelected) {
      setMaxPriceSelected(true);
      setMinPriceSelected(false);
    }
  };

  const handleLocationChange = (event) => {
    const { id } = event.target;
    const isSelected = selectedLocations.includes(id);

    if (isSelected) {
      const updatedLocations = selectedLocations.filter((loc) => loc !== id);
      setSelectedLocations(updatedLocations);
    } else {
      setSelectedLocations([...selectedLocations, id]);
    }
  };
  const applyFilters = async (event) => {
    event.preventDefault();

    try {
      let queryParams = '';

      if (minPriceSelected) {
        queryParams += 'order=asc';
      } else if (maxPriceSelected) {
        queryParams += 'order=desc';
      }

      if (selectedLocations.length > 0) {
        queryParams += `&place=${selectedLocations.join(',')}`;
      }

      const response = await axios.get(`http://localhost:5000/productsByFilters?${queryParams}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error applying filters:', error);
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <>
        <Navbar/>
       <div className="w-full flex h-[120vh]">
        <div className="w-1/6 h-full bg-slate-400 p-8">
          <div onSubmit={applyFilters} className="flex flex-col gap-2">
            <form action="" onSubmit={applyFilters}>
              <h4 className='text-black'>Filter</h4>
              <p className='body1-semibold'>Harga</p>
              <div className="flex">
                <Input id="hargaTerendah" checked={minPriceSelected} onChange={handleMinPriceChange}/>
                <Label id="hargaTerendah" text="Harga Terendah" onClick={handleMinPriceChange}/>
              </div>
              <div className="flex">
                <Input id="hargaTertinggi" checked={maxPriceSelected} onChange={handleMaxPriceChange}/>
                <Label id="hargaTertinggi" text="Harga Tertinggi" onClick={handleMaxPriceChange}/>
              </div>
              <p className='body1-semibold'>Lokasi</p>
              <div className="flex">
                <Input id="Jatinangor" checked={selectedLocations.includes('Jatinangor')} onChange={handleLocationChange}/>
                <Label id="Jatinangor" text="Jatinangor" onClick={handleLocationChange}/>
              </div>
              <div className="flex">
                <Input id="Tanjung Pinang" checked={selectedLocations.includes('Tanjung Pinang')} onChange={handleLocationChange}/>
                <Label id="Tanjung Pinang" text="Tanjung Pinang" onClick={handleLocationChange}/>
              </div>
              <div className="flex">
                <Input id="Pekanbaru" checked={selectedLocations.includes('Pekanbaru')} onChange={handleLocationChange}/>
                <Label id="Pekanbaru" text="Pekanbaru" onClick={handleLocationChange}/>
              </div>
              <p className='body1-semibold'>Kapasitas</p>
              <div className="flex">
                <Input id="4"/>
                <Label id="4" text="< 50"/>
              </div>
              <div className="flex">
                <Input id="5"/>
                <Label id="5" text="50-100"/>
              </div>
              <div className="flex">
                <Input id="6"/>
                <Label id="6" text="> 100"/>
              </div>
              <button type="submit" className='w-3/4 mt-3 bg-[#302768] rounded-md p-1 text-white body2-semibold'>Terapkan</button>
            </form>
          </div>
        </div>
        <div className="w-5/6 p-8">
        <div className="container mx-auto ">
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="w-full" type="small">
                <Card.Header image={product.url}></Card.Header>
                <Card.Body title={product.title} place={product.place} type="small"></Card.Body>
                <Card.Footer price={formatPrice(product.price)} navigate={`/product/${product.id}`} type="small"></Card.Footer>
              </Card>
            ))}
          </div>
        </div>
        </div>
       </div>
        {/* <div className="container mx-auto pt-24 pb-24 px-12 flex flex-wrap gap-4">
            <CardPlace/>
        </div> */}
        <Footer/>
    </>
  );
};

const Input = ({id, checked, onChange}) => {
  return(
    <input type="checkbox" id={id} checked={checked} onChange={onChange}/>
  )
}

const Label = ({id, text, onClick}) => {
  return(
    <label htmlFor={id} className='body2-regular ml-2' onClick={onClick}>{text}</label>
  )
}

export default Jelajah;
