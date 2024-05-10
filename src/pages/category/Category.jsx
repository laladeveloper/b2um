
import React from 'react'
import Header from '../../components/category/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import SearchH from '../../components/category/Search.jsx'
import data from '../../datasets/categories.json'
import './Category.css'
import { Link, useParams } from 'react-router-dom'


function Cards({data, category}) {
 return (
   <Link
     className="category-card-container"
     to={`/trending/${category}/${data.title}`}
   >
     <img src={data.poster} className="category-card-img" />
     <h3 className="category-card-header">{data.title}</h3>
     <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
       <button className="category-card-offers">{data.offers} offers</button>
       <button
         style={{
           backgroundColor: "transparent",
           border: "none",
           outline: "none",
           fontSize: "15px",
           fontWeight: 700,
           color: "rgba(10,10,10,0.5)",
           fontFamily: "nunitobold",
         }}
       >
         selling for {data.from} usd
       </button>
     </div>
   </Link>
 );
}

export default function Category() {
  const {category} = useParams()
  return (
    <div>
     <Header title={category} />
     <div style={{marginTop: '6em'}} className='category-body'>
      <SearchH placeholder={'search '+ category} />
      <div style={{ fontWeight:600, color:'rgba(10,10,10,0.7)', marginTop:'1em', marginLeft:'0.5em'}}>query for {data.searchResultscount} results</div>
      {/* cards here */}
      <div className='category-card-body'>
      {data.data.map((element,index) => <Cards key={index} data={element} category={category} />)}
      </div>
      {/* cards here */}
      <div className='category-paginate'>
        <button>Previous</button>
        <button style={{backgroundColor:'#2AFFE2', fontFamily:'nunitobold',color:'rgba(10,10,10,0.7)'}}>Next</button>
      </div>
     </div>
     <Footer />
    </div>
  )
}
