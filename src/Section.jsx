

const Section = ({ title, product }) => (
    <div className='border rounded m-3 px-3 pt-1 pb-0'>
      <h2 className='p-2'>{title}</h2>
      <div className='scrollbar d-flex mb-2 pb-2 gap-3 overflow-scroll'>
        {product.map(item => (
          <div key={item.id} className='border rounded text-center overflow-hidden' style={{minWidth: '300px'}}>
  
            <div className='w-100 bg-secondary mb-0' style={{height:'200px'}}></div>
            <div className='p-2'>
  
            <h3 className='d-flex justify-content-center align-items-center' style={{minHeight:'65px'}}>{item.name}</h3>
  
            <p className='d-flex justify-content-center align-items-center mb-0' style={{maxHeight:'50px',minHeight:'50px'}}>{item.description}</p>
  
            <h5 className='p-2'><span className='px-1'>&#36;</span>{item.rate}</h5>
            
            <button className='btn btn-primary w-100' >Add to Cart</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );

export default Section